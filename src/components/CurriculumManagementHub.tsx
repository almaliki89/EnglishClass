import React, { useState, useEffect, useRef } from 'react';
import { 
  Upload, FileText, CheckCircle2, AlertCircle, RefreshCw, 
  Eye, ShieldCheck, BookOpen, Layers, Award, Trash2, 
  ExternalLink, FileSpreadsheet, Lock, ChevronDown, Check,
  Search, Filter, Sparkles, AlertTriangle, ArrowRight, BookCheck
} from 'lucide-react';
import { EducationalGrade } from '../types';
import { 
  CurriculumSourceDocument, 
  CurriculumSourceType, 
  IngestionStatus, 
  VerificationStatus 
} from '../types/curriculumManagement';
import { ALL_GRADES_META, ORDERED_GRADES } from '../data/gradeContentResolver';

interface CurriculumManagementHubProps {
  initialGrade?: EducationalGrade;
  onClose?: () => void;
  onNavigateToLesson?: (lessonId: string) => void;
}

export const CurriculumManagementHub: React.FC<CurriculumManagementHubProps> = ({
  initialGrade = 'sixth-preparatory',
  onClose,
  onNavigateToLesson
}) => {
  const [sources, setSources] = useState<CurriculumSourceDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGrade, setSelectedGrade] = useState<EducationalGrade>(initialGrade);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected source for inspection / review
  const [selectedSource, setSelectedSource] = useState<CurriculumSourceDocument | null>(null);

  // Upload Form State
  const [uploadMode, setUploadMode] = useState<'file' | 'text'>('file');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pastedText, setPastedText] = useState('');
  const [sourceTitle, setSourceTitle] = useState('');
  const [sourceDescription, setSourceDescription] = useState('');
  const [academicYear, setAcademicYear] = useState('2024-2026');
  const [curriculumEdition, setCurriculumEdition] = useState('طبعة 2024-2026 الرسمية المعتمدة');
  const [sourceType, setSourceType] = useState<CurriculumSourceType>('students_book');

  // Ingestion Processing Lifecycle State
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadLifecycleStatus, setUploadLifecycleStatus] = useState<IngestionStatus>('uploaded');
  const [uploadStatusMessage, setUploadStatusMessage] = useState<string>('');
  const [uploadWarning, setUploadWarning] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);

  // Review & Approval State
  const [reviewNotes, setReviewNotes] = useState('');
  const [isReviewing, setIsReviewing] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load existing curriculum sources
  const fetchSources = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/curriculum/sources?gradeId=${selectedGrade}`);
      if (res.ok) {
        const data = await res.json();
        setSources(data.sources || []);
        if (data.sources?.length > 0 && !selectedSource) {
          setSelectedSource(data.sources[0]);
        }
      }
    } catch (e) {
      console.error("Failed to load curriculum sources:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSources();
  }, [selectedGrade]);

  // Handle Drag & Drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      if (!sourceTitle) {
        setSourceTitle(file.name.replace(/\.[^/.]+$/, ""));
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (!sourceTitle) {
        setSourceTitle(file.name.replace(/\.[^/.]+$/, ""));
      }
    }
  };

  // Submit Upload to Backend Ingestion Pipeline
  const handleStartIngestion = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploadWarning(null);
    setUploadSuccess(null);

    if (uploadMode === 'file' && !selectedFile) {
      setUploadWarning('يرجى اختيار ملف PDF لرفعه ومعالجته.');
      return;
    }
    if (uploadMode === 'text' && !pastedText.trim()) {
      setUploadWarning('يرجى إدخال نص المنهج المراد تحليله.');
      return;
    }

    setIsUploading(true);
    setUploadProgress(15);
    setUploadLifecycleStatus('uploaded');
    setUploadStatusMessage('جارٍ فحص الملف وحساب البصمة الرقمية التشفيرية SHA-256...');

    try {
      let base64Data: string | undefined;

      if (uploadMode === 'file' && selectedFile) {
        const reader = new FileReader();
        base64Data = await new Promise<string>((resolve, reject) => {
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(selectedFile);
        });
      }

      setUploadProgress(40);
      setUploadLifecycleStatus('processing');
      setUploadStatusMessage('جارٍ استخراج صفحات الكتاب والتحقق من التوقيع الرقمي...');

      const response = await fetch('/api/curriculum/sources/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          base64Data,
          rawText: uploadMode === 'text' ? pastedText : undefined,
          fileName: selectedFile ? selectedFile.name : (sourceTitle + '.txt'),
          gradeId: selectedGrade,
          subjectId: 'english',
          academicYear,
          curriculumEdition,
          sourceType,
          title: sourceTitle || 'مصدر منهجي',
          description: sourceDescription
        })
      });

      setUploadProgress(80);
      setUploadLifecycleStatus('structured');
      setUploadStatusMessage('جارٍ فهرسة الوحدات والقواعد والأسئلة وربط أرقام الصفحات...');

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'فشلت معالجة المصدر');
      }

      setUploadProgress(100);
      setUploadLifecycleStatus(result.status || 'pending_review');

      if (result.isDuplicate) {
        setUploadWarning(`تنبيه تكرار: هذا الملف مطابق تماماً لمصدر موجود مسبقاً بنفس البصمة الرقمية (SHA-256): ${result.source.title}`);
        setSelectedSource(result.source);
      } else if (result.status === 'needs_ocr') {
        setUploadWarning('تنبيه فحص: الملف ممسوح ضوئياً كصور ولا يحتوي على نصوص برمجية قابلة للقراءة. تم وسمه بـ (يحتاج OCR) لمنع اختلاق بيانات وهمية.');
        await fetchSources();
        setSelectedSource(result.source);
      } else {
        setUploadSuccess('تم استخراج وهيكلة بيانات المنهج بنجاح! تم حفظ المسودة وهي جاهزة الآن لمراجعة واعتماد المشرف الأكاديمي.');
        await fetchSources();
        setSelectedSource(result.source);
        // Reset inputs
        setSelectedFile(null);
        setPastedText('');
        setSourceTitle('');
        setSourceDescription('');
      }

    } catch (err: any) {
      setUploadLifecycleStatus('failed');
      setUploadWarning(err.message || 'حدث خطأ أثناء معالجة ملف المنهج');
    } finally {
      setIsUploading(false);
    }
  };

  // Human-in-the-loop: Publish & Approve
  const handlePublishSource = async (sourceId: string) => {
    setIsReviewing(true);
    try {
      const res = await fetch(`/api/curriculum/sources/${sourceId}/publish`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.ok) {
        const data = await res.json();
        setUploadSuccess(data.message || 'تم نشر واعتماد المنهج رسمياً!');
        await fetchSources();
        if (selectedSource && selectedSource.id === sourceId) {
          setSelectedSource(data.source);
        }
      }
    } catch (e) {
      console.error("Failed to publish source:", e);
    } finally {
      setIsReviewing(false);
    }
  };

  const currentGradeMeta = ALL_GRADES_META[selectedGrade];

  const filteredSources = sources.filter(s => {
    const matchesFilter = filterStatus === 'all' ? true : s.status === filterStatus;
    const matchesSearch = !searchQuery || 
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.curriculumEdition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto w-full px-2 sm:px-6" dir="rtl">
      
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-indigo-900/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-black text-amber-300 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>نظام إدارة المناهج والتحقق الأكاديمي • OMEGA CURRICULUM INTELLIGENCE</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              منظومة المناهج والملفات المعتمدة • <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-indigo-300">{currentGradeMeta.nameAr}</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              مركز إدارة وتدقيق الكتب المنهجية (Student's Book & Activity Book) والملازم المعتمدة، مع ربط كل قاعدة ومفردة وسؤال برقم الصفحة والبصمة التشفيرية SHA-256.
            </p>
          </div>

          {/* Grade Selector Switcher */}
          <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/15 shrink-0">
            <span className="text-xs font-bold text-slate-300">اختر المرحلة والصف الدراسي:</span>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value as EducationalGrade)}
              className="bg-slate-900/90 text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
            >
              {ORDERED_GRADES.map((g) => (
                <option key={g} value={g}>
                  {ALL_GRADES_META[g].nameAr} {ALL_GRADES_META[g].isMinisterial ? '(وزاري)' : '(نهائي)'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 2. Upload and Ingestion Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Source Upload & Ingestion Form (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-base font-black text-slate-900 dark:text-white">
                رفع ومعالجة مصدر منهجي جديد
              </h2>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              دورة المعالجة الصارمة
            </span>
          </div>

          <form onSubmit={handleStartIngestion} className="space-y-4">
            
            {/* Source Type & Edition */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  نوع المصدر:
                </label>
                <select
                  value={sourceType}
                  onChange={(e) => setSourceType(e.target.value as CurriculumSourceType)}
                  className="w-full text-xs font-bold p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="students_book">كتاب الطالب (Student's Book)</option>
                  <option value="activity_book">كتاب النشاط (Activity Book)</option>
                  <option value="ministerial_exams">أسئلة وزارية رسمية موثقة</option>
                  <option value="school_finals">امتحانات مدرسية نهائية</option>
                  <option value="teacher_guide">دليل المدرس المعتمد</option>
                  <option value="malzama">ملزمة دراسية معتمدة</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  السنة / الطبعة:
                </label>
                <input
                  type="text"
                  value={curriculumEdition}
                  onChange={(e) => setCurriculumEdition(e.target.value)}
                  placeholder="طبعة 2024-2026"
                  className="w-full text-xs font-bold p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                عنوان المصدر:
              </label>
              <input
                type="text"
                value={sourceTitle}
                onChange={(e) => setSourceTitle(e.target.value)}
                placeholder="مثال: كتاب الطالب 2025 - الوحدات 1 إلى 8"
                className="w-full text-xs font-bold p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Input Mode Switcher */}
            <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 text-xs font-bold">
              <button
                type="button"
                onClick={() => setUploadMode('file')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  uploadMode === 'file'
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs font-black'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                ملف PDF كامل
              </button>
              <button
                type="button"
                onClick={() => setUploadMode('text')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  uploadMode === 'text'
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs font-black'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                نص مباشر
              </button>
            </div>

            {/* File Dropzone */}
            {uploadMode === 'file' ? (
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 rounded-2xl p-6 text-center cursor-pointer transition-all bg-slate-50/50 dark:bg-slate-800/30 hover:bg-indigo-50/20"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
                    <Upload className="w-5 h-5" />
                  </div>
                  {selectedFile ? (
                    <div>
                      <p className="text-xs font-black text-slate-900 dark:text-white">
                        {selectedFile.name}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • جاهز للتحليل
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        اسحب ملف الـ PDF هنا أو انقر للتصفح
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        يدعم ملفات الكتب والنشاط حتى 20 ميغابايت مع التحقق من ترويسة %PDF
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  نص المنهج المستخرج:
                </label>
                <textarea
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                  rows={6}
                  placeholder="الصق نص الدرس أو القواعد أو التمارين هنا..."
                  className="w-full text-xs font-mono p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}

            {/* Description */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                وصف المصدر وملاحظات الاعتماد:
              </label>
              <input
                type="text"
                value={sourceDescription}
                onChange={(e) => setSourceDescription(e.target.value)}
                placeholder="مثال: يحتوي على القطع الاستيعابية، القواعد والتمارين الرسمية"
                className="w-full text-xs font-bold p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Processing Progress bar */}
            {isUploading && (
              <div className="space-y-2 p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center justify-between text-xs font-bold text-indigo-800 dark:text-indigo-300">
                  <span className="flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>{uploadStatusMessage}</span>
                  </span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full bg-indigo-200 dark:bg-indigo-900 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-indigo-600 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Warning / Error Message */}
            {uploadWarning && (
              <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl flex items-start gap-2 text-xs text-amber-800 dark:text-amber-200">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                <p>{uploadWarning}</p>
              </div>
            )}

            {/* Success Message */}
            {uploadSuccess && (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-start gap-2 text-xs text-emerald-800 dark:text-emerald-200">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                <p>{uploadSuccess}</p>
              </div>
            )}

            {/* Submit Action */}
            <button
              type="submit"
              disabled={isUploading}
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 cursor-pointer transition-all"
            >
              {isUploading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>جارٍ المعالجة والتحقق...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>بدء الاستخراج والتحقق الرقمي</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Sources Repository & Human Audit (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <BookCheck className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-black text-slate-900 dark:text-white whitespace-nowrap">
                المصادر المعتمدة ({filteredSources.length})
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="text-xs font-bold p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none"
              >
                <option value="all">جميع الحالات</option>
                <option value="published">معتمد ومنشور</option>
                <option value="pending_review">بانتظار المراجعة</option>
                <option value="needs_ocr">يحتاج OCR</option>
              </select>

              <div className="relative flex-1 sm:w-48">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="بحث في المصادر..."
                  className="w-full pr-8 pl-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Sources List Cards */}
          <div className="space-y-3">
            {isLoading ? (
              <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                <RefreshCw className="w-6 h-6 animate-spin text-indigo-600 mx-auto" />
                <p className="text-xs text-slate-500 mt-2">جارٍ تحميل قائمة المصادر المعتمدة...</p>
              </div>
            ) : filteredSources.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2">
                <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  لا توجد مصادر مطابقة لمعايير البحث في هذا الصف.
                </p>
                <p className="text-[11px] text-slate-500">
                  يمكنك رفع كتاب الطالب أو النشاط عبر النافذة المجاورة.
                </p>
              </div>
            ) : (
              filteredSources.map((source) => {
                const isSelected = selectedSource?.id === source.id;
                const isPublished = source.status === 'published';
                const isNeedsOcr = source.status === 'needs_ocr';

                return (
                  <div
                    key={source.id}
                    onClick={() => setSelectedSource(source)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-50/60 dark:bg-indigo-950/40 border-indigo-500 shadow-xs'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isPublished
                            ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400'
                            : isNeedsOcr
                            ? 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400'
                            : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                        }`}>
                          {isPublished ? <CheckCircle2 className="w-5 h-5" /> : isNeedsOcr ? <AlertTriangle className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                              {source.title}
                            </h3>
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                              isPublished
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
                                : isNeedsOcr
                                ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
                            }`}>
                              {isPublished ? 'معتمد ومنشور' : isNeedsOcr ? 'يحتاج OCR' : 'مسودة للمراجعة'}
                            </span>
                          </div>

                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                            {source.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-3 mt-2 text-[10px] text-slate-400">
                            <span>الطبعة: {source.curriculumEdition}</span>
                            <span>•</span>
                            <span>الحجم: {source.fileSize}</span>
                            <span>•</span>
                            <span>الصفحات: {source.totalPages}</span>
                            <span>•</span>
                            <span className="font-mono">SHA-256: {source.fileSha256.slice(0, 10)}...</span>
                          </div>
                        </div>
                      </div>

                      {/* Publish / Review action button */}
                      {!isPublished && !isNeedsOcr && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePublishSource(source.id);
                          }}
                          disabled={isReviewing}
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shrink-0 flex items-center gap-1.5 shadow-xs cursor-pointer"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>اعتماد ونشر</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Selected Source Deep Inspection Panel */}
          {selectedSource && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-sm font-black text-slate-900 dark:text-white">
                    فحص تفاصيل المصدر المعتمد: {selectedSource.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-slate-400">
                  ID: {selectedSource.id}
                </span>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-center border border-slate-100 dark:border-slate-800">
                  <span className="block text-lg font-black text-indigo-600 dark:text-indigo-400">
                    {selectedSource.detectedUnits.length}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">الوحدات المكتشفة</span>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-center border border-slate-100 dark:border-slate-800">
                  <span className="block text-lg font-black text-emerald-600 dark:text-emerald-400">
                    {selectedSource.extractedRulesCount}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">قواعد مستخلصة</span>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-center border border-slate-100 dark:border-slate-800">
                  <span className="block text-lg font-black text-amber-600 dark:text-amber-400">
                    {selectedSource.extractedVocabCount}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">مفردات سياقية</span>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-center border border-slate-100 dark:border-slate-800">
                  <span className="block text-lg font-black text-purple-600 dark:text-purple-400">
                    {selectedSource.extractedQuestionsCount}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">تمارين موثقة</span>
                </div>
              </div>

              {/* Detected Units Breakdown */}
              <div className="space-y-2">
                <h4 className="text-xs font-black text-slate-700 dark:text-slate-300">
                  الوحدات والدروس المرتبطة بهذا المصدر:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSource.detectedUnits.map((u) => (
                    <div 
                      key={u.unitNumber}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 font-black text-[10px] flex items-center justify-center">
                          {u.unitNumber}
                        </span>
                        <span className="font-bold text-slate-800 dark:text-slate-200 line-clamp-1">
                          {u.title}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 whitespace-nowrap">
                        {u.detectedLessonsCount} دروس
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cryptographic Hash and Audit Verification */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <p className="font-bold text-slate-700 dark:text-slate-300">
                  البصمة الرقمية الموثقة (SHA-256 Checksum):
                </p>
                <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400 break-all select-all">
                  {selectedSource.fileSha256}
                </p>
                {selectedSource.reviewedBy && (
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold pt-1">
                    ✓ تم التدقيق والاعتماد بواسطة: {selectedSource.reviewedBy}
                  </p>
                )}
              </div>

              {/* Raw Excerpt Preview */}
              <div>
                <h4 className="text-xs font-black text-slate-700 dark:text-slate-300 mb-1">
                  معاينة النص المستخرج من أوراق الكتاب:
                </h4>
                <pre className="p-3 bg-slate-900 text-slate-200 rounded-xl text-[11px] font-mono whitespace-pre-wrap max-h-40 overflow-y-auto" dir="ltr">
                  {selectedSource.rawTextPreview}
                </pre>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
