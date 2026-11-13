import React from 'react';
import { EducationalGrade } from '../types';
import { ALL_GRADES_META, ORDERED_GRADES } from '../data/gradeContentResolver';
import { GraduationCap, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { playPopSound } from '../utils/cartoonAudio';

interface GradeSelectorBarProps {
  selectedGrade: EducationalGrade;
  onSelectGrade: (grade: EducationalGrade) => void;
}

const GRADE_ICONS: Record<EducationalGrade, { emoji: string; badge: string }> = {
  'third-intermediate': { emoji: '🏆', badge: 'مسار وزاري' },
  'fourth-preparatory': { emoji: '🚀', badge: 'المستوى 4' },
  'fifth-preparatory': { emoji: '💎', badge: 'المستوى 5' },
  'sixth-preparatory': { emoji: '👑', badge: 'مسار البكالوريا' }
};

export const GradeSelectorBar: React.FC<GradeSelectorBarProps> = ({
  selectedGrade,
  onSelectGrade,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-paper border-b-2 border-ink/20 py-4 px-3 sm:px-6 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-yellow text-ink border-2 border-ink shadow-brutal-sm flex items-center justify-center font-bold text-sm shrink-0">
              🎓
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cobalt">
                  CURRICULUM DIRECTORY // دليل المراحل
                </span>
                <span className="text-[10px] px-1.5 py-0.2 bg-ink text-yellow font-mono font-bold hidden sm:inline-block">
                  IRAQI 2026
                </span>
              </div>
              <h2 className="text-xs sm:text-sm font-extrabold text-ink tracking-tight">
                اختر مرحلتك الدراسية للوصول الفوري لكامل المنهج والوزاريات
              </h2>
            </div>
          </div>
          
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-ink bg-surface px-2.5 py-1 border border-ink shadow-brutal-sm self-start sm:self-auto font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cobalt" />
            <span>4 ACADEMIC LEVELS</span>
          </div>
        </div>

        {/* Grades Swiss Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {ORDERED_GRADES.map((gId, index) => {
            const meta = ALL_GRADES_META[gId];
            const isSelected = selectedGrade === gId;
            const iconConfig = GRADE_ICONS[gId];

            return (
              <button
                type="button"
                key={gId}
                onClick={() => {
                  playPopSound();
                  onSelectGrade(gId);
                  navigate(`/grade/${gId}`);
                }}
                className={`group relative flex flex-col justify-between p-3 transition-all duration-150 cursor-pointer text-right min-w-0 w-full ${
                  isSelected
                    ? 'bg-cobalt text-surface border-2 border-ink shadow-brutal-md -translate-y-0.5'
                    : 'bg-surface hover:bg-paper text-ink border border-ink shadow-brutal-btn hover:-translate-y-0.5 hover:shadow-brutal-md active:translate-x-[1px] active:translate-y-[1px] active:shadow-none'
                }`}
              >
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="font-mono text-xs font-bold opacity-70">
                    0{index + 1}
                  </span>
                  
                  {meta.isMinisterial ? (
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 border ${
                      isSelected
                        ? 'bg-yellow text-ink border-surface'
                        : 'bg-coral text-ink border-ink'
                    }`}>
                      وزاري
                    </span>
                  ) : (
                    <span className={`text-[9px] font-bold px-1 py-0.2 font-mono ${
                      isSelected
                        ? 'bg-surface/20 text-surface'
                        : 'bg-paper text-ink border border-ink/30'
                    }`}>
                      مدرسي
                    </span>
                  )}
                </div>

                <div className="my-1.5">
                  <span className="text-xl inline-block mb-1 group-hover:scale-110 transition-transform">
                    {iconConfig.emoji}
                  </span>
                  <span className="font-extrabold text-xs sm:text-sm tracking-tight block leading-tight">
                    {meta.nameAr}
                  </span>
                </div>

                <div className={`flex items-center justify-between w-full pt-1.5 border-t text-[10px] font-mono ${
                  isSelected ? 'border-surface/30 text-surface/90' : 'border-ink/15 text-muted-gray'
                }`}>
                  <span>
                    {meta.stage === 'intermediate' ? 'متوسطة' : 'إعدادية'}
                  </span>
                  {isSelected ? (
                    <span className="font-bold flex items-center gap-1 text-yellow">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>نشط</span>
                    </span>
                  ) : (
                    <span className="font-bold group-hover:text-cobalt">
                      دخول →
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
