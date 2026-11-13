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
import { getAuthHeaders } from '../utils/apiAuth';

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
  const [curriculumEdition, setCurriculumEdition] = useState('طبعة 2024-2026');
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
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load existing curriculum sources
  const fetchSources = async () => {
    setIsLoading(true);
    try {
      const authHeaders = await getAuthHeaders({ asAdmin: true });
      const res = await fetch(`/api/curriculum/sources/admin/all?gradeId=${selectedGrade}`, {
        headers: authHeaders
      });
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

      const authHeaders = await getAuthHeaders({ asAdmin: true });
      const response = await fetch('/api/curriculum/sources/upload', {
        method: 'POST',
        headers: authHeaders,
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
      const authHeaders = await getAuthHeaders({ asAdmin: true });
      const res = await fetch(`/api/curriculum/sources/${sourceId}/publish`, {
        method: 'POST',
        headers: authHeaders
      });
      if (res.ok) {
        const data = await res.json();
        setUploadSuccess(data.message || 'تم نشر المصدر التعليمي وإضافته للمنصة!');
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

  // Human-in-the-loop: Delete Source
  const handleDeleteSource = async (sourceId: string) => {
    try {
      const authHeaders = await getAuthHeaders({ asAdmin: true });
      const res = await fetch(`/api/curriculum/sources/${sourceId}`, {
        method: 'DELETE',
        headers: authHeaders
      });
      if (res.ok) {
        setUploadSuccess('تم حذف المصدر التعليمي بنجاح.');
        setConfirmDeleteId(null);
        await fetchSources();
        if (selectedSource?.id === sourceId) {
          setSelectedSource(null);
        }
      }
    } catch (e) {
      console.error("Failed to delete source:", e);
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
    <div className="space-y-8 pb-20 max-w-7xl mx-auto w-full px-2 sm:px-6 text-ink" dir="rtl">
      
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden rounded-md bg-cobalt text-surface p-6 sm:p-10 shadow-brutal-hero border-2 border-ink">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-yellow text-ink text-xs font-black border border-ink shadow-brutal-press">
              <ShieldCheck className="w-4 h-4 text-cobalt shrink-0" />
              <span>نظام إدارة المناهج والتحقق الرقمي • OMEGA CURRICULUM HUB</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-surface">
              منظومة المناهج والملفات الدراسية • <span className="text-yellow underline decoration-2 underline-offset-4">{currentGradeMeta.nameAr}</span>
            </h1>
            <p className="text-surface/90 text-xs sm:text-sm max-w-2xl leading-relaxed font-medium">
              مركز إدارة وتدقيق كتب المنهج (Student's Book & Activity Book) والملازم الدراسية، مع ربط القواعد والمفردات والتمارين بأرقام الصفحات والبصمة التشفيرية SHA-256.
            </p>
          </div>

          {/* Grade Selector Switcher */}
          <div className="flex flex-col gap-2 bg-surface text-ink p-3 rounded border-2 border-ink shadow-brutal-sm shrink-0">
            <label htmlFor="hub-grade-select" className="text-xs font-bold text-muted-gray">اختر المرحلة والصف الدراسي:</label>
            <select
              id="hub-grade-select"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value as EducationalGrade)}
              className="bg-paper text-ink font-black text-xs sm:text-sm px-4 py-2.5 rounded-sm border border-ink focus:outline-none focus:ring-2 focus:ring-cobalt cursor-pointer"
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
        <div className="lg:col-span-5 bg-surface rounded-md p-6 shadow-brutal-md border-2 border-ink space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink/15 pb-4">
            <div className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-cobalt shrink-0" />
              <h2 className="text-base font-black text-ink">
                رفع ومعالجة مصدر منهجي جديد
              </h2>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-sm bg-blue-mist text-ink border border-ink">
              دورة المعالجة الدقيقة
            </span>
          </div>

          <form onSubmit={handleStartIngestion} className="space-y-4">
            
            {/* Source Type & Edition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-ink mb-1">
                  نوع المصدر:
                </label>
                <select
                  value={sourceType}
                  onChange={(e) => setSourceType(e.target.value as CurriculumSourceType)}
                  className="w-full text-xs font-bold p-2.5 rounded bg-paper border-2 border-ink text-ink focus:outline-none focus:ring-2 focus:ring-cobalt"
                >
                  <option value="students_book">كتاب الطالب (Student's Book)</option>
                  <option value="activity_book">كتاب النشاط (Activity Book)</option>
                  <option value="ministerial_exams">أسئلة وزارية</option>
                  <option value="school_finals">امتحانات مدرسية نهائية</option>
                  <option value="teacher_guide">دليل المدرس</option>
                  <option value="malzama">ملزمة دراسية</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink mb-1">
                  السنة / الطبعة:
                </label>
                <input
                  type="text"
                  value={curriculumEdition}
                  onChange={(e) => setCurriculumEdition(e.target.value)}
                  placeholder="طبعة 2024-2026"
                  className="w-full text-xs font-bold p-2.5 rounded bg-paper border-2 border-ink text-ink focus:outline-none focus:shadow-brutal-cobalt-sm"
                />
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-xs font-bold text-ink mb-1">
                عنوان المصدر:
              </label>
              <input
                type="text"
                value={sourceTitle}
                onChange={(e) => setSourceTitle(e.target.value)}
                placeholder="مثال: كتاب الطالب 2025 - الوحدات 1 إلى 8"
                className="w-full text-xs font-bold p-2.5 rounded bg-paper border-2 border-ink text-ink focus:outline-none focus:shadow-brutal-cobalt-sm"
              />
            </div>

            {/* Input Mode Switcher */}
            <div className="flex rounded bg-paper border-2 border-ink p-1 text-xs font-bold gap-1">
              <button
                type="button"
                onClick={() => setUploadMode('file')}
                className={`flex-1 py-1.5 rounded-sm transition-all cursor-pointer ${
                  uploadMode === 'file'
                    ? 'bg-cobalt text-surface border border-ink shadow-brutal-press font-black'
                    : 'text-muted-gray hover:text-ink'
                }`}
              >
                ملف PDF كامل
              </button>
              <button
                type="button"
                onClick={() => setUploadMode('text')}
                className={`flex-1 py-1.5 rounded-sm transition-all cursor-pointer ${
                  uploadMode === 'text'
                    ? 'bg-cobalt text-surface border border-ink shadow-brutal-press font-black'
                    : 'text-muted-gray hover:text-ink'
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
                className="border-2 border-dashed border-ink hover:border-cobalt rounded-md bg-paper transition-all"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full p-6 text-center cursor-pointer space-y-2 hover:bg-blue-mist/50 transition-all rounded-md"
                >
                  <div className="w-10 h-10 rounded bg-yellow border-2 border-ink shadow-brutal-press text-ink flex items-center justify-center mx-auto">
                    <Upload className="w-5 h-5" />
                  </div>
                  {selectedFile ? (
                    <div>
                      <p className="text-xs font-black text-ink break-words">
                        {selectedFile.name}
                      </p>
                      <p className="text-[11px] font-bold text-muted-gray">
                        {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • جاهز للتحليل
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs font-bold text-ink">
                        اسحب ملف الـ PDF هنا أو انقر للتصفح
                      </p>
                      <p className="text-[11px] font-medium text-muted-gray">
                        يدعم ملفات الكتب والنشاط حتى 20 ميغابايت مع التحقق من ترويسة %PDF
                      </p>
                    </div>
                  )}
                </button>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-ink mb-1">
                  نص المنهج المستخرج:
                </label>
                <textarea
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                  rows={6}
                  placeholder="الصق نص الدرس أو القواعد أو التمارين هنا..."
                  className="w-full text-xs font-mono p-3 rounded bg-paper border-2 border-ink text-ink focus:outline-none focus:shadow-brutal-cobalt-sm"
                />
              </div>
            )}

            {/* Description */}
            <div>
              <label className="block text-xs font-bold text-ink mb-1">
                وصف المصدر وملاحظات المراجعة:
              </label>
              <input
                type="text"
                value={sourceDescription}
                onChange={(e) => setSourceDescription(e.target.value)}
                placeholder="مثال: يحتوي على القطع الاستيعابية والقواعد والتمارين المنهجية"
                className="w-full text-xs font-bold p-2.5 rounded bg-paper border-2 border-ink text-ink focus:outline-none focus:shadow-brutal-cobalt-sm"
              />
            </div>

            {/* Processing Progress bar */}
            {isUploading && (
              <div className="space-y-2 p-3 bg-blue-mist rounded border-2 border-ink shadow-brutal-press">
                <div className="flex items-center justify-between text-xs font-bold text-ink gap-2">
                  <span className="flex items-center gap-1.5 min-w-0">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-cobalt shrink-0" />
                    <span className="truncate">{uploadStatusMessage}</span>
                  </span>
                  <span className="font-mono shrink-0">{uploadProgress}%</span>
                </div>
                <div className="w-full bg-progress-track border border-ink h-2.5 rounded-sm overflow-hidden">
                  <div 
                    className="bg-cobalt h-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Warning / Error Message */}
            {uploadWarning && (
              <div className="p-3 bg-yellow border-2 border-ink rounded flex items-start gap-2 text-xs font-bold text-ink shadow-brutal-press">
                <AlertCircle className="w-4 h-4 shrink-0 text-semantic-error mt-0.5" />
                <p className="break-words">{uploadWarning}</p>
              </div>
            )}

            {/* Success Message */}
            {uploadSuccess && (
              <div className="p-3 bg-answer-correct-bg border-2 border-ink rounded flex items-start gap-2 text-xs font-bold text-semantic-success shadow-brutal-press">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-semantic-success mt-0.5" />
                <p className="break-words">{uploadSuccess}</p>
              </div>
            )}

            {/* Submit Action */}
            <button
              type="submit"
              disabled={isUploading}
              className="w-full py-3 px-4 rounded bg-cobalt hover:bg-cobalt-hover disabled:opacity-50 text-surface border-2 border-ink shadow-brutal-sm font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              {isUploading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>جارٍ المعالجة والتحقق...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-yellow" />
                  <span>بدء الاستخراج والتحقق الرقمي</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Sources Repository & Human Audit (7 cols) */}
        <div className="lg:col-span-7 space-y-6 min-w-0">
          
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-surface p-4 rounded-md border-2 border-ink shadow-brutal-sm">
            <div className="flex items-center gap-2">
              <BookCheck className="w-5 h-5 text-cobalt shrink-0" />
              <span className="text-sm font-black text-ink whitespace-nowrap">
                المصادر المتاحة ({filteredSources.length})
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                aria-label="تصفية المصادر حسب الحالة"
                className="text-xs font-bold p-2 rounded bg-paper border border-ink text-ink focus:outline-none focus:ring-2 focus:ring-cobalt"
              >
                <option value="all">جميع الحالات</option>
                <option value="published">منشور</option>
                <option value="pending_review">بانتظار المراجعة</option>
                <option value="needs_ocr">يحتاج OCR</option>
              </select>

              <div className="relative flex-1 sm:w-48 min-w-0">
                <Search className="w-3.5 h-3.5 text-muted-gray absolute right-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="بحث في المصادر..."
                  className="w-full pr-8 pl-3 py-2 text-xs font-bold rounded bg-paper border border-ink text-ink placeholder-muted-gray focus:outline-none focus:ring-2 focus:ring-cobalt"
                />
              </div>
            </div>
          </div>

          {/* Sources List Cards */}
          <div className="space-y-3">
            {isLoading ? (
              <div className="text-center py-12 bg-surface rounded-md border-2 border-ink shadow-brutal-sm">
                <RefreshCw className="w-6 h-6 animate-spin text-cobalt mx-auto" />
                <p className="text-xs font-bold text-muted-gray mt-2">جارٍ تحميل قائمة المصادر الدراسية...</p>
              </div>
            ) : filteredSources.length === 0 ? (
              <div className="text-center py-12 bg-surface rounded-md border-2 border-ink shadow-brutal-sm space-y-2 p-6">
                <BookOpen className="w-8 h-8 text-cobalt mx-auto" />
                <p className="text-xs font-bold text-ink">
                  لا توجد مصادر مطابقة لمعايير البحث في هذا الصف.
                </p>
                <p className="text-[11px] font-medium text-muted-gray">
                  يمكنك رفع كتاب الطالب أو النشاط عبر النافذة المجاورة.
                </p>
              </div>
            ) : (
              filteredSources.map((source) => {
                const isSelected = selectedSource?.id === source.id;
                const isPublished = source.status === 'published';
                const isNeedsOcr = source.status === 'needs_ocr';
                const isConfirmingDelete = confirmDeleteId === source.id;

                return (
                  <div
                    key={source.id}
                    className={`rounded-md border-2 border-ink transition-all overflow-hidden ${
                      isSelected
                        ? 'bg-blue-mist shadow-brutal-callout'
                        : 'bg-surface hover:bg-paper shadow-brutal-sm'
                    }`}
                  >
                    <div className="p-4 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedSource(source)}
                        className="flex-1 min-w-0 text-right cursor-pointer flex items-start gap-3 focus-visible:outline-none"
                      >
                        <div className={`w-10 h-10 rounded border border-ink shadow-brutal-press flex items-center justify-center shrink-0 ${
                          isPublished
                            ? 'bg-soft-mint text-semantic-success'
                            : isNeedsOcr
                            ? 'bg-yellow text-ink'
                            : 'bg-surface text-cobalt'
                        }`}>
                          {isPublished ? <CheckCircle2 className="w-5 h-5" /> : isNeedsOcr ? <AlertTriangle className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-xs sm:text-sm font-black text-ink break-words">
                              {source.title}
                            </h3>
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-sm border border-ink ${
                              isPublished
                                ? 'bg-soft-mint text-semantic-success'
                                : isNeedsOcr
                                ? 'bg-yellow text-ink'
                                : 'bg-surface text-cobalt'
                            }`}>
                              {isPublished ? 'منشور' : isNeedsOcr ? 'يحتاج OCR' : 'مسودة للمراجعة'}
                            </span>
                          </div>

                          <p className="text-[11px] font-medium text-muted-gray mt-1 line-clamp-1">
                            {source.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-2 mt-2 text-[10px] font-bold text-muted-gray">
                            <span>الطبعة: {source.curriculumEdition}</span>
                            <span>•</span>
                            <span>الحجم: {source.fileSize}</span>
                            <span>•</span>
                            <span>الصفحات: {source.totalPages}</span>
                            <span>•</span>
                            <span dir="ltr" className="font-mono">SHA-256: {source.fileSha256.slice(0, 10)}...</span>
                          </div>
                        </div>
                      </button>

                      <div className="flex flex-wrap items-center gap-1.5 shrink-0 self-end sm:self-start">
                        {/* Publish / Review action button */}
                        {!isPublished && !isNeedsOcr && (
                          <button
                            type="button"
                            onClick={() => handlePublishSource(source.id)}
                            disabled={isReviewing}
                            className="px-3 py-1.5 rounded bg-soft-mint hover:bg-mint-hover text-ink border border-ink shadow-brutal-press font-black text-xs flex items-center gap-1.5 cursor-pointer"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>نشر</span>
                          </button>
                        )}
                        {isConfirmingDelete ? (
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => handleDeleteSource(source.id)}
                              className="px-2.5 py-1.5 rounded bg-coral text-ink border border-ink shadow-brutal-press font-black text-[11px] cursor-pointer"
                            >
                              تأكيد الحذف
                            </button>
                            <button
                              type="button"
                              onClick={() => setConfirmDeleteId(null)}
                              className="px-2.5 py-1.5 rounded bg-surface text-ink border border-ink font-bold text-[11px] cursor-pointer"
                            >
                              إلغاء
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteId(source.id)}
                            aria-label={`حذف المصدر ${source.title}`}
                            className="p-1.5 rounded bg-surface border border-ink text-muted-gray hover:text-semantic-error hover:bg-coral transition-colors cursor-pointer"
                            title="حذف المصدر"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Selected Source Deep Inspection Panel */}
          {selectedSource && (
            <div className="bg-surface rounded-md p-6 border-2 border-ink shadow-brutal-md space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink/15 pb-4">
                <div className="flex items-center gap-2 min-w-0">
                  <Eye className="w-5 h-5 text-cobalt shrink-0" />
                  <h3 className="text-sm font-black text-ink break-words">
                    فحص تفاصيل المصدر: {selectedSource.title}
                  </h3>
                </div>
                <span dir="ltr" className="font-mono text-xs font-bold text-muted-gray">
                  ID: {selectedSource.id}
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-paper rounded text-center border border-ink shadow-brutal-press">
                  <span className="block text-lg font-black font-mono text-cobalt">
                    {selectedSource.detectedUnits.length}
                  </span>
                  <span className="text-[10px] font-bold text-muted-gray">الوحدات المكتشفة</span>
                </div>

                <div className="p-3 bg-paper rounded text-center border border-ink shadow-brutal-press">
                  <span className="block text-lg font-black font-mono text-semantic-success">
                    {selectedSource.extractedRulesCount}
                  </span>
                  <span className="text-[10px] font-bold text-muted-gray">قواعد مستخلصة</span>
                </div>

                <div className="p-3 bg-paper rounded text-center border border-ink shadow-brutal-press">
                  <span className="block text-lg font-black font-mono text-ink">
                    {selectedSource.extractedVocabCount}
                  </span>
                  <span className="text-[10px] font-bold text-muted-gray">مفردات سياقية</span>
                </div>

                <div className="p-3 bg-paper rounded text-center border border-ink shadow-brutal-press">
                  <span className="block text-lg font-black font-mono text-cobalt">
                    {selectedSource.extractedQuestionsCount}
                  </span>
                  <span className="text-[10px] font-bold text-muted-gray">تمارين مستخرجة</span>
                </div>
              </div>

              {/* Detected Units Breakdown */}
              <div className="space-y-2">
                <h4 className="text-xs font-black text-ink">
                  الوحدات والدروس المرتبطة بهذا المصدر:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSource.detectedUnits.map((u) => (
                    <div 
                      key={u.unitNumber}
                      className="p-2.5 rounded bg-paper border border-ink flex items-center justify-between gap-2 text-xs min-w-0"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-5 h-5 rounded-sm bg-yellow border border-ink text-ink font-black text-[10px] flex items-center justify-center shrink-0">
                          {u.unitNumber}
                        </span>
                        <span className="font-bold text-ink line-clamp-1">
                          {u.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-muted-gray whitespace-nowrap shrink-0">
                        {u.detectedLessonsCount} دروس
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cryptographic Hash Verification */}
              <div className="p-3 bg-paper rounded border border-ink text-xs space-y-1">
                <p className="font-bold text-ink">
                  البصمة الرقمية للملف (SHA-256 Checksum):
                </p>
                <p dir="ltr" className="font-mono text-[10px] text-muted-gray break-all select-all text-left">
                  {selectedSource.fileSha256}
                </p>
                {selectedSource.reviewedBy && (
                  <p className="text-[11px] text-semantic-success font-bold pt-1">
                    ✓ تم التدقيق بواسطة: {selectedSource.reviewedBy}
                  </p>
                )}
              </div>

              {/* Raw Excerpt Preview */}
              <div>
                <h4 className="text-xs font-black text-ink mb-1">
                  معاينة النص المستخرج من أوراق الكتاب:
                </h4>
                <pre className="p-3 bg-paper border-2 border-ink text-ink rounded text-[11px] font-mono whitespace-pre-wrap break-words max-h-40 overflow-y-auto text-left" dir="ltr">
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
