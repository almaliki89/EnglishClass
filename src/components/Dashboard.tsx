import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Sparkles, Trophy, CheckCircle2, ChevronLeft, ArrowRight, ArrowLeft,
  HelpCircle, Compass, FileText, Bookmark, Star, ArrowUpRight, Flame,
  Target, GraduationCap, Clock, Award, CheckCircle, ShieldCheck, Eye,
  Languages, Play, Zap, MapPin, CheckCircle as CheckCircleIcon,
  Crown, Layers, Rocket, Brain, Shuffle, Search, X, Filter, Lightbulb
} from 'lucide-react';
import { SubjectId } from '../types/subject';
import { getUnitsForGrade, getGradeMeta, ORDERED_GRADES, ALL_GRADES_META } from '../data/gradeContentResolver';
import { StudentState, Unit, Lesson, EducationalGrade } from '../types';
import { PinterestPlatformFeed } from './PinterestPlatformFeed';
import { CartoonMascot } from './CartoonMascot';
import { playPopSound, playSuccessChime, playFanfare, playBoingSound } from '../utils/cartoonAudio';
import { triggerCelebration } from '../utils/storage';

interface DashboardProps {
  studentState: StudentState;
  onSelectUnit: (unit: Unit) => void;
  onSelectLesson: (lesson: Lesson) => void;
  onNavigateTab: (tab: 'exam' | 'mock' | 'literature' | 'essays' | 'verbs' | 'vocab' | 'review') => void;
  onSelectSubject?: (subjectId: SubjectId) => void;
  selectedGrade?: EducationalGrade;
  onSelectGrade?: (grade: EducationalGrade) => void;
}

const MASCOT_TIPS = [
  { text: "أهلاً بك يا بطل! جاهز لرحلة الـ 100 في الإنجليزي؟ اختر محطتك وابدأ فوراً!", mood: 'waving' as const },
  { text: "نصيحة ذهبية: مفتاح الحل الوزاري يبدأ بتحديد زمن الجملة والفاعل أولاً قبل اختيار الفعل!", mood: 'genius' as const },
  { text: "تذكر: أفعال الحالة (know, understand, remember) لا تأخذ ing نهائياً في قواعد الرابع والسادس!", mood: 'explaining' as const },
  { text: "في الجمل الشرطية: حدد شطر الجملة المكتمل لتعرف الشطر الناقص بكل سهولة ودون تردد!", mood: 'genius' as const },
  { text: "استمر في التقدم! كل تمرين تحله اليوم يقربك خطوة حقيقية من العلامة الكاملة 100 🏆", mood: 'celebrating' as const },
];

export const Dashboard: React.FC<DashboardProps> = ({
  studentState,
  onSelectUnit,
  onSelectLesson,
  onNavigateTab,
  onSelectSubject,
  selectedGrade = 'sixth-preparatory',
  onSelectGrade = () => {},
}) => {
  const effectiveGrade: EducationalGrade = selectedGrade || studentState.selectedGrade || 'sixth-preparatory';
  const gradeMeta = getGradeMeta(effectiveGrade);
  const units = getUnitsForGrade(effectiveGrade);
  const isMinisterial = gradeMeta.isMinisterial;

  // View Mode: 'quest-map' (Adventure Roadmap) or 'pin-feed' (Pinterest Boards)
  const [viewMode, setViewMode] = useState<'quest-map' | 'pin-feed'>('quest-map');

  // Interactive Quests State
  const [dailyQuests, setDailyQuests] = useState([
    { id: 'q1', text: 'راجِع 3 أسئلة وزارية مع التعليل', target: 3, current: 2, completed: false, xp: 50 },
    { id: 'q2', text: 'أكمِل درساً تفاعلياً جديداً في وحدتك', target: 1, current: 1, completed: true, xp: 75 },
    { id: 'q3', text: 'تدرّب على 5 أفعال شاذة في الساحة', target: 5, current: 4, completed: false, xp: 40 },
  ]);

  // Mascot dynamic tips state
  const [tipIndex, setTipIndex] = useState(0);

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'uncompleted' | 'completed'>('all');

  const toggleQuest = (id: string) => {
    playPopSound();
    setDailyQuests(prev => prev.map(q => {
      if (q.id === id) {
        const nextCompleted = !q.completed;
        if (nextCompleted) playSuccessChime();
        return { ...q, completed: nextCompleted, current: nextCompleted ? q.target : 0 };
      }
      return q;
    }));
  };

  // Calculate overall grade progress
  const totalLessons = units.reduce((acc, u) => acc + u.lessons.length, 0);
  const completedLessonsCount = units.reduce((acc, u) => {
    return acc + u.lessons.filter(l => studentState.completedLessonIds.includes(l.id)).length;
  }, 0);
  const overallPercentage = totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0;

  // Filtered Units computation
  const filteredUnits = useMemo(() => {
    return units.filter(unit => {
      // 1. Status Filter
      const completedCount = unit.lessons.filter(l => studentState.completedLessonIds.includes(l.id)).length;
      const isComplete = completedCount === unit.lessons.length && unit.lessons.length > 0;
      if (statusFilter === 'completed' && !isComplete) return false;
      if (statusFilter === 'uncompleted' && isComplete) return false;

      // 2. Search Query Filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const inUnitTitleAr = unit.titleAr.toLowerCase().includes(q);
      const inUnitTitleEn = unit.titleEn.toLowerCase().includes(q);
      const inUnitDesc = (unit.description || '').toLowerCase().includes(q);
      const inLessons = unit.lessons.some(l => 
        l.titleAr.toLowerCase().includes(q) || 
        l.titleEn.toLowerCase().includes(q) ||
        l.summary.toLowerCase().includes(q)
      );

      return inUnitTitleAr || inUnitTitleEn || inUnitDesc || inLessons;
    });
  }, [units, statusFilter, searchQuery, studentState.completedLessonIds]);

  return (
    <div className="w-full space-y-8 pb-20">
      
      {/* 1. Swiss Editorial Hero Poster Section */}
      <div className="relative overflow-hidden bg-white border-2 border-[#202124] shadow-[5px_5px_0px_#202124] p-6 sm:p-8 text-[#202124]">
        <div className="relative z-10 space-y-5 text-right">
          
          {/* Top Editorial Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#202124]/20 pb-3">
            <button
              type="button"
              onClick={() => {
                playPopSound();
                setTipIndex(prev => (prev + 1) % MASCOT_TIPS.length);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F3E6A5] hover:bg-[#e4d896] border border-[#202124] shadow-[2px_2px_0px_#202124] text-[#202124] text-xs font-bold transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
              title="انقر للحصول على نصيحة دراسية جديدة"
            >
              <Lightbulb className="w-3.5 h-3.5 text-[#202124] fill-[#202124]" />
              <span>نصيحة ذهبية: {MASCOT_TIPS[tipIndex].text}</span>
            </button>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F7F5EF] border border-[#202124] text-[#202124] text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#405DE6]" />
                <span>إشراف أ. مصطفى تركي • 2026</span>
              </span>

              {isMinisterial ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F2A18E] text-[#202124] border border-[#202124] text-xs font-mono font-bold">
                  <Crown className="w-3.5 h-3.5" />
                  <span>مرحلة وزارية مصيرية</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#DCD8FA] text-[#202124] border border-[#202124] text-xs font-mono font-bold">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>منهج مرحلي رسمي</span>
                </span>
              )}
            </div>
          </div>
            
          {/* Oversized Headline */}
          <div className="space-y-2">
            <div className="font-mono text-xs font-bold text-[#F2A18E] uppercase tracking-widest">
              VOL. 26 // OFFICIAL IRAQI CURRICULUM ARCHIVE
            </div>
            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#202124] leading-tight tracking-tight">
              بوابة التفوق الوزاري واللغة الإنجليزية •{' '}
              <span className="bg-[#F3E6A5] text-[#202124] px-2 py-0.5 border border-[#202124] shadow-[2px_2px_0px_#202124] inline-block mt-1">
                {gradeMeta.nameAr}
              </span>
            </h1>
            <p className="text-[#777873] text-xs sm:text-sm leading-relaxed max-w-3xl font-medium">
              منهج اللغة الإنجليزية المعتمد لوزارة التربية العراقية مشروحاً بأسلوب تفاعلي منظم: تفكيك القواعد، حفظ مفاتيح الحل، تدريبات الامتحانات الوزارية، وضمان العلامة الكاملة 100 بعيداً عن التعقيد.
            </p>
          </div>

          {/* Gamified Live Stats Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
            
            <div className="p-3 bg-[#F7F5EF] border border-[#202124] shadow-[2.5px_2.5px_0px_#202124] text-center">
              <div className="flex items-center justify-center gap-1 text-[#F2A18E] text-xs font-mono font-bold mb-1">
                <Flame className="w-3.5 h-3.5 fill-[#F2A18E]" />
                <span>سلسلة الحماس</span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#202124]">
                {studentState.streakDays || 5}D 🔥
              </div>
            </div>

            <div className="p-3 bg-[#F7F5EF] border border-[#202124] shadow-[2.5px_2.5px_0px_#202124] text-center">
              <div className="flex items-center justify-center gap-1 text-[#405DE6] text-xs font-mono font-bold mb-1">
                <Zap className="w-3.5 h-3.5 fill-[#405DE6]" />
                <span>نقاط الخبرة XP</span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#202124]">
                {studentState.xp || 420} XP
              </div>
            </div>

            <div className="p-3 bg-[#F7F5EF] border border-[#202124] shadow-[2.5px_2.5px_0px_#202124] text-center">
              <div className="flex items-center justify-center gap-1 text-[#202124] text-xs font-mono font-bold mb-1">
                <CheckCircleIcon className="w-3.5 h-3.5 text-[#405DE6]" />
                <span>الدروس المنجزة</span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#202124]">
                {completedLessonsCount} / {totalLessons}
              </div>
            </div>

            <div className="p-3 bg-[#F7F5EF] border border-[#202124] shadow-[2.5px_2.5px_0px_#202124] text-center">
              <div className="flex items-center justify-center gap-1 text-[#202124] text-xs font-mono font-bold mb-1">
                <Trophy className="w-3.5 h-3.5 text-[#F2A18E]" />
                <span>مستوى الإنجاز</span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#202124]">
                LVL 4 🏆
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 2. Daily Learning Quests (تحديات اليوم التعليمية) */}
      <div className="bg-white border-3 border-[#171717] shadow-[5px_5px_0px_#171717] p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b-2 border-[#171717] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#E9FF57] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-[#171717]">
                تحديات اليوم التعليمية (Daily Quests)
              </h2>
              <p className="text-xs text-[#171717]/70 font-medium">
                أكمل التحديات اليومية لترفع نقاط خبرتك وتثبت معلوماتك الوزارية
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center font-mono">
            <span className="text-xs font-bold text-[#171717]/80">معدل الإنجاز:</span>
            <span className="px-2 py-0.5 bg-[#E9FF57] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-xs font-black">
              {dailyQuests.filter(q => q.completed).length}/{dailyQuests.length} DONE
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {dailyQuests.map((quest) => (
            <div 
              key={quest.id}
              onClick={() => toggleQuest(quest.id)}
              className={`p-4 border-2 border-[#171717] transition-all cursor-pointer select-none ${
                quest.completed
                  ? 'bg-[#E9FF57] shadow-[3px_3px_0px_#171717]'
                  : 'bg-[#F4EFE3] hover:bg-white shadow-[2px_2px_0px_#171717] hover:shadow-[3px_3px_0px_#171717]'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className={`text-xs font-black leading-snug ${quest.completed ? 'line-through text-[#171717]/80' : 'text-[#171717]'}`}>
                  {quest.text}
                </span>
                <span className="px-1.5 py-0.5 bg-white text-[#171717] border border-[#171717] text-[10px] font-mono font-black shrink-0">
                  +{quest.xp} XP
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-[#171717]/80 font-mono">
                <span>{quest.current} / {quest.target}</span>
                <span className="text-[11px] font-black">
                  {quest.completed ? 'تم بنجاح! 🏆' : 'انقر للتحديث'}
                </span>
              </div>
              <div className="w-full bg-white border-2 border-[#171717] h-3 mt-2 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${quest.completed ? 'bg-[#304FFE]' : 'bg-[#171717]'}`}
                  style={{ width: `${(quest.current / quest.target) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Six Quick Adventure Stations (محطات المغامرة السريعة) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-black text-[#171717] flex items-center gap-2">
            <Rocket className="w-5 h-5 text-[#304FFE]" />
            <span>محطات المغامرة السريعة (Adventure Portals)</span>
          </h2>
          <span className="text-xs font-mono text-[#171717]/70 font-bold">FAST ACCESS</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          
          {/* Station 1: Ministerial Mock */}
          <button
            type="button"
            onClick={() => {
              playPopSound();
              onNavigateTab('mock');
            }}
            className="p-4 bg-[#E9FF57] hover:bg-[#d8ee43] text-[#171717] border-3 border-[#171717] shadow-[4px_4px_0px_#171717] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#171717] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <Trophy className="w-6 h-6 text-[#171717]" />
            </div>
            <span className="text-xs font-black leading-tight">محاكي الـ 100</span>
            <span className="text-[10px] font-bold text-[#171717]/80 mt-1">الامتحان الوزاري</span>
          </button>

          {/* Station 2: Smart Review */}
          <button
            type="button"
            onClick={() => {
              playPopSound();
              onNavigateTab('review');
            }}
            className="p-4 bg-[#304FFE] hover:bg-[#203ecc] text-white border-3 border-[#171717] shadow-[4px_4px_0px_#171717] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#171717] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <Brain className="w-6 h-6 text-[#304FFE]" />
            </div>
            <span className="text-xs font-black leading-tight">المراجعة الذكية</span>
            <span className="text-[10px] text-white/80 mt-1">بطاقات وخوارزميات</span>
          </button>

          {/* Station 3: Literature */}
          <button
            type="button"
            onClick={() => {
              playPopSound();
              onNavigateTab('literature');
            }}
            className="p-4 bg-[#A8D8FF] hover:bg-[#91caff] text-[#171717] border-3 border-[#171717] shadow-[4px_4px_0px_#171717] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#171717] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6 text-[#171717]" />
            </div>
            <span className="text-xs font-black leading-tight">الأدب والنصوص</span>
            <span className="text-[10px] text-[#171717]/80 mt-1">قصص ومؤلفون</span>
          </button>

          {/* Station 4: Essays */}
          <button
            type="button"
            onClick={() => {
              playPopSound();
              onNavigateTab('essays');
            }}
            className="p-4 bg-white hover:bg-[#FFFDF7] text-[#171717] border-3 border-[#171717] shadow-[4px_4px_0px_#171717] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#171717] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 bg-[#E9FF57] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <FileText className="w-6 h-6 text-[#171717]" />
            </div>
            <span className="text-xs font-black leading-tight">الإنشاءات الوزارية</span>
            <span className="text-[10px] text-[#171717]/80 mt-1">نماذج 20 درجة</span>
          </button>

          {/* Station 5: Irregular Verbs */}
          <button
            type="button"
            onClick={() => {
              playPopSound();
              onNavigateTab('verbs');
            }}
            className="p-4 bg-[#FF5738] hover:bg-[#e0482b] text-white border-3 border-[#171717] shadow-[4px_4px_0px_#171717] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#171717] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 text-[#FF5738]" />
            </div>
            <span className="text-xs font-black leading-tight">الأفعال الشاذة</span>
            <span className="text-[10px] text-white/90 mt-1">80 فعل وزاري</span>
          </button>

          {/* Station 6: Ministerial Questions */}
          <button
            type="button"
            onClick={() => {
              playPopSound();
              onNavigateTab('exam');
            }}
            className="p-4 bg-[#F4EFE3] hover:bg-white text-[#171717] border-3 border-[#171717] shadow-[4px_4px_0px_#171717] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#171717] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-[#304FFE]" />
            </div>
            <span className="text-xs font-black leading-tight">بنك الوزاريات</span>
            <span className="text-[10px] text-[#171717]/80 mt-1">2020–2026 كامل</span>
          </button>

        </div>
      </div>

      {/* 4. Dual View Mode Selector Tabs */}
      <div className="flex items-center justify-center p-1.5 bg-[#F4EFE3] border-3 border-[#171717] shadow-[3px_3px_0px_#171717] max-w-md mx-auto">
        <button
          type="button"
          onClick={() => {
            playPopSound();
            setViewMode('quest-map');
          }}
          className={`flex-1 py-2 px-4 text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer border-2 ${
            viewMode === 'quest-map'
              ? 'bg-[#304FFE] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
              : 'border-transparent text-[#171717] hover:bg-white hover:border-[#171717]'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>خريطة المغامرة المنهجية</span>
        </button>

        <button
          type="button"
          onClick={() => {
            playPopSound();
            setViewMode('pin-feed');
          }}
          className={`flex-1 py-2 px-4 text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer border-2 ${
            viewMode === 'pin-feed'
              ? 'bg-[#304FFE] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
              : 'border-transparent text-[#171717] hover:bg-white hover:border-[#171717]'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>لوحات الأفكار الذكية (Pins)</span>
        </button>
      </div>

      {/* 5. View Content Rendering */}
      {viewMode === 'quest-map' ? (
        /* ADVENTURE QUEST MAP */
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b-2 border-[#171717] pb-3">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#171717] flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#304FFE]" />
                <span>محطات المنهج الدراسي • {gradeMeta.nameAr}</span>
              </h2>
              <p className="text-xs text-[#171717]/70 font-medium">
                تنقل بين الوحدات الدراسية، أتقن الدروس، وافتح المحطة النهائية
              </p>
            </div>
            
            <div className="flex items-center gap-2 font-mono">
              <span className="text-xs font-bold text-[#171717]">
                إجمالي الوحدات: <span className="bg-[#E9FF57] px-1.5 py-0.2 border border-[#171717] font-black">{units.length} UNITS</span>
              </span>
              {completedLessonsCount > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    playFanfare();
                    triggerCelebration();
                  }}
                  className="px-2.5 py-1 bg-[#E9FF57] hover:bg-[#d8ee43] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-xs font-black transition-all cursor-pointer flex items-center gap-1 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                  title="احتفل بتقدمك الدراسي!"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#304FFE]" />
                  <span>احتفل بإنجازك 🎉</span>
                </button>
              )}
            </div>
          </div>

          {/* Search & Fast Filters Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 sm:p-4 border-3 border-[#171717] shadow-[3px_3px_0px_#171717]">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#171717]/60 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في أسماء الوحدات أو الدروس أو القواعد..."
                className="w-full pr-9 pl-8 py-2 bg-[#F4EFE3] border-2 border-[#171717] text-xs font-bold text-[#171717] placeholder:text-[#171717]/50 focus:outline-none focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1 text-[#171717] hover:text-[#FF5738] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0">
              <span className="text-[11px] font-mono font-bold text-[#171717] hidden lg:inline-block">FILTER:</span>
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  setStatusFilter('all');
                }}
                className={`px-3 py-1.5 text-xs font-black transition-all cursor-pointer border-2 ${
                  statusFilter === 'all'
                    ? 'bg-[#304FFE] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
                    : 'bg-[#F4EFE3] text-[#171717] border-[#171717] hover:bg-white'
                }`}
              >
                الكل ({units.length})
              </button>
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  setStatusFilter('uncompleted');
                }}
                className={`px-3 py-1.5 text-xs font-black transition-all cursor-pointer border-2 ${
                  statusFilter === 'uncompleted'
                    ? 'bg-[#304FFE] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
                    : 'bg-[#F4EFE3] text-[#171717] border-[#171717] hover:bg-white'
                }`}
              >
                قيد الإنجاز
              </button>
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  setStatusFilter('completed');
                }}
                className={`px-3 py-1.5 text-xs font-black transition-all cursor-pointer border-2 ${
                  statusFilter === 'completed'
                    ? 'bg-[#E9FF57] text-[#171717] border-[#171717] shadow-[2px_2px_0px_#171717]'
                    : 'bg-[#F4EFE3] text-[#171717] border-[#171717] hover:bg-white'
                }`}
              >
                المكتملة ✅
              </button>
            </div>
          </div>

          {/* Unit Roadmap Cards or Empty State */}
          {filteredUnits.length === 0 ? (
            <div className="p-10 bg-white border-3 border-[#171717] shadow-[4px_4px_0px_#171717] text-center space-y-4">
              <div className="flex justify-center">
                <CartoonMascot mood="puzzled" size="md" speechText="لم أعثر على أي درس يطابق هذا البحث! جرب كلمة بحث أخرى يا بطل." />
              </div>
              <h3 className="text-lg font-black text-[#171717]">
                لا توجد نتائج مطابقة لبحثك
              </h3>
              <p className="text-xs text-[#171717]/70 max-w-md mx-auto font-medium">
                تأكد من كتابة الكلمة بشكل صحيح، أو قم بإعادة ضبط معايير التصفية للرجوع إلى كامل قائمة الوحدات.
              </p>
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  setSearchQuery('');
                  setStatusFilter('all');
                }}
                className="px-4 py-2 bg-[#304FFE] text-white font-black text-xs border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                إعادة ضبط البحث والتصفية
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredUnits.map((unit) => {
                const completedInUnit = unit.lessons.filter(l => studentState.completedLessonIds.includes(l.id)).length;
                const unitPercentage = unit.lessons.length > 0 ? Math.round((completedInUnit / unit.lessons.length) * 100) : 0;
                const isUnitCompleted = completedInUnit === unit.lessons.length && unit.lessons.length > 0;
                const estimatedMinutes = unit.lessons.length * 15;

                return (
                  <div 
                    key={unit.id}
                    className="p-6 bg-white border-3 border-[#171717] shadow-[4px_4px_0px_#171717] hover:shadow-[6px_6px_0px_#171717] hover:-translate-y-0.5 space-y-4 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      {/* Unit Header Badge */}
                      <div className="flex items-center justify-between border-b-2 border-[#171717] pb-2.5">
                        <div className="flex items-center gap-2.5">
                          <span className="w-9 h-9 bg-[#304FFE] text-white font-black font-mono text-sm flex items-center justify-center border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                            0{unit.number}
                          </span>
                          <div>
                            <span className="text-[10px] font-mono font-black text-[#FF5738] block uppercase">
                              UNIT {unit.number} // المنهج الرسمي
                            </span>
                            <h3 className="text-base sm:text-lg font-black text-[#171717]">
                              {unit.titleAr}
                            </h3>
                          </div>
                        </div>

                        {isUnitCompleted ? (
                          <span className="px-2 py-0.5 bg-[#E9FF57] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-xs font-black flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#171717]" />
                            <span>مكتملة 100%</span>
                          </span>
                        ) : (
                          <div className="flex items-center gap-1.5 font-mono">
                            <span className="text-xs font-bold text-[#171717]/70">
                              {completedInUnit}/{unit.lessons.length}
                            </span>
                            <span className="text-[10px] font-black px-1.5 py-0.2 bg-[#F4EFE3] border border-[#171717] text-[#171717]">
                              {unitPercentage}%
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#171717]/70">
                        <Clock className="w-3.5 h-3.5 text-[#171717]" />
                        <span>ESTIMATED: ~{estimatedMinutes} MIN // {unit.lessons.length} LESSONS</span>
                      </div>

                      <p className="text-xs text-[#171717]/80 leading-relaxed line-clamp-2 font-medium">
                        {unit.description || unit.titleEn}
                      </p>

                      {/* Progress Bar (Brutalist style) */}
                      <div className="w-full bg-[#F4EFE3] border-2 border-[#171717] h-3 overflow-hidden">
                        <div 
                          className="h-full bg-[#304FFE] transition-all duration-500"
                          style={{ width: `${unitPercentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Lessons Pills Grid */}
                    <div className="space-y-2 pt-2 border-t-2 border-[#171717]">
                      <span className="text-[11px] font-mono font-bold text-[#171717]/80 block">
                        LESSONS // دروس الوحدة المعتمدة:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {unit.lessons.map((lesson) => {
                          const isDone = studentState.completedLessonIds.includes(lesson.id);
                          return (
                            <button
                              key={lesson.id}
                              type="button"
                              onClick={() => {
                                playPopSound();
                                onSelectLesson(lesson);
                              }}
                              className={`px-2.5 py-1 text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 border-2 ${
                                isDone
                                  ? 'bg-[#E9FF57] text-[#171717] border-[#171717] shadow-[2px_2px_0px_#171717]'
                                  : 'bg-white hover:bg-[#F4EFE3] text-[#171717] border-[#171717] shadow-[2px_2px_0px_#171717] active:shadow-none'
                              }`}
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-3 h-3 text-[#171717]" />
                              ) : (
                                <Play className="w-3 h-3 text-[#304FFE]" />
                              )}
                              <span className="truncate max-w-[140px]">{lesson.titleAr}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Action Link to Unit Explorer */}
                    <div className="pt-2 flex items-center justify-between text-xs border-t border-[#171717]/20">
                      <button
                        type="button"
                        onClick={() => {
                          playPopSound();
                          onSelectUnit(unit);
                        }}
                        className="text-[#304FFE] hover:text-[#171717] font-black flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>استكشف الوحدة بالكامل</span>
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-[10px] text-[#171717]/60 font-mono font-bold">
                        {unit.academicYear || '2024–2026'}
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

          {/* Final Boss Arena Card */}
          <div className="p-6 sm:p-8 bg-[#E9FF57] text-[#171717] border-4 border-[#171717] shadow-[8px_8px_0px_#171717] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-right">
              <span className="px-2.5 py-1 bg-[#171717] text-[#E9FF57] text-xs font-mono font-black inline-block">
                FINAL BOSS ARENA // المحطة الختامية
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#171717]">
                الامتحان الوزاري الشامل (100 درجة)
              </h3>
              <p className="text-xs sm:text-sm text-[#171717]/90 max-w-xl font-medium">
                دفتر امتحاني متكامل يطابق المواصفات الوزارية لوزارة التربية: القطعة الخارجية، القواعد، المفردات، الأدب، والإنشاء مع تصحيح فوري لجميع الأسئلة.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                playFanfare();
                onNavigateTab('mock');
              }}
              className="px-6 py-4 bg-[#171717] hover:bg-[#304FFE] text-white font-black text-sm sm:text-base border-3 border-[#171717] shadow-[4px_4px_0px_#FF5738] flex items-center gap-2 cursor-pointer transition-all hover:-translate-y-0.5 shrink-0"
            >
              <Trophy className="w-5 h-5 text-[#E9FF57]" />
              <span>دخول ساحة الامتحان الآن</span>
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        /* PINTEREST IDEA FEED */
        <PinterestPlatformFeed
          selectedGrade={effectiveGrade}
          onSelectGrade={onSelectGrade}
          onSelectLesson={onSelectLesson}
          onNavigateTab={onNavigateTab}
          studentState={studentState}
        />
      )}

    </div>
  );
};
