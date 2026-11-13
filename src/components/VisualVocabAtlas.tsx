import React, { useState, useMemo } from 'react';
import { 
  Activity, Bone, Thermometer, Bandage, AlertCircle, Radar, 
  ShieldAlert, Scan, Footprints, Lock, Compass, LifeBuoy, 
  HeartPulse, Ticket, Utensils, Car, Receipt, Wallet, 
  CreditCard, Coins, GraduationCap, BookOpen, SunMedium, 
  Sprout, Recycle, Sparkles, ShieldCheck, Puzzle, Search, 
  Volume2, RotateCcw, CheckCircle2, Lightbulb, AlertTriangle, 
  Eye, Layers, Gamepad2, Check
} from 'lucide-react';
import { VISUAL_VOCABULARY_ITEMS } from '../data/visualVocabData';
import { speakEnglish } from '../utils/speech';
import { EducationalGrade } from '../types';
import { getGradeMeta } from '../data/gradeContentResolver';

// Map icon keys to actual Lucide icon components
const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Activity, Bone, Thermometer, Bandage, AlertCircle, Radar,
  ShieldAlert, Scan, Footprints, Lock, Compass, LifeBuoy,
  HeartPulse, Ticket, Utensils, Car, Receipt, Wallet,
  CreditCard, Coins, GraduationCap, BookOpen, SunMedium,
  Sprout, Recycle, Sparkles, ShieldCheck, Puzzle
};

interface VisualVocabAtlasProps {
  grade?: EducationalGrade;
  onSelectGrade?: (grade: EducationalGrade) => void;
}

export const VisualVocabAtlas: React.FC<VisualVocabAtlasProps> = ({
  grade = 'sixth-preparatory',
}) => {
  const activeGrade = grade || 'sixth-preparatory';
  const gradeMeta = getGradeMeta(activeGrade);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>('all');
  const [activeViewMode, setActiveViewMode] = useState<'gallery' | 'flashcards' | 'matcher'>('gallery');
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  // Flashcards mode state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<string[]>([]);

  // Matcher game state
  const [matcherSelectedSymbolId, setMatcherSelectedSymbolId] = useState<string | null>(null);
  const [matcherMatchedIds, setMatcherMatchedIds] = useState<string[]>([]);
  const [matcherWrongAttempt, setMatcherWrongAttempt] = useState(false);

  const handleSpeak = (text: string, id: string) => {
    setSpeakingId(id);
    speakEnglish(text, () => setSpeakingId(null));
  };

  // Filtered list
  const filteredItems = useMemo(() => {
    return VISUAL_VOCABULARY_ITEMS.filter(item => {
      const matchSearch = 
        item.wordEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.wordAr.includes(searchQuery) ||
        item.visualMnemonic.includes(searchQuery) ||
        item.ministerialContext.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchDomain = selectedDomain === 'all' || item.domain === selectedDomain;
      const matchUnit = selectedUnit === 'all' || item.unitId === selectedUnit;

      return matchSearch && matchDomain && matchUnit;
    });
  }, [searchQuery, selectedDomain, selectedUnit]);

  // Matcher items (subset of 6 for interactive game)
  const matcherItems = useMemo(() => {
    const list = [...filteredItems];
    return list.slice(0, 6);
  }, [filteredItems]);

  const shuffledTerms = useMemo(() => {
    return [...matcherItems].sort(() => 0.5 - Math.random());
  }, [matcherItems]);

  const handleSymbolClick = (id: string) => {
    if (matcherMatchedIds.includes(id)) return;
    setMatcherSelectedSymbolId(id);
    setMatcherWrongAttempt(false);
  };

  const handleTermClick = (id: string) => {
    if (!matcherSelectedSymbolId) return;
    if (matcherMatchedIds.includes(id)) return;

    if (matcherSelectedSymbolId === id) {
      setMatcherMatchedIds(prev => [...prev, id]);
      setMatcherSelectedSymbolId(null);
      setMatcherWrongAttempt(false);
      const item = matcherItems.find(it => it.id === id);
      if (item) {
        speakEnglish(item.wordEn);
      }
    } else {
      setMatcherWrongAttempt(true);
      setTimeout(() => {
        setMatcherWrongAttempt(false);
        setMatcherSelectedSymbolId(null);
      }, 700);
    }
  };

  const handleResetMatcher = () => {
    setMatcherMatchedIds([]);
    setMatcherSelectedSymbolId(null);
    setMatcherWrongAttempt(false);
  };

  const domainsList = [
    { id: 'all', label: 'كافة المجالات', icon: Layers },
    { id: 'medical', label: 'الصحة والطب', icon: HeartPulse },
    { id: 'security', label: 'الأمن والمرور', icon: ShieldAlert },
    { id: 'jobs', label: 'المهن والوظائف', icon: Compass },
    { id: 'tourism', label: 'السياحة والسفر', icon: Ticket },
    { id: 'banking', label: 'المالية والبنوك', icon: Wallet },
    { id: 'education', label: 'التعليم والتطوير', icon: GraduationCap },
    { id: 'ecology', label: 'البيئة والطاقة', icon: Sprout },
    { id: 'idioms', label: 'التعابير الاصطلاحية', icon: Sparkles },
  ];

  return (
    <div className="space-y-8 pb-16 max-w-7xl mx-auto text-ink">
      
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden bg-surface border-3 border-ink shadow-brutal-modal p-6 sm:p-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow text-ink border-2 border-ink shadow-brutal-sm text-xs font-mono font-black">
              <Sparkles className="w-3.5 h-3.5 text-cobalt shrink-0" />
              <span>أطلس الرموز والمفردات المصورة · VISUAL MNEMONICS ATLAS</span>
            </div>
            
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-ink">
              أطلس الرموز والمفردات المصورة · {gradeMeta.nameAr}
            </h1>
            
            <p className="text-ink/80 text-xs sm:text-sm max-w-2xl leading-relaxed font-bold">
              شرح وتبسيط مفردات ومتلازمات وتعابير منهج {gradeMeta.nameAr} عبر الربط الذهني الرمزي، مما يمنع التشتت والخلط في الأسئلة الامتحانية والتوصيل.
            </p>
          </div>

          {/* Grade Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 bg-cobalt text-surface border-2 border-ink font-black text-xs shadow-brutal-sm">
              {gradeMeta.nameAr}
            </span>
          </div>

          {/* Mode Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-paper border-2 border-ink w-full sm:w-auto max-w-full">
            <button
              type="button"
              onClick={() => setActiveViewMode('gallery')}
              className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border ${
                activeViewMode === 'gallery'
                  ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                  : 'bg-transparent text-ink border-transparent hover:bg-surface'
              }`}
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>معرض الرموز</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveViewMode('flashcards')}
              className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border ${
                activeViewMode === 'flashcards'
                  ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                  : 'bg-transparent text-ink border-transparent hover:bg-surface'
              }`}
            >
              <Eye className="w-3.5 h-3.5 shrink-0" />
              <span>البطاقات التقليبية</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveViewMode('matcher')}
              className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border ${
                activeViewMode === 'matcher'
                  ? 'bg-yellow text-ink border-ink shadow-brutal-sm'
                  : 'bg-transparent text-ink border-transparent hover:bg-surface'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5 shrink-0" />
              <span>تحدي المطابقة</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Controls & Filter Bar */}
      <div className="p-4 sm:p-5 bg-surface border-2 border-ink shadow-brutal-action space-y-4">
        
        {/* Search & Unit Selector */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-muted-gray absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن كلمة، مصطلح، أو تعبير بالإنجليزية أو العربية..."
              className="w-full pr-10 pl-4 py-2.5 bg-paper border-2 border-ink text-xs sm:text-sm text-ink font-bold focus:outline-none focus:bg-surface focus:shadow-brutal-sm transition-all placeholder:text-muted-gray"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs font-black text-ink whitespace-nowrap">الوحدة:</span>
            <select
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="w-full sm:w-auto px-3 py-2 bg-paper border-2 border-ink text-xs font-black text-ink focus:outline-none focus:bg-surface cursor-pointer shadow-brutal-sm"
            >
              <option value="all">كافة الوحدات</option>
              <option value="1">الوحدة 1 (الصحة والطب)</option>
              <option value="2">الوحدة 2 (الأمن والشرطة)</option>
              <option value="3">الوحدة 3 (المهن والشروط)</option>
              <option value="5">الوحدة 5 (السياحة والرحلات)</option>
              <option value="6">الوحدة 6 (المالية والبنوك)</option>
              <option value="7">الوحدة 7 (التعليم والدورات)</option>
              <option value="8">الوحدة 8 (البيئة والمصادر)</option>
            </select>
          </div>
        </div>

        {/* Domain Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full">
          {domainsList.map(domain => {
            const IconComp = domain.icon;
            const isSelected = selectedDomain === domain.id;

            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setSelectedDomain(domain.id)}
                className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 border-2 border-ink cursor-pointer shadow-brutal-sm ${
                  isSelected
                    ? 'bg-ink text-surface'
                    : 'bg-paper text-ink hover:bg-yellow'
                }`}
              >
                <IconComp className="w-3.5 h-3.5 shrink-0" />
                <span>{domain.label}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* 3. ACTIVE VIEW CONTENT */}

      {/* VIEW A: VISUAL CARDS GALLERY */}
      {activeViewMode === 'gallery' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-muted-gray font-bold px-1">
            <span>تم العثور على <strong className="tabular-nums">{filteredItems.length}</strong> مصطلح ومفردة رمزية</span>
            <span className="text-[11px] sm:text-xs">انقر على أيقونة الصوت لسماع النطق الإنجليزي الصحيح</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map(item => {
              const IconComp = ICON_MAP[item.iconKey] || Sparkles;

              return (
                <div 
                  key={item.id}
                  className="bg-surface border-3 border-ink shadow-brutal-action hover:shadow-brutal-modal hover:-translate-y-0.5 transition-all flex flex-col justify-between overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="p-5 border-b-2 border-ink bg-paper relative">
                    <div className="flex items-start justify-between gap-3 relative z-10">
                      
                      {/* Visual Icon Box */}
                      <div className="w-12 h-12 bg-surface border-2 border-ink shadow-brutal-sm flex items-center justify-center text-cobalt">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-[10px] font-black px-2 py-0.5 bg-yellow text-ink border-2 border-ink uppercase tracking-wider font-mono shadow-brutal-sm">
                          {item.domainAr} · U{item.unitId}
                        </span>
                        
                        <button
                          type="button"
                          onClick={() => handleSpeak(item.wordEn, item.id)}
                          aria-label={`استمع لنطق ${item.wordEn}`}
                          className={`p-1.5 hover:bg-yellow text-ink border-2 border-ink shadow-brutal-sm transition-all cursor-pointer ${
                            speakingId === item.id ? 'bg-coral' : 'bg-surface'
                          }`}
                          title="استمع للنطق الإنجليزي"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Word Title & Meaning */}
                    <div className="mt-4 space-y-1 relative z-10 min-w-0">
                      <h3 dir="ltr" className="text-xl font-black font-mono text-ink text-left bidi-en break-words">
                        {item.wordEn}
                      </h3>
                      <p className="text-sm font-black text-ink">
                        {item.wordAr}
                      </p>
                    </div>

                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                    
                    <div className="space-y-3">
                      {/* Visual Mnemonic Box */}
                      <div className="p-3 bg-paper border-2 border-ink space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-black text-cobalt">
                          <Eye className="w-3.5 h-3.5" />
                          <span>الرابط الذهني البصري (Mnemonic):</span>
                        </div>
                        <p className="text-xs text-ink leading-relaxed font-bold">
                          {item.visualMnemonic}
                        </p>
                      </div>

                      {/* Ministerial Context Sentence */}
                      <div className="space-y-1 min-w-0">
                        <span className="text-[11px] font-black text-muted-gray block">
                          السياق الوزاري النموذجي:
                        </span>
                        <p dir="ltr" className="text-xs font-mono font-bold text-ink bg-surface p-2.5 border-2 border-ink shadow-brutal-sm text-left en-sentence break-words">
                          {item.ministerialContext}
                        </p>
                      </div>
                    </div>

                    {/* Teacher's Tip & Trap Warning */}
                    <div className="space-y-2 pt-2 border-t-2 border-ink/10">
                      <div className="flex items-start gap-1.5 text-xs text-ink bg-yellow p-2.5 border-2 border-ink font-bold shadow-brutal-sm">
                        <Lightbulb className="w-3.5 h-3.5 text-ink shrink-0 mt-0.5" />
                        <span>{item.ministerialTip}</span>
                      </div>

                      {item.trapWarning && (
                        <div className="flex items-start gap-1.5 text-xs text-ink bg-coral p-2.5 border-2 border-ink font-bold shadow-brutal-sm">
                          <AlertTriangle className="w-3.5 h-3.5 text-ink shrink-0 mt-0.5" />
                          <span>{item.trapWarning}</span>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW B: FLASHCARDS SELF-TESTER */}
      {activeViewMode === 'flashcards' && filteredItems.length > 0 && (() => {
        const currentCard = filteredItems[flashcardIndex % filteredItems.length];
        const IconComp = ICON_MAP[currentCard.iconKey] || Sparkles;
        const isMastered = masteredIds.includes(currentCard.id);

        return (
          <div className="max-w-2xl mx-auto space-y-6">
            
            <div className="flex items-center justify-between text-xs font-black text-ink tabular-nums">
              <span>البطاقة {((flashcardIndex % filteredItems.length) + 1)} من {filteredItems.length}</span>
              <span className="text-semantic-success font-black">المتقنة: {masteredIds.length}</span>
            </div>

            {/* Interactive Flip Card */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsFlipped(!isFlipped)}
                aria-label={isFlipped ? 'العودة إلى الرمز البصري' : 'كشف المفردة والمعنى'}
                className="w-full p-6 sm:p-10 pb-20 bg-surface border-4 border-ink shadow-brutal-hero cursor-pointer transition-all min-h-[360px] flex flex-col justify-between text-center"
              >
                <div className="flex items-center justify-between w-full text-xs font-black text-ink gap-2">
                  <span>{isFlipped ? 'الوجه الخلفي: المعنى والسياق' : 'الوجه الأمامي: الرمز البصري'}</span>
                  <span className="px-2 py-0.5 bg-yellow border border-ink shrink-0">انقر للقلب</span>
                </div>

                {/* Front: Visual Symbol & Anchor */}
                {!isFlipped ? (
                  <div className="space-y-5 my-auto w-full">
                    <div className="w-24 h-24 mx-auto bg-paper border-3 border-ink shadow-brutal-action flex items-center justify-center text-cobalt">
                      <IconComp className="w-12 h-12" />
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-black text-muted-gray">ما هي المفردة الإنجليزية التي يعبر عنها هذا الرمز؟</p>
                      <p className="text-sm sm:text-base font-black text-ink max-w-md mx-auto">
                        💡 الرابط البصري: {currentCard.visualMnemonic}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Back: English Word, Pronunciation, & Ministerial Context */
                  <div className="space-y-5 my-auto text-ink w-full min-w-0">
                    <div className="space-y-2">
                      <h3 dir="ltr" className="text-2xl sm:text-4xl font-black font-mono text-cobalt text-center bidi-en break-words">
                        {currentCard.wordEn}
                      </h3>
                      <p className="text-lg font-black text-ink">
                        {currentCard.wordAr}
                      </p>
                    </div>

                    <div className="p-4 bg-paper border-2 border-ink text-xs sm:text-sm font-mono font-bold text-ink text-center dir-ltr shadow-brutal-sm break-words">
                      "{currentCard.ministerialContext}"
                    </div>

                    <p className="text-xs font-bold text-muted-gray">
                      {currentCard.ministerialTip}
                    </p>
                  </div>
                )}

                <span className="sr-only">اضغط لقلب البطاقة</span>
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                <button
                  type="button"
                  onClick={() => handleSpeak(currentCard.wordEn, currentCard.id)}
                  className="px-4 py-2 bg-paper hover:bg-yellow text-ink border-2 border-ink text-xs font-black transition-all flex items-center gap-1.5 shadow-brutal-sm cursor-pointer whitespace-nowrap"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>استماع للنطق</span>
                </button>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setFlashcardIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
                  setIsFlipped(false);
                }}
                className="px-5 py-2.5 bg-surface hover:bg-paper text-ink border-2 border-ink shadow-brutal-callout font-black text-xs transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
              >
                السابق
              </button>

              <button
                type="button"
                onClick={() => {
                  if (!isMastered) {
                    setMasteredIds(prev => [...prev, currentCard.id]);
                  }
                  setFlashcardIndex(prev => (prev + 1) % filteredItems.length);
                  setIsFlipped(false);
                }}
                className={`px-6 py-2.5 font-black text-xs transition-all flex items-center gap-1.5 border-2 border-ink shadow-brutal-callout cursor-pointer active:translate-x-0.5 active:translate-y-0.5 ${
                  isMastered
                    ? 'bg-semantic-success text-surface'
                    : 'bg-cobalt text-surface hover:bg-cobalt-hover'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>{isMastered ? 'أتقنتها بالفعل ✓' : 'أتقنت المفردة والتالي'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setFlashcardIndex(prev => (prev + 1) % filteredItems.length);
                  setIsFlipped(false);
                }}
                className="px-5 py-2.5 bg-surface hover:bg-paper text-ink border-2 border-ink shadow-brutal-callout font-black text-xs transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
              >
                التالي
              </button>
            </div>

          </div>
        );
      })()}

      {/* VIEW C: SYMBOL-WORD MATCHING CHALLENGE */}
      {activeViewMode === 'matcher' && (
        <div className="space-y-6">
          <div className="p-4 bg-yellow border-3 border-ink shadow-brutal-action flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-ink font-black">
              <Gamepad2 className="w-4 h-4 text-cobalt shrink-0" />
              <span>طريقة التحدي: اختر الرمز البصري من العمود الأول، ثم انقر على الكلمة الإنجليزية المقابلة له من العمود الثاني!</span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="font-black text-ink tabular-nums">
                المكتمل: {matcherMatchedIds.length} من {matcherItems.length}
              </span>
              <button
                type="button"
                onClick={handleResetMatcher}
                aria-label="إعادة التحدي"
                className="p-1.5 bg-surface hover:bg-paper text-ink border-2 border-ink shadow-brutal-sm cursor-pointer"
                title="إعادة التحدي"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Symbols Column */}
            <div className="space-y-2.5">
              <span className="text-xs font-black text-ink block">الرموز والمؤشرات البصرية (Symbols):</span>
              
              {matcherItems.map(item => {
                const IconComp = ICON_MAP[item.iconKey] || Sparkles;
                const isMatched = matcherMatchedIds.includes(item.id);
                const isSelected = matcherSelectedSymbolId === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    disabled={isMatched}
                    onClick={() => handleSymbolClick(item.id)}
                    className={`w-full p-4 border-2 border-ink text-right transition-all flex items-center justify-between cursor-pointer ${
                      isMatched
                        ? 'bg-soft-mint opacity-70 cursor-not-allowed shadow-none'
                        : isSelected
                          ? 'bg-cobalt text-surface shadow-brutal-action'
                          : 'bg-surface hover:bg-paper text-ink shadow-brutal-callout'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-11 h-11 border-2 border-ink flex items-center justify-center shadow-brutal-sm shrink-0 ${
                        isSelected ? 'bg-surface text-cobalt' : 'bg-paper text-ink'
                      }`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div className="text-right min-w-0">
                        <span className={`text-xs font-black block ${isSelected ? 'text-surface' : 'text-ink'}`}>
                          {item.wordAr}
                        </span>
                        <span className={`text-[10px] font-bold line-clamp-1 ${isSelected ? 'text-surface/80' : 'text-muted-gray'}`}>
                          {item.domainAr}
                        </span>
                      </div>
                    </div>

                    {isMatched && <CheckCircle2 className="w-5 h-5 text-semantic-success shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Terms Column */}
            <div className="space-y-2.5">
              <span className="text-xs font-black text-ink block">المصطلحات بالإنجليزية (English Terms):</span>

              {shuffledTerms.map(item => {
                const isMatched = matcherMatchedIds.includes(item.id);

                return (
                  <button
                    key={item.id}
                    type="button"
                    disabled={isMatched}
                    onClick={() => handleTermClick(item.id)}
                    className={`w-full p-4 border-2 border-ink text-left transition-all flex items-center justify-between cursor-pointer ${
                      isMatched
                        ? 'bg-soft-mint opacity-70 cursor-not-allowed shadow-none'
                        : matcherWrongAttempt && matcherSelectedSymbolId
                          ? 'bg-coral text-ink shadow-brutal-callout'
                          : 'bg-surface hover:bg-paper text-ink shadow-brutal-callout'
                    }`}
                  >
                    <div className="min-w-0">
                      <span dir="ltr" className="text-sm font-black font-mono text-ink block text-left bidi-en break-words">
                        {item.wordEn}
                      </span>
                      <span className="text-[11px] font-bold text-muted-gray">
                        {item.partOfSpeech}
                      </span>
                    </div>

                    {isMatched && <CheckCircle2 className="w-5 h-5 text-semantic-success shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {matcherMatchedIds.length === matcherItems.length && (
            <div className="p-6 bg-soft-mint border-3 border-ink shadow-brutal-action text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-semantic-success font-black text-base">
                <CheckCircle2 className="w-6 h-6 text-semantic-success" />
                <span>ممتاز جداً! أتقنت ربط جميع الرموز بالمفردات بنجاح 🎯</span>
              </div>
              <p className="text-xs text-ink font-bold">
                الترميز البصري يضمن استرجاع الكلمة فوراً أثناء قراءة الأسئلة الوزارية.
              </p>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
