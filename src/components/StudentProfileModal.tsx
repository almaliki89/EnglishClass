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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#171717]/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        id="student-profile-modal"
        className="w-full max-w-2xl bg-white border-4 border-[#171717] shadow-[8px_8px_0px_#171717] overflow-hidden flex flex-col max-h-[90vh]"
      >
        
        {/* Header */}
        <div className="p-5 bg-[#304FFE] text-white border-b-3 border-[#171717] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#E9FF57] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase font-black text-[#E9FF57] tracking-wider">
                STUDENT DOSSIER // ملف الطالب
              </div>
              <h2 className="text-lg sm:text-xl font-black">الملف الشخصي وإنجازات الطالب</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-white text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Cloud Account Status Banner */}
          <div className="p-4 bg-[#F4EFE3] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center shrink-0 ${
                user ? 'bg-[#E9FF57] text-[#171717]' : 'bg-white text-[#171717]'
              }`}>
                {user ? <UserCheck className="w-5 h-5" /> : <Cloud className="w-5 h-5" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-[#171717]">
                    {user ? `حساب سحابي مفعل: ${user.phoneNumber || user.email || user.displayName}` : 'حساب محلي (ضيف)'}
                  </span>
                  {user && (
                    <span className="text-[10px] bg-[#E9FF57] text-[#171717] border border-[#171717] font-black px-1.5 py-0.2">
                      SYNCED ✓
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#171717]/70 font-medium">
                  {user 
                    ? 'تقدمك ودرجاتك الوزارية محفوظة بأمان في خوادم Google Cloud السحابية.' 
                    : 'سجل حسابك الآن لتحفظ درجاتك ونقاطك وتفتحها من أي موبايل أو لابتوب.'}
                </p>
              </div>
            </div>

            {user ? (
              <button
                onClick={async () => {
                  await logout();
                }}
                className="px-3 py-1.5 bg-white text-[#FF5738] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] active:shadow-none text-xs font-black flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>خروج</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onOpenAuth();
                }}
                className="px-3.5 py-2 bg-[#304FFE] hover:bg-[#203ecc] text-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] active:shadow-none text-xs font-black flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>دخول / تسجيل</span>
              </button>
            )}
          </div>

          {/* Name & Title Card */}
          <div className="p-5 bg-white border-2 border-[#171717] shadow-[3px_3px_0px_#171717] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono font-bold text-[#171717]/60 mb-1">CANDIDATE NAME // اسم الطالب:</p>
              {editingName ? (
                <form onSubmit={handleSaveName} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="px-3 py-1.5 bg-[#F4EFE3] border-2 border-[#171717] text-sm font-black focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 bg-[#304FFE] text-white border-2 border-[#171717] text-xs font-black cursor-pointer"
                  >
                    حفظ
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black text-[#171717]">{studentState.name}</h3>
                  <button
                    onClick={() => setEditingName(true)}
                    className="text-xs text-[#304FFE] hover:underline font-black cursor-pointer font-mono"
                  >
                    [EDIT]
                  </button>
                </div>
              )}
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-black px-2 py-0.5 bg-[#E9FF57] text-[#171717] border border-[#171717]">
                    {getGradeMeta(studentState.selectedGrade || 'sixth-preparatory').nameAr}
                  </span>
                  <span className="text-[11px] font-black px-2 py-0.5 bg-[#F4EFE3] text-[#171717] border border-[#171717]">
                    {getGradeMeta(studentState.selectedGrade || 'sixth-preparatory').isMinisterial ? 'مرشح للـ 100 الوزارية 🌟' : 'منهج العراق الرسمي 🌟'}
                  </span>
                </div>

                {onSelectGrade && (
                  <div className="flex flex-wrap items-center gap-1 p-1 bg-[#F4EFE3] border border-[#171717] mt-1">
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
                              ? 'bg-[#304FFE] text-white border-[#171717] shadow-[1px_1px_0px_#171717]'
                              : 'bg-transparent text-[#171717] border-transparent hover:bg-white'
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

            <div className="flex items-center gap-2.5 self-end sm:self-auto">
              <div className="text-center px-4 py-2 bg-[#F4EFE3] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <p className="text-[10px] font-mono font-bold text-[#171717]/60">XP POINTS</p>
                <p className="text-xl font-black font-mono text-[#304FFE]">{studentState.xp} XP</p>
              </div>
              <div className="text-center px-4 py-2 bg-[#F4EFE3] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <p className="text-[10px] font-mono font-bold text-[#171717]/60">STREAK</p>
                <p className="text-xl font-black font-mono text-[#FF5738]">{studentState.streakDays}D</p>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-[#F4EFE3] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
              <p className="text-xs font-mono font-bold text-[#171717]/70">LESSONS</p>
              <p className="text-2xl font-black font-mono text-[#171717] mt-1">{studentState.completedLessonIds.length}</p>
            </div>
            <div className="p-3 bg-[#F4EFE3] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
              <p className="text-xs font-mono font-bold text-[#171717]/70">ACCURACY</p>
              <p className="text-2xl font-black font-mono text-[#304FFE] mt-1">{accuracy}%</p>
            </div>
            <div className="p-3 bg-[#F4EFE3] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
              <p className="text-xs font-mono font-bold text-[#171717]/70">QUESTIONS</p>
              <p className="text-2xl font-black font-mono text-[#FF5738] mt-1">{studentState.totalQuestionsAttempted}</p>
            </div>
          </div>

          {/* Badges Collection */}
          <div className="space-y-3">
            <h3 className="text-sm font-black text-[#171717] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#304FFE]" />
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
                    className={`p-3.5 border-2 border-[#171717] transition-all flex items-start gap-3 ${
                      isUnlocked
                        ? 'bg-[#E9FF57] shadow-[3px_3px_0px_#171717]'
                        : 'bg-[#F4EFE3] opacity-60 shadow-[2px_2px_0px_#171717]'
                    }`}
                  >
                    <div className={`w-9 h-9 border-2 border-[#171717] flex items-center justify-center font-black text-sm shrink-0 ${
                      isUnlocked ? 'bg-[#304FFE] text-white shadow-[1px_1px_0px_#171717]' : 'bg-white text-[#171717]'
                    }`}>
                      {isUnlocked ? '✓' : '🔒'}
                    </div>

                    <div className="space-y-0.5">
                      <h4 className="font-black text-xs sm:text-sm text-[#171717]">
                        {badge.title}
                      </h4>
                      <p className="text-xs text-[#171717]/70 leading-relaxed font-medium">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reset Progress Warning Button */}
          <div className="pt-4 border-t-2 border-[#171717] flex flex-wrap items-center justify-between gap-3 text-xs text-[#171717]/70 font-mono">
            <span>{user ? '● البيانات متزامنة سحابياً مع حسابك' : '○ البيانات محفوظة محلياً في متصفحك'}</span>
            <button
              onClick={() => {
                if (window.confirm('هل أنت متأكد من تصفير تقدمك بالكامل؟')) {
                  onResetProgress();
                }
              }}
              className="bg-white hover:bg-[#FF5738] hover:text-white text-[#FF5738] border-2 border-[#171717] px-3 py-1 font-bold flex items-center gap-1.5 cursor-pointer transition-all shadow-[2px_2px_0px_#171717]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>تصفير التقدم الدراسي</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
