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
      <div className="p-6 sm:p-8 bg-white border-3 border-[#202124] shadow-[5px_5px_0px_#202124] text-[#202124] space-y-4 relative overflow-hidden">
        
        <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3E6A5] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-[#202124] text-xs font-mono font-black">
            <GraduationCap className="w-4 h-4 text-[#405DE6]" />
            <span>QUESTION IV: LITERATURE & STORIES // 10 MARKS</span>
          </div>

          {/* Language Mode Toggle */}
          <div className="inline-flex items-center bg-[#F7F5EF] p-1 border-2 border-[#202124] text-xs font-black">
            <span className="px-2 text-[#202124] flex items-center gap-1 font-mono">
              <Languages className="w-3.5 h-3.5 text-[#405DE6]" />
              <span>LANG:</span>
            </span>
            <button
              id="lang-btn-bilingual"
              onClick={() => setLangMode('bilingual')}
              className={`px-3 py-1 transition-all cursor-pointer border ${
                langMode === 'bilingual'
                  ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
                  : 'bg-transparent text-[#202124] border-transparent hover:bg-white'
              }`}
            >
              ثنائي (En/Ar)
            </button>
            <button
              id="lang-btn-ar"
              onClick={() => setLangMode('ar')}
              className={`px-3 py-1 transition-all cursor-pointer border ${
                langMode === 'ar'
                  ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
                  : 'bg-transparent text-[#202124] border-transparent hover:bg-white'
              }`}
            >
              عربي فقط
            </button>
            <button
              id="lang-btn-en"
              onClick={() => setLangMode('en')}
              className={`px-3 py-1 transition-all cursor-pointer border ${
                langMode === 'en'
                  ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
                  : 'bg-transparent text-[#202124] border-transparent hover:bg-white'
              }`}
            >
              English Only
            </button>
          </div>
        </div>

        {/* Grade Badge */}
        <div className="flex items-center gap-2 relative z-10 self-start">
          <span className="px-3 py-1 bg-[#405DE6] text-white border-2 border-[#202124] font-black text-xs shadow-[2px_2px_0px_#202124]">
            {gradeMeta.nameAr}
          </span>
          {gradeMeta.isMinisterial && (
            <span className="px-2 py-0.5 bg-[#F2A18E] text-white font-mono font-black text-xs border border-[#202124]">
              ★ وزاري معتمد
            </span>
          )}
        </div>

        <div className="relative z-10 space-y-2">
          <h1 className="font-display text-2xl sm:text-4xl font-black tracking-tight text-[#202124]">
            {grade === 'third-intermediate' && 'القصص الوزارية المقررة • الثالث المتوسط (Story Time)'}
            {grade === 'fourth-preparatory' && 'الأدب المقرّر • الرابع الإعدادي (العلمي والأدبي)'}
            {grade === 'fifth-preparatory' && 'الأدب المقرّر • الخامس الإعدادي (العلمي والأدبي)'}
            {grade === 'sixth-preparatory' && 'الأدب الوزاري المقرّر • السادس الإعدادي • إشراف الأستاذ مصطفى تركي'}
          </h1>
          <p className="text-xs sm:text-sm text-[#202124]/80 max-w-3xl leading-relaxed font-medium">
            {grade === 'third-intermediate' && 'دراسة شاملة ومبسطة للقصص الوزارية المقررة للثالث المتوسط (كريم والزبون 50، الغزالة، أسطورة كرم، سلام أحمد وبر الوالدين) مع الأسئلة الوزارية النموذجية.'}
            {grade === 'fourth-preparatory' && 'دراسة نقدية وأكاديمية للمسرحية المقررة «تاجر البندقية» لويليام شكسبير، وقصيدة «الطريق الذي لم يُسلك» لروبرت فروست مع الشرح والتحليل.'}
            {grade === 'fifth-preparatory' && 'دراسة تحليلية لقصيدة «هجوم اللواء الخفيف» للورد ألفريد تينيسون، وقصة «بيت الدمية» لكاثرين مانسفيلد مع أهم الأسئلة والنماذج المقررة.'}
            {grade === 'sixth-preparatory' && 'المنهج الأدبي الوزاري المعتمد: دراسة تحليلية شاملة للكاتب العراقي محمد خضير وقصة «الأرجوحة» (The Swing)، والكاتبة النيوزيلندية كاثرين مانسفيلد وقصة «الكناري» (The Canary) مع الأسئلة الوزارية النموذجية.'}
          </p>
        </div>

        {/* Literature Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 pt-3 relative z-10">
          {storiesList.map((item, idx) => {
            const isActive = safeIndex === idx;
            const badgeText = item.genre || (item.id === 'lit-pride' ? 'الرواية المقررة • جين أوستن' : 'المسرحية المقررة • شكسبير');

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItemIndex(idx);
                  setActiveImageIdx(0);
                }}
                className={`p-3 text-right transition-all cursor-pointer border-2 min-w-[200px] flex-1 sm:flex-initial ${
                  isActive
                    ? 'bg-[#405DE6] text-white border-[#202124] shadow-[3px_3px_0px_#202124]'
                    : 'bg-white hover:bg-[#F7F5EF] text-[#202124] border-[#202124] shadow-[2px_2px_0px_#202124]'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold block ${isActive ? 'text-[#F3E6A5]' : 'text-[#F2A18E]'}`}>
                  {badgeText}
                </span>
                <span className="font-black text-sm block mt-0.5">
                  {item.titleAr}
                </span>
                <span className="text-xs font-mono opacity-80 block" dir="ltr">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-stone-200 text-xs sm:text-sm font-bold no-scrollbar w-full">
        <button
          id="subtab-overview"
          onClick={() => setSubTab('overview')}
          className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
            subTab === 'overview'
              ? 'bg-stone-900 text-white shadow-sm'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
          <span>القصة والحبكة والصور</span>
        </button>

        <button
          id="subtab-author"
          onClick={() => setSubTab('author')}
          className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
            subTab === 'author'
              ? 'bg-stone-900 text-white shadow-sm'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Feather className="w-4 h-4 text-amber-400 shrink-0" />
          <span>سيرة الكاتب وجوائزه</span>
        </button>

        <button
          id="subtab-characters"
          onClick={() => setSubTab('characters')}
          className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
            subTab === 'characters'
              ? 'bg-stone-900 text-white shadow-sm'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <User className="w-4 h-4 text-amber-400 shrink-0" />
          <span>الشخصيات والتحليل</span>
        </button>

        <button
          id="subtab-ministerial"
          onClick={() => setSubTab('ministerialQA')}
          className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
            subTab === 'ministerialQA'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-amber-200 shrink-0" />
          <span>الأسئلة الوزارية ({activeLiterature.ministerialQA.length})</span>
        </button>

        <button
          id="subtab-quiz"
          onClick={() => setSubTab('quiz')}
          className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
            subTab === 'quiz'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Sparkles className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>مختبر الحفظ الذاتي</span>
        </button>
      </div>

      {/* VIEW 1: STORY OVERVIEW & ARTWORK */}
      {subTab === 'overview' && (
        <div className="space-y-6">
          
          {/* Visual Artwork Card with Multi-Scene Selector */}
          <div className="rounded-3xl bg-white border border-stone-200 overflow-hidden shadow-sm">
            <div className="relative group">
              <img
                src={currentImage}
                alt={activeLiterature.title}
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-[420px] object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-5 sm:p-8 text-white">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-stone-950 font-black text-xs">
                    {activeLiterature.genreAr || activeLiterature.genre}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold text-xs">
                    {activeLiterature.genre}
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-4xl font-black text-amber-50 flex items-center gap-3">
                  <span>{activeLiterature.titleAr}</span>
                  <span className="text-xl sm:text-2xl text-amber-300 font-serif font-normal">
                    — {activeLiterature.title}
                  </span>
                  <button
                    onClick={() => playAudio(activeLiterature.title)}
                    title="استمع للنطق الإنجليزي"
                    className="p-1.5 rounded-full bg-white/20 hover:bg-amber-400 hover:text-stone-950 transition-colors"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </h2>

                <p className="text-xs sm:text-sm text-stone-200 mt-2 max-w-3xl leading-relaxed">
                  {langMode === 'en' ? currentImageCaptionEn : currentImageCaptionAr}
                </p>
                {langMode === 'bilingual' && currentImageCaptionEn && (
                  <p dir="ltr" className="text-xs text-stone-300 mt-1 italic text-left en-sentence">
                    "{currentImageCaptionEn}"
                  </p>
                )}
              </div>
            </div>

            {/* Scene Selector Thumbnails if available */}
            {activeLiterature.galleryImages && activeLiterature.galleryImages.length > 1 && (
              <div className="p-3 bg-stone-900 flex items-center gap-3 overflow-x-auto border-t border-stone-800">
                <span className="text-xs font-bold text-amber-400 whitespace-nowrap flex items-center gap-1.5 px-2">
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>معرض المشاهد واللوحات:</span>
                </span>
                {activeLiterature.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImageIdx === idx
                        ? 'border-amber-400 scale-105 shadow-md'
                        : 'border-white/20 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.captionEn}
                      referrerPolicy="no-referrer"
                      className="w-16 sm:w-20 h-10 sm:h-12 object-cover"
                    />
                    {activeImageIdx === idx && (
                      <div className="absolute inset-0 bg-amber-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Quick Metadata Bar */}
            <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-amber-600" />
                <span className="font-bold text-stone-600">المؤلف:</span>
                <span className="font-black text-stone-900">{activeLiterature.authorAr} ({activeLiterature.author})</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span className="font-bold text-stone-600">الفترة الزمنية:</span>
                <span className="font-mono font-bold text-stone-800">{activeLiterature.authorYears}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span className="font-bold text-stone-600">الوزن الوزاري:</span>
                <span className="font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-md">السؤال الرابع • 10 درجات</span>
              </div>
            </div>
          </div>

          {/* Historical & Literary Context */}
          {(activeLiterature.historicalContextAr || activeLiterature.historicalContextEn) && (
            <div className="p-5 sm:p-6 rounded-3xl bg-amber-50/60 border border-amber-200/80 space-y-3">
              <h3 className="text-sm sm:text-base font-black text-amber-950 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-600" />
                <span>الظرف التاريخي والظهور الأدبي (Historical Context)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm leading-relaxed">
                {(langMode === 'bilingual' || langMode === 'ar') && activeLiterature.historicalContextAr && (
                  <div className="p-4 rounded-2xl bg-white/80 border border-amber-200 text-stone-800 space-y-1">
                    <p className="font-bold text-amber-900 text-xs">الظرف التاريخي بالعربية:</p>
                    <p>{activeLiterature.historicalContextAr}</p>
                  </div>
                )}
                {(langMode === 'bilingual' || langMode === 'en') && activeLiterature.historicalContextEn && (
                  <div dir="ltr" className="p-4 rounded-2xl bg-white/80 border border-amber-200 text-stone-800 space-y-1 text-left">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-amber-900 text-xs font-mono">Historical Background:</p>
                      <button
                        onClick={() => playAudio(activeLiterature.historicalContextEn!)}
                        className="text-amber-700 hover:text-amber-950"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="font-medium en-sentence">{activeLiterature.historicalContextEn}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Plot Summary */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-stone-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-600" />
                <span>ملخص الأحداث والحبكة (Plot & Story Summary)</span>
              </h3>
            </div>

            <div className="space-y-4">
              {(langMode === 'bilingual' || langMode === 'ar') && (
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-stone-200 text-stone-800">
                      الملخص المعتمد باللغة العربية
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal whitespace-pre-line">
                    {activeLiterature.summaryAr}
                  </div>
                </div>
              )}

              {(langMode === 'bilingual' || langMode === 'en') && activeLiterature.summaryEn && (
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 dir-ltr text-right">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => playAudio(activeLiterature.summaryEn!)}
                      className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Listen to Summary</span>
                    </button>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-stone-200 text-stone-800">
                      Standard English Plot Summary
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal whitespace-pre-line">
                    {activeLiterature.summaryEn}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Moral Lesson & Key Themes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Moral Lesson */}
            <div className="p-5 sm:p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <h4 className="text-sm sm:text-base font-black text-emerald-950 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>الدرس الأخلاقي والرسالة الإنسانية (Moral Lesson)</span>
              </h4>
              <div className="space-y-2 text-xs sm:text-sm">
                {(langMode === 'bilingual' || langMode === 'ar') && activeLiterature.moralLessonAr && (
                  <p className="text-emerald-900 leading-relaxed font-medium bg-white/70 p-3.5 rounded-xl border border-emerald-100">
                    {activeLiterature.moralLessonAr}
                  </p>
                )}
                {(langMode === 'bilingual' || langMode === 'en') && activeLiterature.moralLessonEn && (
                  <p dir="ltr" className="text-emerald-950 leading-relaxed font-medium bg-white/70 p-3.5 rounded-xl border border-emerald-100 text-left en-sentence">
                    {activeLiterature.moralLessonEn}
                  </p>
                )}
              </div>
            </div>

            {/* Key Themes */}
            <div className="p-5 sm:p-6 rounded-3xl bg-indigo-50/70 border border-indigo-200 space-y-3">
              <h4 className="text-sm sm:text-base font-black text-indigo-950 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>الثيمات والأفكار المركزية (Key Themes)</span>
              </h4>
              <div className="space-y-2 text-xs leading-relaxed">
                {activeLiterature.keyThemes.map((theme, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/80 border border-indigo-100 space-y-1">
                    {(langMode === 'bilingual' || langMode === 'ar') && (
                      <p className="font-bold text-indigo-950">
                        <span className="text-indigo-600 font-extrabold ml-1.5">✦</span>
                        {theme}
                      </p>
                    )}
                    {(langMode === 'bilingual' || langMode === 'en') && activeLiterature.keyThemesEn && activeLiterature.keyThemesEn[i] && (
                      <p dir="ltr" className="text-indigo-800 font-medium text-left en-sentence">
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
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <h4 className="text-sm sm:text-base font-black text-stone-900 flex items-center gap-2">
                <Languages className="w-4 h-4 text-amber-600" />
                <span>المفردات والمصطلحات الوزارية الهامة (Key Literary Vocabulary)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeLiterature.keyVocabulary.map((vocab, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5 hover:border-amber-300 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-stone-900 font-mono">{vocab.word}</span>
                      <button
                        onClick={() => playAudio(vocab.word)}
                        className="text-stone-400 hover:text-amber-600 p-1"
                        title="نطق المفردة"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs font-bold text-amber-800">{vocab.meaningAr}</p>
                    <p dir="ltr" className="text-[11px] text-stone-600 font-medium text-left border-t border-stone-200/60 pt-1 en-sentence">
                      "{vocab.contextEn}"
                    </p>
                    <p className="text-[11px] text-stone-500">
                      «{vocab.contextAr}»
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quotes Section */}
          {activeLiterature.quotes && activeLiterature.quotes.length > 0 && (
            <div className="p-5 sm:p-6 rounded-3xl bg-stone-900 text-white space-y-4">
              <h4 className="text-sm sm:text-base font-black text-amber-400 flex items-center gap-2">
                <Quote className="w-4 h-4" />
                <span>اقتباسات أدبية خالدة من النص (Immortal Quotes)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeLiterature.quotes.map((quote, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <p dir="ltr" className="text-xs sm:text-sm text-stone-200 italic text-left font-serif en-sentence">
                      "{quote.textEn}"
                    </p>
                    <p className="text-xs text-amber-200 font-medium">
                      «{quote.textAr}»
                    </p>
                    <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[11px] text-stone-400 font-bold">
                      <span>{quote.speaker}</span>
                      <button
                        onClick={() => playAudio(quote.textEn)}
                        className="text-amber-400 hover:text-amber-300 flex items-center gap-1"
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
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
            <div className="border-b border-stone-100 pb-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-black text-stone-900">
                  سيرة الكاتب: {activeLiterature.authorAr} ({activeLiterature.author})
                </h3>
                <button
                  onClick={() => playAudio(activeLiterature.author)}
                  className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-amber-600" />
                  <span>نطق الاسم</span>
                </button>
              </div>
              <p className="text-xs sm:text-sm text-stone-500 font-medium">
                السنوات: <strong className="text-stone-800 font-mono">{activeLiterature.authorYears}</strong> • تصنيف الأدب: <strong className="text-stone-800">{activeLiterature.genreAr}</strong>
              </p>
            </div>

            {/* Author Bio Points Side by Side */}
            <div className="space-y-3">
              <h4 className="text-sm font-black text-stone-900 flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-amber-600" />
                <span>محطات حياة الكاتب وفق الملزمة الوزارية (Life Milestones)</span>
              </h4>

              <div className="space-y-3">
                {activeLiterature.authorBioAr?.map((pointAr, i) => {
                  const pointEn = activeLiterature.authorBioEn?.[i] || '';

                  return (
                    <div 
                      key={i} 
                      className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 hover:border-amber-300 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-950 font-black text-xs flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <div className="flex-1 space-y-2">
                          {(langMode === 'bilingual' || langMode === 'ar') && (
                            <p className="text-xs sm:text-sm font-bold text-stone-800 leading-relaxed">
                              {pointAr}
                            </p>
                          )}
                          {(langMode === 'bilingual' || langMode === 'en') && pointEn && (
                            <div dir="ltr" className="flex items-start justify-between gap-2 text-left pt-1 border-t border-stone-200/60">
                              <p className="text-xs text-stone-600 font-medium leading-relaxed en-sentence">
                                {pointEn}
                              </p>
                              <button
                                onClick={() => playAudio(pointEn)}
                                className="text-stone-400 hover:text-amber-600 shrink-0 p-1"
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
              <div className="p-5 sm:p-6 rounded-3xl bg-amber-50/70 border border-amber-200 space-y-3">
                <h4 className="text-sm sm:text-base font-black text-amber-950 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>المكانة الأدبية وأبرز الإنجازات (Prizes & Legacy)</span>
                </h4>
                <div className="space-y-2">
                  {activeLiterature.authorPrizes.map((prize, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-amber-200 text-xs sm:text-sm font-semibold text-stone-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 flex items-center gap-2">
                <User className="w-6 h-6 text-amber-600" />
                <span>دليل الشخصيات الوزارية والتحليل النفسي والأدبي</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                التركيز على صفات ودور كل شخصية كما ترد في أسئلة الامتحان الوزاري
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeLiterature.characters.map((char, i) => (
                <div 
                  key={i}
                  className="p-5 rounded-3xl bg-stone-50 border border-stone-200 hover:border-amber-400 transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-black text-stone-900 flex items-center gap-2">
                        <span>{char.nameAr || char.name}</span>
                        <span className="text-xs text-stone-400 font-normal">({char.name})</span>
                      </h4>
                      <button
                        onClick={() => playAudio(char.name)}
                        className="text-stone-400 hover:text-amber-600"
                        title="نطق اسم الشخصية"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 text-xs font-bold">
                      <span>{char.roleAr || char.role}</span>
                      <span className="text-[10px] text-amber-700 font-mono">({char.role})</span>
                    </div>

                    {(langMode === 'bilingual' || langMode === 'ar') && (
                      <p className="text-xs text-stone-700 leading-relaxed font-medium pt-1">
                        {char.descriptionAr || char.description}
                      </p>
                    )}

                    {(langMode === 'bilingual' || langMode === 'en') && (
                      <p dir="ltr" className="text-xs text-stone-600 leading-relaxed font-normal pt-1 border-t border-stone-200/60 text-left en-sentence">
                        {char.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500">
                    <span>تحليل وزاري معتمد</span>
                    <span className="text-emerald-700 font-bold">جاهز للامتحان</span>
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
          <div className="p-5 rounded-3xl bg-white border border-stone-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 min-w-[240px]">
              <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="search-literature-qa"
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="ابحث في الأسئلة الوزارية، السنوات، أو الكلمات المفتاحية..."
                className="w-full pl-4 pr-10 py-2.5 text-xs sm:text-sm rounded-2xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium"
              />
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                id="reveal-all-qa-btn"
                onClick={revealAllQA}
                className="px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-amber-700" />
                <span>إظهار جميع الأجوبة</span>
              </button>

              <button
                id="hide-all-qa-btn"
                onClick={hideAllQA}
                className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <EyeOff className="w-3.5 h-3.5 text-stone-600" />
                <span>إخفاء الكل</span>
              </button>
            </div>
          </div>

          {/* QA List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <p className="text-xs font-bold text-stone-500">
                تم العثور على <strong className="text-stone-900">{filteredQA.length}</strong> أسئلة وزارية
              </p>
              <span className="text-xs text-amber-700 font-bold">
                نمط الإجابة المعتمد لدى لجان التصحيح الوزاري
              </span>
            </div>

            {filteredQA.map((qa: LiteratureQA, i: number) => {
              const isRevealed = !!revealedQA[i];

              return (
                <div 
                  key={qa.id || i}
                  className="p-5 sm:p-6 rounded-3xl bg-white border border-stone-200 hover:border-amber-400 transition-all space-y-3 shadow-xs"
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5 flex-1">
                      
                      {/* English Question */}
                      <div dir="ltr" className="flex items-start justify-between gap-2 text-left">
                        <p className="text-sm sm:text-base font-black text-stone-900 leading-snug en-sentence">
                          <span className="text-amber-600 font-extrabold mr-2 font-mono">Q{i + 1}.</span>
                          {qa.question}
                        </p>
                        <button
                          onClick={() => playAudio(qa.question)}
                          title="استمع لنطق السؤال"
                          className="text-stone-400 hover:text-amber-600 p-1 shrink-0"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Arabic Translation */}
                      {(langMode === 'bilingual' || langMode === 'ar') && qa.questionAr && (
                        <p className="text-xs sm:text-sm font-bold text-stone-600 pr-1">
                          «{qa.questionAr}»
                        </p>
                      )}
                    </div>

                    {/* Year Badge */}
                    <span className="text-[11px] font-black px-2.5 py-1 rounded-xl bg-amber-100 text-amber-900 border border-amber-200 whitespace-nowrap shrink-0">
                      {qa.year}
                    </span>
                  </div>

                  {/* Toggle Button & Hint */}
                  <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                    <button
                      id={`toggle-qa-${i}`}
                      onClick={() => toggleQA(i)}
                      className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>{isRevealed ? 'إخفاء الجواب النموذجي' : 'إظهار الجواب النموذجي والترجمة'}</span>
                    </button>

                    {qa.keyHint && (
                      <span className="text-[11px] font-medium text-stone-500 hidden sm:inline">
                        مفتاح الحل: <strong className="text-amber-800">{qa.keyHint}</strong>
                      </span>
                    )}
                  </div>

                  {/* Revealed Answer */}
                  {isRevealed && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-stone-900 text-white space-y-3 mt-2 border border-stone-800">
                      
                      {/* English Model Answer */}
                      <div dir="ltr" className="space-y-1 text-left">
                        <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono">Model Answer:</span>
                            <span className="text-stone-300 font-normal">(الجواب المعتمد بالكنترول)</span>
                          </div>
                          <button
                            onClick={() => playAudio(qa.answer)}
                            className="text-stone-300 hover:text-white flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-md"
                          >
                            <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                            <span>استمع للإجابة</span>
                          </button>
                        </div>
                        <p className="font-mono text-xs sm:text-sm font-semibold text-emerald-300 leading-relaxed en-sentence">
                          {qa.answer}
                        </p>
                      </div>

                      {/* Arabic Translation of Answer */}
                      {(langMode === 'bilingual' || langMode === 'ar') && qa.answerAr && (
                        <div className="pt-2 border-t border-stone-800 space-y-1">
                          <p className="text-[11px] font-bold text-stone-400">الترجمة والتفسير العربي:</p>
                          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-medium">
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
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6 text-center">
            
            <div className="max-w-md mx-auto space-y-1">
              <h3 className="text-xl font-black text-stone-900 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span>مختبر الحفظ والاسترجاع السريع</span>
              </h3>
              <p className="text-xs text-stone-500">
                اقلب البطاقة لاختبار مدى جاهزيتك للإجابة عن السؤال باللغتين قبل الامتحان
              </p>
            </div>

            {/* Card Progress */}
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-stone-600">
              <span>السؤال {quizIndex + 1} من {activeLiterature.ministerialQA.length}</span>
              <div className="w-36 h-2 rounded-full bg-stone-100 overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-300"
                  style={{ width: `${((quizIndex + 1) / activeLiterature.ministerialQA.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Flashcard Box */}
            {activeLiterature.ministerialQA[quizIndex] && (
              <div 
                id="interactive-flashcard"
                onClick={() => setIsFlipped(!isFlipped)}
                className={`cursor-pointer min-h-[220px] sm:min-h-[260px] p-6 sm:p-8 rounded-3xl border-2 transition-all flex flex-col justify-between items-center text-center select-none shadow-md ${
                  isFlipped
                    ? 'bg-stone-900 border-stone-800 text-white'
                    : 'bg-gradient-to-b from-amber-50 to-amber-100/50 border-amber-300 text-stone-900'
                }`}
              >
                <div className="w-full flex items-center justify-between text-xs font-bold opacity-80">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-900">
                    {activeLiterature.ministerialQA[quizIndex].year}
                  </span>
                  <span className="text-[11px] underline">
                    {isFlipped ? 'انقر لإعادة السؤال ↺' : 'انقر لكشف الجواب النموذجي ↺'}
                  </span>
                </div>

                <div className="my-auto space-y-3 max-w-2xl">
                  {!isFlipped ? (
                    <div className="space-y-2">
                      <p dir="ltr" className="text-base sm:text-xl font-black leading-snug text-left en-sentence">
                        {activeLiterature.ministerialQA[quizIndex].question}
                      </p>
                      {activeLiterature.ministerialQA[quizIndex].questionAr && (
                        <p className="text-xs sm:text-sm font-semibold text-stone-600">
                          «{activeLiterature.ministerialQA[quizIndex].questionAr}»
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div dir="ltr" className="space-y-1 text-left">
                        <span className="text-xs font-bold text-amber-400 font-mono">Model Answer:</span>
                        <p className="text-sm sm:text-lg font-mono font-semibold text-emerald-300 leading-relaxed en-sentence">
                          {activeLiterature.ministerialQA[quizIndex].answer}
                        </p>
                      </div>
                      {activeLiterature.ministerialQA[quizIndex].answerAr && (
                        <p className="text-xs sm:text-sm text-stone-300 font-medium">
                          «{activeLiterature.ministerialQA[quizIndex].answerAr}»
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="text-[11px] font-bold opacity-70">
                  {isFlipped ? 'الجواب الوزاري المعتمد' : 'اختبر حفظك ثم اقلب البطاقة'}
                </div>
              </div>
            )}

            {/* Card Nav Controls */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                id="prev-quiz-card-btn"
                disabled={quizIndex === 0}
                onClick={() => {
                  setQuizIndex(prev => Math.max(0, prev - 1));
                  setIsFlipped(false);
                }}
                className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-xs font-bold text-stone-700 transition-colors"
              >
                السابق
              </button>

              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-black transition-colors"
              >
                {isFlipped ? 'إظهار السؤال' : 'اقلب البطاقة'}
              </button>

              <button
                id="next-quiz-card-btn"
                disabled={quizIndex === activeLiterature.ministerialQA.length - 1}
                onClick={() => {
                  setQuizIndex(prev => Math.min(activeLiterature.ministerialQA.length - 1, prev + 1));
                  setIsFlipped(false);
                }}
                className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-xs font-bold text-stone-700 transition-colors"
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
