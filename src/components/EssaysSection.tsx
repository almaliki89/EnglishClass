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
                className="font-bold text-[#202124] bg-[#F3E6A5] px-1.5 py-0.5 rounded-[4px] border-b-2 border-[#202124] select-all"
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
                className="inline-block px-1 py-0.5 rounded-[4px] filter blur-sm hover:blur-none active:blur-none bg-[#D7E9DA] text-[#202124] border border-[#202124]/25 transition-all cursor-pointer select-none"
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
                className="inline-block group relative cursor-pointer mx-0.5 hover:text-[#405DE6] transition-colors"
                title={`الكلمة: ${chunk}`}
              >
                <strong className="text-[#405DE6] font-extrabold">{firstChar}</strong>
                <span className="text-[#747474] font-semibold">{blanks}</span>
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
              className="inline-block group cursor-pointer text-[#202124] bg-[#E9ECFA] border-b-2 border-dashed border-[#405DE6] px-1 py-0.5 rounded-[4px] font-mono mx-0.5"
              title={`انقر للتأكد: ${chunk}`}
            >
              <span className="group-hover:hidden select-none tracking-widest text-[#405DE6]">
                {'•'.repeat(Math.min(6, word.length))}
              </span>
              <span className="hidden group-hover:inline font-bold text-[#202124]">
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
    if (count === 0) return { label: 'ابدأ بالكتابة', color: 'text-[#747474]', bg: 'bg-[#F7F5EF] border border-[#202124]/25', progress: 0 };
    if (count < 90) return { label: 'قصير جداً (أقل من الحد الأدنى 100)', color: 'text-[#202124]', bg: 'bg-[#F3E6A5] border border-[#202124]', progress: Math.min(100, (count / 100) * 80) };
    if (count >= 100 && count <= 135) return { label: 'مثالي وزارياً (100-130 كلمة) ✔', color: 'text-[#287A52] font-black', bg: 'bg-[#D7E9DA] border border-[#202124]', progress: 100 };
    return { label: 'طويل نسبياً (تجنب الإطالة الزائدة)', color: 'text-[#405DE6]', bg: 'bg-[#E9ECFA] border border-[#202124]', progress: 100 };
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
      <div className="p-6 sm:p-8 bg-white border-3 border-[#202124] shadow-[6px_6px_0px_#202124] text-[#202124] space-y-5 relative overflow-hidden">
        
        {/* Scoped Grade Identity Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-[#F7F5EF] border-2 border-[#202124] relative z-10 rounded-xs">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold text-[#405DE6]">الصف الدراسي الحالي:</span>
            <span className="px-2.5 py-0.5 bg-[#405DE6] text-white border border-[#202124] text-xs font-bold rounded-xs">
              {gradeMeta.nameAr}
            </span>
            {gradeMeta.isMinisterial && (
              <span className="px-2 py-0.5 bg-[#F3E6A5] text-[#202124] border border-[#202124] text-xs font-bold rounded-xs">
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
              className="text-xs font-bold text-[#202124] hover:text-[#405DE6] underline"
            >
              العودة لاختيار صف آخر ↩
            </a>
          )}
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-mono font-bold rounded-xs">
              <Award className="w-4 h-4 text-[#405DE6]" />
              <span>السؤال الخامس: الإنشاء والتعبير (20 درجة)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 bg-[#F7F5EF] hover:bg-white text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer rounded-xs"
                title="طباعة الإنشاء ورقياً بتنسيق وزاري"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">طباعة / PDF</span>
              </button>
            </div>
          </div>

          <div>
            <h1 className="font-display text-2xl sm:text-4xl font-black tracking-tight text-[#202124] flex items-center gap-3">
              <span>{gradeMeta.isMinisterial ? `الإنشاءات الوزارية النموذجية • ${gradeMeta.nameAr}` : `الإنشاءات والتعبير المنهجي • ${gradeMeta.nameAr}`}</span>
              <Sparkles className="w-6 h-6 text-[#405DE6] inline shrink-0" />
            </h1>
            <p className="text-xs sm:text-sm text-[#202124]/80 max-w-3xl leading-relaxed mt-2 font-medium">
              {gradeMeta.stage === 'intermediate'
                ? `نماذج إنشائية معتمدة لمنهج (${gradeMeta.nameAr}): لغة سليمة، تراكيب مناسبة (50-70 كلمة)، مع مختبر الحفظ ومحاكي التسميع.`
                : `إعداد نموذجي مطابق تماماً لمنهج الأستاذ مصطفى تركي: لغة رصينة، تقسيم أكاديمي (مقدمة، متن، خاتمة)، عدّاد الكلمات الوزاري (100-130 كلمة)، مع مختبر الحفظ التفاعلي ومحاكي الدفتر الامتحاني.`}
            </p>
          </div>

          {/* Unit Filter Chips */}
          <div className="space-y-2 pt-2 border-t-2 border-[#202124]">
            <div className="flex items-center gap-2 text-xs font-mono font-black text-[#B83A3A]">
              <Filter className="w-3.5 h-3.5 shrink-0" />
              <span>فرز حسب الوحدة الدراسية:</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar w-full">
              <button
                type="button"
                id="filter-essay-all"
                onClick={() => setSelectedUnitFilter('all')}
                className={`px-3 py-1.5 rounded-[4px] text-xs font-black transition-all whitespace-nowrap shrink-0 border-2 border-[#202124] cursor-pointer tabular-nums ${
                  selectedUnitFilter === 'all'
                    ? 'bg-[#405DE6] text-white shadow-[2px_2px_0px_#202124]'
                    : 'bg-[#F7F5EF] hover:bg-white text-[#202124]'
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
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-black transition-all flex items-center gap-1 whitespace-nowrap shrink-0 border-2 border-[#202124] cursor-pointer tabular-nums ${
                      selectedUnitFilter === unitNum
                        ? 'bg-[#405DE6] text-white shadow-[2px_2px_0px_#202124]'
                        : 'bg-[#F7F5EF] hover:bg-white text-[#202124]'
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
          <div className="pt-3 border-t-2 border-[#202124]">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full">
              {filteredEssays.map((essay) => {
                const isSelected = currentEssay.id === essay.id;
                return (
                  <button
                    type="button"
                    key={essay.id}
                    id={`essay-tab-${essay.id}`}
                    onClick={() => setSelectedEssayId(essay.id)}
                    className={`px-3.5 py-2 rounded-[4px] text-xs font-black transition-all flex items-center gap-2 whitespace-nowrap shrink-0 border-2 border-[#202124] cursor-pointer ${
                      isSelected
                        ? 'bg-[#405DE6] text-white shadow-[3px_3px_0px_#202124]'
                        : 'bg-[#F7F5EF] text-[#202124] hover:bg-white'
                    }`}
                  >
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-[4px] border border-[#202124] font-mono font-black tabular-nums ${
                      isSelected ? 'bg-[#F3E6A5] text-[#202124]' : 'bg-white text-[#202124]'
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
      <div className="rounded-[6px] bg-white border-3 border-[#202124] shadow-[5px_5px_0px_#202124] overflow-hidden">
        
        {/* Essay Info Bar & Toolbar */}
        <div className="p-5 sm:p-7 border-b-2 border-[#202124] space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-[4px] bg-[#D7E9DA] text-[#202124] border border-[#202124] tabular-nums">
                  الوحدة {currentEssay.unitId}
                </span>
                <span className="text-xs font-bold text-[#747474] bg-[#F7F5EF] px-2.5 py-0.5 rounded-[4px] border border-[#202124]">
                  {currentEssay.ministerialWeight}
                </span>
                <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-[4px] bg-[#F3E6A5] text-[#202124] border border-[#202124] tabular-nums">
                  {totalEnglishWords} كلمة (مطابق للوزاري)
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-black text-[#202124] tracking-tight">
                {currentEssay.titleAr}
              </h2>

              <p dir="ltr" className="text-sm sm:text-base font-mono text-[#405DE6] font-black text-left mt-1">
                {currentEssay.titleEn}
              </p>
            </div>

            {/* Quick Actions & Speech Control */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1 p-1 rounded-[4px] bg-[#F7F5EF] border-2 border-[#202124]">
                <button
                  type="button"
                  id="speak-full-essay-btn"
                  onClick={() => {
                    const fullEnglish = `${currentEssay.titleEn}. ${currentEssay.paragraphsEn.join('. ')}`;
                    speakText(fullEnglish, null);
                  }}
                  className={`px-3 py-1.5 rounded-[4px] border border-[#202124] text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSpeaking && speakingParagraphIndex === null
                      ? 'bg-[#B83A3A] text-white'
                      : 'bg-white text-[#202124] hover:bg-[#F3E6A5]'
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
                      <Volume2 className="w-3.5 h-3.5 text-[#405DE6]" />
                      <span>استماع للإنشاء كاملاً</span>
                    </>
                  )}
                </button>

                <select
                  value={speechRate}
                  onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                  aria-label="سرعة النطق"
                  className="bg-transparent text-[11px] font-black text-[#202124] px-1.5 py-1 rounded focus:outline-none cursor-pointer"
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
                  className="px-3 py-2 rounded-[4px] bg-white hover:bg-[#F7F5EF] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer"
                  title="نسخ الإنشاء الإنجليزي للحافظة"
                >
                  {copyFeedback === 'english' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#287A52]" />
                      <span className="text-[#287A52]">تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#405DE6]" />
                      <span>نسخ الإنجليزي</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleCopy('bilingual')}
                  className="px-3 py-2 rounded-[4px] bg-white hover:bg-[#F7F5EF] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-black transition-all hidden sm:flex items-center gap-1 cursor-pointer"
                  title="نسخ مع الترجمة العربية"
                >
                  {copyFeedback === 'bilingual' ? (
                    <span className="text-[#287A52]">تم النسخ!</span>
                  ) : (
                    <span>+ الترجمة</span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ================= SIX INTERACTIVE STUDY MODES NAVIGATION ================= */}
          <div className="pt-3 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full border-t-2 border-[#202124]">
            {[
              { id: 'mode-dual-btn', mode: 'dual' as const, label: 'الوضع النموذجي والمتوازي', Icon: BookOpen },
              { id: 'mode-memory-btn', mode: 'memory' as const, label: 'مختبر الحفظ والتعتيم الذكي', Icon: Brain },
              { id: 'mode-simulator-btn', mode: 'simulator' as const, label: 'محاكي الدفتر الوزاري والتسميع', Icon: PenTool },
              { id: 'mode-cloze-btn', mode: 'cloze' as const, label: 'اختبار الفراغات (Cloze)', Icon: Sparkles },
              { id: 'mode-cards-btn', mode: 'cards' as const, label: 'بطاقات المفردات (Flashcards)', Icon: Layers },
              { id: 'mode-rubric-btn', mode: 'rubric' as const, label: 'دليل الـ 20 درجة الوزارية', Icon: ListChecks },
            ].map(({ id, mode, label, Icon }) => {
              const isActive = activeMode === mode;
              return (
                <button
                  type="button"
                  key={id}
                  id={id}
                  onClick={() => setActiveMode(mode)}
                  className={`px-3 sm:px-3.5 py-2 rounded-[4px] border-2 border-[#202124] text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#405DE6] text-white shadow-[2px_2px_0px_#202124]'
                      : 'bg-[#F7F5EF] hover:bg-white text-[#202124]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#F3E6A5]' : 'text-[#405DE6]'}`} />
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
              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-[4px] bg-[#F7F5EF] border-2 border-[#202124] text-xs">
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setShowTranslation(!showTranslation)}
                    className={`px-3 py-1.5 rounded-[4px] border-2 border-[#202124] font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                      showTranslation
                        ? 'bg-[#D7E9DA] text-[#202124]'
                        : 'bg-white text-[#202124]'
                    }`}
                  >
                    {showTranslation ? <Eye className="w-3.5 h-3.5 text-[#287A52]" /> : <EyeOff className="w-3.5 h-3.5 text-[#747474]" />}
                    <span>{showTranslation ? 'الترجمة مفعلة' : 'إخفاء الترجمة (تحدي)'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHighlightConnectors(!highlightConnectors)}
                    className={`px-3 py-1.5 rounded-[4px] border-2 border-[#202124] font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                      highlightConnectors
                        ? 'bg-[#F3E6A5] text-[#202124]'
                        : 'bg-white text-[#202124]'
                    }`}
                  >
                    <Wand2 className="w-3.5 h-3.5 text-[#405DE6]" />
                    <span>{highlightConnectors ? 'مظلل أدوات الربط نشط' : 'إلغاء تظليل الروابط'}</span>
                  </button>
                </div>

                {/* Font Sizer */}
                <div className="flex items-center gap-1 bg-white p-1 rounded-[4px] border-2 border-[#202124]">
                  {(['sm', 'base', 'lg'] as const).map((sz, i) => (
                    <button
                      type="button"
                      key={sz}
                      onClick={() => setFontSize(sz)}
                      className={`px-2 py-1 rounded-[4px] text-xs font-mono font-black cursor-pointer ${
                        fontSize === sz ? 'bg-[#405DE6] text-white' : 'text-[#202124] hover:bg-[#F7F5EF]'
                      }`}
                    >
                      {i === 0 ? 'A-' : i === 1 ? 'A' : 'A+'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Vocabulary Bar */}
              <div className="space-y-2">
                <h3 className="text-xs font-black text-[#747474] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#405DE6]" />
                  <span>المفردات الوزارية المفتاحية للإنشاء (Key Vocabulary)</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentEssay.keywords.map((kw, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => speakText(kw.word)}
                      className="px-3 py-1.5 rounded-[4px] bg-[#F7F5EF] border-2 border-[#202124] flex items-center gap-2 text-xs hover:bg-[#F3E6A5] transition-all cursor-pointer group"
                      title="انقر للاستماع لنطق الكلمة"
                    >
                      <Volume2 className="w-3 h-3 text-[#405DE6]" />
                      <span dir="ltr" className="font-mono font-black text-[#202124] text-left bidi-en">{kw.word}</span>
                      <span className="text-[#747474]">•</span>
                      <span className="text-[#202124] font-bold">{kw.meaning}</span>
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
                      className={`p-5 sm:p-6 rounded-[6px] border-2 border-[#202124] transition-all space-y-4 relative ${
                        isThisParaSpeaking
                          ? 'bg-[#D7E9DA]/45 shadow-[4px_4px_0px_#202124]'
                          : 'bg-[#F7F5EF]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-black text-[#747474]">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-[4px] bg-white border border-[#202124] text-[#202124] font-black tabular-nums">
                            الفقرة {idx + 1}
                          </span>
                          <span className="text-[#747474] text-[11px] font-bold">
                            {idx === 0 ? 'المقدمة (Introduction)' : idx === currentEssay.paragraphsEn.length - 1 ? 'الخاتمة (Conclusion)' : 'متن الموضوع (Body)'}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => speakText(paraEn, idx)}
                          className={`p-1.5 px-2.5 rounded-[4px] border-2 border-[#202124] text-xs font-black transition-all flex items-center gap-1 cursor-pointer ${
                            isThisParaSpeaking
                              ? 'bg-[#B83A3A] text-white'
                              : 'bg-white hover:bg-[#F3E6A5] text-[#202124]'
                          }`}
                          title={isThisParaSpeaking ? "إيقاف الصوت" : "استمع لهذه الفقرة"}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">{isThisParaSpeaking ? "إيقاف" : "استماع"}</span>
                        </button>
                      </div>

                      <p dir="ltr" className={`font-sans ${fontSizeClass} text-[#202124] leading-relaxed text-left font-medium tracking-normal en-sentence`}>
                        {renderFormattedParagraph(paraEn)}
                      </p>

                      {showTranslation && (
                        <p className="text-xs sm:text-sm text-[#747474] leading-relaxed border-t border-[#202124]/15 pt-3 font-bold">
                          {paraAr}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Golden Ministerial Tips */}
              <div className="p-6 rounded-[6px] bg-[#F3E6A5]/35 border-2 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-3">
                <div className="flex items-center gap-2 text-[#202124] font-black text-sm">
                  <Lightbulb className="w-5 h-5 text-[#405DE6] fill-[#F3E6A5] shrink-0" />
                  <span>نصائح الأستاذ مصطفى تركي الذهبية لنيل 20/20 كاملة في هذا الإنشاء</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentEssay.goldenTips.map((tip, idx) => (
                    <div key={idx} className="p-3 rounded-[4px] bg-white border-2 border-[#202124] text-xs sm:text-sm text-[#202124] font-bold flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#287A52] shrink-0 mt-0.5" />
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
              
              <div className="p-5 rounded-[6px] bg-[#F7F5EF] text-[#202124] space-y-3 border-2 border-[#202124] shadow-[4px_4px_0px_#202124]">
                <div className="flex items-center gap-2 text-[#405DE6] font-black text-sm">
                  <Brain className="w-4 h-4" />
                  <span>مختبر الاسترجاع النشط (Active Recall & Memory Fade)</span>
                </div>
                <p className="text-xs sm:text-sm text-[#202124] font-medium leading-relaxed">
                  هذه التقنية هي أسرع طريقة مثبتة علمياً لحفظ الإنشاءات الإنجليزية: تدرج في إخفاء الكلمات، واستخدم <strong>تقنية الحرف الأول</strong> لاختبار قدرتك على تذكر السطور غيباً!
                </p>

                {/* Level Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setMemoryLevel('100')}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-extrabold border-2 border-[#202124] transition-all cursor-pointer ${
                      memoryLevel === '100' ? 'bg-[#405DE6] text-white shadow-[2px_2px_0px_#202124]' : 'bg-white hover:bg-[#F3E6A5] text-[#202124]'
                    }`}
                  >
                    100% (النص كامل)
                  </button>

                  <button
                    type="button"
                    onClick={() => setMemoryLevel('75')}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-extrabold border-2 border-[#202124] transition-all cursor-pointer ${
                      memoryLevel === '75' ? 'bg-[#405DE6] text-white shadow-[2px_2px_0px_#202124]' : 'bg-white hover:bg-[#F3E6A5] text-[#202124]'
                    }`}
                  >
                    75% (إخفاء خفيف)
                  </button>

                  <button
                    type="button"
                    onClick={() => setMemoryLevel('50')}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-extrabold border-2 border-[#202124] transition-all cursor-pointer ${
                      memoryLevel === '50' ? 'bg-[#405DE6] text-white shadow-[2px_2px_0px_#202124]' : 'bg-white hover:bg-[#F3E6A5] text-[#202124]'
                    }`}
                  >
                    50% (إخفاء نصف الكلمات)
                  </button>

                  <button
                    type="button"
                    onClick={() => setMemoryLevel('first-letter')}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-extrabold border-2 border-[#202124] transition-all flex items-center gap-1.5 cursor-pointer ${
                      memoryLevel === 'first-letter' ? 'bg-[#F3E6A5] text-[#202124] shadow-[2px_2px_0px_#202124]' : 'bg-white hover:bg-[#F3E6A5] text-[#202124]'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#405DE6]" />
                    <span>تقنية الحرف الأول (الأقوى للتسميع)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMemoryLevel('blur')}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-extrabold border-2 border-[#202124] transition-all cursor-pointer ${
                      memoryLevel === 'blur' ? 'bg-[#405DE6] text-white shadow-[2px_2px_0px_#202124]' : 'bg-white hover:bg-[#F3E6A5] text-[#202124]'
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
                    className="p-6 rounded-[6px] bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-[#747474] border-b-2 border-[#202124]/15 pb-2">
                      <span className="tabular-nums">الفقرة {idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => speakText(paraEn, idx)}
                        className="text-[#405DE6] hover:underline flex items-center gap-1 text-[11px] font-bold cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>استمع للفقرة</span>
                      </button>
                    </div>

                    <div dir="ltr" className="text-sm sm:text-base text-[#202124] text-left en-sentence">
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
              
              <div className="p-5 rounded-[6px] bg-[#E9ECFA] text-[#202124] space-y-2 border-2 border-[#202124] shadow-[4px_4px_0px_#202124]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[#405DE6] font-black text-sm">
                    <PenTool className="w-4 h-4" />
                    <span>محاكي الدفتر الامتحاني الوزاري (Exam Booklet Simulator)</span>
                  </div>
                  <span className="text-xs bg-[#F3E6A5] text-[#202124] px-2.5 py-0.5 rounded-[4px] border-2 border-[#202124] font-black">
                    السؤال الخامس
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#202124] font-medium leading-relaxed">
                  اكتب الإنشاء غيباً هنا كما لو كنت في القاعة الامتحانية. سيقوم المحاكي باحتساب الكلمات بدقة ومقارنة كتابتك مع النموذج الوزاري للأستاذ مصطفى تركي!
                </p>
              </div>

              {/* Word Count Live Gauge */}
              <div className="p-4 rounded-[6px] bg-[#F7F5EF] border-2 border-[#202124] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-[#202124] font-mono tabular-nums">{studentWordCount}</span>
                    <span className="text-[#747474] font-bold">/ 100-130 كلمة</span>
                  </div>
                  <span className={`px-2.5 py-1 rounded-[4px] text-xs font-bold ${studentCountStatus.bg} ${studentCountStatus.color}`}>
                    {studentCountStatus.label}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setStudentWriting('')}
                    className="px-3 py-1.5 rounded-[4px] bg-white border-2 border-[#202124] text-[#202124] hover:bg-[#FDF6F4] hover:text-[#B83A3A] text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>مسح الدفتر</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowModelComparison(!showModelComparison)}
                    disabled={!studentWriting.trim()}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-extrabold border-2 border-[#202124] transition-all flex items-center gap-1.5 ${
                      !studentWriting.trim()
                        ? 'opacity-50 cursor-not-allowed bg-[#EAE8E1] text-[#747474]'
                        : 'bg-[#405DE6] hover:bg-[#334DC6] text-white shadow-[2px_2px_0px_#202124] cursor-pointer'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{showModelComparison ? 'إخفاء المقارنة' : 'فحص ومقارنة مع النموذج'}</span>
                  </button>
                </div>
              </div>

              {/* Exam Notepad Paper Styled Container */}
              <div className="relative rounded-[6px] border-2 border-[#202124] bg-white overflow-hidden shadow-[4px_4px_0px_#202124]">
                {/* Ministerial booklet header decoration */}
                <div className="bg-[#F7F5EF] border-b-2 border-[#202124] p-3 px-4 sm:px-5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#202124] font-mono">
                  <span className="font-bold">جمهورية العراق - وزارة التربية</span>
                  <span className="font-black text-[#405DE6] font-sans">Q5: Writing / الإنشاء (20 Marks)</span>
                  <span className="font-bold">الدفتر الامتحاني</span>
                </div>

                {/* Title Line */}
                <div className="p-4 border-b-2 border-[#202124]/20 bg-[#F8F7F2] text-center font-serif">
                  <div className="text-xs text-[#747474] font-bold mb-1 font-sans">اكتب عنوان الإنشاء في منتصف السطر الأول مع وضع خط تحته</div>
                  <div dir="ltr" className="text-base sm:text-lg font-bold text-[#202124] underline decoration-[#202124] underline-offset-4 bidi-en">
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
                    className="w-full h-80 bg-transparent resize-y border-none focus:outline-hidden font-mono text-sm sm:text-base text-[#202124] leading-8 text-left placeholder:text-[#747474]"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #EAE8E1 31px, #EAE8E1 32px)',
                      lineHeight: '32px'
                    }}
                  />
                </div>
              </div>

              {/* Comparison & Diagnostics Section */}
              {showModelComparison && (
                <div className="p-6 rounded-[6px] bg-white border-2 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#202124]/15 pb-3">
                    <h4 className="text-sm font-black text-[#202124] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#405DE6]" />
                      <span>تقرير المطابقة مع النموذج الوزاري:</span>
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#747474] font-bold">نسبة تطابق المفردات:</span>
                      <span className="text-sm font-black text-[#287A52] bg-[#D7E9DA] px-2.5 py-0.5 rounded-[4px] border-2 border-[#202124] font-mono tabular-nums">
                        {overlapScore}%
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-[6px] bg-[#F7F5EF] border-2 border-[#202124] space-y-2">
                      <div className="font-bold text-[#202124]">كتابتك الحالية:</div>
                      <p dir="ltr" className="text-left font-mono text-[#202124] whitespace-pre-wrap leading-relaxed en-sentence">
                        {studentWriting || '(لم يتم إدخال نص)'}
                      </p>
                    </div>

                    <div className="p-4 rounded-[6px] bg-[#F4F8F5] border-2 border-[#202124] space-y-2">
                      <div className="font-bold text-[#287A52]">النموذج الوزاري المعتمد:</div>
                      <div dir="ltr" className="text-left font-mono text-[#202124] space-y-2 leading-relaxed en-sentence">
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
              
              <div className="p-4 rounded-[6px] bg-[#D7E9DA] border-2 border-[#202124] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-[#202124]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#287A52] shrink-0" />
                  <span><strong>اختبار التثبيت السريع:</strong> اختر الكلمة المفقودة الصحيحة لترسيخ حفظ الجمل المفتاحية للإنشاء!</span>
                </div>
                {Object.keys(clozeAnswers).length > 0 && (
                  <button
                    type="button"
                    onClick={() => setClozeAnswers({})}
                    className="px-3 py-1 rounded-[4px] bg-[#405DE6] text-white font-bold text-xs border-2 border-[#202124] shadow-[2px_2px_0px_#202124] hover:bg-[#334DC6] transition-colors flex items-center gap-1 cursor-pointer"
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
                      className={`p-5 rounded-[6px] border-2 border-[#202124] shadow-[3px_3px_0px_#202124] transition-all space-y-3.5 ${
                        isAnswered
                          ? isCorrect 
                            ? 'bg-[#F4F8F5]' 
                            : 'bg-[#FDF6F4]'
                          : 'bg-[#F7F5EF]'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-extrabold text-[#747474] tabular-nums">سؤال {idx + 1}</span>
                        {isAnswered && (
                          <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-[4px] border border-[#202124] ${
                            isCorrect ? 'bg-[#D7E9DA] text-[#287A52]' : 'bg-[#FDF6F4] text-[#B83A3A]'
                          }`}>
                            {isCorrect ? 'إجابة صحيحة! أحسنت' : `الكلمة الصحيحة: ${cloze.missingWord}`}
                          </span>
                        )}
                      </div>

                      <p dir="ltr" className="font-mono text-sm sm:text-base font-bold text-[#202124] text-left en-sentence">
                        {cloze.textWithBlanks}
                      </p>

                      <div dir="ltr" className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {cloze.options.map((opt) => {
                          const isThisSelected = userChoice === opt;
                          const isThisCorrect = opt === cloze.missingWord;

                          let style = "bg-white border-2 border-[#202124] text-[#202124] hover:bg-[#E9ECFA]";
                          if (isAnswered) {
                            if (isThisCorrect) {
                              style = "bg-[#287A52] text-white font-bold border-2 border-[#202124] shadow-[2px_2px_0px_#202124]";
                            } else if (isThisSelected) {
                              style = "bg-[#B83A3A] text-white font-bold border-2 border-[#202124]";
                            } else {
                              style = "bg-white/70 border-2 border-[#202124]/40 text-[#747474] opacity-60";
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
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#747474] font-bold">
                <span>انقر على أي بطاقة لقلبها واكتشاف المعنى أو اللفظ</span>
                <span className="tabular-nums">إجمالي الكلمات: {currentEssay.keywords.length}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentEssay.keywords.map((kw, i) => {
                  const isFlipped = !!flippedCards[i];

                  return (
                    <div
                      key={i}
                      role="button"
                      tabIndex={0}
                      onClick={() => setFlippedCards(prev => ({ ...prev, [i]: !prev[i] }))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setFlippedCards(prev => ({ ...prev, [i]: !prev[i] }));
                        }
                      }}
                      className={`h-40 rounded-[6px] p-5 border-2 border-[#202124] transition-all cursor-pointer select-none flex flex-col justify-between shadow-[3px_3px_0px_#202124] hover:translate-y-[-1px] ${
                        isFlipped 
                          ? 'bg-[#405DE6] text-white' 
                          : 'bg-[#F7F5EF] hover:bg-[#F3E6A5] text-[#202124]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-[4px] border border-[#202124] ${
                          isFlipped ? 'bg-[#F3E6A5] text-[#202124]' : 'bg-white text-[#202124]'
                        }`}>
                          {isFlipped ? 'الترجمة العربية' : 'English Term'}
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            speakText(kw.word);
                          }}
                          aria-label={`استمع للفظ ${kw.word}`}
                          className={`p-1.5 rounded-[4px] border border-[#202124] transition-colors cursor-pointer ${
                            isFlipped ? 'bg-white text-[#405DE6] hover:bg-[#F3E6A5]' : 'bg-white text-[#202124] hover:bg-[#E9ECFA]'
                          }`}
                          title="استمع للفظ"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-center py-2">
                        {isFlipped ? (
                          <div className="text-lg sm:text-xl font-black text-white font-sans">
                            {kw.meaning}
                          </div>
                        ) : (
                          <div dir="ltr" className="text-lg sm:text-xl font-black font-mono text-[#202124] text-center bidi-en">
                            {kw.word}
                          </div>
                        )}
                      </div>

                      <div className={`text-center text-[11px] font-bold ${isFlipped ? 'text-white/90' : 'text-[#747474]'}`}>
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
              
              <div className="p-6 rounded-[6px] bg-[#F3E6A5] text-[#202124] space-y-3 border-2 border-[#202124] shadow-[4px_4px_0px_#202124]">
                <div className="flex items-center gap-2 text-[#202124] font-black text-base">
                  <Award className="w-5 h-5 text-[#405DE6]" />
                  <span>ميزان التصحيح الوزاري المعتمد (20 درجة كاملة)</span>
                </div>
                <p className="text-xs sm:text-sm text-[#202124] font-medium leading-relaxed">
                  كيف يمنحك المصحح الوزاري 20/20 كاملة في السؤال الخامس؟ إليك التوزيع الرسمي للدرجات وقائمة المراجعة الذاتية لتتأكد من مطابقة دفترك قبل تسليم الامتحان:
                </p>
              </div>

              {/* Rubric Points Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-[6px] bg-[#F3E6A5] border-2 border-[#202124] shadow-[3px_3px_0px_#202124] space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-[#202124]">العنوان والتنظيم</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-[4px] bg-white border border-[#202124] text-[#202124] font-mono tabular-nums">2 درجات</span>
                  </div>
                  <p className="text-xs text-[#202124] font-medium leading-relaxed">
                    كتابة العنوان في منتصف السطر الأول، ترك فراغ كلمة في بداية كل فقرة (Indentation).
                  </p>
                </div>

                <div className="p-5 rounded-[6px] bg-[#D7E9DA] border-2 border-[#202124] shadow-[3px_3px_0px_#202124] space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-[#202124]">المضمون والأفكار</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-[4px] bg-white border border-[#202124] text-[#287A52] font-mono tabular-nums">8 درجات</span>
                  </div>
                  <p className="text-xs text-[#202124] font-medium leading-relaxed">
                    ترابط الأفكار وتغطية الموضوع بالكامل، وتحقيق عدد الكلمات المطلوب (100 إلى 130 كلمة).
                  </p>
                </div>

                <div className="p-5 rounded-[6px] bg-[#E9ECFA] border-2 border-[#202124] shadow-[3px_3px_0px_#202124] space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-[#202124]">القواعد والتراكيب</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-[4px] bg-white border border-[#202124] text-[#405DE6] font-mono tabular-nums">5 درجات</span>
                  </div>
                  <p className="text-xs text-[#202124] font-medium leading-relaxed">
                    صحة الأزمنة النحوية، تماسك الجمل واستخدام أدوات الربط (Furthermore, In conclusion).
                  </p>
                </div>

                <div className="p-5 rounded-[6px] bg-[#DCD8FA] border-2 border-[#202124] shadow-[3px_3px_0px_#202124] space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-[#202124]">الإملاء والترقيم</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-[4px] bg-white border border-[#202124] text-[#202124] font-mono tabular-nums">5 درجات</span>
                  </div>
                  <p className="text-xs text-[#202124] font-medium leading-relaxed">
                    خلو الكلمات من الأخطاء الإملائية، الحروف الكبيرة (Capitalization) والنقاط والفواصل.
                  </p>
                </div>
              </div>

              {/* Interactive Self-Checklist */}
              <div className="p-6 rounded-[6px] bg-[#F7F5EF] border-2 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-4">
                <h4 className="text-sm font-black text-[#202124] flex items-center gap-2">
                  <ListChecks className="w-4 h-4 text-[#405DE6]" />
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
                        className={`flex items-center gap-3 p-3 rounded-[6px] border-2 border-[#202124] transition-all cursor-pointer select-none ${
                          isChecked ? 'bg-[#D7E9DA]' : 'bg-white hover:bg-[#E9ECFA]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setCheckedRubricItems(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className="w-4 h-4 accent-[#405DE6] rounded-[4px] border-2 border-[#202124] cursor-pointer"
                        />
                        <span className={`text-xs sm:text-sm font-bold ${isChecked ? 'line-through text-[#747474]' : 'text-[#202124]'}`}>
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
