import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, Award, BookOpen, Sparkles, CheckCircle2, 
  ArrowLeft, ShieldCheck, Flame, Layers, Rocket
} from 'lucide-react';
import { EducationalGrade, StudentState } from '../types';
import { 
  ALL_GRADES_META, ORDERED_GRADES, getUnitsForGrade, getGradeMeta 
} from '../data/gradeContentResolver';
import { BrutalCard, BrutalButton, BrutalBadge } from './common/BrutalUI';
import { playPopSound, playFanfare } from '../utils/cartoonAudio';

interface GradesPortalProps {
  studentState: StudentState;
  onSelectGrade: (grade: EducationalGrade) => void;
}

const GRADE_VISUALS: Record<EducationalGrade, { emoji: string; accentBg: string; tag: string; image3d: string }> = {
  'third-intermediate': { 
    emoji: '🏆', 
    accentBg: 'bg-[#F2A18E]', 
    tag: 'وزاري معتمد 100%',
    image3d: '/assets/images/grade_3rd_intermediate_3d_1793868636685.jpg'
  },
  'fourth-preparatory': { 
    emoji: '🚀', 
    accentBg: 'bg-[#DCD8FA]', 
    tag: 'المرحلة الإعدادية',
    image3d: '/assets/images/grade_4th_preparatory_3d_1793868637872.jpg'
  },
  'fifth-preparatory': { 
    emoji: '💎', 
    accentBg: 'bg-[#F3E6A5]', 
    tag: 'الإعدادي المتقدم',
    image3d: '/assets/images/grade_5th_preparatory_3d_1793868637510.jpg'
  },
  'sixth-preparatory': { 
    emoji: '👑', 
    accentBg: 'bg-[#405DE6]', 
    tag: 'البكالوريا الوزارية 100%',
    image3d: '/assets/images/grade_6th_preparatory_3d_1793868638311.jpg'
  },
};

export const GradesPortal: React.FC<GradesPortalProps> = ({
  studentState,
  onSelectGrade,
}) => {
  const navigate = useNavigate();

  const handleEnterGrade = (gradeId: EducationalGrade) => {
    playPopSound();
    onSelectGrade(gradeId);
    navigate(`/grade/${gradeId}`);
  };

  return (
    <div className="space-y-10 pb-24 max-w-7xl mx-auto w-full text-[#202124]" dir="rtl">
      {/* 1. Swiss Editorial Header Banner */}
      <BrutalCard variant="paper" borderSize="3" shadowSize="lg" className="p-6 sm:p-10 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b-2 border-[#202124]/20 pb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <BrutalBadge variant="cobalt" className="text-xs">
                منهاج اللغة الإنكليزية العراقي
              </BrutalBadge>
              <BrutalBadge variant="yellow" className="text-xs">
                دليل الصفوف الدراسية 2026
              </BrutalBadge>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
              اختر مرحلتك الدراسية للبدء في بيئة تعليمية أكاديمية مستقلة
            </h1>
            <p className="text-xs sm:text-sm text-[#777873] font-medium max-w-2xl leading-relaxed">
              توفّر المنصة تجربة مخصصة لكل صف دراسي على حدة: مفردات، وحدات، قواعد تفاعلية، 
              نماذج امتحانية مدرسية ووزارية معزلة كلياً دون أي تداخل مع المراحل الأكاديمية الأخرى.
            </p>
          </div>

          <div className="bg-white border-2 border-[#202124] shadow-[3.5px_3.5px_0px_#202124] p-5 text-center shrink-0 min-w-[220px] rounded">
            <span className="text-[10px] font-mono font-bold uppercase text-[#777873] block mb-1">
              الصف الدراسي النشط
            </span>
            <span className="text-base font-black text-[#405DE6] block font-display">
              {studentState.selectedGrade ? getGradeMeta(studentState.selectedGrade).shortName : 'لم يتم التحديد'}
            </span>
            {studentState.selectedGrade && (
              <button
                onClick={() => navigate(`/grade/${studentState.selectedGrade}`)}
                className="mt-2.5 text-xs font-bold text-[#F2A18E] hover:underline cursor-pointer block mx-auto font-mono"
              >
                الدخول المباشر لصفك ↩
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-[#202124]">
          <span className="px-3 py-1 bg-white border border-[#202124] shadow-[1.5px_1.5px_0px_#202124]">
            ✓ عزل تام وحصري بين الصفوف
          </span>
          <span className="px-3 py-1 bg-white border border-[#202124] shadow-[1.5px_1.5px_0px_#202124]">
            ✓ 4 مراحل إعدادية ومتوسطة معتمدة
          </span>
          <span className="px-3 py-1 bg-white border border-[#202124] shadow-[1.5px_1.5px_0px_#202124]">
            ✓ إشراف الأستاذ مصطفى تركي
          </span>
        </div>
      </BrutalCard>

      {/* 2. Grid of 4 Active Educational Environments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ORDERED_GRADES.map((gId, idx) => {
          const meta = ALL_GRADES_META[gId];
          const units = getUnitsForGrade(gId);
          const allLessons = units.flatMap((u) => u.lessons);
          const completedInGrade = allLessons.filter((l) => studentState.completedLessonIds.includes(l.id)).length;
          const progressPct = allLessons.length > 0 ? Math.round((completedInGrade / allLessons.length) * 100) : 0;
          const visual = GRADE_VISUALS[gId];
          const isCurrentActive = studentState.selectedGrade === gId;

          return (
            <BrutalCard
              key={gId}
              variant="white"
              borderSize="3"
              shadowSize="lg"
              className={`p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-transform ${
                isCurrentActive ? 'border-[#405DE6] ring-2 ring-[#405DE6]/30' : ''
              }`}
            >
              <div className="space-y-5">
                {/* 3D Visual & Header Meta */}
                <div className="flex items-start justify-between gap-4">
                  <div className="relative group overflow-hidden border-2 border-[#202124] shadow-[3px_3px_0px_#202124] w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-[#F7F5EF]">
                    <img 
                      src={visual.image3d} 
                      alt={meta.nameAr} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-1 right-1 bg-[#202124] text-white text-[10px] font-mono font-bold px-1.5 py-0.2">
                      0{idx + 1}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    {meta.isMinisterial ? (
                      <BrutalBadge variant="vermilion">★ امتحان وزاري عام</BrutalBadge>
                    ) : (
                      <BrutalBadge variant="sky">امتحان مدرسي نهائي</BrutalBadge>
                    )}
                    <span className="text-xs font-mono font-bold text-[#777873]">
                      {meta.stage === 'intermediate' ? 'المرحلة المتوسطة' : 'المرحلة الإعدادية'}
                    </span>
                  </div>
                </div>

                {/* Grade Titles */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] tracking-tight">
                    {meta.nameAr}
                  </h2>
                  <p className="text-xs font-mono font-bold text-[#405DE6] mt-0.5" dir="ltr">
                    {meta.nameEn}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#777873] font-medium leading-relaxed bg-[#F7F5EF] p-3.5 border-2 border-[#202124]/10">
                  {meta.description}
                </p>

                {/* Educational Content Counts */}
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-[#F7F5EF] border border-[#202124]/20">
                    <span className="text-[10px] text-[#777873] block">الوحدات الدراسية</span>
                    <span className="text-sm font-extrabold text-[#202124]">{units.length} وحدات</span>
                  </div>
                  <div className="p-3 bg-[#F7F5EF] border border-[#202124]/20">
                    <span className="text-[10px] text-[#777873] block">إجمالي الدروس</span>
                    <span className="text-sm font-extrabold text-[#405DE6]">{allLessons.length} درساً</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs font-mono text-[#202124]">
                    <span>التقدم التراكمي في المنهج:</span>
                    <span className="font-extrabold text-[#405DE6]">{progressPct}%</span>
                  </div>
                  <div className="w-full bg-[#EEECE6] h-2.5 border border-[#202124] overflow-hidden">
                    <div
                      className="bg-[#405DE6] h-full transition-all duration-300"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t-2 border-[#202124]/10">
                <BrutalButton
                  variant={isCurrentActive ? 'yellow' : 'primary'}
                  size="md"
                  onClick={() => handleEnterGrade(gId)}
                  className="w-full justify-between"
                >
                  <span>دخول منصة {meta.shortName}</span>
                  <ArrowLeft className="w-4 h-4" />
                </BrutalButton>
              </div>
            </BrutalCard>
          );
        })}
      </div>
    </div>
  );
};
