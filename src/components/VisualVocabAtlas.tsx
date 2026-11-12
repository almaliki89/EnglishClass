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
    <div className="space-y-8 pb-16 max-w-7xl mx-auto text-[#202124]">
      
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden bg-white border-3 border-[#202124] shadow-[6px_6px_0px_#202124] p-6 sm:p-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-mono font-black">
              <Sparkles className="w-3.5 h-3.5 text-[#405DE6]" />
              <span>أطلس الرموز والمفردات المصورة · VISUAL MNEMONICS ATLAS</span>
            </div>
            
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#202124]">
              أطلس الرموز والمفردات المصورة · {gradeMeta.nameAr}
            </h1>
            
            <p className="text-[#202124]/80 text-xs sm:text-sm max-w-2xl leading-relaxed font-bold">
              شرح وتبسيط مفردات ومتلازمات وتعابير منهج {gradeMeta.nameAr} عبر الربط الذهني الرمزي، مما يمنع التشتت والخلط في الأسئلة الامتحانية والتوصيل.
            </p>
          </div>

          {/* Grade Badge */}
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#405DE6] text-white border-2 border-[#202124] font-black text-xs shadow-[2px_2px_0px_#202124]">
              {gradeMeta.nameAr}
            </span>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F7F5EF] border-2 border-[#202124] overflow-x-auto no-scrollbar w-full sm:w-auto max-w-full">
            <button
              type="button"
              onClick={() => setActiveViewMode('gallery')}
              className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 shrink-0 cursor-pointer border ${
                activeViewMode === 'gallery'
                  ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
                  : 'bg-transparent text-[#202124] border-transparent hover:bg-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>معرض الرموز</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveViewMode('flashcards')}
              className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 shrink-0 cursor-pointer border ${
                activeViewMode === 'flashcards'
                  ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
                  : 'bg-transparent text-[#202124] border-transparent hover:bg-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5 shrink-0" />
              <span>البطاقات التقليبية</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveViewMode('matcher')}
              className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 shrink-0 cursor-pointer border ${
                activeViewMode === 'matcher'
                  ? 'bg-[#F3E6A5] text-[#202124] border-[#202124] shadow-[2px_2px_0px_#202124]'
                  : 'bg-transparent text-[#202124] border-transparent hover:bg-white'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5 shrink-0" />
              <span>تحدي المطابقة</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Controls & Filter Bar */}
      <div className="p-4 sm:p-5 bg-white border-2 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-4">
        
        {/* Search & Unit Selector */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-[#747474] absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن كلمة، مصطلح، أو تعبير بالإنجليزية أو العربية..."
              className="w-full pr-10 pl-4 py-2.5 bg-[#F7F5EF] border-2 border-[#202124] text-xs sm:text-sm text-[#202124] font-bold focus:outline-hidden focus:bg-white focus:shadow-[2px_2px_0px_#202124] transition-all placeholder:text-[#747474]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs font-black text-[#202124] whitespace-nowrap">الوحدة:</span>
            <select
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="w-full sm:w-auto px-3 py-2 bg-[#F7F5EF] border-2 border-[#202124] text-xs font-black text-[#202124] focus:outline-hidden focus:bg-white cursor-pointer shadow-[2px_2px_0px_#202124]"
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
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full">
          {domainsList.map(domain => {
            const IconComp = domain.icon;
            const isSelected = selectedDomain === domain.id;

            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setSelectedDomain(domain.id)}
                className={`px-3 py-1.5 text-xs font-black transition-all whitespace-nowrap flex items-center gap-1.5 border-2 border-[#202124] shrink-0 cursor-pointer shadow-[2px_2px_0px_#202124] ${
                  isSelected
                    ? 'bg-[#202124] text-white'
                    : 'bg-[#F7F5EF] text-[#202124] hover:bg-[#F3E6A5]'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-[#747474] font-bold px-1">
            <span>تم العثور على <strong>{filteredItems.length}</strong> مصطلح ومفردة رمزية</span>
            <span className="text-[11px] sm:text-xs">انقر على أيقونة الصوت لسماع النطق الإنجليزي الصحيح</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map(item => {
              const IconComp = ICON_MAP[item.iconKey] || Sparkles;

              return (
                <div 
                  key={item.id}
                  className="bg-white border-3 border-[#202124] shadow-[4px_4px_0px_#202124] hover:shadow-[6px_6px_0px_#202124] hover:-translate-y-0.5 transition-all flex flex-col justify-between overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="p-5 border-b-2 border-[#202124] bg-[#F7F5EF] relative">
                    <div className="flex items-start justify-between gap-3 relative z-10">
                      
                      {/* Visual Icon Box */}
                      <div className="w-12 h-12 bg-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124] flex items-center justify-center text-[#405DE6]">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-[10px] font-black px-2 py-0.5 bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] uppercase tracking-wider font-mono shadow-[2px_2px_0px_#202124]">
                          {item.domainAr} · U{item.unitId}
                        </span>
                        
                        <button
                          type="button"
                          onClick={() => handleSpeak(item.wordEn, item.id)}
                          className={`p-1.5 bg-white hover:bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] transition-all cursor-pointer ${
                            speakingId === item.id ? 'bg-[#F2A18E]' : ''
                          }`}
                          title="استمع للنطق الإنجليزي"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Word Title & Meaning */}
                    <div className="mt-4 space-y-1 relative z-10">
                      <h3 dir="ltr" className="text-xl font-black font-mono text-[#202124] text-left bidi-en">
                        {item.wordEn}
                      </h3>
                      <p className="text-sm font-black text-[#202124]">
                        {item.wordAr}
                      </p>
                    </div>

                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                    
                    <div className="space-y-3">
                      {/* Visual Mnemonic Box */}
                      <div className="p-3 bg-[#F7F5EF] border-2 border-[#202124] space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-black text-[#405DE6]">
                          <Eye className="w-3.5 h-3.5" />
                          <span>الرابط الذهني البصري (Mnemonic):</span>
                        </div>
                        <p className="text-xs text-[#202124] leading-relaxed font-bold">
                          {item.visualMnemonic}
                        </p>
                      </div>

                      {/* Ministerial Context Sentence */}
                      <div className="space-y-1">
                        <span className="text-[11px] font-black text-[#747474] block">
                          السياق الوزاري النموذجي:
                        </span>
                        <p dir="ltr" className="text-xs font-mono font-bold text-[#202124] bg-white p-2.5 border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-left en-sentence">
                          {item.ministerialContext}
                        </p>
                      </div>
                    </div>

                    {/* Teacher's Tip & Trap Warning */}
                    <div className="space-y-2 pt-2 border-t-2 border-[#202124]/10">
                      <div className="flex items-start gap-1.5 text-xs text-[#202124] bg-[#F3E6A5] p-2.5 border-2 border-[#202124] font-bold shadow-[2px_2px_0px_#202124]">
                        <Lightbulb className="w-3.5 h-3.5 text-[#202124] shrink-0 mt-0.5" />
                        <span>{item.ministerialTip}</span>
                      </div>

                      {item.trapWarning && (
                        <div className="flex items-start gap-1.5 text-xs text-[#202124] bg-[#F2A18E] p-2.5 border-2 border-[#202124] font-bold shadow-[2px_2px_0px_#202124]">
                          <AlertTriangle className="w-3.5 h-3.5 text-[#202124] shrink-0 mt-0.5" />
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
            
            <div className="flex items-center justify-between text-xs font-black text-[#202124]">
              <span>البطاقة {((flashcardIndex % filteredItems.length) + 1)} من {filteredItems.length}</span>
              <span className="text-[#287A52] font-black">المتقنة: {masteredIds.length}</span>
            </div>

            {/* Interactive Flip Card */}
            <div 
              onClick={() => setIsFlipped(!isFlipped)}
              className="p-8 sm:p-12 bg-white border-4 border-[#202124] shadow-[8px_8px_0px_#202124] cursor-pointer transition-all min-h-[360px] flex flex-col justify-between text-center relative"
            >
              <div className="flex items-center justify-between text-xs font-black text-[#202124]">
                <span>{isFlipped ? 'الوجه الخلفي: المعنى والسياق' : 'الوجه الأمامي: الرمز البصري'}</span>
                <span className="px-2 py-0.5 bg-[#F3E6A5] border border-[#202124]">انقر للقلب</span>
              </div>

              {/* Front: Visual Symbol & Anchor */}
              {!isFlipped ? (
                <div className="space-y-5 my-auto">
                  <div className="w-24 h-24 mx-auto bg-[#F7F5EF] border-3 border-[#202124] shadow-[4px_4px_0px_#202124] flex items-center justify-center text-[#405DE6]">
                    <IconComp className="w-12 h-12" />
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-black text-[#747474]">ما هي المفردة الإنجليزية التي يعبر عنها هذا الرمز؟</p>
                    <p className="text-sm sm:text-base font-black text-[#202124] max-w-md mx-auto">
                      💡 الرابط البصري: {currentCard.visualMnemonic}
                    </p>
                  </div>
                </div>
              ) : (
                /* Back: English Word, Pronunciation, & Ministerial Context */
                <div className="space-y-5 my-auto text-[#202124]">
                  <div className="space-y-2">
                    <h3 dir="ltr" className="text-3xl sm:text-4xl font-black font-mono text-[#405DE6] text-center bidi-en">
                      {currentCard.wordEn}
                    </h3>
                    <p className="text-lg font-black text-[#202124]">
                      {currentCard.wordAr}
                    </p>
                  </div>

                  <div className="p-4 bg-[#F7F5EF] border-2 border-[#202124] text-xs sm:text-sm font-mono font-bold text-[#202124] text-center dir-ltr shadow-[2px_2px_0px_#202124]">
                    "{currentCard.ministerialContext}"
                  </div>

                  <p className="text-xs font-bold text-[#747474]">
                    {currentCard.ministerialTip}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-center gap-2 pt-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSpeak(currentCard.wordEn, currentCard.id);
                  }}
                  className="px-4 py-2 bg-[#F7F5EF] hover:bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] text-xs font-black transition-all flex items-center gap-1.5 shadow-[2px_2px_0px_#202124] cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>استماع للنطق</span>
                </button>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setFlashcardIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
                  setIsFlipped(false);
                }}
                className="px-5 py-2.5 bg-white hover:bg-[#F7F5EF] text-[#202124] border-2 border-[#202124] shadow-[3px_3px_0px_#202124] font-black text-xs transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
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
                className={`px-6 py-2.5 font-black text-xs transition-all flex items-center gap-1.5 border-2 border-[#202124] shadow-[3px_3px_0px_#202124] cursor-pointer active:translate-x-0.5 active:translate-y-0.5 ${
                  isMastered
                    ? 'bg-[#287A52] text-white'
                    : 'bg-[#405DE6] text-white hover:bg-[#344EC7]'
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
                className="px-5 py-2.5 bg-white hover:bg-[#F7F5EF] text-[#202124] border-2 border-[#202124] shadow-[3px_3px_0px_#202124] font-black text-xs transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
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
          <div className="p-4 bg-[#F3E6A5] border-3 border-[#202124] shadow-[4px_4px_0px_#202124] flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#202124] font-black">
              <Gamepad2 className="w-4 h-4 text-[#405DE6]" />
              <span>طريقة التحدي: اختر الرمز البصري من العمود الأول، ثم انقر على الكلمة الإنجليزية المقابلة له من العمود الثاني!</span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="font-black text-[#202124]">
                المكتمل: {matcherMatchedIds.length} من {matcherItems.length}
              </span>
              <button
                type="button"
                onClick={handleResetMatcher}
                className="p-1.5 bg-white hover:bg-[#F7F5EF] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] cursor-pointer"
                title="إعادة التحدي"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Symbols Column */}
            <div className="space-y-2.5">
              <span className="text-xs font-black text-[#202124] block">الرموز والمؤشرات البصرية (Symbols):</span>
              
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
                    className={`w-full p-4 border-2 border-[#202124] text-right transition-all flex items-center justify-between cursor-pointer ${
                      isMatched
                        ? 'bg-[#D7E9DA] opacity-70 cursor-not-allowed shadow-none'
                        : isSelected
                          ? 'bg-[#405DE6] text-white shadow-[4px_4px_0px_#202124]'
                          : 'bg-white hover:bg-[#F7F5EF] text-[#202124] shadow-[3px_3px_0px_#202124]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 border-2 border-[#202124] flex items-center justify-center shadow-[2px_2px_0px_#202124] ${
                        isSelected ? 'bg-white text-[#405DE6]' : 'bg-[#F7F5EF] text-[#202124]'
                      }`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-black block ${isSelected ? 'text-white' : 'text-[#202124]'}`}>
                          {item.wordAr}
                        </span>
                        <span className={`text-[10px] font-bold line-clamp-1 ${isSelected ? 'text-white/80' : 'text-[#747474]'}`}>
                          {item.domainAr}
                        </span>
                      </div>
                    </div>

                    {isMatched && <CheckCircle2 className="w-5 h-5 text-[#287A52] shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Terms Column */}
            <div className="space-y-2.5">
              <span className="text-xs font-black text-[#202124] block">المصطلحات بالإنجليزية (English Terms):</span>

              {shuffledTerms.map(item => {
                const isMatched = matcherMatchedIds.includes(item.id);

                return (
                  <button
                    key={item.id}
                    type="button"
                    disabled={isMatched}
                    onClick={() => handleTermClick(item.id)}
                    className={`w-full p-4 border-2 border-[#202124] text-left transition-all flex items-center justify-between cursor-pointer ${
                      isMatched
                        ? 'bg-[#D7E9DA] opacity-70 cursor-not-allowed shadow-none'
                        : matcherWrongAttempt && matcherSelectedSymbolId
                          ? 'bg-[#F2A18E] text-[#202124] shadow-[3px_3px_0px_#202124]'
                          : 'bg-white hover:bg-[#F7F5EF] text-[#202124] shadow-[3px_3px_0px_#202124]'
                    }`}
                  >
                    <div>
                      <span dir="ltr" className="text-sm font-black font-mono text-[#202124] block text-left bidi-en">
                        {item.wordEn}
                      </span>
                      <span className="text-[11px] font-bold text-[#747474]">
                        {item.partOfSpeech}
                      </span>
                    </div>

                    {isMatched && <CheckCircle2 className="w-5 h-5 text-[#287A52] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {matcherMatchedIds.length === matcherItems.length && (
            <div className="p-6 bg-[#D7E9DA] border-3 border-[#202124] shadow-[4px_4px_0px_#202124] text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-[#287A52] font-black text-base">
                <CheckCircle2 className="w-6 h-6 text-[#287A52]" />
                <span>ممتاز جداً! أتقنت ربط جميع الرموز بالمفردات بنجاح 🎯</span>
              </div>
              <p className="text-xs text-[#202124] font-bold">
                الترميز البصري يضمن استرجاع الكلمة فوراً أثناء قراءة الأسئلة الوزارية.
              </p>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
