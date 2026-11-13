import React, { useState, useRef } from 'react';
import { 
  Upload, FileText, CheckCircle2, Sparkles, AlertCircle, BookOpen, 
  RefreshCw, Volume2, Search, HelpCircle, FileCheck, Shield, Eye
} from 'lucide-react';
import { UploadedMalzama, EducationalGrade } from '../types';
import { DEFAULT_PRELOADED_3RD_MALZAMA } from '../data/thirdIntermediateData';
import { CurriculumAnalyzer } from '../services/curriculumAnalyzer';
import { getAuthHeaders } from '../utils/apiAuth';

interface MalzamaUploadLabProps {
  onNavigateToUnits?: () => void;
  onNavigateToMock?: () => void;
  onSelectGrade?: (grade: EducationalGrade) => void;
}

export const MalzamaUploadLab: React.FC<MalzamaUploadLabProps> = ({
  onNavigateToUnits,
  onNavigateToMock,
}) => {
  // State for active malzama
  const [activeMalzama, setActiveMalzama] = useState<UploadedMalzama>(() => {
    try {
      const saved = localStorage.getItem('mustafa_turki_active_3rd_malzama');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_PRELOADED_3RD_MALZAMA;
  });

  // Upload & Drag State
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState<string>('');
  const [processingProgress, setProcessingProgress] = useState(0);
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState<string | null>(null);
  const [uploadWarningMessage, setUploadWarningMessage] = useState<string | null>(null);

  // Active view tab inside the extracted malzama
  const [activeTab, setActiveTab] = useState<'rules' | 'vocab' | 'quiz' | 'reader'>('rules');

  // Text paste modal / manual input
  const [showPasteModal, setShowPasteModal] = useState(false);
  const [pastedText, setPastedText] = useState('');
  const [pastedTitle, setPastedTitle] = useState('');

  // Interactive Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [revealedQuizAnswers, setRevealedQuizAnswers] = useState<Record<number, boolean>>({});

  // Search filter
  const [searchQuery, setSearchQuery] = useState('');

  // Audio speech
  const speakWord = (text: string) => {
    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-GB';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
      }
    } catch (e) {
      console.warn("TTS not available", e);
    }
  };

  // Save to local storage
  const saveMalzama = (malzama: UploadedMalzama) => {
    setActiveMalzama(malzama);
    try {
      localStorage.setItem('mustafa_turki_active_3rd_malzama', JSON.stringify(malzama));
    } catch (e) {
      console.error("Local storage error", e);
    }
  };

  // Real File upload processing via server pipeline & CurriculumAnalyzer
  const handleProcessFile = async (file: File) => {
    setIsProcessing(true);
    setProcessingProgress(15);
    setProcessingStep('جارٍ قراءة وفك تشفير ملف الملزمة (' + file.name + ')...');
    setUploadWarningMessage(null);
    setUploadSuccessMessage(null);

    const fileName = file.name;
    const fileSize = (file.size / (1024 * 1024)).toFixed(1) + ' MB';

    try {
      // 1. Read file to Base64
      const reader = new FileReader();
      const base64Data = await new Promise<string>((resolve, reject) => {
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (e) => reject(e);
        reader.readAsDataURL(file);
      });

      setProcessingProgress(45);
      setProcessingStep('جارٍ استخراج النصوص الحقيقية والتحقق من التوقيع الرقمي...');

      // 2. Call server-side PDF ingestion endpoint with authentication
      const authHeaders = await getAuthHeaders();
      const response = await fetch('/api/ingest/pdf', {
        method: 'POST',
        headers: {
          ...authHeaders,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ base64Data, fileName })
      });

      let extractedRawText = '';
      let isRealExtraction = false;

      if (response.ok) {
        const data = await response.json();
        extractedRawText = data.extractedText || '';
        isRealExtraction = Boolean(data.isRealExtraction);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'فشل استخراج النصوص من الملف');
      }

      setProcessingProgress(75);
      setProcessingStep('جارٍ تحليل البنية التعليمية واستخلاص القواعد والمفردات...');

      // 3. Process through CurriculumAnalyzer
      const draft = await CurriculumAnalyzer.analyze(
        extractedRawText,
        fileName,
        fileSize,
        'pdf'
      );

      setProcessingProgress(95);
      setProcessingStep('اكتمال المعالجة...');

      if (!draft.isRealExtraction || draft.extractionStatus === 'scanned-or-empty') {
        setIsProcessing(false);
        setProcessingProgress(100);
        setUploadWarningMessage(
          'تعذر استخراج نص حقيقي من هذا الملف. يبدو أن ملف PDF ممسوح ضوئياً أو يحتوي على صور فقط. يحتاج الملف إلى OCR قبل تحليله.'
        );
        return;
      }

      const newMalzama: UploadedMalzama = {
        id: 'user-malzama-' + Date.now(),
        name: draft.courseTitle || fileName.replace(/\.[^/.]+$/, ""),
        size: fileSize,
        uploadDate: new Date().toISOString().split('T')[0],
        fileType: file.type || 'application/pdf',
        grade: 'third-intermediate',
        unitsCount: draft.totalUnitsDetected || 1,
        summary: draft.summary,
        extractedRules: draft.extractedRules,
        extractedVocab: draft.extractedVocab,
        extractedQuestions: draft.extractedQuestions,
        rawContentPreview: draft.rawTextPreview || `ملف مرفوع: ${fileName}`
      };

      saveMalzama(newMalzama);
      setProcessingProgress(100);
      setIsProcessing(false);
      setUploadSuccessMessage(
        `تم استخراج محتويات ملزمة «${fileName}» بنجاح (${draft.totalRulesDetected} قواعد و ${draft.totalVocabDetected} مفردات و ${draft.totalQuestionsDetected} أسئلة)!`
      );
      setTimeout(() => setUploadSuccessMessage(null), 7000);
    } catch (err: unknown) {
      console.error('File ingestion error:', err);
      setIsProcessing(false);
      const errMsg = err instanceof Error ? err.message : 'حدث خطأ أثناء قراءة الملف.';
      setUploadWarningMessage(errMsg);
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleManualPasteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pastedText.trim()) return;

    setIsProcessing(true);
    setProcessingProgress(35);
    setProcessingStep('جارٍ تحليل النص المنسوخ واستخراج القواعد والمفردات...');
    setUploadWarningMessage(null);
    setUploadSuccessMessage(null);

    try {
      const draft = await CurriculumAnalyzer.analyze(
        pastedText.trim(),
        pastedTitle.trim() || 'ملخص ملزمة منسوخ',
        (pastedText.length / 1024).toFixed(1) + ' KB',
        'paste'
      );

      if (!draft.isRealExtraction) {
        setIsProcessing(false);
        setUploadWarningMessage('النص المدخل قصير جداً ولا يحتوي على محتوى تعليمي كافٍ للاستخراج.');
        return;
      }

      const newMalzama: UploadedMalzama = {
        id: 'pasted-malzama-' + Date.now(),
        name: pastedTitle.trim() || draft.courseTitle || 'ملخص ملزمة الثالث المتوسط المنسوخ',
        size: (pastedText.length / 1024).toFixed(1) + ' KB',
        uploadDate: new Date().toISOString().split('T')[0],
        fileType: 'text/plain',
        grade: 'third-intermediate',
        unitsCount: draft.totalUnitsDetected || 1,
        summary: draft.summary,
        extractedRules: draft.extractedRules,
        extractedVocab: draft.extractedVocab,
        extractedQuestions: draft.extractedQuestions,
        rawContentPreview: pastedText
      };

      saveMalzama(newMalzama);
      setPastedText('');
      setPastedTitle('');
      setShowPasteModal(false);
      setIsProcessing(false);
      setUploadSuccessMessage('تم استخراج وتحليل النص بنجاح وإضافته إلى المنصة!');
      setTimeout(() => setUploadSuccessMessage(null), 5000);
    } catch (err: unknown) {
      setIsProcessing(false);
      console.error('Paste analyze error:', err);
      setUploadWarningMessage('حدث خطأ أثناء معالجة النص المنسوخ.');
    }
  };

  // Reset to default
  const handleResetToOfficialMalzama = () => {
    saveMalzama(DEFAULT_PRELOADED_3RD_MALZAMA);
    setUploadWarningMessage(null);
    setUploadSuccessMessage('تمت استعادة ملزمة الأستاذ مصطفى تركي للثالث المتوسط بنجاح!');
    setTimeout(() => setUploadSuccessMessage(null), 4000);
  };

  // Filtered lists
  const filteredRules = activeMalzama.extractedRules.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.explanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.formula.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVocab = activeMalzama.extractedVocab.filter(v => 
    v.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.context.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-16 text-ink">
      
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden rounded-md bg-cobalt border-2 border-ink p-6 sm:p-8 text-surface shadow-brutal-hero">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-yellow border border-ink shadow-brutal-press text-ink text-xs font-black">
              <Sparkles className="w-3.5 h-3.5 text-cobalt shrink-0" />
              <span>مختبر الثالث المتوسط • رفع ومعالجة ذكية للملزمة</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-surface">
              قسم الصف الثالث المتوسط <span className="text-yellow">الذكي</span>
            </h1>
            
            <p className="text-sm sm:text-base text-surface/90 leading-relaxed font-medium">
              ارفع ملزمتك بصيغة (PDF نصي أو نص مباشر) ليقوم النظام تلقائياً باستخراج القواعد والمفردات والأسئلة، أو ادرس مباشرة مع <strong>ملزمة الأستاذ مصطفى تركي</strong>.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
            <button
              type="button"
              onClick={onNavigateToUnits}
              className="flex-1 sm:flex-none px-5 py-3 rounded bg-yellow hover:bg-yellow-hover text-ink border-2 border-ink shadow-brutal-sm font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>تصفح الوحدات (1 - 7)</span>
            </button>

            <button
              type="button"
              onClick={onNavigateToMock}
              className="flex-1 sm:flex-none px-5 py-3 rounded bg-surface hover:bg-paper border-2 border-ink shadow-brutal-sm text-ink font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileCheck className="w-4 h-4 text-cobalt shrink-0" />
              <span>محاكي الامتحان 100د</span>
            </button>
          </div>
        </div>
      </div>

      {/* Success Notification Toast */}
      {uploadSuccessMessage && (
        <div className="p-4 bg-answer-correct-bg border-2 border-ink text-semantic-success rounded-md flex items-center gap-3 shadow-brutal-sm animate-fade-in">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <p className="text-sm font-bold">{uploadSuccessMessage}</p>
        </div>
      )}

      {/* Warning Notification Toast for Scanned / Empty PDFs */}
      {uploadWarningMessage && (
        <div className="p-4 bg-yellow border-2 border-ink text-ink rounded-md flex items-start gap-3 shadow-brutal-sm animate-fade-in">
          <AlertCircle className="w-5 h-5 text-semantic-error shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-black text-ink">تنبيه معالجة المستند</p>
            <p className="text-xs sm:text-sm font-medium text-ink leading-relaxed">{uploadWarningMessage}</p>
          </div>
        </div>
      )}

      {/* 2. Drag & Drop Upload Zone & Paste Option */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Upload Drop Box */}
        <div 
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleFileDrop}
          className={`lg:col-span-2 border-2 border-dashed rounded-md transition-all relative overflow-hidden ${
            isDragging 
              ? 'border-cobalt bg-blue-mist' 
              : 'border-ink hover:border-cobalt bg-surface shadow-brutal-md'
          }`}
        >
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                handleProcessFile(e.target.files[0]);
              }
            }}
            accept=".pdf,.txt"
            className="hidden" 
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-full p-8 sm:p-10 text-center cursor-pointer flex flex-col items-center justify-center gap-4 hover:bg-paper transition-colors"
          >
            <div className="w-16 h-16 rounded-md bg-yellow border-2 border-ink flex items-center justify-center text-ink shadow-brutal-sm">
              <Upload className="w-8 h-8" />
            </div>

            <div className="space-y-1.5 max-w-md">
              <h3 className="text-lg font-black text-ink">
                اسحب ملزمة الثالث المتوسط (PDF نصي) وأفلتها هنا، أو اضغط للاختيار
              </h3>
              <p className="text-xs font-medium text-muted-gray">
                يدعم ملفات PDF النصية الحقيقية (حتى 20 ميغابايت) والملفات النصية (.txt).
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-sm bg-paper border border-ink text-ink text-[11px] font-bold">
                معالجة حقيقية
              </span>
              <span className="px-2.5 py-1 rounded-sm bg-soft-mint border border-ink text-ink text-[11px] font-bold">
                استخراج دقيق للقواعد
              </span>
              <span className="px-2.5 py-1 rounded-sm bg-yellow border border-ink text-ink text-[11px] font-bold">
                كشف المستندات الممسوحة
              </span>
            </div>
          </button>

          {/* Processing Overlay */}
          {isProcessing && (
            <div className="absolute inset-0 bg-surface/95 flex flex-col items-center justify-center p-6 z-20 space-y-4">
              <div className="w-14 h-14 rounded-md bg-cobalt text-surface border-2 border-ink flex items-center justify-center animate-spin">
                <RefreshCw className="w-7 h-7" />
              </div>
              <div className="space-y-2 text-center max-w-sm">
                <p className="text-sm font-bold text-ink">{processingStep}</p>
                <div className="w-64 bg-progress-track border border-ink rounded-sm h-2.5 overflow-hidden mx-auto">
                  <div 
                    className="bg-cobalt h-full transition-all duration-300"
                    style={{ width: `${processingProgress}%` }}
                  />
                </div>
                <p className="text-xs font-mono font-bold text-muted-gray">{processingProgress}% مكتمل</p>
              </div>
            </div>
          )}
        </div>

        {/* Side Actions & Active Malzama */}
        <div className="bg-surface border-2 border-ink rounded-md p-6 flex flex-col justify-between space-y-5 shadow-brutal-md">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-ink font-black text-sm">
              <Shield className="w-4 h-4 text-cobalt shrink-0" />
              <span>الملزمة النشطة حالياً:</span>
            </div>

            <div className="p-4 rounded bg-paper border border-ink space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <FileText className="w-5 h-5 text-cobalt shrink-0" />
                  <span className="font-extrabold text-xs text-ink line-clamp-1" title={activeMalzama.name}>
                    {activeMalzama.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm bg-yellow border border-ink text-ink shrink-0">
                  {activeMalzama.size}
                </span>
              </div>
              <p className="text-xs font-medium text-muted-gray line-clamp-2 leading-relaxed">
                {activeMalzama.summary}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded bg-soft-mint border border-ink">
                <div className="font-black font-mono text-sm text-ink">{activeMalzama.unitsCount}</div>
                <div className="text-[10px] text-ink font-bold">وحدات</div>
              </div>
              <div className="p-2.5 rounded bg-blue-mist border border-ink">
                <div className="font-black font-mono text-sm text-cobalt">{activeMalzama.extractedRules.length}</div>
                <div className="text-[10px] text-ink font-bold">قواعد</div>
              </div>
              <div className="p-2.5 rounded bg-yellow border border-ink">
                <div className="font-black font-mono text-sm text-ink">{activeMalzama.extractedQuestions.length}</div>
                <div className="text-[10px] text-ink font-bold">أسئلة</div>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-ink/15">
            <button
              type="button"
              onClick={() => setShowPasteModal(true)}
              className="w-full py-2.5 px-4 rounded bg-paper hover:bg-yellow text-ink border-2 border-ink shadow-brutal-press text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span>لصق نصوص من ملزمتك يدوياً</span>
            </button>

            <button
              type="button"
              onClick={handleResetToOfficialMalzama}
              className="w-full py-2.5 px-4 rounded bg-surface border-2 border-ink text-cobalt hover:bg-blue-mist shadow-brutal-press text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 shrink-0" />
              <span>تحميل ملزمة الأستاذ مصطفى تركي</span>
            </button>
          </div>
        </div>

      </div>

      {/* 3. Extracted Booklet Interactive Hub */}
      <div className="bg-surface border-2 border-ink rounded-md p-5 sm:p-8 shadow-brutal-md space-y-6">
        
        {/* Navigation Tabs and Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-ink/15 pb-5">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'rules', label: 'القواعد المستخرجة', count: activeMalzama.extractedRules.length },
              { id: 'vocab', label: 'المفردات المستخرجة', count: activeMalzama.extractedVocab.length },
              { id: 'quiz', label: 'أسئلة الملزمة', count: activeMalzama.extractedQuestions.length, highlight: true },
              { id: 'reader', label: 'معاينة النصوص', count: null }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded font-bold text-xs sm:text-sm transition-all flex items-center gap-2 border-2 border-ink cursor-pointer shrink-0 ${
                  activeTab === tab.id
                    ? tab.highlight 
                      ? 'bg-yellow text-ink shadow-brutal-sm' 
                      : 'bg-cobalt text-surface shadow-brutal-sm'
                    : 'bg-paper text-ink hover:bg-surface shadow-brutal-press'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== null && (
                  <span className={`px-1.5 py-0.5 rounded-sm border border-ink text-[10px] font-mono font-black ${
                    activeTab === tab.id ? 'bg-surface text-ink' : 'bg-surface text-ink'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64 min-w-0">
            <Search className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-gray" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في محتويات الملزمة..."
              className="w-full pl-3 pr-9 py-2 text-xs font-bold rounded bg-paper border-2 border-ink focus:bg-surface focus:outline-none focus:shadow-brutal-cobalt-sm transition-colors text-right text-ink placeholder-muted-gray"
            />
          </div>
        </div>

        {/* Tab 1: Extracted Rules */}
        {activeTab === 'rules' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRules.length === 0 ? (
              <div className="md:col-span-2 text-center py-10 text-muted-gray font-bold text-xs">
                لا توجد قواعد مستخرجة متطابقة مع البحث أو في الملزمة الحالية.
              </div>
            ) : (
              filteredRules.map((rule, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-md bg-paper border-2 border-ink shadow-brutal-sm transition-all space-y-3 min-w-0"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h4 className="font-extrabold text-sm sm:text-base text-ink">
                      {rule.title}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-yellow border border-ink text-ink font-bold shrink-0">
                      قاعدة {idx + 1}
                    </span>
                  </div>

                  <div dir="ltr" className="p-3 bg-surface rounded border border-ink font-mono text-xs font-bold text-cobalt leading-relaxed text-left break-words">
                    {rule.formula}
                  </div>

                  <p className="text-xs font-medium text-ink leading-relaxed">
                    {rule.explanation}
                  </p>

                  {rule.examples.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-ink/15">
                      <p className="text-[11px] font-bold text-muted-gray">أمثلة تطبيقية مستخرجة:</p>
                      {rule.examples.map((ex, exIdx) => (
                        <div key={exIdx} className="flex items-center justify-between gap-2 text-xs text-ink font-medium py-1.5 px-2.5 rounded bg-surface border border-ink">
                          <span dir="ltr" className="font-mono font-bold text-left break-words min-w-0 flex-1">{ex}</span>
                          <button 
                            type="button"
                            onClick={() => speakWord(ex)}
                            aria-label={`استمع لنطق ${ex}`}
                            className="p-1 rounded bg-paper hover:bg-yellow border border-ink text-ink cursor-pointer shrink-0" 
                            title="استمع للنطق"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 2: Extracted Vocab */}
        {activeTab === 'vocab' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredVocab.length === 0 ? (
              <div className="sm:col-span-2 lg:col-span-3 text-center py-10 text-muted-gray font-bold text-xs">
                لا توجد مفردات مستخرجة في الملزمة الحالية.
              </div>
            ) : (
              filteredVocab.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-md bg-paper border-2 border-ink shadow-brutal-sm transition-all space-y-2 group min-w-0"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span dir="ltr" className="font-mono font-black text-sm text-cobalt break-words">{item.word}</span>
                      <button 
                        type="button"
                        onClick={() => speakWord(item.word)}
                        aria-label={`استمع لنطق ${item.word}`}
                        className="p-1 rounded bg-surface hover:bg-yellow border border-ink text-ink transition-colors cursor-pointer shrink-0"
                        title="استمع للنطق الإنجليزي"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="font-extrabold text-xs text-ink">{item.meaning}</span>
                  </div>

                  <p dir="ltr" className="text-xs font-mono font-medium text-muted-gray bg-surface p-2 rounded border border-ink text-left break-words">
                    "{item.context}"
                  </p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 3: Interactive Quiz from Malzama */}
        {activeTab === 'quiz' && (
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-md bg-yellow border-2 border-ink shadow-brutal-sm text-ink flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-cobalt shrink-0" />
              <p className="text-xs sm:text-sm font-bold">
                أسئلة مستخرجة مباشرة من سياق الملزمة لاختبار الفهم والجاهزية.
              </p>
            </div>

            {activeMalzama.extractedQuestions.length === 0 ? (
              <div className="text-center py-10 text-muted-gray font-bold text-xs">
                لا توجد أسئلة مستخرجة في هذا الملف.
              </div>
            ) : (
              activeMalzama.extractedQuestions.map((q, qIdx) => {
                const isRevealed = revealedQuizAnswers[qIdx];
                return (
                  <div 
                    key={qIdx}
                    className="p-5 rounded-md bg-paper border-2 border-ink shadow-brutal-sm space-y-3"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-sm bg-soft-mint border border-ink text-ink">
                        سؤال {qIdx + 1} • {q.type}
                      </span>
                      <button
                        type="button"
                        onClick={() => setRevealedQuizAnswers(prev => ({ ...prev, [qIdx]: !prev[qIdx] }))}
                        className="text-xs font-bold text-cobalt hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{isRevealed ? 'إخفاء الإجابة النموذجية' : 'كشف الإجابة النموذجية'}</span>
                      </button>
                    </div>

                    <p dir="ltr" className="text-sm sm:text-base font-bold text-ink leading-relaxed text-left break-words">
                      {q.question}
                    </p>

                    {/* Input answer */}
                    <div className="pt-1">
                      <input
                        type="text"
                        value={quizAnswers[qIdx] || ''}
                        onChange={(e) => setQuizAnswers({ ...quizAnswers, [qIdx]: e.target.value })}
                        placeholder="اكتب إجابتك هنا للاختبار الذاتي..."
                        className="w-full px-4 py-2.5 text-xs sm:text-sm font-bold rounded bg-surface border-2 border-ink focus:outline-none focus:shadow-brutal-cobalt-sm text-ink placeholder-muted-gray"
                      />
                    </div>

                    {/* Revealed answer box */}
                    {isRevealed && (
                      <div className="p-3 bg-answer-correct-bg border-2 border-ink rounded text-xs text-ink font-bold space-y-1">
                        <span className="text-semantic-success">الإجابة النموذجية في الملزمة:</span>
                        <p dir="ltr" className="font-mono text-sm text-left break-words">{q.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Tab 4: Raw Booklet Preview */}
        {activeTab === 'reader' && (
          <div className="p-6 rounded-md bg-paper border-2 border-ink font-mono text-xs sm:text-sm text-ink leading-loose whitespace-pre-wrap break-words max-h-96 overflow-y-auto">
            {activeMalzama.rawContentPreview || 'لا تتوفر معاينة نصية إضافية لهذا الملف.'}
          </div>
        )}

      </div>

      {/* 4. Manual Text Paste Modal */}
      {showPasteModal && (
        <div className="fixed inset-0 z-50 bg-ink/75 flex items-center justify-center p-4">
          <div className="bg-surface rounded-md border-2 border-ink shadow-brutal-modal max-w-xl w-full p-6 space-y-4 animate-scale-up text-ink">
            <div className="flex items-center justify-between border-b-2 border-ink/15 pb-3">
              <h3 className="text-base font-black text-ink">
                لصق نص من ملزمة الثالث المتوسط
              </h3>
              <button 
                type="button"
                onClick={() => setShowPasteModal(false)}
                aria-label="إغلاق النافذة"
                className="p-1.5 rounded bg-paper hover:bg-coral border border-ink text-ink font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleManualPasteSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-ink mb-1">
                  عنوان الملزمة أو الفصل:
                </label>
                <input
                  type="text"
                  value={pastedTitle}
                  onChange={(e) => setPastedTitle(e.target.value)}
                  placeholder="مثلاً: ملزمة الأستاذ مصطفى تركي - قواعد الوحدة الأولى"
                  className="w-full px-3 py-2 text-xs font-bold rounded bg-paper border-2 border-ink focus:bg-surface focus:outline-none focus:shadow-brutal-cobalt-sm text-ink"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-ink mb-1">
                  انسخ والصق نصوص أو تمارين الملزمة هنا:
                </label>
                <textarea
                  rows={6}
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                  placeholder="الصق نصوص الدروس أو القواعد أو التمارين هنا ليتم استخراجها وتصنيفها آلياً..."
                  className="w-full p-3 text-xs rounded bg-paper border-2 border-ink focus:bg-surface focus:outline-none focus:shadow-brutal-cobalt-sm font-mono text-ink"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPasteModal(false)}
                  className="px-4 py-2 rounded text-xs font-bold bg-paper text-ink border-2 border-ink hover:bg-coral cursor-pointer shadow-brutal-press"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink shadow-brutal-sm text-xs font-black cursor-pointer"
                >
                  معالجة واستخراج الآن
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
