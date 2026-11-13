import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, Sparkles, Check, Copy, CheckCircle2, Lightbulb, RotateCcw, 
  Filter, BookOpen, Volume2, VolumeX, Eye, EyeOff, Brain, 
  PenTool, Award, Printer, ZoomIn, ZoomOut, AlertCircle, ArrowRight, 
  ListChecks, Wand2, RefreshCw, Layers
} from 'lucide-react';
import { getEssaysForGrade, getGradeMeta, ORDERED_GRADES, ALL_GRADES_META } from '../data/gradeContentResolver';
import { EssayItem, EducationalGrade } from '../types';
import { triggerCelebration } from '../utils/storage';

// Common linking words and discourse markers to highlight in English essays
const LINKING_PHRASES = [
  'first of all', 'first', 'second', 'finally', 'in addition', 'moreover',
  'furthermore', 'consequently', 'therefore', 'nevertheless', 'in conclusion',
  'at first', 'to make matters worse', 'on the other hand', 'in this way',
  'unexpectedly', 'dear ahmed', 'dear sir / madam', 'yours faithfully', 'best wishes'
];

type StudyMode = 'dual' | 'memory' | 'simulator' | 'cloze' | 'cards' | 'rubric';
type MemoryLevel = '100' | '75' | '50' | 'first-letter' | 'blur';

interface EssaysSectionProps {
  grade?: EducationalGrade;
  onSelectGrade?: (grade: EducationalGrade) => void;
}

export const EssaysSection: React.FC<EssaysSectionProps> = ({ 
  grade = 'sixth-preparatory',
  onSelectGrade 
}) => {
  const currentEssaysList: EssayItem[] = getEssaysForGrade(grade);
  const gradeMeta = getGradeMeta(grade);
  const [selectedEssayId, setSelectedEssayId] = useState<string>(currentEssaysList[0]?.id || '');

  useEffect(() => {
    if (currentEssaysList.length > 0 && !currentEssaysList.some(e => e.id === selectedEssayId)) {
      setSelectedEssayId(currentEssaysList[0].id);
    }
  }, [grade, currentEssaysList, selectedEssayId]);
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<number | 'all'>('all');
  
  // Display & Study modes
  const [activeMode, setActiveMode] = useState<StudyMode>('dual');
  const [memoryLevel, setMemoryLevel] = useState<MemoryLevel>('first-letter');
  const [showTranslation, setShowTranslation] = useState<boolean>(true);
  const [highlightConnectors, setHighlightConnectors] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');

  // Speech synthesis state
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [speechRate, setSpeechRate] = useState<number>(0.9);
  const [speakingParagraphIndex, setSpeakingParagraphIndex] = useState<number | null>(null);

  // Practice notepad / simulator state
  const [studentWriting, setStudentWriting] = useState<string>('');
  const [showModelComparison, setShowModelComparison] = useState<boolean>(false);

  // Cloze answers state
  const [clozeAnswers, setClozeAnswers] = useState<Record<number, string>>({});

  // Flashcards state
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Checklist state for 20/20 rubric
  const [checkedRubricItems, setCheckedRubricItems] = useState<Record<string, boolean>>({
    title: true,
    paragraphs: true,
    connectors: false,
    wordcount: false,
    tenses: false,
    punctuation: false
  });

  // Copied feedback & inline speech support notice
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const [speechNotice, setSpeechNotice] = useState<string | null>(null);

  // Filtered essays list
  const filteredEssays = selectedUnitFilter === 'all'
    ? currentEssaysList
    : currentEssaysList.filter(e => e.unitId === selectedUnitFilter);

  // Current selected essay
  const currentEssay: EssayItem = currentEssaysList.find(e => e.id === selectedEssayId) || filteredEssays[0] || currentEssaysList[0];

  // Stop speech when changing essay or unmounting
  useEffect(() => {
    stopSpeech();
    setClozeAnswers({});
    setStudentWriting('');
    setShowModelComparison(false);
    setFlippedCards({});
  }, [selectedEssayId]);

  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  // Web Speech API handler
  const speakText = (text: string, paraIndex: number | null = null) => {
    if (!('speechSynthesis' in window)) {
      setSpeechNotice('ميزة القراءة الصوتية غير مدعومة في هذا المتصفح.');
      return;
    }

    setSpeechNotice(null);
    window.speechSynthesis.cancel();

    if (isSpeaking && speakingParagraphIndex === paraIndex) {
      stopSpeech();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = speechRate;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setSpeakingParagraphIndex(paraIndex);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setSpeakingParagraphIndex(null);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setSpeakingParagraphIndex(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setSpeakingParagraphIndex(null);
  };

  const handleCopy = (type: 'english' | 'bilingual' | 'keywords') => {
    let textToCopy = '';
    if (type === 'english') {
      textToCopy = `${currentEssay.titleEn}\n\n${currentEssay.paragraphsEn.join('\n\n')}`;
    } else if (type === 'bilingual') {
      textToCopy = `${currentEssay.titleEn} (${currentEssay.titleAr})\n\n` + 
        currentEssay.paragraphsEn.map((pEn, idx) => `${pEn}\n${currentEssay.paragraphsAr[idx]}`).join('\n\n');
    } else {
      textToCopy = `${currentEssay.titleAr} - مفردات الحفظ:\n` + 
        currentEssay.keywords.map(k => `${k.word}: ${k.meaning}`).join('\n');
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopyFeedback(type);
      setTimeout(() => setCopyFeedback(null), 2000);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  // Render text with highlighted connectors
  const renderFormattedParagraph = (text: string) => {
    if (!highlightConnectors) {
      return <span>{text}</span>;
    }

    // Split text preserving connectors using regex
    const regexPattern = new RegExp(`\\b(${LINKING_PHRASES.join('|')})\\b`, 'gi');
    const parts = text.split(regexPattern);

    return (
      <span>
        {parts.map((part, i) => {
          const isConnector = LINKING_PHRASES.includes(part.toLowerCase());
          if (isConnector) {
            return (
              <span
                key={i}
                className="font-bold text-ink bg-yellow px-1.5 py-0.5 rounded-[4px] border-b-2 border-ink select-all"
                title="أداة ربط / رابط تسلسلي يمنح درجات إضافية"
              >
                {part}
              </span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </span>
    );
  };

  // Memory mode text processor
  const renderMemoryParagraph = (text: string, level: MemoryLevel) => {
    if (level === '100') {
      return renderFormattedParagraph(text);
    }

    const words = text.split(/(\s+)/);

    if (level === 'blur') {
      return (
        <span className="leading-loose">
          {words.map((chunk, i) => {
            if (/^\s+$/.test(chunk)) return <span key={i}>{chunk}</span>;
            return (
              <span 
                key={i}
                className="inline-block px-1 py-0.5 rounded-[4px] filter blur-sm hover:blur-none active:blur-none bg-soft-mint text-ink border border-ink/25 transition-all cursor-pointer select-none"
                title="المس أو مرر المؤشر لكشف الكلمة"
              >
                {chunk}
              </span>
            );
          })}
        </span>
      );
    }

    if (level === 'first-letter') {
      return (
        <span className="font-mono leading-loose tracking-wider">
          {words.map((chunk, i) => {
            if (/^\s+$/.test(chunk)) return <span key={i}>{chunk}</span>;
            // Keep punctuation at end
            const match = chunk.match(/^([a-zA-Z0-9])(.*?)(\W*)$/);
            if (!match) return <span key={i}>{chunk}</span>;
            const [, firstChar, rest, punct] = match;
            const blankLength = Math.max(1, rest.length);
            const blanks = '_'.repeat(blankLength);
            return (
              <span 
                key={i} 
                className="inline-block group relative cursor-pointer mx-0.5 hover:text-cobalt transition-colors"
                title={`الكلمة: ${chunk}`}
              >
                <strong className="text-cobalt font-extrabold">{firstChar}</strong>
                <span className="text-muted-gray font-semibold">{blanks}</span>
                {punct}
              </span>
            );
          })}
        </span>
      );
    }

    // p75 (hide ~25%) or p50 (hide ~50%)
    const hideChance = level === '50' ? 0.5 : 0.25;

    return (
      <span className="leading-loose">
        {words.map((chunk, i) => {
          if (/^\s+$/.test(chunk)) return <span key={i}>{chunk}</span>;
          // Deterministic hash based on index
          const shouldHide = ((i * 17 + chunk.length) % 100) < (hideChance * 100);
          if (!shouldHide || chunk.length <= 2) {
            return <span key={i}>{chunk}</span>;
          }

          const match = chunk.match(/^(\w+)(\W*)$/);
          if (!match) return <span key={i}>{chunk}</span>;
          const [, word, punct] = match;

          return (
            <span 
              key={i}
              className="inline-block group cursor-pointer text-ink bg-blue-mist border-b-2 border-dashed border-cobalt px-1 py-0.5 rounded-[4px] font-mono mx-0.5"
              title={`انقر للتأكد: ${chunk}`}
            >
              <span className="group-hover:hidden select-none tracking-widest text-cobalt">
                {'•'.repeat(Math.min(6, word.length))}
              </span>
              <span className="hidden group-hover:inline font-bold text-ink">
                {word}
              </span>
              {punct}
            </span>
          );
        })}
      </span>
    );
  };

  // Total word count of current model essay
  const totalEnglishWords = currentEssay.paragraphsEn
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;

  // Student writing statistics in the simulator
  const studentWordCount = studentWriting.trim() ? studentWriting.trim().split(/\s+/).filter(Boolean).length : 0;
  
  // Word count evaluation
  const getWordCountStatus = (count: number) => {
    if (count === 0) return { label: 'ابدأ بالكتابة', color: 'text-muted-gray', bg: 'bg-paper border border-ink/25', progress: 0 };

    if (grade === 'fourth-preparatory') {
      const min = currentEssay.wordCountMin;
      const max = currentEssay.wordCountMax;
      if (!min || !max) return { label: 'الملزمة لا تحدد عدداً مطلوباً من الكلمات لهذا النموذج', color: 'text-muted-gray', bg: 'bg-paper border border-ink/25', progress: 0 };
      if (count < min) return { label: 'أقل من الحد المحدد (' + min + ' كلمة)', color: 'text-ink', bg: 'bg-yellow border border-ink', progress: Math.min(100, (count / min) * 100) };
      if (count > max) return { label: 'تجاوز الحد المحدد (' + max + ' كلمة)', color: 'text-cobalt', bg: 'bg-blue-mist border border-ink', progress: 100 };
      return { label: 'ضمن النطاق المحدد في الملزمة (' + min + '–' + max + ' كلمة) ✔', color: 'text-semantic-success font-black', bg: 'bg-soft-mint border border-ink', progress: 100 };
    }

    if (count < 90) return { label: 'قصير جداً (أقل من الحد الأدنى 100)', color: 'text-ink', bg: 'bg-yellow border border-ink', progress: Math.min(100, (count / 100) * 80) };
    if (count >= 100 && count <= 135) return { label: 'مثالي للامتحان (100-130 كلمة) ✔', color: 'text-semantic-success font-black', bg: 'bg-soft-mint border border-ink', progress: 100 };
    return { label: 'طويل نسبياً (تجنب الإطالة الزائدة)', color: 'text-cobalt', bg: 'bg-blue-mist border border-ink', progress: 100 };
  };

  const studentCountStatus = getWordCountStatus(studentWordCount);

  // Similarity score between student writing and model
  const calculateOverlap = () => {
    if (!studentWriting.trim()) return 0;
    const modelWords = new Set(
      currentEssay.paragraphsEn.join(' ').toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 3)
    );
    const studentWords = studentWriting.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 3);
    if (modelWords.size === 0) return 0;
    
    let matches = 0;
    const matchedSet = new Set<string>();
    studentWords.forEach(w => {
      if (modelWords.has(w) && !matchedSet.has(w)) {
        matches++;
        matchedSet.add(w);
      }
    });

    return Math.min(100, Math.round((matches / modelWords.size) * 100));
  };

  const overlapScore = calculateOverlap();

  return (
    <div className="space-y-6 pb-24 max-w-5xl mx-auto px-2 sm:px-0">

      {speechNotice && (
        <div role="status" className="p-3 rounded-[4px] bg-answer-review-bg border-2 border-ink text-semantic-error text-xs font-black flex items-center justify-between gap-3">
          <span>{speechNotice}</span>
          <button type="button" onClick={() => setSpeechNotice(null)} className="px-2 py-0.5 bg-surface text-ink border border-ink rounded-[4px] cursor-pointer">
            إغلاق
          </button>
        </div>
      )}
      
      {/* ================= HERO HEADER BANNER ================= */}
      <div className="p-6 sm:p-8 bg-surface border-3 border-ink shadow-brutal-modal text-ink space-y-5 relative overflow-hidden">
        
        {/* Scoped Grade Identity Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-paper border-2 border-ink relative z-10 rounded-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono font-bold text-cobalt">الصف الدراسي الحالي:</span>
            <span className="px-2.5 py-0.5 bg-cobalt text-surface border border-ink text-xs font-bold rounded-xs">
              {gradeMeta.nameAr}
            </span>
            {(gradeMeta.isMinisterial || grade === 'fourth-preparatory') && (
              <span className="px-2 py-0.5 bg-yellow text-ink border border-ink text-xs font-bold rounded-xs">
                {grade === 'fourth-preparatory' ? 'مصدر الملزمة: 2025' : 'مرحلة وزارية'}
              </span>
            )}
          </div>
          {onSelectGrade && (
            <a
              href="/grades"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/grades';
              }}
              className="text-xs font-bold text-ink hover:text-cobalt underline"
            >
              العودة لاختيار صف آخر ↩
            </a>
          )}
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-yellow text-ink border-2 border-ink shadow-brutal-sm text-xs font-mono font-bold rounded-xs">
              <Award className="w-4 h-4 text-cobalt" />
              <span>{grade === 'fourth-preparatory' ? 'نماذج الكتابة الواردة في الملزمة' : 'السؤال الخامس: الإنشاء والتعبير (20 درجة)'}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="px-3 py-1.5 bg-paper hover:bg-surface text-ink border-2 border-ink shadow-brutal-sm text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer rounded-xs"
                title="طباعة الإنشاء ورقياً"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">طباعة / PDF</span>
              </button>
            </div>
          </div>

          <div>
            <h1 className="font-display text-2xl sm:text-4xl font-black tracking-tight text-ink flex items-center gap-3">
              <span>{grade === 'fourth-preparatory' ? `نماذج الكتابة في ملزمة ${gradeMeta.nameAr}` : gradeMeta.isMinisterial ? `الإنشاءات الوزارية النموذجية • ${gradeMeta.nameAr}` : `الإنشاءات والتعبير المنهجي • ${gradeMeta.nameAr}`}</span>
              <Sparkles className="w-6 h-6 text-cobalt inline shrink-0" />
            </h1>
            <p className="text-xs sm:text-sm text-ink/80 max-w-3xl leading-relaxed mt-2 font-medium">
              {grade === 'fourth-preparatory'
                ? 'نماذج الكتابة الواردة في ملزمة الرابع الإعدادي (طبعة 2025)، مع ترجمة عربية، مفردات للمراجعة، وتمارين استذكار. حدود الكلمات تظهر فقط للموضوعات التي حددتها الملزمة.'
                : gradeMeta.stage === 'intermediate'
                  ? `نماذج إنشائية لمنهج (${gradeMeta.nameAr}): لغة سليمة، تراكيب مناسبة (50-70 كلمة)، مع مختبر الحفظ ومحاكي التسميع.`
                  : `إعداد نموذجي مطابق لمنهج الأستاذ مصطفى تركي: لغة رصينة، تقسيم أكاديمي (مقدمة، متن، خاتمة)، عدّاد الكلمات (100-130 كلمة)، مع مختبر الحفظ التفاعلي ومحاكي الدفتر الامتحاني.`}
            </p>
          </div>

          {/* Unit Filter Chips */}
          <div className="space-y-2 pt-2 border-t-2 border-ink">
            <div className="flex items-center gap-2 text-xs font-mono font-black text-semantic-error">
              <Filter className="w-3.5 h-3.5 shrink-0" />
              <span>فرز حسب الوحدة الدراسية:</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 w-full">
              <button
                type="button"
                id="filter-essay-all"
                onClick={() => setSelectedUnitFilter('all')}
                className={`px-3 py-1.5 rounded-[4px] text-xs font-black transition-all whitespace-nowrap shrink-0 border-2 border-ink cursor-pointer tabular-nums ${
                  selectedUnitFilter === 'all'
                    ? 'bg-cobalt text-surface shadow-brutal-sm'
                    : 'bg-paper hover:bg-surface text-ink'
                }`}
              >
                جميع الوحدات ({currentEssaysList.length})
              </button>
              {Array.from(new Set(currentEssaysList.map(e => e.unitId))).sort((a, b) => a - b).map(unitNum => {
                const count = currentEssaysList.filter((e: EssayItem) => e.unitId === unitNum).length;
                return (
                  <button
                    type="button"
                    key={unitNum}
                    id={`filter-essay-u${unitNum}`}
                    onClick={() => {
                      setSelectedUnitFilter(unitNum);
                      const firstInUnit = currentEssaysList.find((e: EssayItem) => e.unitId === unitNum);
                      if (firstInUnit) {
                        setSelectedEssayId(firstInUnit.id);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-black transition-all flex items-center gap-1 whitespace-nowrap shrink-0 border-2 border-ink cursor-pointer tabular-nums ${
                      selectedUnitFilter === unitNum
                        ? 'bg-cobalt text-surface shadow-brutal-sm'
                        : 'bg-paper hover:bg-surface text-ink'
                    }`}
                  >
                    <span>الوحدة {unitNum}</span>
                    <span className="text-[10px] px-1 font-mono font-bold">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Select Buttons for Essays */}
          <div className="pt-3 border-t-2 border-ink">
            <div className="flex flex-wrap items-center gap-2 w-full">
              {filteredEssays.map((essay) => {
                const isSelected = currentEssay.id === essay.id;
                return (
                  <button
                    type="button"
                    key={essay.id}
                    id={`essay-tab-${essay.id}`}
                    onClick={() => setSelectedEssayId(essay.id)}
                    className={`px-3.5 py-2 rounded-[4px] text-xs font-black transition-all flex items-center gap-2 border-2 border-ink cursor-pointer max-w-full ${
                      isSelected
                        ? 'bg-cobalt text-surface shadow-brutal-callout'
                        : 'bg-paper text-ink hover:bg-surface'
                    }`}
                  >
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-[4px] border border-ink font-mono font-black tabular-nums shrink-0 ${
                      isSelected ? 'bg-yellow text-ink' : 'bg-surface text-ink'
                    }`}>
                      وحدة {essay.unitId}
                    </span>
                    <span className="truncate max-w-[200px]">{essay.titleAr}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ================= MAIN INTERACTIVE ESSAY CARD ================= */}
      <div className="rounded-[6px] bg-surface border-3 border-ink shadow-brutal-lg overflow-hidden">
        
        {/* Essay Info Bar & Toolbar */}
        <div className="p-5 sm:p-7 border-b-2 border-ink space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-[4px] bg-soft-mint text-ink border border-ink tabular-nums">
                  الوحدة {currentEssay.unitId}
                </span>
                <span className="text-xs font-bold text-muted-gray bg-paper px-2.5 py-0.5 rounded-[4px] border border-ink">
                  {currentEssay.ministerialWeight}
                </span>
                <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-[4px] bg-yellow text-ink border border-ink tabular-nums">
                  {totalEnglishWords} كلمة (حسب المنهج)
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-black text-ink tracking-tight">
                {currentEssay.titleAr}
              </h2>

              <p dir="ltr" className="text-sm sm:text-base font-mono text-cobalt font-black text-left mt-1 min-w-0 break-words">
                {currentEssay.titleEn}
              </p>
            </div>

            {/* Quick Actions & Speech Control */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1 p-1 rounded-[4px] bg-paper border-2 border-ink">
                <button
                  type="button"
                  id="speak-full-essay-btn"
                  onClick={() => {
                    const fullEnglish = `${currentEssay.titleEn}. ${currentEssay.paragraphsEn.join('. ')}`;
                    speakText(fullEnglish, null);
                  }}
                  className={`px-3 py-1.5 rounded-[4px] border border-ink text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSpeaking && speakingParagraphIndex === null
                      ? 'bg-semantic-error text-surface'
                      : 'bg-surface text-ink hover:bg-yellow'
                  }`}
                  title="استمع للنص كاملاً بصوت واضح"
                >
                  {isSpeaking && speakingParagraphIndex === null ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>إيقاف الصوت</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-cobalt" />
                      <span>استماع للإنشاء كاملاً</span>
                    </>
                  )}
                </button>

                <select
                  value={speechRate}
                  onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                  aria-label="سرعة النطق"
                  className="bg-transparent text-[11px] font-black text-ink px-1.5 py-1 rounded focus:outline-none cursor-pointer"
                  title="سرعة النطق"
                >
                  <option value="0.75">0.75x بطيء</option>
                  <option value="0.9">0.9x معتدل</option>
                  <option value="1.0">1.0x عادي</option>
                  <option value="1.2">1.2x سريع</option>
                </select>
              </div>

              <div className="relative inline-flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleCopy('english')}
                  className="px-3 py-2 rounded-[4px] bg-surface hover:bg-paper text-ink border-2 border-ink shadow-brutal-sm text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer"
                  title="نسخ الإنشاء الإنجليزي للحافظة"
                >
                  {copyFeedback === 'english' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-semantic-success" />
                      <span className="text-semantic-success">تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cobalt" />
                      <span>نسخ الإنجليزي</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleCopy('bilingual')}
                  className="px-3 py-2 rounded-[4px] bg-surface hover:bg-paper text-ink border-2 border-ink shadow-brutal-sm text-xs font-black transition-all hidden sm:flex items-center gap-1 cursor-pointer"
                  title="نسخ مع الترجمة العربية"
                >
                  {copyFeedback === 'bilingual' ? (
                    <span className="text-semantic-success">تم النسخ!</span>
                  ) : (
                    <span>+ الترجمة</span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ================= SIX INTERACTIVE STUDY MODES NAVIGATION ================= */}
          <div className="pt-3 flex flex-wrap items-center gap-2 w-full border-t-2 border-ink">
            {[
              { id: 'mode-dual-btn', mode: 'dual' as const, label: 'الوضع النموذجي والمتوازي', Icon: BookOpen },
              { id: 'mode-memory-btn', mode: 'memory' as const, label: 'مختبر الحفظ والتعتيم الذكي', Icon: Brain },
              { id: 'mode-simulator-btn', mode: 'simulator' as const, label: grade === 'fourth-preparatory' ? 'محاكي التدريب الكتابي' : 'محاكي الدفتر الامتحاني', Icon: PenTool },
              { id: 'mode-cloze-btn', mode: 'cloze' as const, label: 'اختبار الفراغات (Cloze)', Icon: Sparkles },
              { id: 'mode-cards-btn', mode: 'cards' as const, label: 'بطاقات المفردات (Flashcards)', Icon: Layers },
              { id: 'mode-rubric-btn', mode: 'rubric' as const, label: grade === 'fourth-preparatory' ? 'قائمة مراجعة الكتابة' : 'دليل الدرجات الـ 20', Icon: ListChecks },
            ].map(({ id, mode, label, Icon }) => {
              const isActive = activeMode === mode;
              return (
                <button
                  type="button"
                  key={id}
                  id={id}
                  onClick={() => setActiveMode(mode)}
                  className={`px-3 sm:px-3.5 py-2 rounded-[4px] border-2 border-ink text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-cobalt text-surface shadow-brutal-sm'
                      : 'bg-paper hover:bg-surface text-ink'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-yellow' : 'text-cobalt'}`} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Body based on Active Mode */}
        <div className="p-5 sm:p-8">

          {/* ================= 1. MODE: DUAL PARALLEL READING ================= */}
          {activeMode === 'dual' && (
            <div className="space-y-6">
              
              {/* Dual Mode Sub-Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-[4px] bg-paper border-2 border-ink text-xs">
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setShowTranslation(!showTranslation)}
                    className={`px-3 py-1.5 rounded-[4px] border-2 border-ink font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                      showTranslation
                        ? 'bg-soft-mint text-ink'
                        : 'bg-surface text-ink'
                    }`}
                  >
                    {showTranslation ? <Eye className="w-3.5 h-3.5 text-semantic-success" /> : <EyeOff className="w-3.5 h-3.5 text-muted-gray" />}
                    <span>{showTranslation ? 'الترجمة مفعلة' : 'إخفاء الترجمة (تحدي)'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHighlightConnectors(!highlightConnectors)}
                    className={`px-3 py-1.5 rounded-[4px] border-2 border-ink font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                      highlightConnectors
                        ? 'bg-yellow text-ink'
                        : 'bg-surface text-ink'
                    }`}
                  >
                    <Wand2 className="w-3.5 h-3.5 text-cobalt" />
                    <span>{highlightConnectors ? 'مظلل أدوات الربط نشط' : 'إلغاء تظليل الروابط'}</span>
                  </button>
                </div>

                {/* Font Sizer */}
                <div className="flex items-center gap-1 bg-surface p-1 rounded-[4px] border-2 border-ink">
                  {(['sm', 'base', 'lg'] as const).map((sz, i) => (
                    <button
                      type="button"
                      key={sz}
                      onClick={() => setFontSize(sz)}
                      className={`px-2 py-1 rounded-[4px] text-xs font-mono font-black cursor-pointer ${
                        fontSize === sz ? 'bg-cobalt text-surface' : 'text-ink hover:bg-paper'
                      }`}
                    >
                      {i === 0 ? 'A-' : i === 1 ? 'A' : 'A+'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Vocabulary Bar */}
              <div className="space-y-2">
                <h3 className="text-xs font-black text-muted-gray uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cobalt" />
                  <span>المفردات المفتاحية للإنشاء (Key Vocabulary)</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentEssay.keywords.map((kw, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => speakText(kw.word)}
                      className="px-3 py-1.5 rounded-[4px] bg-paper border-2 border-ink flex flex-wrap items-center gap-2 text-xs hover:bg-yellow transition-all cursor-pointer group max-w-full"
                      title="انقر للاستماع لنطق الكلمة"
                    >
                      <Volume2 className="w-3 h-3 text-cobalt shrink-0" />
                      <span dir="ltr" className="font-mono font-black text-ink text-left bidi-en min-w-0 break-words">{kw.word}</span>
                      <span className="text-muted-gray">•</span>
                      <span className="text-ink font-bold">{kw.meaning}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dual Paragraphs */}
              <div className="space-y-5 lesson-reading">
                {currentEssay.paragraphsEn.map((paraEn, idx) => {
                  const paraAr = currentEssay.paragraphsAr[idx];
                  const isThisParaSpeaking = isSpeaking && speakingParagraphIndex === idx;

                  const fontSizeClass = 
                    fontSize === 'sm' ? 'text-xs sm:text-sm' :
                    fontSize === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base';

                  return (
                    <div 
                      key={idx}
                      className={`p-5 sm:p-6 rounded-[6px] border-2 border-ink transition-all space-y-4 relative ${
                        isThisParaSpeaking
                          ? 'bg-soft-mint/45 shadow-brutal-action'
                          : 'bg-paper'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-black text-muted-gray">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-[4px] bg-surface border border-ink text-ink font-black tabular-nums">
                            الفقرة {idx + 1}
                          </span>
                          <span className="text-muted-gray text-[11px] font-bold">
                            {idx === 0 ? 'المقدمة (Introduction)' : idx === currentEssay.paragraphsEn.length - 1 ? 'الخاتمة (Conclusion)' : 'متن الموضوع (Body)'}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => speakText(paraEn, idx)}
                          className={`p-1.5 px-2.5 rounded-[4px] border-2 border-ink text-xs font-black transition-all flex items-center gap-1 cursor-pointer ${
                            isThisParaSpeaking
                              ? 'bg-semantic-error text-surface'
                              : 'bg-surface hover:bg-yellow text-ink'
                          }`}
                          title={isThisParaSpeaking ? "إيقاف الصوت" : "استمع لهذه الفقرة"}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">{isThisParaSpeaking ? "إيقاف" : "استماع"}</span>
                        </button>
                      </div>

                      <p dir="ltr" className={`font-sans ${fontSizeClass} text-ink leading-relaxed text-left font-medium tracking-normal en-sentence min-w-0 break-words`}>
                        {renderFormattedParagraph(paraEn)}
                      </p>

                      {showTranslation && (
                        <p className="text-xs sm:text-sm text-muted-gray leading-relaxed border-t border-ink/15 pt-3 font-bold">
                          {paraAr}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Golden Tips */}
              <div className="p-6 rounded-[6px] bg-yellow/35 border-2 border-ink shadow-brutal-action space-y-3">
                <div className="flex items-center gap-2 text-ink font-black text-sm">
                  <Lightbulb className="w-5 h-5 text-cobalt fill-yellow shrink-0" />
                  <span>{grade === 'fourth-preparatory' ? 'نصائح للمراجعة وتذكر نص الملزمة' : 'نصائح الأستاذ مصطفى تركي الذهبية لنيل 20/20 كاملة في هذا الإنشاء'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentEssay.goldenTips.map((tip, idx) => (
                    <div key={idx} className="p-3 rounded-[4px] bg-surface border-2 border-ink text-xs sm:text-sm text-ink font-bold flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-semantic-success shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ================= 2. MODE: MEMORY BLUR & RECALL LAB ================= */}
          {activeMode === 'memory' && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-[6px] bg-paper text-ink space-y-3 border-2 border-ink shadow-brutal-action">
                <div className="flex items-center gap-2 text-cobalt font-black text-sm">
                  <Brain className="w-4 h-4" />
                  <span>مختبر الاسترجاع النشط (Active Recall & Memory Fade)</span>
                </div>
                <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed">
                  هذه التقنية هي أسرع طريقة مثبتة علمياً لحفظ الإنشاءات الإنجليزية: تدرج في إخفاء الكلمات، واستخدم <strong>تقنية الحرف الأول</strong> لاختبار قدرتك على تذكر السطور غيباً!
                </p>

                {/* Level Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setMemoryLevel('100')}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-extrabold border-2 border-ink transition-all cursor-pointer ${
                      memoryLevel === '100' ? 'bg-cobalt text-surface shadow-brutal-sm' : 'bg-surface hover:bg-yellow text-ink'
                    }`}
                  >
                    100% (النص كامل)
                  </button>

                  <button
                    type="button"
                    onClick={() => setMemoryLevel('75')}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-extrabold border-2 border-ink transition-all cursor-pointer ${
                      memoryLevel === '75' ? 'bg-cobalt text-surface shadow-brutal-sm' : 'bg-surface hover:bg-yellow text-ink'
                    }`}
                  >
                    75% (إخفاء خفيف)
                  </button>

                  <button
                    type="button"
                    onClick={() => setMemoryLevel('50')}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-extrabold border-2 border-ink transition-all cursor-pointer ${
                      memoryLevel === '50' ? 'bg-cobalt text-surface shadow-brutal-sm' : 'bg-surface hover:bg-yellow text-ink'
                    }`}
                  >
                    50% (إخفاء نصف الكلمات)
                  </button>

                  <button
                    type="button"
                    onClick={() => setMemoryLevel('first-letter')}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-extrabold border-2 border-ink transition-all flex items-center gap-1.5 cursor-pointer ${
                      memoryLevel === 'first-letter' ? 'bg-yellow text-ink shadow-brutal-sm' : 'bg-surface hover:bg-yellow text-ink'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-cobalt" />
                    <span>تقنية الحرف الأول (الأقوى للتسميع)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMemoryLevel('blur')}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-extrabold border-2 border-ink transition-all cursor-pointer ${
                      memoryLevel === 'blur' ? 'bg-cobalt text-surface shadow-brutal-sm' : 'bg-surface hover:bg-yellow text-ink'
                    }`}
                  >
                    التعتيم الشامل (المس للكشف)
                  </button>
                </div>
              </div>

              {/* Memory Paragraphs View */}
              <div className="space-y-4">
                {currentEssay.paragraphsEn.map((paraEn, idx) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-callout space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-muted-gray border-b-2 border-ink/15 pb-2">
                      <span className="tabular-nums">الفقرة {idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => speakText(paraEn, idx)}
                        className="text-cobalt hover:underline flex items-center gap-1 text-[11px] font-bold cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>استمع للفقرة</span>
                      </button>
                    </div>

                    <div dir="ltr" className="text-sm sm:text-base text-ink text-left en-sentence min-w-0 break-words">
                      {renderMemoryParagraph(paraEn, memoryLevel)}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ================= 3. MODE: EXAM SIMULATOR ================= */}
          {activeMode === 'simulator' && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-[6px] bg-blue-mist text-ink space-y-2 border-2 border-ink shadow-brutal-action">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-cobalt font-black text-sm">
                    <PenTool className="w-4 h-4" />
                    <span>{grade === 'fourth-preparatory' ? 'محاكي التدريب الكتابي (Writing Practice)' : 'محاكي الدفتر الامتحاني (Exam Booklet Simulator)'}</span>
                  </div>
                  <span className="text-xs bg-yellow text-ink px-2.5 py-0.5 rounded-[4px] border-2 border-ink font-black">
                    {grade === 'fourth-preparatory' ? 'تدريب إضافي' : 'السؤال الخامس'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed">
                  {grade === 'fourth-preparatory' ? 'اكتب إجابتك التدريبية هنا. يحسب المحاكي الكلمات ويقارن كتابتك بنموذج الكتابة الوارد في الملزمة، لأغراض المراجعة الذاتية فقط.' : 'اكتب الإنشاء غيباً هنا كما لو كنت في القاعة الامتحانية. سيقوم المحاكي باحتساب الكلمات بدقة ومقارنة كتابتك مع النموذج القياسي للأستاذ مصطفى تركي!'}
                </p>
              </div>

              {/* Word Count Live Gauge */}
              <div className="p-4 rounded-[6px] bg-paper border-2 border-ink flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-ink font-mono tabular-nums">{studentWordCount}</span>
                    <span className="text-muted-gray font-bold">
                      {grade === 'fourth-preparatory'
                        ? (currentEssay.wordCountMin && currentEssay.wordCountMax
                          ? `/ ${currentEssay.wordCountMin}–${currentEssay.wordCountMax} كلمة`
                          : 'لا يوجد حد كلمات محدد في الملزمة')
                        : '/ 100-130 كلمة'}
                    </span>
                  </div>
                  <span className={`px-2.5 py-1 rounded-[4px] text-xs font-bold ${studentCountStatus.bg} ${studentCountStatus.color}`}>
                    {studentCountStatus.label}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setStudentWriting('')}
                    className="px-3 py-1.5 rounded-[4px] bg-surface border-2 border-ink text-ink hover:bg-answer-review-bg hover:text-semantic-error text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>مسح الدفتر</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowModelComparison(!showModelComparison)}
                    disabled={!studentWriting.trim()}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-extrabold border-2 border-ink transition-all flex items-center gap-1.5 ${
                      !studentWriting.trim()
                        ? 'opacity-50 cursor-not-allowed bg-progress-track text-muted-gray'
                        : 'bg-cobalt hover:bg-cobalt-hover text-surface shadow-brutal-sm cursor-pointer'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{showModelComparison ? 'إخفاء المقارنة' : 'فحص ومقارنة مع النموذج'}</span>
                  </button>
                </div>
              </div>

              {/* Exam Notepad Paper Styled Container */}
              <div className="relative rounded-[6px] border-2 border-ink bg-surface overflow-hidden shadow-brutal-action">
                {/* Exam booklet header decoration */}
                <div className="bg-paper border-b-2 border-ink p-3 px-4 sm:px-5 flex flex-wrap items-center justify-between gap-2 text-xs text-ink font-mono">
                  <span className="font-bold">{grade === 'fourth-preparatory' ? 'نموذج كتابة تدريبي • غير رسمي' : 'نموذج الدفتر الامتحاني التدريبي • العراق'}</span>
                  <span className="font-black text-cobalt font-sans">{grade === 'fourth-preparatory' ? 'Writing Practice / تدريب كتابي' : 'Q5: Writing / الإنشاء (20 Marks)'}</span>
                  <span className="font-bold">ورقة الإجابة</span>
                </div>

                {/* Title Line */}
                <div className="p-4 border-b-2 border-ink/20 bg-answer-bg text-center font-serif">
                  <div className="text-xs text-muted-gray font-bold mb-1 font-sans">اكتب عنوان الإنشاء في منتصف السطر الأول مع وضع خط تحته</div>
                  <div dir="ltr" className="text-base sm:text-lg font-bold text-ink underline decoration-ink underline-offset-4 bidi-en min-w-0 break-words">
                    {currentEssay.titleEn}
                  </div>
                </div>

                {/* Notepad Textarea with Lined Background Effect */}
                <div className="p-4 sm:p-7 relative min-h-[300px]">
                  <textarea
                    id="ministerial-notepad-input"
                    dir="ltr"
                    value={studentWriting}
                    onChange={(e) => setStudentWriting(e.target.value)}
                    placeholder="Start writing your English essay draft here..."
                    className="w-full h-80 bg-transparent resize-y border-none focus:outline-hidden font-mono text-sm sm:text-base text-ink leading-8 text-left placeholder:text-muted-gray"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, var(--token-progress-track) 31px, var(--token-progress-track) 32px)',
                      lineHeight: '32px'
                    }}
                  />
                </div>
              </div>

              {/* Comparison & Diagnostics Section */}
              {showModelComparison && (
                <div className="p-6 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-action space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink/15 pb-3">
                    <h4 className="text-sm font-black text-ink flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cobalt" />
                      <span>تقرير المطابقة مع النموذج القياسي:</span>
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-gray font-bold">نسبة تطابق المفردات:</span>
                      <span className="text-sm font-black text-semantic-success bg-soft-mint px-2.5 py-0.5 rounded-[4px] border-2 border-ink font-mono tabular-nums">
                        {overlapScore}%
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-[6px] bg-paper border-2 border-ink space-y-2 min-w-0">
                      <div className="font-bold text-ink">كتابتك الحالية:</div>
                      <p dir="ltr" className="text-left font-mono text-ink whitespace-pre-wrap leading-relaxed en-sentence break-words">
                        {studentWriting || '(لم يتم إدخال نص)'}
                      </p>
                    </div>

                    <div className="p-4 rounded-[6px] bg-answer-correct-bg border-2 border-ink space-y-2 min-w-0">
                      <div className="font-bold text-semantic-success">النموذج القياسي:</div>
                      <div dir="ltr" className="text-left font-mono text-ink space-y-2 leading-relaxed en-sentence break-words">
                        {currentEssay.paragraphsEn.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ================= 4. MODE: CLOZE TEST (FILL IN THE BLANKS) ================= */}
          {activeMode === 'cloze' && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-[6px] bg-soft-mint border-2 border-ink flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-ink">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-semantic-success shrink-0" />
                  <span><strong>اختبار التثبيت السريع:</strong> اختر الكلمة المفقودة الصحيحة لترسيخ حفظ الجمل المفتاحية للإنشاء!</span>
                </div>
                {Object.keys(clozeAnswers).length > 0 && (
                  <button
                    type="button"
                    onClick={() => setClozeAnswers({})}
                    className="px-3 py-1 rounded-[4px] bg-cobalt text-surface font-bold text-xs border-2 border-ink shadow-brutal-sm hover:bg-cobalt-hover transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>إعادة المحاولة</span>
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {currentEssay.clozeSentences.map((cloze, idx) => {
                  const userChoice = clozeAnswers[idx];
                  const isAnswered = !!userChoice;
                  const isCorrect = userChoice === cloze.missingWord;

                  return (
                    <div 
                      key={idx}
                      className={`p-5 rounded-[6px] border-2 border-ink shadow-brutal-callout transition-all space-y-3.5 ${
                        isAnswered
                          ? isCorrect 
                            ? 'bg-answer-correct-bg' 
                            : 'bg-answer-review-bg'
                          : 'bg-paper'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-extrabold text-muted-gray tabular-nums">سؤال {idx + 1}</span>
                        {isAnswered && (
                          <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-[4px] border border-ink ${
                            isCorrect ? 'bg-soft-mint text-semantic-success' : 'bg-answer-review-bg text-semantic-error'
                          }`}>
                            {isCorrect ? 'إجابة صحيحة! أحسنت' : `الكلمة الصحيحة: ${cloze.missingWord}`}
                          </span>
                        )}
                      </div>

                      <p dir="ltr" className="font-mono text-sm sm:text-base font-bold text-ink text-left en-sentence min-w-0 break-words">
                        {cloze.textWithBlanks}
                      </p>

                      <div dir="ltr" className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {cloze.options.map((opt) => {
                          const isThisSelected = userChoice === opt;
                          const isThisCorrect = opt === cloze.missingWord;

                          let style = "bg-surface border-2 border-ink text-ink hover:bg-blue-mist";
                          if (isAnswered) {
                            if (isThisCorrect) {
                              style = "bg-semantic-success text-surface font-bold border-2 border-ink shadow-brutal-sm";
                            } else if (isThisSelected) {
                              style = "bg-semantic-error text-surface font-bold border-2 border-ink";
                            } else {
                              style = "bg-surface/70 border-2 border-ink/40 text-muted-gray opacity-60";
                            }
                          }

                          return (
                            <button
                              type="button"
                              key={opt}
                              disabled={isAnswered}
                              onClick={() => {
                                if (clozeAnswers[idx]) return;
                                setClozeAnswers(prev => ({ ...prev, [idx]: opt }));
                                if (opt === cloze.missingWord) {
                                  triggerCelebration();
                                }
                              }}
                              className={`p-3 rounded-[4px] text-xs sm:text-sm font-bold transition-all cursor-pointer disabled:cursor-default ${style}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* ================= 5. MODE: FLASHCARDS (VOCABULARY) ================= */}
          {activeMode === 'cards' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-gray font-bold">
                <span>انقر على أي بطاقة لقلبها واكتشاف المعنى أو اللفظ</span>
                <span className="tabular-nums">إجمالي الكلمات: {currentEssay.keywords.length}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentEssay.keywords.map((kw, i) => {
                  const isFlipped = !!flippedCards[i];

                  return (
                    <div key={i} className="relative h-44">
                      <button
                        type="button"
                        onClick={() => setFlippedCards(prev => ({ ...prev, [i]: !prev[i] }))}
                        aria-label={isFlipped ? `عرض الكلمة الإنجليزية ${kw.word}` : `كشف معنى الكلمة ${kw.word}`}
                        className={`w-full h-full rounded-[6px] p-5 border-2 border-ink transition-all cursor-pointer select-none flex flex-col justify-between shadow-brutal-callout hover:-translate-y-0.5 text-center ${
                          isFlipped 
                            ? 'bg-cobalt text-surface' 
                            : 'bg-paper hover:bg-yellow text-ink'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full pl-10">
                          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-[4px] border border-ink ${
                            isFlipped ? 'bg-yellow text-ink' : 'bg-surface text-ink'
                          }`}>
                            {isFlipped ? 'الترجمة العربية' : 'English Term'}
                          </span>
                        </div>

                        <div className="text-center py-2 w-full min-w-0">
                          {isFlipped ? (
                            <div className="text-lg sm:text-xl font-black text-surface font-sans break-words">
                              {kw.meaning}
                            </div>
                          ) : (
                            <div dir="ltr" className="text-lg sm:text-xl font-black font-mono text-ink text-center bidi-en break-words">
                              {kw.word}
                            </div>
                          )}
                        </div>

                        <div className={`w-full text-center text-[11px] font-bold ${isFlipped ? 'text-surface/90' : 'text-muted-gray'}`}>
                          {isFlipped ? 'انقر للعودة للإنجليزية' : 'انقر لقلب البطاقة ومعرفة المعنى'}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => speakText(kw.word)}
                        aria-label={`استمع للفظ ${kw.word}`}
                        className={`absolute top-4 left-4 z-10 p-1.5 rounded-[4px] border border-ink transition-colors cursor-pointer ${
                          isFlipped ? 'bg-surface text-cobalt hover:bg-yellow' : 'bg-surface text-ink hover:bg-blue-mist'
                        }`}
                        title="استمع للفظ"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= 6. MODE: MINISTERIAL 20/20 RUBRIC ================= */}
          {activeMode === 'rubric' && (
            <div className="space-y-6">
              
              <div className="p-6 rounded-[6px] bg-yellow text-ink space-y-3 border-2 border-ink shadow-brutal-action">
                <div className="flex items-center gap-2 text-ink font-black text-base">
                  <Award className="w-5 h-5 text-cobalt" />
                  <span>{grade === 'fourth-preparatory' ? 'قائمة مراجعة مهارات الكتابة' : 'ميزان تصحيح الإنشاء (20 درجة كاملة)'}</span>
                </div>
                <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed">
                  {grade === 'fourth-preparatory' ? 'هذه إرشادات عامة للمراجعة. الملزمة تحدد نطاق عدد الكلمات لبعض الموضوعات فقط، ولا تعرض هنا توزيع درجات رسمياً لسؤال الإنشاء.' : 'كيف تحصل على درجة 20/20 كاملة في سؤال الإنشاء؟ إليك توزيع الدرجات وقائمة المراجعة الذاتية لتتأكد من جودة دفترك قبل تسليم الامتحان:'}
                </p>
              </div>

              {/* Rubric Points Cards */}
              {grade === 'fourth-preparatory' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    ['العنوان والتنظيم', 'ضع عنواناً واضحاً ونظّم النص في فقرات مناسبة.'],
                    ['المضمون والأفكار', 'غطِّ عناصر الموضوع الموجودة في نص الملزمة دون إضافة معلومات غير مسندة.'],
                    ['القواعد والتراكيب', 'راجع الأزمنة وترتيب الكلمات وصيغ الأفعال.'],
                    ['الإملاء والترقيم', 'راجع الحروف الكبيرة وعلامات الترقيم وصحة كتابة الكلمات.']
                  ].map(([title, description]) => (
                    <div key={title} className="p-5 rounded-[6px] bg-paper border-2 border-ink shadow-brutal-callout space-y-2">
                      <span className="text-xs font-black text-ink">{title}</span>
                      <p className="text-xs text-ink font-medium leading-relaxed">{description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-[6px] bg-yellow border-2 border-ink shadow-brutal-callout space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-ink">العنوان والتنظيم</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-[4px] bg-surface border border-ink text-ink font-mono tabular-nums">2 درجات</span>
                  </div>
                  <p className="text-xs text-ink font-medium leading-relaxed">
                    كتابة العنوان في منتصف السطر الأول، ترك فراغ كلمة في بداية كل فقرة (Indentation).
                  </p>
                </div>

                <div className="p-5 rounded-[6px] bg-soft-mint border-2 border-ink shadow-brutal-callout space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-ink">المضمون والأفكار</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-[4px] bg-surface border border-ink text-semantic-success font-mono tabular-nums">8 درجات</span>
                  </div>
                  <p className="text-xs text-ink font-medium leading-relaxed">
                    ترابط الأفكار وتغطية الموضوع بالكامل، وتحقيق عدد الكلمات المطلوب (100 إلى 130 كلمة).
                  </p>
                </div>

                <div className="p-5 rounded-[6px] bg-blue-mist border-2 border-ink shadow-brutal-callout space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-ink">القواعد والتراكيب</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-[4px] bg-surface border border-ink text-cobalt font-mono tabular-nums">5 درجات</span>
                  </div>
                  <p className="text-xs text-ink font-medium leading-relaxed">
                    صحة الأزمنة النحوية، تماسك الجمل واستخدام أدوات الربط (Furthermore, In conclusion).
                  </p>
                </div>

                <div className="p-5 rounded-[6px] bg-lavender border-2 border-ink shadow-brutal-callout space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-ink">الإملاء والترقيم</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-[4px] bg-surface border border-ink text-ink font-mono tabular-nums">5 درجات</span>
                  </div>
                  <p className="text-xs text-ink font-medium leading-relaxed">
                    خلو الكلمات من الأخطاء الإملائية، الحروف الكبيرة (Capitalization) والنقاط والفواصل.
                  </p>
                </div>
              </div>
              )}

              {/* Interactive Self-Checklist */}
              <div className="p-6 rounded-[6px] bg-paper border-2 border-ink shadow-brutal-action space-y-4">
                <h4 className="text-sm font-black text-ink flex items-center gap-2">
                  <ListChecks className="w-4 h-4 text-cobalt" />
                  <span>{grade === 'fourth-preparatory' ? 'قائمة التدقيق الذاتي للمراجعة:' : 'قائمة التدقيق الذاتي قبل تسليم الدفتر الامتحاني:'}</span>
                </h4>

                <div className="space-y-2.5">
                  {[
                    { id: 'title', label: 'كتبت العنوان في منتصف السطر الأول بخط واضح مع وضع خط تحته.' },
                    { id: 'paragraphs', label: 'قسمت الإنشاء إلى 3 فقرات واضحة (مقدمة، متن الموضوع، وخاتمة).' },
                    { id: 'connectors', label: 'استخدمت أدوات الربط المنطقية (First of all, Furthermore, Consequently, In conclusion).' },
                    { id: 'wordcount', label: grade === 'fourth-preparatory' ? (currentEssay.wordCountMin && currentEssay.wordCountMax ? 'تحققت من نطاق الكلمات المحدد في الملزمة (' + currentEssay.wordCountMin + '–' + currentEssay.wordCountMax + ').' : 'تحققت من النص؛ الملزمة لا تحدد له نطاقاً لعدد الكلمات.') : 'تأكدت أن حجم الإنشاء يتراوح بين 100 إلى 130 كلمة دون إطالة مفرطة.' },
                    { id: 'tenses', label: 'راجعت الأزمنة النحوية (الماضي للسرد، والمضارع للحقائق والنصائح).' },
                    { id: 'punctuation', label: 'بدأت كل جملة بحرف كبير (Capital Letter) وانتهيت بنقطة (.) وفواصل واضحة.' },
                  ].map((item) => {
                    const isChecked = !!checkedRubricItems[item.id];
                    return (
                      <label 
                        key={item.id}
                        className={`flex items-center gap-3 p-3 rounded-[6px] border-2 border-ink transition-all cursor-pointer select-none ${
                          isChecked ? 'bg-soft-mint' : 'bg-surface hover:bg-blue-mist'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setCheckedRubricItems(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className="w-4 h-4 accent-cobalt rounded-[4px] border-2 border-ink cursor-pointer"
                        />
                        <span className={`text-xs sm:text-sm font-bold ${isChecked ? 'line-through text-muted-gray' : 'text-ink'}`}>
                          {item.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
