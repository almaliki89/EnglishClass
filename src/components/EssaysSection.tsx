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

  // Copied feedback
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

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
      alert('ميزة القراءة الصوتية غير مدعومة في هذا المتصفح');
      return;
    }

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
                className="font-bold text-amber-700 bg-amber-100/90 px-1 py-0.5 rounded border-b-2 border-amber-400 select-all"
                title="أداة ربط / رابط تسلسلي وزاري يمنح درجات إضافية"
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
                className="inline-block px-1 py-0.5 rounded filter blur-sm hover:blur-none active:blur-none bg-emerald-100/70 text-slate-800 transition-all cursor-pointer select-none"
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
                className="inline-block group relative cursor-pointer mx-0.5 hover:text-emerald-700 transition-colors"
                title={`الكلمة: ${chunk}`}
              >
                <strong className="text-emerald-800 font-bold">{firstChar}</strong>
                <span className="text-slate-400 font-semibold">{blanks}</span>
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
              className="inline-block group cursor-pointer text-emerald-800 bg-emerald-50 border-b border-dashed border-emerald-400 px-1 py-0.5 rounded font-mono mx-0.5"
              title={`انقر للتأكد: ${chunk}`}
            >
              <span className="group-hover:hidden select-none tracking-widest text-emerald-600">
                {'•'.repeat(Math.min(6, word.length))}
              </span>
              <span className="hidden group-hover:inline font-bold text-emerald-950">
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
    if (count === 0) return { label: 'ابدأ بالكتابة', color: 'text-slate-400', bg: 'bg-slate-100', progress: 0 };
    if (count < 90) return { label: 'قصير جداً (أقل من الحد الأدنى 100)', color: 'text-amber-600', bg: 'bg-amber-100', progress: Math.min(100, (count / 100) * 80) };
    if (count >= 100 && count <= 135) return { label: 'مثالي وزارياً (100-130 كلمة) ✔', color: 'text-emerald-700 font-black', bg: 'bg-emerald-100', progress: 100 };
    return { label: 'طويل نسبياً (تجنب الإطالة الزائدة)', color: 'text-blue-600', bg: 'bg-blue-100', progress: 100 };
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
      
      {/* ================= HERO HEADER BANNER ================= */}
      <div className="p-6 sm:p-8 bg-white border-3 border-[#171717] shadow-[6px_6px_0px_#171717] text-[#171717] space-y-5 relative overflow-hidden">
        
        {/* Scoped Grade Identity Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-[#F4EFE3] border-2 border-[#171717] relative z-10">
          <div className="flex items-center gap-2">
            <span className="editorial-tag text-[#304FFE]">GRADE CONTEXT // الصف الحالي:</span>
            <span className="px-2.5 py-0.5 bg-[#304FFE] text-white border border-[#171717] text-xs font-black">
              {gradeMeta.nameAr}
            </span>
            {gradeMeta.isMinisterial && (
              <span className="px-2 py-0.5 bg-[#E9FF57] text-[#171717] border border-[#171717] text-xs font-black">
                منهج وزاري معتمد
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
              className="text-xs font-bold text-[#171717] hover:text-[#304FFE] underline"
            >
              العودة لاختيار صف آخر ↩
            </a>
          )}
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#E9FF57] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-xs font-mono font-black">
              <Award className="w-4 h-4 text-[#304FFE]" />
              <span>QUESTION V: ESSAYS & WRITING // 20 MARKS</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 bg-[#F4EFE3] hover:bg-white text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer"
                title="طباعة الإنشاء ورقياً بتنسيق وزاري"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">طباعة / PDF</span>
              </button>
            </div>
          </div>

          <div>
            <h1 className="font-display text-2xl sm:text-4xl font-black tracking-tight text-[#171717] flex items-center gap-3">
              <span>{gradeMeta.isMinisterial ? `الإنشاءات الوزارية النموذجية • ${gradeMeta.nameAr}` : `الإنشاءات والتعبير المنهجي • ${gradeMeta.nameAr}`}</span>
              <Sparkles className="w-6 h-6 text-[#304FFE] inline shrink-0" />
            </h1>
            <p className="text-xs sm:text-sm text-[#171717]/80 max-w-3xl leading-relaxed mt-2 font-medium">
              {gradeMeta.stage === 'intermediate'
                ? `نماذج إنشائية معتمدة لمنهج (${gradeMeta.nameAr}): لغة سليمة، تراكيب مناسبة (50-70 كلمة)، مع مختبر الحفظ ومحاكي التسميع.`
                : `إعداد نموذجي مطابق تماماً لمنهج الأستاذ مصطفى تركي: لغة رصينة، تقسيم أكاديمي (مقدمة، متن، خاتمة)، عدّاد الكلمات الوزاري (100-130 كلمة)، مع مختبر الحفظ التفاعلي ومحاكي الدفتر الامتحاني.`}
            </p>
          </div>

          {/* Unit Filter Chips */}
          <div className="space-y-2 pt-1 border-t-2 border-[#171717]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF5738]">
              <Filter className="w-3.5 h-3.5 shrink-0" />
              <span>FILTER BY UNIT // فرز حسب الوحدة:</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar w-full">
              <button
                id="filter-essay-all"
                onClick={() => setSelectedUnitFilter('all')}
                className={`px-3 py-1 text-xs font-black transition-all whitespace-nowrap shrink-0 border-2 cursor-pointer ${
                  selectedUnitFilter === 'all'
                    ? 'bg-[#304FFE] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
                    : 'bg-[#F4EFE3] hover:bg-white text-[#171717] border-[#171717]'
                }`}
              >
                جميع الوحدات ({currentEssaysList.length})
              </button>
              {Array.from(new Set(currentEssaysList.map(e => e.unitId))).sort((a, b) => a - b).map(unitNum => {
                const count = currentEssaysList.filter((e: EssayItem) => e.unitId === unitNum).length;
                return (
                  <button
                    key={unitNum}
                    id={`filter-essay-u${unitNum}`}
                    onClick={() => {
                      setSelectedUnitFilter(unitNum);
                      const firstInUnit = currentEssaysList.find((e: EssayItem) => e.unitId === unitNum);
                      if (firstInUnit) {
                        setSelectedEssayId(firstInUnit.id);
                      }
                    }}
                    className={`px-3 py-1 text-xs font-black transition-all flex items-center gap-1 whitespace-nowrap shrink-0 border-2 cursor-pointer ${
                      selectedUnitFilter === unitNum
                        ? 'bg-[#304FFE] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
                        : 'bg-[#F4EFE3] hover:bg-white text-[#171717] border-[#171717]'
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
          <div className="pt-2 border-t border-white/10">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full">
              {filteredEssays.map((essay) => {
                const isSelected = currentEssay.id === essay.id;
                return (
                  <button
                    key={essay.id}
                    id={`essay-tab-${essay.id}`}
                    onClick={() => setSelectedEssayId(essay.id)}
                    className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-white text-emerald-950 shadow-xl scale-102 ring-2 ring-emerald-300 font-black'
                        : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-black ${
                      isSelected ? 'bg-emerald-100 text-emerald-800' : 'bg-white/20 text-emerald-200'
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
      <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Essay Info Bar & Toolbar */}
        <div className="p-6 sm:p-7 border-b border-slate-100 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                  الوحدة {currentEssay.unitId}
                </span>
                <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-lg border border-slate-200">
                  {currentEssay.ministerialWeight}
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-teal-50 text-teal-800 border border-teal-200">
                  {totalEnglishWords} كلمة (مطابق للوزاري)
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {currentEssay.titleAr}
              </h2>

              <p dir="ltr" className="text-sm sm:text-base font-mono text-emerald-700 font-extrabold text-left mt-1">
                {currentEssay.titleEn}
              </p>
            </div>

            {/* Quick Actions & Speech Control */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Full Speech Audio Play */}
              <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200">
                <button
                  id="speak-full-essay-btn"
                  onClick={() => {
                    const fullEnglish = `${currentEssay.titleEn}. ${currentEssay.paragraphsEn.join('. ')}`;
                    speakText(fullEnglish, null);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isSpeaking && speakingParagraphIndex === null
                      ? 'bg-rose-600 text-white shadow-xs animate-pulse'
                      : 'bg-white text-slate-700 hover:text-emerald-700 shadow-xs'
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
                      <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>استماع للإنشاء كاملاً</span>
                    </>
                  )}
                </button>

                {/* Speed selector */}
                <select
                  value={speechRate}
                  onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                  className="bg-transparent text-[11px] font-bold text-slate-600 px-1 py-1 rounded focus:outline-hidden cursor-pointer"
                  title="سرعة النطق"
                >
                  <option value="0.75">0.75x بطيء</option>
                  <option value="0.9">0.9x معتدل</option>
                  <option value="1.0">1.0x عادي</option>
                  <option value="1.2">1.2x سريع</option>
                </select>
              </div>

              {/* Copy Menu */}
              <div className="relative inline-flex items-center gap-1">
                <button
                  onClick={() => handleCopy('english')}
                  className="px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold transition-all flex items-center gap-1.5"
                  title="نسخ الإنشاء الإنجليزي للحافظة"
                >
                  {copyFeedback === 'english' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>نسخ الإنجليزي</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleCopy('bilingual')}
                  className="px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold transition-all hidden sm:flex items-center gap-1"
                  title="نسخ مع الترجمة العربية"
                >
                  {copyFeedback === 'bilingual' ? (
                    <span className="text-emerald-700">تم النسخ!</span>
                  ) : (
                    <span>+ الترجمة</span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ================= SIX INTERACTIVE STUDY MODES NAVIGATION ================= */}
          <div className="pt-2 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar w-full border-t border-slate-100">
            <button
              id="mode-dual-btn"
              onClick={() => setActiveMode('dual')}
              className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeMode === 'dual'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span>الوضع النموذجي والمتوازي</span>
            </button>

            <button
              id="mode-memory-btn"
              onClick={() => setActiveMode('memory')}
              className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeMode === 'memory'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
              }`}
            >
              <Brain className="w-3.5 h-3.5 shrink-0" />
              <span>مختبر الحفظ والتعتيم الذكي</span>
            </button>

            <button
              id="mode-simulator-btn"
              onClick={() => setActiveMode('simulator')}
              className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeMode === 'simulator'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
              }`}
            >
              <PenTool className="w-3.5 h-3.5 shrink-0" />
              <span>محاكي الدفتر الوزاري والتسميع</span>
            </button>

            <button
              id="mode-cloze-btn"
              onClick={() => setActiveMode('cloze')}
              className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeMode === 'cloze'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>اختبار الفراغات (Cloze)</span>
            </button>

            <button
              id="mode-cards-btn"
              onClick={() => setActiveMode('cards')}
              className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeMode === 'cards'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>بطاقات المفردات (Flashcards)</span>
            </button>

            <button
              id="mode-rubric-btn"
              onClick={() => setActiveMode('rubric')}
              className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeMode === 'rubric'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
              }`}
            >
              <ListChecks className="w-3.5 h-3.5 shrink-0" />
              <span>دليل الـ 20 درجة الوزارية</span>
            </button>
          </div>
        </div>

        {/* Content Body based on Active Mode */}
        <div className="p-6 sm:p-8">

          {/* ================= 1. MODE: DUAL PARALLEL READING ================= */}
          {activeMode === 'dual' && (
            <div className="space-y-6">
              
              {/* Dual Mode Sub-Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setShowTranslation(!showTranslation)}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                      showTranslation
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    {showTranslation ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    <span>{showTranslation ? 'الترجمة مفعلة' : 'إخفاء الترجمة (تحدي)'}</span>
                  </button>

                  <button
                    onClick={() => setHighlightConnectors(!highlightConnectors)}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                      highlightConnectors
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    <Wand2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>{highlightConnectors ? 'مظلل أدوات الربط نشط' : 'إلغاء تظليل الروابط'}</span>
                  </button>
                </div>

                {/* Font Sizer */}
                <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setFontSize('sm')}
                    className={`px-2 py-1 rounded text-xs font-bold ${fontSize === 'sm' ? 'bg-slate-200 text-slate-900' : 'text-slate-500'}`}
                  >
                    A-
                  </button>
                  <button
                    onClick={() => setFontSize('base')}
                    className={`px-2 py-1 rounded text-xs font-bold ${fontSize === 'base' ? 'bg-slate-200 text-slate-900' : 'text-slate-500'}`}
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize('lg')}
                    className={`px-2 py-1 rounded text-xs font-bold ${fontSize === 'lg' ? 'bg-slate-200 text-slate-900' : 'text-slate-500'}`}
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Key Vocabulary Bar */}
              <div className="space-y-2">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                  <span>المفردات الوزارية المفتاحية للإنشاء (Key Vocabulary)</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentEssay.keywords.map((kw, i) => (
                    <div 
                      key={i}
                      onClick={() => speakText(kw.word)}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs hover:border-emerald-400 hover:bg-emerald-50/40 transition-all cursor-pointer group"
                      title="انقر للاستماع لنطق الكلمة"
                    >
                      <Volume2 className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                      <span dir="ltr" className="font-mono font-bold text-emerald-800 text-left bidi-en">{kw.word}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-600">{kw.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dual Paragraphs */}
              <div className="space-y-5">
                {currentEssay.paragraphsEn.map((paraEn, idx) => {
                  const paraAr = currentEssay.paragraphsAr[idx];
                  const isThisParaSpeaking = isSpeaking && speakingParagraphIndex === idx;

                  const fontSizeClass = 
                    fontSize === 'sm' ? 'text-xs sm:text-sm' :
                    fontSize === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base';

                  return (
                    <div 
                      key={idx}
                      className={`p-6 rounded-3xl border transition-all space-y-4 relative ${
                        isThisParaSpeaking
                          ? 'bg-emerald-50/80 border-emerald-400 shadow-md ring-2 ring-emerald-300/60'
                          : 'bg-slate-50/70 border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      {/* Paragraph Header */}
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-extrabold">
                            الفقرة {idx + 1}
                          </span>
                          <span className="text-slate-400 text-[11px]">
                            {idx === 0 ? 'المقدمة (Introduction)' : idx === currentEssay.paragraphsEn.length - 1 ? 'الخاتمة (Conclusion)' : 'متن الموضوع (Body)'}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => speakText(paraEn, idx)}
                            className={`p-1.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1 ${
                              isThisParaSpeaking
                                ? 'bg-rose-600 text-white border-rose-600'
                                : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200'
                            }`}
                            title={isThisParaSpeaking ? "إيقاف الصوت" : "استمع لهذه الفقرة"}
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">{isThisParaSpeaking ? "إيقاف" : "استماع"}</span>
                          </button>
                        </div>
                      </div>

                      {/* English Paragraph */}
                      <p dir="ltr" className={`font-sans ${fontSizeClass} text-slate-900 leading-relaxed text-left font-medium tracking-normal en-sentence`}>
                        {renderFormattedParagraph(paraEn)}
                      </p>

                      {/* Arabic Translation */}
                      {showTranslation && (
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 pt-3 font-normal">
                          {paraAr}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Golden Ministerial Tips */}
              <div className="p-6 rounded-3xl bg-amber-50/80 border border-amber-200 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-black text-sm">
                  <Lightbulb className="w-5 h-5 text-amber-600 fill-amber-500 shrink-0" />
                  <span>نصائح الأستاذ مصطفى تركي الذهبية لنيل 20/20 كاملة في هذا الإنشاء</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentEssay.goldenTips.map((tip, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/80 border border-amber-200/70 text-xs sm:text-sm text-amber-950 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
              
              <div className="p-5 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white space-y-3 border border-emerald-800/40">
                <div className="flex items-center gap-2 text-emerald-300 font-black text-sm">
                  <Brain className="w-4 h-4" />
                  <span>مختبر الاسترجاع النشط (Active Recall & Memory Fade)</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                  هذه التقنية هي أسرع طريقة مثبتة علمياً لحفظ الإنشاءات الإنجليزية: تدرج في إخفاء الكلمات، واستخدم <strong>تقنية الحرف الأول</strong> لاختبار قدرتك على تذكر السطور غيباً!
                </p>

                {/* Level Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setMemoryLevel('100')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      memoryLevel === '100' ? 'bg-white text-emerald-950 shadow-md font-black' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    100% (النص كامل)
                  </button>

                  <button
                    onClick={() => setMemoryLevel('75')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      memoryLevel === '75' ? 'bg-white text-emerald-950 shadow-md font-black' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    75% (إخفاء خفيف)
                  </button>

                  <button
                    onClick={() => setMemoryLevel('50')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      memoryLevel === '50' ? 'bg-white text-emerald-950 shadow-md font-black' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    50% (إخفاء نصف الكلمات)
                  </button>

                  <button
                    onClick={() => setMemoryLevel('first-letter')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      memoryLevel === 'first-letter' ? 'bg-amber-400 text-amber-950 shadow-md font-black ring-2 ring-amber-300' : 'bg-white/10 hover:bg-white/20 text-amber-200'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>تقنية الحرف الأول (الأقوى للتسميع)</span>
                  </button>

                  <button
                    onClick={() => setMemoryLevel('blur')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      memoryLevel === 'blur' ? 'bg-white text-emerald-950 shadow-md font-black' : 'bg-white/10 hover:bg-white/20 text-white'
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
                    className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-100 pb-2">
                      <span>الفقرة {idx + 1}</span>
                      <button
                        onClick={() => speakText(paraEn, idx)}
                        className="text-emerald-700 hover:text-emerald-800 flex items-center gap-1 text-[11px]"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>استمع للفقرة</span>
                      </button>
                    </div>

                    <div className="text-sm sm:text-base text-slate-900 dir-ltr text-left">
                      {renderMemoryParagraph(paraEn, memoryLevel)}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ================= 3. MODE: MINISTERIAL EXAM SIMULATOR ================= */}
          {activeMode === 'simulator' && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-3xl bg-slate-900 text-white space-y-2 border border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 font-black text-sm">
                    <PenTool className="w-4 h-4" />
                    <span>محاكي الدفتر الامتحاني الوزاري (Exam Booklet Simulator)</span>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                    السؤال الخامس
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  اكتب الإنشاء غيباً هنا كما لو كنت في القاعة الامتحانية. سيقوم المحاكي باحتساب الكلمات بدقة ومقارنة كتابتك مع النموذج الوزاري للأستاذ مصطفى تركي!
                </p>
              </div>

              {/* Word Count Live Gauge */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-slate-900 font-mono">{studentWordCount}</span>
                    <span className="text-slate-500 font-bold">/ 100-130 كلمة</span>
                  </div>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${studentCountStatus.bg} ${studentCountStatus.color}`}>
                    {studentCountStatus.label}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setStudentWriting('')}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-rose-600 text-xs font-bold transition-all flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>مسح الدفتر</span>
                  </button>

                  <button
                    onClick={() => setShowModelComparison(!showModelComparison)}
                    disabled={!studentWriting.trim()}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      !studentWriting.trim()
                        ? 'opacity-50 cursor-not-allowed bg-slate-200 text-slate-500'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{showModelComparison ? 'إخفاء المقارنة' : 'فحص ومقارنة مع النموذج'}</span>
                  </button>
                </div>
              </div>

              {/* Exam Notepad Paper Styled Container */}
              <div className="relative rounded-3xl border-2 border-slate-300 bg-amber-50/20 overflow-hidden shadow-inner">
                {/* Ministerial booklet header decoration */}
                <div className="bg-slate-100 border-b border-slate-200 p-3 px-5 flex items-center justify-between text-xs text-slate-600 font-mono">
                  <span>جمهورية العراق - وزارة التربية</span>
                  <span className="font-bold text-slate-800 font-sans">Q5: Writing / الإنشاء (20 Marks)</span>
                  <span>الدفتر الامتحاني</span>
                </div>

                {/* Title Line */}
                <div className="p-4 border-b border-slate-200/80 bg-white/50 text-center font-serif">
                  <div className="text-xs text-slate-400 font-bold mb-1">اكتب عنوان الإنشاء في منتصف السطر الأول مع وضع خط تحته</div>
                  <div className="text-base sm:text-lg font-bold text-slate-800 underline decoration-slate-400 underline-offset-4">
                    {currentEssay.titleEn}
                  </div>
                </div>

                {/* Notepad Textarea with Lined Background Effect */}
                <div className="p-5 sm:p-7 relative min-h-[300px]">
                  <textarea
                    id="ministerial-notepad-input"
                    value={studentWriting}
                    onChange={(e) => setStudentWriting(e.target.value)}
                    placeholder="ابدأ بكتابة مسودة الإنشاء باللغة الإنجليزية هنا... (اترك مسافة بادئة للفقرة الأولى)"
                    className="w-full h-80 bg-transparent resize-y border-none focus:outline-hidden font-mono text-sm sm:text-base text-slate-900 leading-8 dir-ltr text-left placeholder:text-slate-400 placeholder:dir-rtl"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e2e8f0 31px, #e2e8f0 32px)',
                      lineHeight: '32px'
                    }}
                  />
                </div>
              </div>

              {/* Comparison & Diagnostics Section */}
              {showModelComparison && (
                <div className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-md space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>تقرير المطابقة مع النموذج الوزاري:</span>
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 font-bold">نسبة تطابق المفردات:</span>
                      <span className="text-sm font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-mono">
                        {overlapScore}%
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="font-bold text-slate-700">كتابتك الحالية:</div>
                      <p className="dir-ltr text-left font-mono text-slate-800 whitespace-pre-wrap leading-relaxed">
                        {studentWriting || '(لم يتم إدخال نص)'}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-2">
                      <div className="font-bold text-emerald-900">النموذج الوزاري المعتمد:</div>
                      <div className="dir-ltr text-left font-mono text-slate-800 space-y-2 leading-relaxed">
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
              
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-emerald-900">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>اختبار التثبيت السريع:</strong> اختر الكلمة المفقودة الصحيحة لترسيخ حفظ الجمل المفتاحية للإنشاء!</span>
                </div>
                {Object.keys(clozeAnswers).length > 0 && (
                  <button
                    onClick={() => setClozeAnswers({})}
                    className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors flex items-center gap-1"
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
                      className={`p-5 rounded-2xl border transition-all space-y-3.5 ${
                        isAnswered
                          ? isCorrect 
                            ? 'bg-emerald-50/50 border-emerald-300' 
                            : 'bg-rose-50/50 border-rose-300'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400">سؤال {idx + 1}</span>
                        {isAnswered && (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                            isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}>
                            {isCorrect ? 'إجابة صحيحة! أحسنت' : `الكلمة الصحيحة: ${cloze.missingWord}`}
                          </span>
                        )}
                      </div>

                      <p dir="ltr" className="font-mono text-sm sm:text-base font-bold text-slate-900 text-left en-sentence">
                        {cloze.textWithBlanks}
                      </p>

                      <div dir="ltr" className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {cloze.options.map((opt) => {
                          const isThisSelected = userChoice === opt;
                          const isThisCorrect = opt === cloze.missingWord;

                          let style = "bg-white border-slate-200 text-slate-700 hover:border-emerald-400 hover:bg-emerald-50/30";
                          if (isAnswered) {
                            if (isThisCorrect) {
                              style = "bg-emerald-600 text-white font-bold border-emerald-600 shadow-xs";
                            } else if (isThisSelected) {
                              style = "bg-rose-600 text-white font-bold border-rose-600";
                            } else {
                              style = "bg-white/60 opacity-50";
                            }
                          }

                          return (
                            <button
                              key={opt}
                              disabled={isAnswered}
                              onClick={() => {
                                if (clozeAnswers[idx]) return;
                                setClozeAnswers(prev => ({ ...prev, [idx]: opt }));
                                if (opt === cloze.missingWord) {
                                  triggerCelebration();
                                }
                              }}
                              className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${style}`}
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
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                <span>انقر على أي بطاقة لقلبها واكتشاف المعنى أو اللفظ</span>
                <span>إجمالي الكلمات: {currentEssay.keywords.length}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentEssay.keywords.map((kw, i) => {
                  const isFlipped = !!flippedCards[i];

                  return (
                    <div
                      key={i}
                      onClick={() => setFlippedCards(prev => ({ ...prev, [i]: !prev[i] }))}
                      className={`h-40 rounded-3xl p-6 border transition-all cursor-pointer select-none flex flex-col justify-between shadow-xs hover:shadow-md ${
                        isFlipped 
                          ? 'bg-emerald-950 text-white border-emerald-800' 
                          : 'bg-slate-50 hover:bg-emerald-50/40 text-slate-900 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isFlipped ? 'bg-emerald-800 text-emerald-200' : 'bg-white border border-slate-200 text-slate-600'
                        }`}>
                          {isFlipped ? 'الترجمة العربية' : 'English Term'}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakText(kw.word);
                          }}
                          className={`p-1.5 rounded-full transition-colors ${
                            isFlipped ? 'hover:bg-emerald-800 text-emerald-300' : 'hover:bg-white text-slate-500'
                          }`}
                          title="استمع للفظ"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-center py-2">
                        {isFlipped ? (
                          <div className="text-lg sm:text-xl font-black text-emerald-200 font-sans">
                            {kw.meaning}
                          </div>
                        ) : (
                          <div dir="ltr" className="text-lg sm:text-xl font-bold font-mono text-emerald-800 text-center bidi-en">
                            {kw.word}
                          </div>
                        )}
                      </div>

                      <div className="text-center text-[11px] text-slate-400 font-medium">
                        {isFlipped ? 'انقر للعودة للإنجليزية' : 'انقر لقلب البطاقة ومعرفة المعنى'}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= 6. MODE: MINISTERIAL 20/20 RUBRIC ================= */}
          {activeMode === 'rubric' && (
            <div className="space-y-6">
              
              <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-3 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-black text-base">
                  <Award className="w-5 h-5" />
                  <span>ميزان التصحيح الوزاري المعتمد (20 درجة كاملة)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  كيف يمنحك المصحح الوزاري 20/20 كاملة في السؤال الخامس؟ إليك التوزيع الرسمي للدرجات وقائمة المراجعة الذاتية لتتأكد من مطابقة دفترك قبل تسليم الامتحان:
                </p>
              </div>

              {/* Rubric Points Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-amber-900">العنوان والتنظيم</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-amber-200 text-amber-950 font-mono">2 درجات</span>
                  </div>
                  <p className="text-xs text-amber-900/80 leading-relaxed">
                    كتابة العنوان في منتصف السطر الأول، ترك فراغ كلمة في بداية كل فقرة (Indentation).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-emerald-900">المضمون والأفكار</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-emerald-200 text-emerald-950 font-mono">8 درجات</span>
                  </div>
                  <p className="text-xs text-emerald-900/80 leading-relaxed">
                    ترابط الأفكار وتغطية الموضوع بالكامل، وتحقيق عدد الكلمات المطلوب (100 إلى 130 كلمة).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-teal-50/80 border border-teal-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-teal-900">القواعد والتراكيب</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-teal-200 text-teal-950 font-mono">5 درجات</span>
                  </div>
                  <p className="text-xs text-teal-900/80 leading-relaxed">
                    صحة الأزمنة النحوية، تماسك الجمل واستخدام أدوات الربط (Furthermore, In conclusion).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50/80 border border-indigo-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-indigo-900">الإملاء والترقيم</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-indigo-200 text-indigo-950 font-mono">5 درجات</span>
                  </div>
                  <p className="text-xs text-indigo-900/80 leading-relaxed">
                    خلو الكلمات من الأخطاء الإملائية، الحروف الكبيرة (Capitalization) والنقاط والفواصل.
                  </p>
                </div>
              </div>

              {/* Interactive Self-Checklist */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                  <ListChecks className="w-4 h-4 text-emerald-600" />
                  <span>قائمة التدقيق الذاتي قبل تسليم الدفتر الامتحاني:</span>
                </h4>

                <div className="space-y-2.5">
                  {[
                    { id: 'title', label: 'كتبت العنوان في منتصف السطر الأول بخط واضح مع وضع خط تحته.' },
                    { id: 'paragraphs', label: 'قسمت الإنشاء إلى 3 فقرات واضحة (مقدمة، متن الموضوع، وخاتمة).' },
                    { id: 'connectors', label: 'استخدمت أدوات الربط المنطقية (First of all, Furthermore, Consequently, In conclusion).' },
                    { id: 'wordcount', label: 'تأكدت أن حجم الإنشاء يتراوح بين 100 إلى 130 كلمة دون إطالة مفرطة.' },
                    { id: 'tenses', label: 'راجعت الأزمنة النحوية (الماضي للسرد، والمضارع للحقائق والنصائح).' },
                    { id: 'punctuation', label: 'بدأت كل جملة بحرف كبير (Capital Letter) وانتهيت بنقطة (.) وفواصل واضحة.' },
                  ].map((item) => {
                    const isChecked = !!checkedRubricItems[item.id];
                    return (
                      <label 
                        key={item.id}
                        className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all cursor-pointer select-none"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setCheckedRubricItems(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 cursor-pointer"
                        />
                        <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'text-slate-900 line-through text-slate-400' : 'text-slate-700'}`}>
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
