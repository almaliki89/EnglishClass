import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  User, 
  HelpCircle, 
  Volume2, 
  Award, 
  Feather, 
  CheckCircle2, 
  Quote, 
  Search, 
  GraduationCap, 
  Eye, 
  EyeOff,
  Flame,
  Bookmark,
  Languages,
  Calendar,
  Image as ImageIcon,
  Check
} from 'lucide-react';
import { getStoriesForGrade, getGradeMeta, ORDERED_GRADES, ALL_GRADES_META } from '../data/gradeContentResolver';
import { LiteratureItem, LiteratureQA, EducationalGrade } from '../types';

interface LiteratureSectionProps {
  grade?: EducationalGrade;
  onSelectGrade?: (grade: EducationalGrade) => void;
}

export const LiteratureSection: React.FC<LiteratureSectionProps> = ({ 
  grade = 'sixth-preparatory',
  onSelectGrade
}) => {
  const storiesList: LiteratureItem[] = getStoriesForGrade(grade);
  const gradeMeta = getGradeMeta(grade);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  useEffect(() => {
    setActiveItemIndex(0);
  }, [grade]);
  
  // Guard against index out of bounds
  const safeIndex = activeItemIndex < storiesList.length ? activeItemIndex : 0;
  const activeLiterature: LiteratureItem = storiesList[safeIndex] || storiesList[0];

  // Gallery active image index
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Language Display Preference: 'bilingual' | 'ar' | 'en'
  const [langMode, setLangMode] = useState<'bilingual' | 'ar' | 'en'>('bilingual');

  // Active view section tab: 'overview' | 'author' | 'characters' | 'ministerialQA' | 'quiz'
  const [subTab, setSubTab] = useState<'overview' | 'author' | 'characters' | 'ministerialQA' | 'quiz'>('overview');

  // Ministerial Q&A state
  const [revealedQA, setRevealedQA] = useState<Record<number, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Audio Pronunciation Helper using SpeechSynthesis
  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.88;
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleQA = (idx: number) => {
    setRevealedQA(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const revealAllQA = () => {
    const all: Record<number, boolean> = {};
    activeLiterature.ministerialQA.forEach((_, i) => {
      all[i] = true;
    });
    setRevealedQA(all);
  };

  const hideAllQA = () => {
    setRevealedQA({});
  };

  // Filtered QA
  const filteredQA = useMemo(() => {
    if (!searchQuery.trim()) return activeLiterature.ministerialQA;
    const q = searchQuery.toLowerCase();
    return activeLiterature.ministerialQA.filter(
      item =>
        item.question.toLowerCase().includes(q) ||
        (item.questionAr && item.questionAr.includes(q)) ||
        item.answer.toLowerCase().includes(q) ||
        (item.answerAr && item.answerAr.includes(q)) ||
        item.year.includes(q)
    );
  }, [activeLiterature, searchQuery]);

  const currentImage = activeLiterature.galleryImages?.[activeImageIdx]?.url || activeLiterature.image;
  const currentImageCaptionEn = activeLiterature.galleryImages?.[activeImageIdx]?.captionEn || activeLiterature.imageCaptionEn;
  const currentImageCaptionAr = activeLiterature.galleryImages?.[activeImageIdx]?.captionAr || activeLiterature.imageCaptionAr;

  return (
    <div className="space-y-6 pb-24 max-w-6xl mx-auto px-2 sm:px-4">
      
      {/* Header Banner with Ministerial Focus Badge */}
      <div className="p-6 sm:p-8 bg-surface border-3 border-ink shadow-brutal-lg text-ink space-y-4 relative overflow-hidden">
        
        <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow border-2 border-ink shadow-brutal-sm text-ink text-xs font-mono font-bold rounded-xs">
            <GraduationCap className="w-4 h-4 text-cobalt" />
            <span>السؤال الرابع: نصوص الأدب والمطالعة (10 درجات)</span>
          </div>

          {/* Language Mode Toggle */}
          <div className="inline-flex flex-wrap items-center bg-paper p-1 border-2 border-ink text-xs font-black gap-1">
            <span className="px-2 text-ink flex items-center gap-1 font-mono">
              <Languages className="w-3.5 h-3.5 text-cobalt" />
              <span>LANG:</span>
            </span>
            <button
              type="button"
              id="lang-btn-bilingual"
              onClick={() => setLangMode('bilingual')}
              className={`px-3 py-1 transition-all cursor-pointer border ${
                langMode === 'bilingual'
                  ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                  : 'bg-transparent text-ink border-transparent hover:bg-surface'
              }`}
            >
              ثنائي (En/Ar)
            </button>
            <button
              type="button"
              id="lang-btn-ar"
              onClick={() => setLangMode('ar')}
              className={`px-3 py-1 transition-all cursor-pointer border ${
                langMode === 'ar'
                  ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                  : 'bg-transparent text-ink border-transparent hover:bg-surface'
              }`}
            >
              عربي فقط
            </button>
            <button
              type="button"
              id="lang-btn-en"
              onClick={() => setLangMode('en')}
              className={`px-3 py-1 transition-all cursor-pointer border ${
                langMode === 'en'
                  ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                  : 'bg-transparent text-ink border-transparent hover:bg-surface'
              }`}
            >
              English Only
            </button>
          </div>
        </div>

        {/* Grade Badge */}
        <div className="flex flex-wrap items-center gap-2 relative z-10 self-start">
          <span className="px-3 py-1 bg-cobalt text-surface border-2 border-ink font-black text-xs shadow-brutal-sm">
            {gradeMeta.nameAr}
          </span>
          {gradeMeta.isMinisterial && (
            <span className="px-2 py-0.5 bg-coral text-ink font-mono font-black text-xs border-2 border-ink rounded-[4px]">
              ★ منهج وزاري
            </span>
          )}
        </div>

        <div className="relative z-10 space-y-2">
          <h1 className="font-display text-2xl sm:text-4xl font-black tracking-tight text-ink">
            {grade === 'third-intermediate' && 'القصص المقررة • الثالث المتوسط (Story Time)'}
            {grade === 'fourth-preparatory' && 'الأدب المقرّر • الرابع الإعدادي (العلمي والأدبي)'}
            {grade === 'fifth-preparatory' && 'الأدب المقرّر • الخامس الإعدادي (العلمي والأدبي)'}
            {grade === 'sixth-preparatory' && 'الأدب المقرّر • السادس الإعدادي • إشراف الأستاذ مصطفى تركي'}
          </h1>
          <p className="text-xs sm:text-sm text-ink/80 max-w-3xl leading-relaxed font-medium">
            {grade === 'third-intermediate' && 'دراسة شاملة ومبسطة للقصص المقررة للثالث المتوسط (كريم والزبون 50، الغزالة، أسطورة كرم، سلام أحمد وبر الوالدين) مع الأسئلة النموذجية.'}
            {grade === 'fourth-preparatory' && 'دراسة نقدية وأكاديمية للمسرحية المقررة «تاجر البندقية» لويليام شكسبير، وقصيدة «الطريق الذي لم يُسلك» لروبرت فروست مع الشرح والتحليل.'}
            {grade === 'fifth-preparatory' && 'دراسة تحليلية لقصيدة «هجوم اللواء الخفيف» للورد ألفريد تينيسون، وقصة «بيت الدمية» لكاثرين مانسفيلد مع أهم الأسئلة والنماذج المقررة.'}
            {grade === 'sixth-preparatory' && 'المنهج الأدبي المقرر: دراسة تحليلية شاملة للكاتب العراقي محمد خضير وقصة «الأرجوحة» (The Swing)، والكاتبة النيوزيلندية كاثرين مانسفيلد وقصة «الكناري» (The Canary) مع الأسئلة النموذجية.'}
          </p>
        </div>

        {/* Literature Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 pt-3 relative z-10">
          {storiesList.map((item, idx) => {
            const isActive = safeIndex === idx;
            const badgeText = item.genre || (item.id === 'lit-pride' ? 'الرواية المقررة • جين أوستن' : 'المسرحية المقررة • شكسبير');

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => {
                  setActiveItemIndex(idx);
                  setActiveImageIdx(0);
                }}
                className={`p-3 text-right transition-all cursor-pointer border-2 w-full sm:w-auto sm:min-w-[200px] sm:flex-initial ${
                  isActive
                    ? 'bg-cobalt text-surface border-ink shadow-brutal-callout'
                    : 'bg-surface hover:bg-paper text-ink border-ink shadow-brutal-sm'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold block ${isActive ? 'text-yellow' : 'text-semantic-error'}`}>
                  {badgeText}
                </span>
                <span className="font-black text-sm block mt-0.5">
                  {item.titleAr}
                </span>
                <span className="text-xs font-mono opacity-80 block min-w-0 break-words" dir="ltr">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-paper border-2 border-ink rounded-[6px] shadow-brutal-callout text-xs sm:text-sm font-black w-full">
        <button
          type="button"
          id="subtab-overview"
          onClick={() => setSubTab('overview')}
          className={`px-3.5 sm:px-4 py-2 rounded-[4px] border-2 transition-all flex items-center gap-2 cursor-pointer ${
            subTab === 'overview'
              ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
              : 'bg-surface text-ink border-transparent hover:border-ink'
          }`}
        >
          <BookOpen className={`w-4 h-4 shrink-0 ${subTab === 'overview' ? 'text-yellow' : 'text-cobalt'}`} />
          <span>القصة والحبكة والصور</span>
        </button>

        <button
          type="button"
          id="subtab-author"
          onClick={() => setSubTab('author')}
          className={`px-3.5 sm:px-4 py-2 rounded-[4px] border-2 transition-all flex items-center gap-2 cursor-pointer ${
            subTab === 'author'
              ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
              : 'bg-surface text-ink border-transparent hover:border-ink'
          }`}
        >
          <Feather className={`w-4 h-4 shrink-0 ${subTab === 'author' ? 'text-yellow' : 'text-cobalt'}`} />
          <span>سيرة الكاتب وجوائزه</span>
        </button>

        <button
          type="button"
          id="subtab-characters"
          onClick={() => setSubTab('characters')}
          className={`px-3.5 sm:px-4 py-2 rounded-[4px] border-2 transition-all flex items-center gap-2 cursor-pointer ${
            subTab === 'characters'
              ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
              : 'bg-surface text-ink border-transparent hover:border-ink'
          }`}
        >
          <User className={`w-4 h-4 shrink-0 ${subTab === 'characters' ? 'text-yellow' : 'text-cobalt'}`} />
          <span>الشخصيات والتحليل</span>
        </button>

        <button
          type="button"
          id="subtab-ministerial"
          onClick={() => setSubTab('ministerialQA')}
          className={`px-3.5 sm:px-4 py-2 rounded-[4px] border-2 transition-all flex items-center gap-2 cursor-pointer tabular-nums ${
            subTab === 'ministerialQA'
              ? 'bg-yellow text-ink border-ink shadow-brutal-sm'
              : 'bg-surface text-ink border-transparent hover:border-ink'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-semantic-error shrink-0" />
          <span>الأسئلة الوزارية ({activeLiterature.ministerialQA.length})</span>
        </button>

        <button
          type="button"
          id="subtab-quiz"
          onClick={() => setSubTab('quiz')}
          className={`px-3.5 sm:px-4 py-2 rounded-[4px] border-2 transition-all flex items-center gap-2 cursor-pointer ${
            subTab === 'quiz'
              ? 'bg-semantic-success text-surface border-ink shadow-brutal-sm'
              : 'bg-surface text-ink border-transparent hover:border-ink'
          }`}
        >
          <Sparkles className={`w-4 h-4 shrink-0 ${subTab === 'quiz' ? 'text-yellow' : 'text-semantic-success'}`} />
          <span>مختبر الحفظ الذاتي</span>
        </button>
      </div>

      {/* VIEW 1: STORY OVERVIEW & ARTWORK */}
      {subTab === 'overview' && (
        <div className="space-y-6">
          
          {/* Visual Artwork Card with Multi-Scene Selector */}
          <div className="rounded-[6px] bg-surface border-3 border-ink shadow-brutal-lg overflow-hidden">
            <div className="relative group">
              <img
                src={currentImage}
                alt={activeLiterature.title}
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-[420px] object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/45 to-transparent flex flex-col justify-end p-5 sm:p-8 text-surface">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-[4px] bg-yellow text-ink border-2 border-ink font-black text-xs">
                    {activeLiterature.genreAr || activeLiterature.genre}
                  </span>
                  <span className="px-3 py-1 rounded-[4px] bg-ink/80 border border-surface/40 text-surface font-mono font-bold text-xs">
                    {activeLiterature.genre}
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-4xl font-black text-surface flex flex-wrap items-center gap-3">
                  <span>{activeLiterature.titleAr}</span>
                  <span className="text-xl sm:text-2xl text-yellow font-mono font-bold min-w-0 break-words" dir="ltr">
                    — {activeLiterature.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => playAudio(activeLiterature.title)}
                    aria-label="استمع للنطق الإنجليزي"
                    title="استمع للنطق الإنجليزي"
                    className="p-2 rounded-[4px] bg-surface text-ink border-2 border-ink hover:bg-yellow transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </h2>

                <p className="text-xs sm:text-sm text-paper mt-2 max-w-3xl leading-relaxed font-medium">
                  {langMode === 'en' ? currentImageCaptionEn : currentImageCaptionAr}
                </p>
                {langMode === 'bilingual' && currentImageCaptionEn && (
                  <p dir="ltr" className="text-xs text-yellow mt-1 italic text-left en-sentence min-w-0 break-words">
                    "{currentImageCaptionEn}"
                  </p>
                )}
              </div>
            </div>

            {/* Scene Selector Thumbnails if available */}
            {activeLiterature.galleryImages && activeLiterature.galleryImages.length > 1 && (
              <div className="p-3 bg-paper flex flex-wrap items-center gap-3 border-t-2 border-ink">
                <span className="text-xs font-black text-ink whitespace-nowrap flex items-center gap-1.5 px-2">
                  <ImageIcon className="w-3.5 h-3.5 text-cobalt" />
                  <span>معرض المشاهد واللوحات:</span>
                </span>
                {activeLiterature.galleryImages.map((img, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    aria-label={img.captionAr || img.captionEn}
                    className={`relative rounded-[4px] overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImageIdx === idx
                        ? 'border-cobalt shadow-brutal-sm'
                        : 'border-ink/40 opacity-75 hover:opacity-100 hover:border-ink'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.captionEn}
                      referrerPolicy="no-referrer"
                      className="w-16 sm:w-20 h-10 sm:h-12 object-cover"
                    />
                    {activeImageIdx === idx && (
                      <div className="absolute inset-0 bg-cobalt/30 flex items-center justify-center">
                        <Check className="w-4 h-4 text-surface drop-shadow" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Quick Metadata Bar */}
            <div className="p-4 sm:p-5 bg-paper border-t-2 border-ink flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-cobalt" />
                <span className="font-bold text-muted-gray">المؤلف:</span>
                <span className="font-black text-ink">{activeLiterature.authorAr} ({activeLiterature.author})</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cobalt" />
                <span className="font-bold text-muted-gray">الفترة الزمنية:</span>
                <span className="font-mono font-bold text-ink tabular-nums">{activeLiterature.authorYears}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-cobalt" />
                <span className="font-bold text-muted-gray">الوزن الامتحاني:</span>
                <span className="font-black text-ink bg-yellow border border-ink px-2.5 py-0.5 rounded-[4px] tabular-nums">السؤال الرابع • 10 درجات</span>
              </div>
            </div>
          </div>

          {/* Historical & Literary Context */}
          {(activeLiterature.historicalContextAr || activeLiterature.historicalContextEn) && (
            <div className="p-5 sm:p-6 rounded-[6px] bg-yellow/30 border-2 border-ink shadow-brutal-action space-y-3">
              <h3 className="text-sm sm:text-base font-black text-ink flex items-center gap-2">
                <Flame className="w-4 h-4 text-semantic-error" />
                <span>الظرف التاريخي والظهور الأدبي (Historical Context)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm leading-relaxed">
                {(langMode === 'bilingual' || langMode === 'ar') && activeLiterature.historicalContextAr && (
                  <div className="p-4 rounded-[4px] bg-surface border-2 border-ink text-ink space-y-1">
                    <p className="font-black text-cobalt text-xs">الظرف التاريخي بالعربية:</p>
                    <p>{activeLiterature.historicalContextAr}</p>
                  </div>
                )}
                {(langMode === 'bilingual' || langMode === 'en') && activeLiterature.historicalContextEn && (
                  <div dir="ltr" className="p-4 rounded-[4px] bg-surface border-2 border-ink text-ink space-y-1 text-left min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-black text-cobalt text-xs font-mono">Historical Background:</p>
                      <button
                        type="button"
                        onClick={() => playAudio(activeLiterature.historicalContextEn!)}
                        aria-label="Listen to historical background"
                        className="text-cobalt hover:text-ink p-1 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="font-medium en-sentence break-words">{activeLiterature.historicalContextEn}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Plot Summary */}
          <div className="p-6 sm:p-8 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-action space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-ink flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cobalt" />
                <span>ملخص الأحداث والحبكة (Plot & Story Summary)</span>
              </h3>
            </div>

            <div className="space-y-4 lesson-reading">
              {(langMode === 'bilingual' || langMode === 'ar') && (
                <div className="p-5 rounded-[4px] bg-paper border-2 border-ink space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-[4px] bg-yellow border border-ink text-ink">
                      الملخص باللغة العربية
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-ink leading-relaxed font-medium whitespace-pre-line">
                    {activeLiterature.summaryAr}
                  </div>
                </div>
              )}

              {(langMode === 'bilingual' || langMode === 'en') && activeLiterature.summaryEn && (
                <div className="p-5 rounded-[4px] bg-paper border-2 border-ink space-y-2 dir-ltr text-left">
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => playAudio(activeLiterature.summaryEn!)}
                      className="text-xs font-black text-cobalt hover:text-ink flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Listen to Summary</span>
                    </button>
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-[4px] bg-blue-mist border border-ink text-ink">
                      Standard English Plot Summary
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-ink leading-relaxed font-normal whitespace-pre-line en-sentence break-words">
                    {activeLiterature.summaryEn}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Moral Lesson & Key Themes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Moral Lesson */}
            <div className="p-5 sm:p-6 rounded-[6px] bg-soft-mint/35 border-2 border-ink shadow-brutal-action space-y-3">
              <h4 className="text-sm sm:text-base font-black text-ink flex items-center gap-2">
                <Award className="w-4 h-4 text-semantic-success" />
                <span>الدرس الأخلاقي والرسالة الإنسانية (Moral Lesson)</span>
              </h4>
              <div className="space-y-2 text-xs sm:text-sm">
                {(langMode === 'bilingual' || langMode === 'ar') && activeLiterature.moralLessonAr && (
                  <p className="text-ink leading-relaxed font-medium bg-surface p-3.5 rounded-[4px] border-2 border-ink">
                    {activeLiterature.moralLessonAr}
                  </p>
                )}
                {(langMode === 'bilingual' || langMode === 'en') && activeLiterature.moralLessonEn && (
                  <p dir="ltr" className="text-ink leading-relaxed font-medium bg-surface p-3.5 rounded-[4px] border-2 border-ink text-left en-sentence break-words">
                    {activeLiterature.moralLessonEn}
                  </p>
                )}
              </div>
            </div>

            {/* Key Themes */}
            <div className="p-5 sm:p-6 rounded-[6px] bg-blue-mist/60 border-2 border-ink shadow-brutal-action space-y-3">
              <h4 className="text-sm sm:text-base font-black text-ink flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cobalt" />
                <span>الثيمات والأفكار المركزية (Key Themes)</span>
              </h4>
              <div className="space-y-2 text-xs leading-relaxed">
                {activeLiterature.keyThemes.map((theme, i) => (
                  <div key={i} className="p-3 rounded-[4px] bg-surface border-2 border-ink space-y-1">
                    {(langMode === 'bilingual' || langMode === 'ar') && (
                      <p className="font-bold text-ink">
                        <span className="text-cobalt font-extrabold ml-1.5">✦</span>
                        {theme}
                      </p>
                    )}
                    {(langMode === 'bilingual' || langMode === 'en') && activeLiterature.keyThemesEn && activeLiterature.keyThemesEn[i] && (
                      <p dir="ltr" className="text-cobalt font-bold text-left en-sentence break-words">
                        • {activeLiterature.keyThemesEn[i]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Vocabulary */}
          {activeLiterature.keyVocabulary && activeLiterature.keyVocabulary.length > 0 && (
            <div className="p-5 sm:p-6 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-action space-y-4">
              <h4 className="text-sm sm:text-base font-black text-ink flex items-center gap-2">
                <Languages className="w-4 h-4 text-cobalt" />
                <span>المفردات والمصطلحات الأدبية الهامة (Key Literary Vocabulary)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeLiterature.keyVocabulary.map((vocab, i) => (
                  <div key={i} className="p-3.5 rounded-[4px] bg-paper border-2 border-ink space-y-1.5 hover:bg-surface transition-colors">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-black text-sm text-ink font-mono min-w-0 break-words" dir="ltr">{vocab.word}</span>
                      <button
                        type="button"
                        onClick={() => playAudio(vocab.word)}
                        className="text-cobalt hover:text-ink p-1 cursor-pointer shrink-0"
                        aria-label="نطق المفردة"
                        title="نطق المفردة"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs font-black text-cobalt">{vocab.meaningAr}</p>
                    <p dir="ltr" className="text-[11px] text-ink font-medium text-left border-t border-ink/15 pt-1 en-sentence break-words">
                      "{vocab.contextEn}"
                    </p>
                    <p className="text-[11px] text-muted-gray font-bold">
                      «{vocab.contextAr}»
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quotes Section */}
          {activeLiterature.quotes && activeLiterature.quotes.length > 0 && (
            <div className="p-5 sm:p-6 rounded-[6px] bg-lavender/35 border-3 border-ink shadow-brutal-action space-y-4">
              <h4 className="text-sm sm:text-base font-black text-ink flex items-center gap-2">
                <Quote className="w-4 h-4 text-cobalt" />
                <span>اقتباسات أدبية خالدة من النص (Immortal Quotes)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeLiterature.quotes.map((quote, i) => (
                  <div key={i} className="p-4 rounded-[4px] bg-surface border-2 border-ink shadow-brutal-sm space-y-2">
                    <p dir="ltr" className="text-xs sm:text-sm text-ink font-bold italic text-left en-sentence break-words">
                      "{quote.textEn}"
                    </p>
                    <p className="text-xs text-cobalt font-bold">
                      «{quote.textAr}»
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-ink/15 text-[11px] text-muted-gray font-bold">
                      <span>{quote.speaker}</span>
                      <button
                        type="button"
                        onClick={() => playAudio(quote.textEn)}
                        className="text-cobalt hover:text-ink flex items-center gap-1 cursor-pointer"
                      >
                        <Volume2 className="w-3 h-3" />
                        <span>نطق</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* VIEW 2: AUTHOR BIOGRAPHY & PRIZES */}
      {subTab === 'author' && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-action space-y-6">
            <div className="border-b-2 border-ink pb-5 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-ink">
                  سيرة الكاتب: {activeLiterature.authorAr} ({activeLiterature.author})
                </h3>
                <button
                  type="button"
                  onClick={() => playAudio(activeLiterature.author)}
                  className="px-3 py-1.5 rounded-[4px] bg-yellow hover:bg-yellow-hover text-ink border-2 border-ink shadow-brutal-sm text-xs font-black flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-4 h-4 text-ink" />
                  <span>نطق الاسم</span>
                </button>
              </div>
              <p className="text-xs sm:text-sm text-muted-gray font-bold">
                السنوات: <strong className="text-ink font-mono tabular-nums">{activeLiterature.authorYears}</strong> • تصنيف الأدب: <strong className="text-ink">{activeLiterature.genreAr}</strong>
              </p>
            </div>

            {/* Author Bio Points Side by Side */}
            <div className="space-y-3">
              <h4 className="text-sm font-black text-ink flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-cobalt" />
                <span>محطات حياة الكاتب وفق المنهج الدراسي (Life Milestones)</span>
              </h4>

              <div className="space-y-3">
                {activeLiterature.authorBioAr?.map((pointAr, i) => {
                  const pointEn = activeLiterature.authorBioEn?.[i] || '';

                  return (
                    <div 
                      key={i} 
                      className="p-4 sm:p-5 rounded-[4px] bg-paper border-2 border-ink space-y-2 hover:bg-surface transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="w-7 h-7 rounded-[4px] bg-yellow border-2 border-ink text-ink font-mono font-black text-xs flex items-center justify-center shrink-0 tabular-nums">
                          {i + 1}
                        </span>
                        <div className="flex-1 min-w-0 space-y-2">
                          {(langMode === 'bilingual' || langMode === 'ar') && (
                            <p className="text-xs sm:text-sm font-bold text-ink leading-relaxed">
                              {pointAr}
                            </p>
                          )}
                          {(langMode === 'bilingual' || langMode === 'en') && pointEn && (
                            <div dir="ltr" className="flex items-start justify-between gap-2 text-left pt-2 border-t border-ink/15">
                              <p className="text-xs text-ink font-medium leading-relaxed en-sentence min-w-0 break-words">
                                {pointEn}
                              </p>
                              <button
                                type="button"
                                onClick={() => playAudio(pointEn)}
                                className="text-cobalt hover:text-ink shrink-0 p-1 cursor-pointer"
                                aria-label="استمع للنطق"
                                title="استمع للنطق"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Prizes & Notable Works */}
            {activeLiterature.authorPrizes && (
              <div className="p-5 sm:p-6 rounded-[6px] bg-yellow/35 border-2 border-ink space-y-3">
                <h4 className="text-sm sm:text-base font-black text-ink flex items-center gap-2">
                  <Award className="w-4 h-4 text-cobalt" />
                  <span>المكانة الأدبية وأبرز الإنجازات (Prizes & Legacy)</span>
                </h4>
                <div className="space-y-2">
                  {activeLiterature.authorPrizes.map((prize, idx) => (
                    <div key={idx} className="p-3.5 rounded-[4px] bg-surface border-2 border-ink text-xs sm:text-sm font-bold text-ink flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-semantic-success shrink-0" />
                      <span>{prize}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* VIEW 3: CHARACTERS ANALYSIS */}
      {subTab === 'characters' && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-action space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-ink flex items-center gap-2">
                <User className="w-6 h-6 text-cobalt" />
                <span>دليل الشخصيات الأدبية والتحليل النفسي والأدبي</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-gray font-bold mt-1">
                التركيز على صفات ودور كل شخصية كما ترد في أسئلة الامتحان
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeLiterature.characters.map((char, i) => (
                <div 
                  key={i}
                  className="p-5 rounded-[6px] bg-paper border-2 border-ink shadow-brutal-callout hover:bg-surface transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-base font-black text-ink flex flex-wrap items-center gap-2 min-w-0">
                        <span>{char.nameAr || char.name}</span>
                        <span className="text-xs text-muted-gray font-mono font-bold break-words" dir="ltr">({char.name})</span>
                      </h4>
                      <button
                        type="button"
                        onClick={() => playAudio(char.name)}
                        className="text-cobalt hover:text-ink cursor-pointer shrink-0"
                        aria-label="نطق اسم الشخصية"
                        title="نطق اسم الشخصية"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="inline-flex flex-wrap items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-yellow border border-ink text-ink text-xs font-black">
                      <span>{char.roleAr || char.role}</span>
                      <span className="text-[10px] text-muted-gray font-mono">({char.role})</span>
                    </div>

                    {(langMode === 'bilingual' || langMode === 'ar') && (
                      <p className="text-xs text-ink leading-relaxed font-medium pt-1">
                        {char.descriptionAr || char.description}
                      </p>
                    )}

                    {(langMode === 'bilingual' || langMode === 'en') && (
                      <p dir="ltr" className="text-xs text-ink/85 leading-relaxed font-normal pt-2 border-t border-ink/15 text-left en-sentence break-words">
                        {char.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 border-t border-ink/15 flex items-center justify-between text-[11px] text-muted-gray font-bold">
                    <span>تحليل أدبي منهجي</span>
                    <span className="text-semantic-success font-black">جاهز للامتحان ✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: MINISTERIAL QUESTIONS & ANSWERS (2014-2025) */}
      {subTab === 'ministerialQA' && (
        <div className="space-y-6">
          
          {/* Controls Bar */}
          <div className="p-5 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-action flex flex-wrap items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 min-w-0 sm:min-w-[220px] w-full sm:w-auto">
              <Search className="w-4 h-4 text-muted-gray absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="search-literature-qa"
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="ابحث في الأسئلة الوزارية، السنوات، أو الكلمات المفتاحية..."
                className="w-full pl-4 pr-10 py-2.5 text-xs sm:text-sm rounded-[4px] bg-paper border-2 border-ink focus:outline-none focus:bg-surface transition-all font-bold text-ink placeholder:text-muted-gray"
              />
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                id="reveal-all-qa-btn"
                onClick={revealAllQA}
                className="px-3.5 py-2 rounded-[4px] bg-yellow hover:bg-yellow-hover text-ink border-2 border-ink shadow-brutal-sm text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-ink" />
                <span>إظهار جميع الأجوبة</span>
              </button>

              <button
                type="button"
                id="hide-all-qa-btn"
                onClick={hideAllQA}
                className="px-3.5 py-2 rounded-[4px] bg-surface hover:bg-paper text-ink border-2 border-ink shadow-brutal-sm text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <EyeOff className="w-3.5 h-3.5 text-muted-gray" />
                <span>إخفاء الكل</span>
              </button>
            </div>
          </div>

          {/* QA List */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 px-1">
              <p className="text-xs font-bold text-muted-gray tabular-nums">
                تم العثور على <strong className="text-ink font-black">{filteredQA.length}</strong> سؤالاً
              </p>
              <span className="text-xs text-cobalt font-black">
                نمط الإجابة النموذجية للمنهج العراقي
              </span>
            </div>

            {filteredQA.map((qa: LiteratureQA, i: number) => {
              const isRevealed = !!revealedQA[i];

              return (
                <div 
                  key={qa.id || i}
                  className="p-5 sm:p-6 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-action space-y-3"
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5 flex-1 min-w-0">
                      
                      {/* English Question */}
                      <div dir="ltr" className="flex items-start justify-between gap-2 text-left">
                        <p className="text-sm sm:text-base font-black text-ink leading-snug en-sentence min-w-0 break-words">
                          <span className="text-cobalt font-extrabold mr-2 font-mono tabular-nums">Q{i + 1}.</span>
                          {qa.question}
                        </p>
                        <button
                          type="button"
                          onClick={() => playAudio(qa.question)}
                          aria-label="استمع لنطق السؤال"
                          title="استمع لنطق السؤال"
                          className="text-cobalt hover:text-ink p-1 shrink-0 cursor-pointer"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Arabic Translation */}
                      {(langMode === 'bilingual' || langMode === 'ar') && qa.questionAr && (
                        <p className="text-xs sm:text-sm font-bold text-muted-gray pr-1">
                          «{qa.questionAr}»
                        </p>
                      )}
                    </div>

                    {/* Year Badge */}
                    <span className="text-[11px] font-mono font-black px-2.5 py-1 rounded-[4px] bg-yellow text-ink border border-ink whitespace-nowrap shrink-0 tabular-nums">
                      {qa.year}
                    </span>
                  </div>

                  {/* Toggle Button & Hint */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-ink/15">
                    <button
                      type="button"
                      id={`toggle-qa-${i}`}
                      onClick={() => toggleQA(i)}
                      className="text-xs font-black text-ink flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-blue-mist hover:bg-lavender border-2 border-ink shadow-brutal-sm transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cobalt" />
                      <span>{isRevealed ? 'إخفاء الجواب النموذجي' : 'إظهار الجواب النموذجي والترجمة'}</span>
                    </button>

                    {qa.keyHint && (
                      <span className="text-[11px] font-bold text-muted-gray hidden sm:inline">
                        مفتاح الحل: <strong className="text-cobalt">{qa.keyHint}</strong>
                      </span>
                    )}
                  </div>

                  {/* Revealed Answer */}
                  {isRevealed && (
                    <div className="lesson-answer space-y-3 mt-2">
                      
                      {/* English Model Answer */}
                      <div dir="ltr" className="space-y-1 text-left min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-cobalt">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono uppercase">Model Answer:</span>
                            <span className="text-muted-gray font-bold">(نموذج الإجابة القياسي)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => playAudio(qa.answer)}
                            className="text-ink hover:bg-yellow flex items-center gap-1 bg-surface border border-ink px-2 py-0.5 rounded-[4px] cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5 text-cobalt" />
                            <span>استمع للإجابة</span>
                          </button>
                        </div>
                        <p className="font-mono text-xs sm:text-sm font-black text-ink leading-relaxed en-sentence break-words">
                          {qa.answer}
                        </p>
                      </div>

                      {/* Arabic Translation of Answer */}
                      {(langMode === 'bilingual' || langMode === 'ar') && qa.answerAr && (
                        <div className="pt-2 border-t border-ink/15 space-y-1">
                          <p className="text-[11px] font-black text-muted-gray">الترجمة والتفسير العربي:</p>
                          <p className="text-xs sm:text-sm text-ink leading-relaxed font-bold">
                            {qa.answerAr}
                          </p>
                        </div>
                      )}

                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* VIEW 5: INTERACTIVE FLASHCARDS & QUIZ MODE */}
      {subTab === 'quiz' && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-action space-y-6 text-center">
            
            <div className="max-w-md mx-auto space-y-1">
              <h3 className="text-xl font-black text-ink flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-semantic-success" />
                <span>مختبر الحفظ والاسترجاع السريع</span>
              </h3>
              <p className="text-xs text-muted-gray font-bold">
                اقلب البطاقة لاختبار مدى جاهزيتك للإجابة عن السؤال باللغتين قبل الامتحان
              </p>
            </div>

            {/* Card Progress */}
            <div className="flex items-center justify-center gap-3 text-xs font-black text-ink tabular-nums">
              <span>السؤال {quizIndex + 1} من {activeLiterature.ministerialQA.length}</span>
              <div className="w-36 h-2.5 rounded-[4px] bg-progress-track border border-ink overflow-hidden">
                <div 
                  className="h-full bg-semantic-success transition-all duration-300"
                  style={{ width: `${((quizIndex + 1) / activeLiterature.ministerialQA.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Flashcard Box */}
            {activeLiterature.ministerialQA[quizIndex] && (
              <button
                type="button"
                id="interactive-flashcard"
                onClick={() => setIsFlipped(!isFlipped)}
                className={`w-full cursor-pointer min-h-[220px] sm:min-h-[260px] p-6 sm:p-8 rounded-[6px] border-3 border-ink shadow-brutal-lg transition-all flex flex-col justify-between items-center text-center select-none ${
                  isFlipped
                    ? 'bg-cobalt text-surface'
                    : 'bg-yellow/45 text-ink'
                }`}
              >
                <div className="w-full flex items-center justify-between text-xs font-black">
                  <span className={`px-2.5 py-1 rounded-[4px] border border-ink font-mono tabular-nums ${
                    isFlipped ? 'bg-yellow text-ink' : 'bg-surface text-ink'
                  }`}>
                    {activeLiterature.ministerialQA[quizIndex].year}
                  </span>
                  <span className="text-[11px] underline">
                    {isFlipped ? 'انقر لإعادة السؤال ↺' : 'انقر لكشف الجواب النموذجي ↺'}
                  </span>
                </div>

                <div className="my-auto space-y-3 max-w-2xl w-full min-w-0">
                  {!isFlipped ? (
                    <div className="space-y-2">
                      <p dir="ltr" className="text-base sm:text-xl font-black leading-snug text-left en-sentence text-ink break-words">
                        {activeLiterature.ministerialQA[quizIndex].question}
                      </p>
                      {activeLiterature.ministerialQA[quizIndex].questionAr && (
                        <p className="text-xs sm:text-sm font-bold text-muted-gray">
                          «{activeLiterature.ministerialQA[quizIndex].questionAr}»
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div dir="ltr" className="space-y-1 text-left">
                        <span className="text-xs font-black text-yellow font-mono">Model Answer:</span>
                        <p className="text-sm sm:text-lg font-mono font-black text-surface leading-relaxed en-sentence break-words">
                          {activeLiterature.ministerialQA[quizIndex].answer}
                        </p>
                      </div>
                      {activeLiterature.ministerialQA[quizIndex].answerAr && (
                        <p className="text-xs sm:text-sm text-paper font-bold">
                          «{activeLiterature.ministerialQA[quizIndex].answerAr}»
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className={`text-[11px] font-bold ${isFlipped ? 'text-yellow' : 'text-muted-gray'}`}>
                  {isFlipped ? 'الجواب النموذجي القياسي' : 'اختبر حفظك ثم اقلب البطاقة'}
                </div>
              </button>
            )}

            {/* Card Nav Controls */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                id="prev-quiz-card-btn"
                disabled={quizIndex === 0}
                onClick={() => {
                  setQuizIndex(prev => Math.max(0, prev - 1));
                  setIsFlipped(false);
                }}
                className="px-4 py-2 rounded-[4px] bg-surface hover:bg-paper disabled:opacity-40 border-2 border-ink shadow-brutal-sm text-xs font-black text-ink transition-colors cursor-pointer"
              >
                السابق
              </button>

              <button
                type="button"
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-5 py-2 rounded-[4px] bg-yellow hover:bg-yellow-hover border-2 border-ink shadow-brutal-sm text-ink text-xs font-black transition-colors cursor-pointer"
              >
                {isFlipped ? 'إظهار السؤال' : 'اقلب البطاقة'}
              </button>

              <button
                type="button"
                id="next-quiz-card-btn"
                disabled={quizIndex === activeLiterature.ministerialQA.length - 1}
                onClick={() => {
                  setQuizIndex(prev => Math.min(activeLiterature.ministerialQA.length - 1, prev + 1));
                  setIsFlipped(false);
                }}
                className="px-4 py-2 rounded-[4px] bg-surface hover:bg-paper disabled:opacity-40 border-2 border-ink shadow-brutal-sm text-xs font-black text-ink transition-colors cursor-pointer"
              >
                التالي
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
