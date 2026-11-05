import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubjectId } from '../types/subject';
import { Lesson, StudentState } from '../types';
import { SUBJECTS } from '../data/subjectsData';
import { getUnitsForGrade, getGradeMeta, ORDERED_GRADES, ALL_GRADES_META } from '../data/gradeContentResolver';
import { EducationalGrade } from '../types';
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  GraduationCap,
  FileText,
  Award,
  Layers,
  CheckCircle2,
} from 'lucide-react';

interface SubjectDetailViewProps {
  subjectId: SubjectId;
  studentState: StudentState;
  grade?: EducationalGrade;
  onBack: () => void;
  onSelectLesson: (lesson: Lesson) => void;
  onOpenSimulations?: (subjectId: SubjectId, simulationId?: string) => void;
}

export const SubjectDetailView: React.FC<SubjectDetailViewProps> = ({
  subjectId = 'english',
  studentState,
  grade,
  onBack,
  onSelectLesson,
}) => {
  const navigate = useNavigate();
  const activeGrade: EducationalGrade = grade || studentState.selectedGrade || 'sixth-preparatory';

  const unitsList = getUnitsForGrade(activeGrade);
  const currentGradeMeta = getGradeMeta(activeGrade);

  const subject = {
    id: 'english' as const,
    titleAr: 'اللغة الإنكليزية',
    titleEn: 'English for Iraq',
    description: `المنهج الرسمي المعتمد في العراق لـ (${currentGradeMeta.nameAr}): قواعد، مفردات، قطع استيعابية، أدب، إنشاءات، وأسئلة امتحانية ونماذج شاملة.`,
    category: 'language' as const,
    icon: 'Languages',
    theme: {
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-700 dark:text-blue-300',
      badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
      gradient: 'from-blue-600 to-indigo-600',
    },
    unitsCount: unitsList.length,
    hasSimulations: false,
    isAvailable: true,
  };

  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto w-full text-[#171717]">
      {/* Subject Header Banner */}
      <div className="relative overflow-hidden bg-white border-4 border-[#171717] p-6 sm:p-10 shadow-[8px_8px_0px_#171717]">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F4EFE3] hover:bg-white text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-xs font-black transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة للرئيسية</span>
            </button>
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-[#FF5738] font-bold">
                {subject.titleEn} // OFFICIAL CURRICULUM
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight">{subject.titleAr}</h1>
            </div>
            <p className="text-[#171717]/80 text-sm max-w-2xl leading-relaxed font-bold">
              {subject.description}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => navigate('/mock')}
              className="flex items-center gap-2 px-5 py-3 bg-[#E9FF57] hover:bg-[#d8ee43] text-[#171717] border-3 border-[#171717] font-black text-sm shadow-[4px_4px_0px_#171717] hover:shadow-[2px_2px_0px_#171717] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              <Award className="w-4 h-4 text-[#FF5738]" />
              <span>محاكي الامتحان الوزاري 100د</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/exam')}
              className="flex items-center gap-2 px-5 py-3 bg-[#304FFE] hover:bg-[#203ecc] text-white border-3 border-[#171717] font-black text-sm shadow-[4px_4px_0px_#171717] hover:shadow-[2px_2px_0px_#171717] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#E9FF57]" />
              <span>بنك الأسئلة الوزارية</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grade Isolation Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-[#171717] pb-4">
        <div>
          <h2 className="text-xl font-black text-[#171717] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#304FFE]" />
            <span>وحدات ودروس {currentGradeMeta.nameAr}</span>
          </h2>
          <p className="text-xs text-[#171717]/70 font-bold mt-1">
            استعراض الوحدات، القواعد، والتمارين الوزارية المعتمدة لـ {currentGradeMeta.shortName} فقط
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-[#E9FF57] text-[#171717] font-black text-xs border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
            {currentGradeMeta.nameAr}
          </span>
          <button
            type="button"
            onClick={() => navigate(`/grade/${activeGrade}`)}
            className="px-3 py-1.5 bg-[#F4EFE3] hover:bg-white text-[#171717] font-black text-xs border-2 border-[#171717] shadow-[2px_2px_0px_#171717] cursor-pointer"
          >
            منصة الصف ↩
          </button>
        </div>
      </div>

      {/* Units & Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {unitsList.map((unit) => (
          <div
            key={unit.id}
            className="bg-white p-6 border-3 border-[#171717] shadow-[4px_4px_0px_#171717] space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-[#E9FF57] text-[#171717] border-2 border-[#171717] font-black text-xs font-mono shadow-[2px_2px_0px_#171717]">
                UNIT 0{unit.number || unit.id}
              </span>
              <span className="text-xs text-[#171717]/70 font-mono font-bold">
                {unit.lessons.length} LESSONS
              </span>
            </div>
            <div>
              <h3 className="text-lg font-black text-[#171717]">
                {unit.titleAr}
              </h3>
              <p className="text-xs text-[#171717]/60 font-mono font-bold">{unit.titleEn}</p>
            </div>
            <div className="space-y-2 pt-2 border-t-2 border-[#171717]/20">
              {unit.lessons.map((lesson) => {
                const isCompleted = studentState.completedLessonIds.includes(lesson.id);
                return (
                  <button
                    key={lesson.id}
                    type="button"
                    onClick={() => onSelectLesson(lesson)}
                    className="w-full flex items-center justify-between p-2.5 bg-[#F4EFE3] hover:bg-[#E9FF57] border-2 border-[#171717] text-right text-xs font-black text-[#171717] transition-all group cursor-pointer active:translate-x-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_#171717]"
                  >
                    <div className="flex items-center gap-2 truncate">
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-[#304FFE] shrink-0" />
                      ) : (
                        <div className="w-2 h-2 bg-[#171717] shrink-0" />
                      )}
                      <span className="truncate">{lesson.titleAr}</span>
                    </div>
                    <ChevronLeft className="w-4 h-4 text-[#171717] group-hover:-translate-x-1 transition-transform shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
