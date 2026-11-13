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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3E6A5] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-[#202124] text-xs font-mono font-bold rounded-xs">
            <GraduationCap className="w-4 h-4 text-[#405DE6]" />
            <span>السؤال الرابع: نصوص الأدب والمطالعة (10 درجات)</span>
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
            <span className="px-2 py-0.5 bg-[#F2A18E] text-[#202124] font-mono font-black text-xs border-2 border-[#202124] rounded-[4px]">
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
                <span className={`text-[10px] font-mono font-bold block ${isActive ? 'text-[#F3E6A5]' : 'text-[#B83A3A]'}`}>
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
      <div className="flex items-center gap-2 overflow-x-auto p-1.5 bg-[#F7F5EF] border-2 border-[#202124] rounded-[6px] shadow-[3px_3px_0px_#202124] text-xs sm:text-sm font-black no-scrollbar w-full">
        <button
          type="button"
          id="subtab-overview"
          onClick={() => setSubTab('overview')}
          className={`px-3.5 sm:px-4 py-2 rounded-[4px] border-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
            subTab === 'overview'
              ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
              : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
          }`}
        >
          <BookOpen className={`w-4 h-4 shrink-0 ${subTab === 'overview' ? 'text-[#F3E6A5]' : 'text-[#405DE6]'}`} />
          <span>القصة والحبكة والصور</span>
        </button>

        <button
          type="button"
          id="subtab-author"
          onClick={() => setSubTab('author')}
          className={`px-3.5 sm:px-4 py-2 rounded-[4px] border-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
            subTab === 'author'
              ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
              : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
          }`}
        >
          <Feather className={`w-4 h-4 shrink-0 ${subTab === 'author' ? 'text-[#F3E6A5]' : 'text-[#405DE6]'}`} />
          <span>سيرة الكاتب وجوائزه</span>
        </button>

        <button
          type="button"
          id="subtab-characters"
          onClick={() => setSubTab('characters')}
          className={`px-3.5 sm:px-4 py-2 rounded-[4px] border-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
            subTab === 'characters'
              ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
              : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
          }`}
        >
          <User className={`w-4 h-4 shrink-0 ${subTab === 'characters' ? 'text-[#F3E6A5]' : 'text-[#405DE6]'}`} />
          <span>الشخصيات والتحليل</span>
        </button>

        <button
          type="button"
          id="subtab-ministerial"
          onClick={() => setSubTab('ministerialQA')}
          className={`px-3.5 sm:px-4 py-2 rounded-[4px] border-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
            subTab === 'ministerialQA'
              ? 'bg-[#F3E6A5] text-[#202124] border-[#202124] shadow-[2px_2px_0px_#202124]'
              : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-[#B83A3A] shrink-0" />
          <span>الأسئلة الوزارية ({activeLiterature.ministerialQA.length})</span>
        </button>

        <button
          type="button"
          id="subtab-quiz"
          onClick={() => setSubTab('quiz')}
          className={`px-3.5 sm:px-4 py-2 rounded-[4px] border-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
            subTab === 'quiz'
              ? 'bg-[#287A52] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
              : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
          }`}
        >
          <Sparkles className={`w-4 h-4 shrink-0 ${subTab === 'quiz' ? 'text-[#F3E6A5]' : 'text-[#287A52]'}`} />
          <span>مختبر الحفظ الذاتي</span>
        </button>
      </div>

      {/* VIEW 1: STORY OVERVIEW & ARTWORK */}
      {subTab === 'overview' && (
        <div className="space-y-6">
          
          {/* Visual Artwork Card with Multi-Scene Selector */}
          <div className="rounded-[6px] bg-white border-3 border-[#202124] shadow-[5px_5px_0px_#202124] overflow-hidden">
            <div className="relative group">
              <img
                src={currentImage}
                alt={activeLiterature.title}
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-[420px] object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/95 via-[#202124]/45 to-transparent flex flex-col justify-end p-5 sm:p-8 text-white">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-[4px] bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] font-black text-xs">
                    {activeLiterature.genreAr || activeLiterature.genre}
                  </span>
                  <span className="px-3 py-1 rounded-[4px] bg-[#202124]/80 border border-white/40 text-white font-mono font-bold text-xs">
                    {activeLiterature.genre}
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-4xl font-black text-white flex flex-wrap items-center gap-3">
                  <span>{activeLiterature.titleAr}</span>
                  <span className="text-xl sm:text-2xl text-[#F3E6A5] font-mono font-bold" dir="ltr">
                    — {activeLiterature.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => playAudio(activeLiterature.title)}
                    aria-label="استمع للنطق الإنجليزي"
                    title="استمع للنطق الإنجليزي"
                    className="p-2 rounded-[4px] bg-white text-[#202124] border-2 border-[#202124] hover:bg-[#F3E6A5] transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </h2>

                <p className="text-xs sm:text-sm text-[#F7F5EF] mt-2 max-w-3xl leading-relaxed font-medium">
                  {langMode === 'en' ? currentImageCaptionEn : currentImageCaptionAr}
                </p>
                {langMode === 'bilingual' && currentImageCaptionEn && (
                  <p dir="ltr" className="text-xs text-[#F3E6A5] mt-1 italic text-left en-sentence">
                    "{currentImageCaptionEn}"
                  </p>
                )}
              </div>
            </div>

            {/* Scene Selector Thumbnails if available */}
            {activeLiterature.galleryImages && activeLiterature.galleryImages.length > 1 && (
              <div className="p-3 bg-[#F7F5EF] flex items-center gap-3 overflow-x-auto border-t-2 border-[#202124]">
                <span className="text-xs font-black text-[#202124] whitespace-nowrap flex items-center gap-1.5 px-2">
                  <ImageIcon className="w-3.5 h-3.5 text-[#405DE6]" />
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
                        ? 'border-[#405DE6] shadow-[2px_2px_0px_#202124]'
                        : 'border-[#202124]/40 opacity-75 hover:opacity-100 hover:border-[#202124]'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.captionEn}
                      referrerPolicy="no-referrer"
                      className="w-16 sm:w-20 h-10 sm:h-12 object-cover"
                    />
                    {activeImageIdx === idx && (
                      <div className="absolute inset-0 bg-[#405DE6]/30 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white drop-shadow" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Quick Metadata Bar */}
            <div className="p-4 sm:p-5 bg-[#F7F5EF] border-t-2 border-[#202124] flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#405DE6]" />
                <span className="font-bold text-[#747474]">المؤلف:</span>
                <span className="font-black text-[#202124]">{activeLiterature.authorAr} ({activeLiterature.author})</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#405DE6]" />
                <span className="font-bold text-[#747474]">الفترة الزمنية:</span>
                <span className="font-mono font-bold text-[#202124] tabular-nums">{activeLiterature.authorYears}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#405DE6]" />
                <span className="font-bold text-[#747474]">الوزن الوزاري:</span>
                <span className="font-black text-[#202124] bg-[#F3E6A5] border border-[#202124] px-2.5 py-0.5 rounded-[4px] tabular-nums">السؤال الرابع • 10 درجات</span>
              </div>
            </div>
          </div>

          {/* Historical & Literary Context */}
          {(activeLiterature.historicalContextAr || activeLiterature.historicalContextEn) && (
            <div className="p-5 sm:p-6 rounded-[6px] bg-[#F3E6A5]/30 border-2 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-3">
              <h3 className="text-sm sm:text-base font-black text-[#202124] flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#B83A3A]" />
                <span>الظرف التاريخي والظهور الأدبي (Historical Context)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm leading-relaxed">
                {(langMode === 'bilingual' || langMode === 'ar') && activeLiterature.historicalContextAr && (
                  <div className="p-4 rounded-[4px] bg-white border-2 border-[#202124] text-[#202124] space-y-1">
                    <p className="font-black text-[#405DE6] text-xs">الظرف التاريخي بالعربية:</p>
                    <p>{activeLiterature.historicalContextAr}</p>
                  </div>
                )}
                {(langMode === 'bilingual' || langMode === 'en') && activeLiterature.historicalContextEn && (
                  <div dir="ltr" className="p-4 rounded-[4px] bg-white border-2 border-[#202124] text-[#202124] space-y-1 text-left">
                    <div className="flex items-center justify-between">
                      <p className="font-black text-[#405DE6] text-xs font-mono">Historical Background:</p>
                      <button
                        type="button"
                        onClick={() => playAudio(activeLiterature.historicalContextEn!)}
                        aria-label="Listen to historical background"
                        className="text-[#405DE6] hover:text-[#202124] p-1 cursor-pointer"
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
          <div className="p-6 sm:p-8 rounded-[6px] bg-white border-2 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-[#202124] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#405DE6]" />
                <span>ملخص الأحداث والحبكة (Plot & Story Summary)</span>
              </h3>
            </div>

            <div className="space-y-4 lesson-reading">
              {(langMode === 'bilingual' || langMode === 'ar') && (
                <div className="p-5 rounded-[4px] bg-[#F7F5EF] border-2 border-[#202124] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-[4px] bg-[#F3E6A5] border border-[#202124] text-[#202124]">
                      الملخص المعتمد باللغة العربية
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#202124] leading-relaxed font-medium whitespace-pre-line">
                    {activeLiterature.summaryAr}
                  </div>
                </div>
              )}

              {(langMode === 'bilingual' || langMode === 'en') && activeLiterature.summaryEn && (
                <div className="p-5 rounded-[4px] bg-[#F7F5EF] border-2 border-[#202124] space-y-2 dir-ltr text-left">
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => playAudio(activeLiterature.summaryEn!)}
                      className="text-xs font-black text-[#405DE6] hover:text-[#202124] flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Listen to Summary</span>
                    </button>
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-[4px] bg-[#E9ECFA] border border-[#202124] text-[#202124]">
                      Standard English Plot Summary
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#202124] leading-relaxed font-normal whitespace-pre-line en-sentence">
                    {activeLiterature.summaryEn}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Moral Lesson & Key Themes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Moral Lesson */}
            <div className="p-5 sm:p-6 rounded-[6px] bg-[#D7E9DA]/35 border-2 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-3">
              <h4 className="text-sm sm:text-base font-black text-[#202124] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#287A52]" />
                <span>الدرس الأخلاقي والرسالة الإنسانية (Moral Lesson)</span>
              </h4>
              <div className="space-y-2 text-xs sm:text-sm">
                {(langMode === 'bilingual' || langMode === 'ar') && activeLiterature.moralLessonAr && (
                  <p className="text-[#202124] leading-relaxed font-medium bg-white p-3.5 rounded-[4px] border-2 border-[#202124]">
                    {activeLiterature.moralLessonAr}
                  </p>
                )}
                {(langMode === 'bilingual' || langMode === 'en') && activeLiterature.moralLessonEn && (
                  <p dir="ltr" className="text-[#202124] leading-relaxed font-medium bg-white p-3.5 rounded-[4px] border-2 border-[#202124] text-left en-sentence">
                    {activeLiterature.moralLessonEn}
                  </p>
                )}
              </div>
            </div>

            {/* Key Themes */}
            <div className="p-5 sm:p-6 rounded-[6px] bg-[#E9ECFA]/60 border-2 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-3">
              <h4 className="text-sm sm:text-base font-black text-[#202124] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#405DE6]" />
                <span>الثيمات والأفكار المركزية (Key Themes)</span>
              </h4>
              <div className="space-y-2 text-xs leading-relaxed">
                {activeLiterature.keyThemes.map((theme, i) => (
                  <div key={i} className="p-3 rounded-[4px] bg-white border-2 border-[#202124] space-y-1">
                    {(langMode === 'bilingual' || langMode === 'ar') && (
                      <p className="font-bold text-[#202124]">
                        <span className="text-[#405DE6] font-extrabold ml-1.5">✦</span>
                        {theme}
                      </p>
                    )}
                    {(langMode === 'bilingual' || langMode === 'en') && activeLiterature.keyThemesEn && activeLiterature.keyThemesEn[i] && (
                      <p dir="ltr" className="text-[#405DE6] font-bold text-left en-sentence">
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
            <div className="p-5 sm:p-6 rounded-[6px] bg-white border-2 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-4">
              <h4 className="text-sm sm:text-base font-black text-[#202124] flex items-center gap-2">
                <Languages className="w-4 h-4 text-[#405DE6]" />
                <span>المفردات والمصطلحات الوزارية الهامة (Key Literary Vocabulary)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeLiterature.keyVocabulary.map((vocab, i) => (
                  <div key={i} className="p-3.5 rounded-[4px] bg-[#F7F5EF] border-2 border-[#202124] space-y-1.5 hover:bg-white transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-sm text-[#202124] font-mono" dir="ltr">{vocab.word}</span>
                      <button
                        type="button"
                        onClick={() => playAudio(vocab.word)}
                        className="text-[#405DE6] hover:text-[#202124] p-1 cursor-pointer"
                        aria-label="نطق المفردة"
                        title="نطق المفردة"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs font-black text-[#405DE6]">{vocab.meaningAr}</p>
                    <p dir="ltr" className="text-[11px] text-[#202124] font-medium text-left border-t border-[#202124]/15 pt-1 en-sentence">
                      "{vocab.contextEn}"
                    </p>
                    <p className="text-[11px] text-[#747474] font-bold">
                      «{vocab.contextAr}»
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quotes Section */}
          {activeLiterature.quotes && activeLiterature.quotes.length > 0 && (
            <div className="p-5 sm:p-6 rounded-[6px] bg-[#DCD8FA]/35 border-3 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-4">
              <h4 className="text-sm sm:text-base font-black text-[#202124] flex items-center gap-2">
                <Quote className="w-4 h-4 text-[#405DE6]" />
                <span>اقتباسات أدبية خالدة من النص (Immortal Quotes)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeLiterature.quotes.map((quote, i) => (
                  <div key={i} className="p-4 rounded-[4px] bg-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124] space-y-2">
                    <p dir="ltr" className="text-xs sm:text-sm text-[#202124] font-bold italic text-left en-sentence">
                      "{quote.textEn}"
                    </p>
                    <p className="text-xs text-[#405DE6] font-bold">
                      «{quote.textAr}»
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-[#202124]/15 text-[11px] text-[#747474] font-bold">
                      <span>{quote.speaker}</span>
                      <button
                        type="button"
                        onClick={() => playAudio(quote.textEn)}
                        className="text-[#405DE6] hover:text-[#202124] flex items-center gap-1 cursor-pointer"
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
          <div className="p-6 sm:p-8 rounded-[6px] bg-white border-2 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-6">
            <div className="border-b-2 border-[#202124] pb-5 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-[#202124]">
                  سيرة الكاتب: {activeLiterature.authorAr} ({activeLiterature.author})
                </h3>
                <button
                  type="button"
                  onClick={() => playAudio(activeLiterature.author)}
                  className="px-3 py-1.5 rounded-[4px] bg-[#F3E6A5] hover:bg-[#E5D792] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-black flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-4 h-4 text-[#202124]" />
                  <span>نطق الاسم</span>
                </button>
              </div>
              <p className="text-xs sm:text-sm text-[#747474] font-bold">
                السنوات: <strong className="text-[#202124] font-mono tabular-nums">{activeLiterature.authorYears}</strong> • تصنيف الأدب: <strong className="text-[#202124]">{activeLiterature.genreAr}</strong>
              </p>
            </div>

            {/* Author Bio Points Side by Side */}
            <div className="space-y-3">
              <h4 className="text-sm font-black text-[#202124] flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-[#405DE6]" />
                <span>محطات حياة الكاتب وفق الملزمة الوزارية (Life Milestones)</span>
              </h4>

              <div className="space-y-3">
                {activeLiterature.authorBioAr?.map((pointAr, i) => {
                  const pointEn = activeLiterature.authorBioEn?.[i] || '';

                  return (
                    <div 
                      key={i} 
                      className="p-4 sm:p-5 rounded-[4px] bg-[#F7F5EF] border-2 border-[#202124] space-y-2 hover:bg-white transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="w-7 h-7 rounded-[4px] bg-[#F3E6A5] border-2 border-[#202124] text-[#202124] font-mono font-black text-xs flex items-center justify-center shrink-0 tabular-nums">
                          {i + 1}
                        </span>
                        <div className="flex-1 space-y-2">
                          {(langMode === 'bilingual' || langMode === 'ar') && (
                            <p className="text-xs sm:text-sm font-bold text-[#202124] leading-relaxed">
                              {pointAr}
                            </p>
                          )}
                          {(langMode === 'bilingual' || langMode === 'en') && pointEn && (
                            <div dir="ltr" className="flex items-start justify-between gap-2 text-left pt-2 border-t border-[#202124]/15">
                              <p className="text-xs text-[#202124] font-medium leading-relaxed en-sentence">
                                {pointEn}
                              </p>
                              <button
                                type="button"
                                onClick={() => playAudio(pointEn)}
                                className="text-[#405DE6] hover:text-[#202124] shrink-0 p-1 cursor-pointer"
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
              <div className="p-5 sm:p-6 rounded-[6px] bg-[#F3E6A5]/35 border-2 border-[#202124] space-y-3">
                <h4 className="text-sm sm:text-base font-black text-[#202124] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#405DE6]" />
                  <span>المكانة الأدبية وأبرز الإنجازات (Prizes & Legacy)</span>
                </h4>
                <div className="space-y-2">
                  {activeLiterature.authorPrizes.map((prize, idx) => (
                    <div key={idx} className="p-3.5 rounded-[4px] bg-white border-2 border-[#202124] text-xs sm:text-sm font-bold text-[#202124] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#287A52] shrink-0" />
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
          <div className="p-6 sm:p-8 rounded-[6px] bg-white border-2 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#202124] flex items-center gap-2">
                <User className="w-6 h-6 text-[#405DE6]" />
                <span>دليل الشخصيات الوزارية والتحليل النفسي والأدبي</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#747474] font-bold mt-1">
                التركيز على صفات ودور كل شخصية كما ترد في أسئلة الامتحان الوزاري
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeLiterature.characters.map((char, i) => (
                <div 
                  key={i}
                  className="p-5 rounded-[6px] bg-[#F7F5EF] border-2 border-[#202124] shadow-[3px_3px_0px_#202124] hover:bg-white transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-base font-black text-[#202124] flex flex-wrap items-center gap-2">
                        <span>{char.nameAr || char.name}</span>
                        <span className="text-xs text-[#747474] font-mono font-bold" dir="ltr">({char.name})</span>
                      </h4>
                      <button
                        type="button"
                        onClick={() => playAudio(char.name)}
                        className="text-[#405DE6] hover:text-[#202124] cursor-pointer"
                        aria-label="نطق اسم الشخصية"
                        title="نطق اسم الشخصية"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#F3E6A5] border border-[#202124] text-[#202124] text-xs font-black">
                      <span>{char.roleAr || char.role}</span>
                      <span className="text-[10px] text-[#747474] font-mono">({char.role})</span>
                    </div>

                    {(langMode === 'bilingual' || langMode === 'ar') && (
                      <p className="text-xs text-[#202124] leading-relaxed font-medium pt-1">
                        {char.descriptionAr || char.description}
                      </p>
                    )}

                    {(langMode === 'bilingual' || langMode === 'en') && (
                      <p dir="ltr" className="text-xs text-[#202124]/85 leading-relaxed font-normal pt-2 border-t border-[#202124]/15 text-left en-sentence">
                        {char.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 border-t border-[#202124]/15 flex items-center justify-between text-[11px] text-[#747474] font-bold">
                    <span>تحليل وزاري معتمد</span>
                    <span className="text-[#287A52] font-black">جاهز للامتحان ✓</span>
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
          <div className="p-5 rounded-[6px] bg-white border-2 border-[#202124] shadow-[4px_4px_0px_#202124] flex flex-wrap items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 min-w-[220px]">
              <Search className="w-4 h-4 text-[#747474] absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="search-literature-qa"
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="ابحث في الأسئلة الوزارية، السنوات، أو الكلمات المفتاحية..."
                className="w-full pl-4 pr-10 py-2.5 text-xs sm:text-sm rounded-[4px] bg-[#F7F5EF] border-2 border-[#202124] focus:outline-none focus:bg-white transition-all font-bold text-[#202124] placeholder:text-[#747474]"
              />
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                id="reveal-all-qa-btn"
                onClick={revealAllQA}
                className="px-3.5 py-2 rounded-[4px] bg-[#F3E6A5] hover:bg-[#E5D792] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-[#202124]" />
                <span>إظهار جميع الأجوبة</span>
              </button>

              <button
                type="button"
                id="hide-all-qa-btn"
                onClick={hideAllQA}
                className="px-3.5 py-2 rounded-[4px] bg-white hover:bg-[#F7F5EF] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <EyeOff className="w-3.5 h-3.5 text-[#747474]" />
                <span>إخفاء الكل</span>
              </button>
            </div>
          </div>

          {/* QA List */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 px-1">
              <p className="text-xs font-bold text-[#747474] tabular-nums">
                تم العثور على <strong className="text-[#202124] font-black">{filteredQA.length}</strong> أسئلة وزارية
              </p>
              <span className="text-xs text-[#405DE6] font-black">
                نمط الإجابة المعتمد لدى لجان التصحيح الوزاري
              </span>
            </div>

            {filteredQA.map((qa: LiteratureQA, i: number) => {
              const isRevealed = !!revealedQA[i];

              return (
                <div 
                  key={qa.id || i}
                  className="p-5 sm:p-6 rounded-[6px] bg-white border-2 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-3"
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5 flex-1">
                      
                      {/* English Question */}
                      <div dir="ltr" className="flex items-start justify-between gap-2 text-left">
                        <p className="text-sm sm:text-base font-black text-[#202124] leading-snug en-sentence">
                          <span className="text-[#405DE6] font-extrabold mr-2 font-mono tabular-nums">Q{i + 1}.</span>
                          {qa.question}
                        </p>
                        <button
                          type="button"
                          onClick={() => playAudio(qa.question)}
                          aria-label="استمع لنطق السؤال"
                          title="استمع لنطق السؤال"
                          className="text-[#405DE6] hover:text-[#202124] p-1 shrink-0 cursor-pointer"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Arabic Translation */}
                      {(langMode === 'bilingual' || langMode === 'ar') && qa.questionAr && (
                        <p className="text-xs sm:text-sm font-bold text-[#747474] pr-1">
                          «{qa.questionAr}»
                        </p>
                      )}
                    </div>

                    {/* Year Badge */}
                    <span className="text-[11px] font-mono font-black px-2.5 py-1 rounded-[4px] bg-[#F3E6A5] text-[#202124] border border-[#202124] whitespace-nowrap shrink-0 tabular-nums">
                      {qa.year}
                    </span>
                  </div>

                  {/* Toggle Button & Hint */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#202124]/15">
                    <button
                      type="button"
                      id={`toggle-qa-${i}`}
                      onClick={() => toggleQA(i)}
                      className="text-xs font-black text-[#202124] flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#E9ECFA] hover:bg-[#DCD8FA] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#405DE6]" />
                      <span>{isRevealed ? 'إخفاء الجواب النموذجي' : 'إظهار الجواب النموذجي والترجمة'}</span>
                    </button>

                    {qa.keyHint && (
                      <span className="text-[11px] font-bold text-[#747474] hidden sm:inline">
                        مفتاح الحل: <strong className="text-[#405DE6]">{qa.keyHint}</strong>
                      </span>
                    )}
                  </div>

                  {/* Revealed Answer */}
                  {isRevealed && (
                    <div className="lesson-answer space-y-3 mt-2">
                      
                      {/* English Model Answer */}
                      <div dir="ltr" className="space-y-1 text-left">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-[#405DE6]">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono uppercase">Model Answer:</span>
                            <span className="text-[#747474] font-bold">(الجواب المعتمد بالكنترول)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => playAudio(qa.answer)}
                            className="text-[#202124] hover:bg-[#F3E6A5] flex items-center gap-1 bg-white border border-[#202124] px-2 py-0.5 rounded-[4px] cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5 text-[#405DE6]" />
                            <span>استمع للإجابة</span>
                          </button>
                        </div>
                        <p className="font-mono text-xs sm:text-sm font-black text-[#202124] leading-relaxed en-sentence">
                          {qa.answer}
                        </p>
                      </div>

                      {/* Arabic Translation of Answer */}
                      {(langMode === 'bilingual' || langMode === 'ar') && qa.answerAr && (
                        <div className="pt-2 border-t border-[#202124]/15 space-y-1">
                          <p className="text-[11px] font-black text-[#747474]">الترجمة والتفسير العربي:</p>
                          <p className="text-xs sm:text-sm text-[#202124] leading-relaxed font-bold">
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
          <div className="p-6 sm:p-8 rounded-[6px] bg-white border-2 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-6 text-center">
            
            <div className="max-w-md mx-auto space-y-1">
              <h3 className="text-xl font-black text-[#202124] flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-[#287A52]" />
                <span>مختبر الحفظ والاسترجاع السريع</span>
              </h3>
              <p className="text-xs text-[#747474] font-bold">
                اقلب البطاقة لاختبار مدى جاهزيتك للإجابة عن السؤال باللغتين قبل الامتحان
              </p>
            </div>

            {/* Card Progress */}
            <div className="flex items-center justify-center gap-3 text-xs font-black text-[#202124] tabular-nums">
              <span>السؤال {quizIndex + 1} من {activeLiterature.ministerialQA.length}</span>
              <div className="w-36 h-2.5 rounded-[4px] bg-[#EAE8E1] border border-[#202124] overflow-hidden">
                <div 
                  className="h-full bg-[#287A52] transition-all duration-300"
                  style={{ width: `${((quizIndex + 1) / activeLiterature.ministerialQA.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Flashcard Box */}
            {activeLiterature.ministerialQA[quizIndex] && (
              <div 
                id="interactive-flashcard"
                onClick={() => setIsFlipped(!isFlipped)}
                className={`cursor-pointer min-h-[220px] sm:min-h-[260px] p-6 sm:p-8 rounded-[6px] border-3 border-[#202124] shadow-[5px_5px_0px_#202124] transition-all flex flex-col justify-between items-center text-center select-none ${
                  isFlipped
                    ? 'bg-[#405DE6] text-white'
                    : 'bg-[#F3E6A5]/45 text-[#202124]'
                }`}
              >
                <div className="w-full flex items-center justify-between text-xs font-black">
                  <span className={`px-2.5 py-1 rounded-[4px] border border-[#202124] font-mono tabular-nums ${
                    isFlipped ? 'bg-[#F3E6A5] text-[#202124]' : 'bg-white text-[#202124]'
                  }`}>
                    {activeLiterature.ministerialQA[quizIndex].year}
                  </span>
                  <span className="text-[11px] underline">
                    {isFlipped ? 'انقر لإعادة السؤال ↺' : 'انقر لكشف الجواب النموذجي ↺'}
                  </span>
                </div>

                <div className="my-auto space-y-3 max-w-2xl">
                  {!isFlipped ? (
                    <div className="space-y-2">
                      <p dir="ltr" className="text-base sm:text-xl font-black leading-snug text-left en-sentence text-[#202124]">
                        {activeLiterature.ministerialQA[quizIndex].question}
                      </p>
                      {activeLiterature.ministerialQA[quizIndex].questionAr && (
                        <p className="text-xs sm:text-sm font-bold text-[#747474]">
                          «{activeLiterature.ministerialQA[quizIndex].questionAr}»
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div dir="ltr" className="space-y-1 text-left">
                        <span className="text-xs font-black text-[#F3E6A5] font-mono">Model Answer:</span>
                        <p className="text-sm sm:text-lg font-mono font-black text-white leading-relaxed en-sentence">
                          {activeLiterature.ministerialQA[quizIndex].answer}
                        </p>
                      </div>
                      {activeLiterature.ministerialQA[quizIndex].answerAr && (
                        <p className="text-xs sm:text-sm text-[#F7F5EF] font-bold">
                          «{activeLiterature.ministerialQA[quizIndex].answerAr}»
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className={`text-[11px] font-bold ${isFlipped ? 'text-[#F3E6A5]' : 'text-[#747474]'}`}>
                  {isFlipped ? 'الجواب الوزاري المعتمد' : 'اختبر حفظك ثم اقلب البطاقة'}
                </div>
              </div>
            )}

            {/* Card Nav Controls */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                id="prev-quiz-card-btn"
                disabled={quizIndex === 0}
                onClick={() => {
                  setQuizIndex(prev => Math.max(0, prev - 1));
                  setIsFlipped(false);
                }}
                className="px-4 py-2 rounded-[4px] bg-white hover:bg-[#F7F5EF] disabled:opacity-40 border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-black text-[#202124] transition-colors cursor-pointer"
              >
                السابق
              </button>

              <button
                type="button"
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-5 py-2 rounded-[4px] bg-[#F3E6A5] hover:bg-[#E5D792] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-[#202124] text-xs font-black transition-colors cursor-pointer"
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
                className="px-4 py-2 rounded-[4px] bg-white hover:bg-[#F7F5EF] disabled:opacity-40 border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-black text-[#202124] transition-colors cursor-pointer"
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
