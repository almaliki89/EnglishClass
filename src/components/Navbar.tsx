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
  
  // Grade scope detection: Options appear ONLY when inside a selected grade
  const isInsideGrade =
    location.pathname.startsWith('/grade/') ||
    location.pathname.startsWith('/lesson/') ||
    location.pathname.startsWith('/unit/');

  const litLabel =
    selectedGrade === 'third-intermediate'
      ? 'قصص الثالث (Story Time)'
      : 'الأدب والنصوص';

  // Home path points to the main Grade Selection view
  const homePath = '/';

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
      return location.pathname === '/' || location.pathname === '/grades';
    }
    return location.pathname.startsWith(item.path);
  };

  return (
    <header className="sticky top-0 z-40 w-full max-w-full min-w-0 overflow-hidden bg-surface border-b-2 border-ink shadow-brutal-nav">
      {/* Top Header Row: Identity & Actions */}
      <div className="max-w-7xl w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-1.5 sm:gap-3 min-w-0 w-full">
          
          {/* Right Zone: Logo & Grade Identity (STRICT ISOLATION) */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 shrink select-none">
            <Link 
              id="brand-logo"
              to="/"
              className="flex items-center gap-2 sm:gap-2.5 group shrink-0 rounded-[4px]"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-cobalt text-surface border-2 border-ink rounded-[4px] shadow-brutal-sm flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:shadow-brutal-callout transition-all">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="shrink-0 text-right">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-sm sm:text-lg text-ink tracking-tight whitespace-nowrap">
                    النموذجية
                  </span>
                  {isInsideGrade && (
                    <>
                      <span className="text-xs text-muted-gray font-mono hidden sm:inline">/</span>
                      <span className="text-xs font-bold text-cobalt hidden sm:inline font-mono">
                        {currentGradeMeta.shortName}
                      </span>
                    </>
                  )}
                </div>
                <div className="hidden xs:flex items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase bg-yellow text-ink border border-ink rounded-[3px] px-1 py-0.2 font-bold">
                    IRAQ ED. 2026
                  </span>
                  <span className="text-[11px] text-muted-gray font-medium whitespace-nowrap hidden md:inline">
                    إشراف الأستاذ مصطفى تركي
                  </span>
                </div>
              </div>
            </Link>

            {/* Current Grade Stamp + Switch Grade Button (Shown inside a grade) */}
            {isInsideGrade && (
              <div className="hidden sm:flex items-center gap-2">
                <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-paper border border-ink text-xs font-mono font-bold text-ink rounded-[4px]">
                  <span className="text-cobalt">{currentGradeMeta.shortName}</span>
                  {isMinisterial && (
                    <span className="text-[9px] px-1 py-0.2 bg-coral text-ink font-mono font-bold border border-ink rounded-[3px]">
                      وزاري
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  id="grade-portal-exit-btn"
                  onClick={() => {
                    playPopSound();
                    navigate('/');
                  }}
                  className="flex items-center gap-1 px-2.5 py-1.5 border-2 border-ink rounded-[4px] shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px] text-xs font-bold cursor-pointer transition-all bg-yellow hover:bg-yellow-hover text-ink"
                  title="تغيير الصف الدراسي"
                >
                  <span>تغيير الصف ↩</span>
                </button>
              </div>
            )}
          </div>

          {/* Left Zone: Action Hub (Resume + Streak/XP + Sound FX + Profile) */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Resume Last Visited Lesson Button */}
            {studentState.lastVisitedLessonId && (
              <button
                type="button"
                id="resume-learning-btn"
                onClick={() => {
                  playPopSound();
                  navigate(`/lesson/${studentState.lastVisitedLessonId}`);
                }}
                className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 bg-yellow hover:bg-yellow-hover border-2 border-ink rounded-[4px] shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px] text-xs font-bold text-ink transition-all cursor-pointer"
                title="تابع من حيث توقفت في الدرس الأخير"
              >
                <BookOpen className="w-3.5 h-3.5 text-cobalt" />
                <span className="whitespace-nowrap">تابع الدرس</span>
              </button>
            )}

            {/* Student XP & Streak Badge */}
            <button
              type="button"
              id="student-stats-pill"
              onClick={onOpenProfile}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-2.5 py-1.5 bg-paper border-2 border-ink rounded-[4px] shadow-brutal-sm cursor-pointer hover:bg-surface active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all shrink-0 font-mono tabular-nums"
              title="لوحة الإنجازات والتقدم"
            >
              <div className="flex items-center gap-1 text-ink font-bold text-xs whitespace-nowrap">
                <Flame className="w-3.5 h-3.5 fill-coral text-ink" />
                <span>{studentState.streakDays}D</span>
              </div>
              <div className="w-px h-3 bg-ink/30" />
              <div className="flex items-center gap-1 text-cobalt font-bold text-xs whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{studentState.xp} XP</span>
              </div>
            </button>

            {/* Cloud User / Sign In */}
            {user ? (
              <button
                type="button"
                id="cloud-user-btn"
                onClick={onOpenProfile}
                aria-label="ملف الطالب السحابي"
                className="p-2 bg-surface hover:bg-paper text-ink border-2 border-ink rounded-[4px] shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all shrink-0 cursor-pointer"
                title={`مسجل دخول: ${user.displayName || user.email || 'طالب'}`}
              >
                <UserIcon className="w-4 h-4 text-cobalt" />
              </button>
            ) : (
              <button
                type="button"
                id="auth-gate-btn"
                onClick={onOpenAuth}
                className="px-2.5 py-1.5 bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink rounded-[4px] shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px] text-xs font-bold transition-all shrink-0 cursor-pointer"
              >
                دخول
              </button>
            )}

            {/* Sound FX Toggle */}
            <button
              type="button"
              id="sound-fx-btn"
              aria-label={isSoundOn ? 'كتم المؤثرات الصوتية' : 'تفعيل المؤثرات الصوتية'}
              onClick={() => {
                const newState = toggleSound();
                setIsSoundOn(newState);
                if (newState) playPopSound();
              }}
              className={`p-2 border-2 border-ink rounded-[4px] shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all shrink-0 cursor-pointer ${
                isSoundOn
                  ? 'bg-yellow text-ink'
                  : 'bg-surface text-muted-gray'
              }`}
              title={isSoundOn ? 'المؤثرات الصوتية مفعلة' : 'المؤثرات الصوتية مكتومة'}
            >
              {isSoundOn ? <Volume2 className="w-4 h-4 text-ink" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Profile Trophy Button */}
            <button
              type="button"
              id="student-profile-btn"
              aria-label="الملف الشخصي والإنجازات"
              onClick={onOpenProfile}
              className="p-2 bg-coral hover:bg-coral-hover text-ink border-2 border-ink rounded-[4px] shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all shrink-0 cursor-pointer"
              title="الملف الشخصي والإنجازات"
            >
              <Trophy className="w-4 h-4 text-ink" />
            </button>
          </div>

        </div>
      </div>

      {/* Dedicated Navigation Sub-Bar (Shown ONLY when inside a selected grade) */}
      {isInsideGrade && (
        <div className="w-full max-w-full min-w-0 overflow-hidden bg-paper border-t border-ink/15">
          <div className="max-w-7xl w-full mx-auto px-2 sm:px-6 lg:px-8 min-w-0">
            <nav aria-label="أقسام الصف" className="flex flex-wrap items-center gap-1.5 py-1.5 w-full min-w-0">
              {navItems.map((item) => {
                const active = isItemActive(item);
                const Icon = item.icon;
                return (
                  <button
                    type="button"
                    key={item.id}
                    id={`nav-${item.id}-btn`}
                    onClick={() => {
                      playPopSound();
                      navigate(item.path);
                    }}
                    className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap cursor-pointer border-2 rounded-[4px] ${
                      active
                        ? item.highlight
                          ? 'bg-yellow text-ink border-ink shadow-brutal-sm'
                          : 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                        : item.highlight
                          ? 'bg-yellow/45 text-ink border-ink hover:bg-yellow'
                          : 'bg-transparent text-ink border-transparent hover:border-ink hover:bg-surface'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${active ? 'text-current' : item.highlight ? 'text-cobalt' : 'text-muted-gray'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
