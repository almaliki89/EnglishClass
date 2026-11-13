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

const GRADE_ICONS: Record<EducationalGrade, { emoji: string; badge: string; color: string }> = {
  'third-intermediate': { emoji: '🏆', badge: 'وزاري 100%', color: 'from-amber-500 to-orange-600' },
  'fourth-preparatory': { emoji: '🚀', badge: 'المستوى 4', color: 'from-violet-500 to-purple-600' },
  'fifth-preparatory': { emoji: '💎', badge: 'المستوى 5', color: 'from-fuchsia-500 to-pink-600' },
  'sixth-preparatory': { emoji: '👑', badge: 'بكالوريا 100%', color: 'from-indigo-600 to-purple-700' }
};

export const GradeSelectorBar: React.FC<GradeSelectorBarProps> = ({
  selectedGrade,
  onSelectGrade,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F5EF] border-b-2 border-[#202124]/20 py-4 px-3 sm:px-6 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] flex items-center justify-center font-bold text-sm">
              🎓
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#405DE6]">
                  CURRICULUM DIRECTORY // دليل المراحل
                </span>
                <span className="text-[10px] px-1.5 py-0.2 bg-[#202124] text-[#F3E6A5] font-mono font-bold hidden sm:inline-block">
                  IRAQI 2026
                </span>
              </div>
              <h2 className="text-xs sm:text-sm font-extrabold text-[#202124] tracking-tight">
                اختر مرحلتك الدراسية للوصول الفوري لكامل المنهج والوزاريات
              </h2>
            </div>
          </div>
          
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#202124] bg-white px-2.5 py-1 border border-[#202124] shadow-[2px_2px_0px_#202124] self-start sm:self-auto font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#405DE6]" />
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
                key={gId}
                onClick={() => {
                  playPopSound();
                  onSelectGrade(gId);
                  navigate(`/grade/${gId}`);
                }}
                className={`group relative flex flex-col justify-between p-3 transition-all duration-150 cursor-pointer text-right min-w-0 w-full ${
                  isSelected
                    ? 'bg-[#405DE6] text-white border-2 border-[#202124] shadow-[3.5px_3.5px_0px_#202124] -translate-y-0.5'
                    : 'bg-white hover:bg-[#F7F5EF] text-[#202124] border border-[#202124] shadow-[2.5px_2.5px_0px_#202124] hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_#202124] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none'
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
                        ? 'bg-[#F3E6A5] text-[#202124] border-white'
                        : 'bg-[#F2A18E] text-[#202124] border-[#202124]'
                    }`}>
                      وزاري
                    </span>
                  ) : (
                    <span className={`text-[9px] font-bold px-1 py-0.2 font-mono ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-[#F7F5EF] text-[#202124] border border-[#202124]/30'
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
                  isSelected ? 'border-white/30 text-white/90' : 'border-[#202124]/15 text-[#747474]'
                }`}>
                  <span>
                    {meta.stage === 'intermediate' ? 'متوسطة' : 'إعدادية'}
                  </span>
                  {isSelected ? (
                    <span className="font-bold flex items-center gap-1 text-[#F3E6A5]">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>نشط</span>
                    </span>
                  ) : (
                    <span className="font-bold group-hover:text-[#405DE6]">
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
