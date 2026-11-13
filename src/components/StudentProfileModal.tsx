import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  X, 
  Zap, 
  BookOpen, 
  RotateCcw,
  Cloud,
  CloudCheck,
  UserCheck,
  LogOut,
  LogIn
} from 'lucide-react';
import { StudentState } from '../types';
import { INITIAL_BADGES } from '../utils/storage';
import { useAuth } from '../context/AuthContext';
import { getGradeMeta, ORDERED_GRADES, ALL_GRADES_META } from '../data/gradeContentResolver';
import { EducationalGrade } from '../types';

interface StudentProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentState: StudentState;
  onUpdateName: (newName: string) => void;
  onResetProgress: () => void;
  onOpenAuth: () => void;
  onSelectGrade?: (grade: EducationalGrade) => void;
}

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  isOpen,
  onClose,
  studentState,
  onUpdateName,
  onResetProgress,
  onOpenAuth,
  onSelectGrade,
}) => {
  const { user, logout, syncStatus } = useAuth();
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(studentState.name);
  const [confirmingReset, setConfirmingReset] = useState(false);

  if (!isOpen) return null;

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onUpdateName(nameInput.trim());
      setEditingName(false);
    }
  };

  const accuracy = studentState.totalQuestionsAttempted > 0
    ? Math.round((studentState.totalQuestionsCorrect / studentState.totalQuestionsAttempted) * 100)
    : 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        id="student-profile-modal"
        className="w-full max-w-2xl bg-surface border-4 border-ink shadow-brutal-hero overflow-hidden flex flex-col max-h-[90vh]"
      >
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-cobalt text-surface border-b-3 border-ink flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-yellow text-ink border-2 border-ink shadow-brutal-sm flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase font-black text-yellow tracking-wider">
                ملف الطالب الأكاديمي · STUDENT DOSSIER
              </div>
              <h2 className="text-base sm:text-xl font-black truncate">الملف الشخصي وإنجازات الطالب</h2>
            </div>
          </div>

          <button
            type="button"
            aria-label="إغلاق نافذة الملف الشخصي"
            onClick={onClose}
            className="p-2 bg-surface text-ink border-2 border-ink shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer rounded-[4px] shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Cloud Account Status Banner */}
          <div className="p-4 bg-paper border-2 border-ink shadow-brutal-callout flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0 w-full sm:w-auto">
              <div className={`w-10 h-10 border-2 border-ink shadow-brutal-sm flex items-center justify-center shrink-0 ${
                user ? 'bg-yellow text-ink' : 'bg-surface text-ink'
              }`}>
                {user ? <UserCheck className="w-5 h-5" /> : <Cloud className="w-5 h-5" />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-black text-ink break-all">
                    {user ? `حساب سحابي مفعل: ${user.phoneNumber || user.email || user.displayName}` : 'حساب محلي (ضيف)'}
                  </span>
                  {user && (
                    <span className="text-[10px] bg-yellow text-ink border border-ink font-black px-1.5 py-0.2 shrink-0">
                      SYNCED ✓
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-ink/70 font-medium">
                  {user 
                    ? 'تقدمك ودرجاتك محفوظة بأمان في السحابة.' 
                    : 'سجل حسابك الآن لتحفظ درجاتك ونقاطك وتفتحها من أي موبايل أو لابتوب.'}
                </p>
              </div>
            </div>

            {user ? (
              <button
                type="button"
                onClick={async () => {
                  await logout();
                }}
                className="px-3 py-1.5 bg-surface hover:bg-coral text-semantic-error hover:text-ink border-2 border-ink shadow-brutal-sm active:shadow-none rounded-[4px] text-xs font-black flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>خروج</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenAuth();
                }}
                className="px-3.5 py-2 bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink shadow-brutal-sm active:shadow-none rounded-[4px] text-xs font-black flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>دخول / تسجيل</span>
              </button>
            )}
          </div>

          {/* Name & Title Card */}
          <div className="p-5 bg-surface border-2 border-ink shadow-brutal-callout flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="min-w-0 w-full sm:w-auto">
              <p className="text-xs font-mono font-bold text-ink/70 mb-1">اسم الطالب:</p>
              {editingName ? (
                <form onSubmit={handleSaveName} className="flex flex-wrap items-center gap-2">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="px-3 py-1.5 bg-paper border-2 border-ink text-sm font-black focus:outline-none min-w-0"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 bg-cobalt text-surface border-2 border-ink text-xs font-black cursor-pointer"
                  >
                    حفظ
                  </button>
                </form>
              ) : (
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-black text-ink break-words">{studentState.name}</h3>
                  <button
                    type="button"
                    onClick={() => setEditingName(true)}
                    className="text-xs text-cobalt hover:underline font-black cursor-pointer font-mono"
                  >
                    [تعديل]
                  </button>
                </div>
              )}
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-black px-2 py-0.5 bg-yellow text-ink border border-ink">
                    {getGradeMeta(studentState.selectedGrade || 'sixth-preparatory').nameAr}
                  </span>
                  <span className="text-[11px] font-black px-2 py-0.5 bg-paper text-ink border border-ink">
                    {getGradeMeta(studentState.selectedGrade || 'sixth-preparatory').isMinisterial ? 'تحضير للـ 100 الوزارية 🌟' : 'المنهج الدراسي العراقي 🌟'}
                  </span>
                </div>

                {onSelectGrade && (
                  <div className="flex flex-wrap items-center gap-1 p-1 bg-paper border border-ink mt-1">
                    {ORDERED_GRADES.map(gId => {
                      const meta = ALL_GRADES_META[gId];
                      const isSelected = (studentState.selectedGrade || 'sixth-preparatory') === gId;
                      return (
                        <button
                          key={gId}
                          type="button"
                          onClick={() => onSelectGrade(gId)}
                          className={`px-2.5 py-1 text-[11px] font-black transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-cobalt text-surface border-ink shadow-brutal-press'
                              : 'bg-transparent text-ink border-transparent hover:bg-surface'
                          }`}
                        >
                          {meta.shortName}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
              <div className="text-center px-4 py-2 bg-paper border-2 border-ink shadow-brutal-sm">
                <p className="text-[10px] font-mono font-bold text-muted-gray">XP POINTS</p>
                <p className="text-xl font-black font-mono text-cobalt tabular-nums">{studentState.xp} XP</p>
              </div>
              <div className="text-center px-4 py-2 bg-paper border-2 border-ink shadow-brutal-sm">
                <p className="text-[10px] font-mono font-bold text-muted-gray">STREAK</p>
                <p className="text-xl font-black font-mono text-semantic-error tabular-nums">{studentState.streakDays}D</p>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
            <div className="p-2.5 sm:p-3 bg-paper border-2 border-ink shadow-brutal-sm">
              <p className="text-[10px] sm:text-xs font-mono font-bold text-muted-gray">LESSONS</p>
              <p className="text-xl sm:text-2xl font-black font-mono text-ink mt-1 tabular-nums">{studentState.completedLessonIds.length}</p>
            </div>
            <div className="p-2.5 sm:p-3 bg-paper border-2 border-ink shadow-brutal-sm">
              <p className="text-[10px] sm:text-xs font-mono font-bold text-muted-gray">ACCURACY</p>
              <p className="text-xl sm:text-2xl font-black font-mono text-cobalt mt-1 tabular-nums">{accuracy}%</p>
            </div>
            <div className="p-2.5 sm:p-3 bg-paper border-2 border-ink shadow-brutal-sm">
              <p className="text-[10px] sm:text-xs font-mono font-bold text-muted-gray">QUESTIONS</p>
              <p className="text-xl sm:text-2xl font-black font-mono text-semantic-success mt-1 tabular-nums">{studentState.totalQuestionsAttempted}</p>
            </div>
          </div>

          {/* Badges Collection */}
          <div className="space-y-3">
            <h3 className="text-sm font-black text-ink flex items-center gap-2">
              <Award className="w-4 h-4 text-cobalt" />
              <span>أوسمة الشرف والتفوق الدراسي (HONOR BADGES)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INITIAL_BADGES.map((badge) => {
                const isUnlocked = badge.id === 'first-step' 
                  ? studentState.completedLessonIds.length >= 1 
                  : badge.id === 'grammar-master' 
                  ? studentState.completedLessonIds.length >= 5
                  : badge.id === 'quiz-ace'
                  ? studentState.totalQuestionsCorrect >= 10
                  : badge.id === 'verbs-champion'
                  ? studentState.totalQuestionsCorrect >= 20
                  : true;

                return (
                  <div
                    key={badge.id}
                    className={`p-3.5 border-2 border-ink transition-all flex items-start gap-3 ${
                      isUnlocked
                        ? 'bg-yellow shadow-brutal-callout'
                        : 'bg-paper opacity-60 shadow-brutal-sm'
                    }`}
                  >
                    <div className={`w-9 h-9 border-2 border-ink flex items-center justify-center font-black text-sm shrink-0 ${
                      isUnlocked ? 'bg-cobalt text-surface shadow-brutal-press' : 'bg-surface text-ink'
                    }`}>
                      {isUnlocked ? '✓' : '🔒'}
                    </div>

                    <div className="space-y-0.5 min-w-0">
                      <h4 className="font-black text-xs sm:text-sm text-ink">
                        {badge.title}
                      </h4>
                      <p className="text-xs text-ink/70 leading-relaxed font-medium">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reset Progress Inline Confirmation */}
          <div className="pt-4 border-t-2 border-ink flex flex-wrap items-center justify-between gap-3 text-xs text-ink/70 font-mono">
            <span>{user ? '● البيانات متزامنة سحابياً مع حسابك' : '○ البيانات محفوظة محلياً في متصفحك'}</span>
            {confirmingReset ? (
              <div className="flex flex-wrap items-center gap-2 bg-answer-review-bg border-2 border-ink px-3 py-1.5 rounded-[4px]">
                <span className="text-xs font-sans font-black text-semantic-error">تأكيد تصفير التقدم بالكامل؟</span>
                <button
                  type="button"
                  onClick={() => {
                    setConfirmingReset(false);
                    onResetProgress();
                  }}
                  className="bg-semantic-error text-surface border border-ink px-2.5 py-0.5 rounded-[4px] text-xs font-sans font-black cursor-pointer"
                >
                  نعم، صفّر
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmingReset(false)}
                  className="bg-surface text-ink border border-ink px-2.5 py-0.5 rounded-[4px] text-xs font-sans font-black cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmingReset(true)}
                className="bg-surface hover:bg-coral hover:text-ink text-semantic-error border-2 border-ink rounded-[4px] px-3 py-1 font-bold flex items-center gap-1.5 cursor-pointer transition-all shadow-brutal-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>تصفير التقدم الدراسي</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
