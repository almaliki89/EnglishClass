import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  Sparkles, 
  Trophy, 
  Flame, 
  GraduationCap, 
  User as UserIcon, 
  Volume2, 
  VolumeX, 
  Home, 
  Target, 
  Award, 
  HelpCircle, 
  BookOpen, 
  FileText, 
  Layers, 
  Zap, 
  ArrowRight
} from 'lucide-react';
import { StudentState, EducationalGrade } from '../types';
import { useAuth } from '../context/AuthContext';
import { APP_ROUTES } from '../routes';
import { getGradeMeta } from '../data/gradeContentResolver';
import { isSoundEnabled, toggleSound, playPopSound } from '../utils/cartoonAudio';

interface NavbarProps {
  studentState: StudentState;
  selectedGrade: EducationalGrade;
  onSelectGrade: (grade: EducationalGrade) => void;
  onOpenProfile: () => void;
  onOpenAuth: () => void;
}

interface NavItem {
  id: string;
  path: string;
  label: string;
  highlight?: boolean;
  icon: React.ElementType;
}

export const Navbar: React.FC<NavbarProps> = ({
  studentState,
  selectedGrade,
  onOpenProfile,
  onOpenAuth,
}) => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSoundOn, setIsSoundOn] = useState(() => isSoundEnabled());

  const currentGradeMeta = getGradeMeta(selectedGrade);
  const isMinisterial = currentGradeMeta.isMinisterial;
  const isPortal = location.pathname === '/grades';

  const litLabel =
    selectedGrade === 'third-intermediate'
      ? 'قصص الثالث (Story Time)'
      : 'الأدب والنصوص';

  // Home path points to the dedicated grade dashboard when inside a grade
  const homePath = `/grade/${selectedGrade}`;

  const navItems: NavItem[] = [
    { id: 'dashboard', path: homePath, label: 'الرئيسية', icon: Home },
    { id: 'review', path: APP_ROUTES.gradeReview(selectedGrade), label: 'المراجعة المركزة', icon: Target },
    {
      id: 'mock',
      path: APP_ROUTES.gradeMock(selectedGrade),
      label: isMinisterial ? 'محاكي الوزاري 100د' : 'محاكي الامتحان النهائي 100د',
      highlight: true,
      icon: Award,
    },
    {
      id: 'exam',
      path: APP_ROUTES.gradeExam(selectedGrade),
      label: isMinisterial ? 'بنك الوزاريات' : 'بنك الأسئلة والتمارين',
      icon: HelpCircle,
    },
    { id: 'literature', path: APP_ROUTES.gradeLiterature(selectedGrade), label: litLabel, icon: BookOpen },
    { id: 'essays', path: APP_ROUTES.gradeEssays(selectedGrade), label: 'الإنشاءات', icon: FileText },
    { id: 'vocab', path: APP_ROUTES.gradeVocab(selectedGrade), label: 'المفردات والتوصيل', icon: Layers },
    ...(selectedGrade === 'sixth-preparatory' ||
    selectedGrade === 'fifth-preparatory' ||
    selectedGrade === 'fourth-preparatory'
      ? [{ id: 'verbs', path: APP_ROUTES.gradeVerbs(selectedGrade), label: 'الأفعال الشاذة', icon: Zap }]
      : []),
  ];

  const isItemActive = (item: NavItem) => {
    if (item.id === 'dashboard') {
      return (
        location.pathname === '/' ||
        location.pathname === '/subjects' ||
        location.pathname === `/grade/${selectedGrade}` ||
        location.pathname.startsWith(`/grade/${selectedGrade}/unit`)
      );
    }
    return location.pathname.startsWith(item.path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b-2 border-[#202124] shadow-[0px_2.5px_0px_#202124]">
      {/* Top Header Row: Identity & Actions */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Right Zone: Logo & Grade Identity (STRICT ISOLATION) */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 select-none">
            <Link 
              id="brand-logo"
              to={`/grade/${selectedGrade}`}
              className="flex items-center gap-2.5 group shrink-0"
            >
              <div className="w-10 h-10 bg-[#405DE6] text-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124] flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:shadow-[3px_3px_0px_#202124] transition-all">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="shrink-0 text-right">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-base sm:text-lg text-[#202124] tracking-tight whitespace-nowrap">
                    النموذجية
                  </span>
                  <span className="text-xs text-[#777873] font-mono hidden sm:inline">/</span>
                  <span className="text-xs font-bold text-[#405DE6] hidden sm:inline font-mono">
                    {currentGradeMeta.shortName}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase bg-[#F3E6A5] text-[#202124] border border-[#202124] px-1 py-0.2 font-bold">
                    IRAQ ED. 2026
                  </span>
                  <span className="text-[11px] text-[#777873] font-medium whitespace-nowrap hidden md:inline">
                    إشراف الأستاذ مصطفى تركي
                  </span>
                </div>
              </div>
            </Link>

            {/* Strict Grade Isolation: Current Grade Stamp + Exit to Grades Portal Button */}
            <div className="flex items-center gap-2">
              <div className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 bg-[#F7F5EF] border border-[#202124] text-xs font-mono font-bold text-[#202124]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                <span className="text-[#405DE6]">{currentGradeMeta.shortName}</span>
                {isMinisterial && (
                  <span className="text-[9px] px-1 py-0.2 bg-[#F2A18E] text-[#202124] font-mono font-bold border border-[#202124]">
                    وزاري
                  </span>
                )}
              </div>

              {/* Exit / Switch Grade button (No other grades shown here) */}
              <button
                id="grade-portal-exit-btn"
                onClick={() => {
                  playPopSound();
                  navigate('/grades');
                }}
                className={`flex items-center gap-1 px-2.5 py-1 border-2 border-[#202124] shadow-[2px_2px_0px_#202124] active:translate-x-[1px] active:translate-y-[1px] text-xs font-bold cursor-pointer transition-all ${
                  isPortal
                    ? 'bg-[#405DE6] text-white'
                    : 'bg-[#F3E6A5] hover:bg-[#e4d896] text-[#202124]'
                }`}
                title="الخروج إلى صفحة اختيار الصفوف الرئيسية"
              >
                <span>{isPortal ? 'بوابة الصفوف' : 'تغيير الصف ↩'}</span>
              </button>
            </div>
          </div>

          {/* Left Zone: Action Hub (Resume + Streak/XP + Sound FX + Profile) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Resume Last Visited Lesson Button */}
            {studentState.lastVisitedLessonId && (
              <button
                id="resume-learning-btn"
                onClick={() => {
                  playPopSound();
                  navigate(`/lesson/${studentState.lastVisitedLessonId}`);
                }}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#F3E6A5] hover:bg-[#e4d896] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] active:translate-x-[1px] active:translate-y-[1px] text-xs font-bold text-[#202124] transition-all cursor-pointer"
                title="تابع من حيث توقفت في الدرس الأخير"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#405DE6]" />
                <span className="whitespace-nowrap">تابع الدرس</span>
              </button>
            )}

            {/* Student XP & Streak Badge */}
            <div 
              id="student-stats-pill"
              onClick={onOpenProfile}
              className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1.5 bg-[#F7F5EF] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] cursor-pointer hover:bg-white active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all shrink-0 font-mono"
              title="لوحة الإنجازات والتقدم"
            >
              <div className="flex items-center gap-1 text-[#F2A18E] font-bold text-xs whitespace-nowrap">
                <Flame className="w-3.5 h-3.5 fill-[#F2A18E] text-[#F2A18E]" />
                <span>{studentState.streakDays}D</span>
              </div>
              <div className="w-px h-3 bg-[#202124]/30" />
              <div className="flex items-center gap-1 text-[#405DE6] font-bold text-xs whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{studentState.xp} XP</span>
              </div>
            </div>

            {/* Cloud User / Sign In */}
            {user ? (
              <button
                id="cloud-user-btn"
                onClick={onOpenProfile}
                className="p-2 bg-white hover:bg-[#F7F5EF] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all shrink-0 cursor-pointer"
                title={`مسجل دخول: ${user.displayName || user.email || 'طالب'}`}
              >
                <UserIcon className="w-4 h-4 text-[#405DE6]" />
              </button>
            ) : (
              <button
                id="auth-gate-btn"
                onClick={onOpenAuth}
                className="px-2.5 py-1.5 bg-[#405DE6] hover:bg-[#344ec7] text-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124] active:translate-x-[1px] active:translate-y-[1px] text-xs font-bold transition-all shrink-0 cursor-pointer"
              >
                دخول
              </button>
            )}

            {/* Sound FX Toggle */}
            <button
              id="sound-fx-btn"
              onClick={() => {
                const newState = toggleSound();
                setIsSoundOn(newState);
                if (newState) playPopSound();
              }}
              className={`p-2 border-2 border-[#202124] shadow-[2px_2px_0px_#202124] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all shrink-0 cursor-pointer ${
                isSoundOn
                  ? 'bg-[#F3E6A5] text-[#202124]'
                  : 'bg-white text-[#777873]'
              }`}
              title={isSoundOn ? 'المؤثرات الصوتية مفعلة' : 'المؤثرات الصوتية مكتومة'}
            >
              {isSoundOn ? <Volume2 className="w-4 h-4 text-[#202124]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Profile Trophy Button */}
            <button
              id="student-profile-btn"
              onClick={onOpenProfile}
              className="p-2 bg-[#F2A18E] hover:bg-[#e48e7b] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all shrink-0 cursor-pointer"
              title="الملف الشخصي والإنجازات"
            >
              <Trophy className="w-4 h-4 text-[#202124]" />
            </button>
          </div>

        </div>
      </div>

      {/* Dedicated Navigation Sub-Bar (Strictly Scoped) */}
      <div className="bg-[#F7F5EF] border-t border-[#202124]/15">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 py-1.5 overflow-x-auto no-scrollbar scroll-smooth">
            {navItems.map((item) => {
              const active = isItemActive(item);
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}-btn`}
                  onClick={() => {
                    playPopSound();
                    navigate(item.path);
                  }}
                  className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap cursor-pointer border-2 ${
                    active
                      ? item.highlight
                        ? 'bg-[#F3E6A5] text-[#202124] border-[#202124] shadow-[2px_2px_0px_#202124]'
                        : 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
                      : item.highlight
                        ? 'bg-white text-[#F2A18E] border-[#202124] hover:bg-[#F2A18E] hover:text-[#202124]'
                        : 'bg-transparent text-[#202124] border-transparent hover:border-[#202124] hover:bg-white'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-current' : 'text-[#777873]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
