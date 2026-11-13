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
    description: `المنهاج الدراسي العراقي لـ (${currentGradeMeta.nameAr}): قواعد، مفردات، قطع استيعابية، أدب، إنشاءات، وأسئلة امتحانية ونماذج شاملة.`,
    category: 'language' as const,
    icon: 'Languages',
    unitsCount: unitsList.length,
    hasSimulations: false,
    isAvailable: true,
  };

  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto w-full text-ink">
      {/* Subject Header Banner */}
      <div className="relative overflow-hidden bg-surface border-4 border-ink p-6 sm:p-10 shadow-brutal-hero">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-paper hover:bg-surface text-ink border-2 border-ink shadow-brutal-sm text-xs font-black transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة للرئيسية</span>
            </button>
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-cobalt font-bold">
                {subject.titleEn} · IRAQ CURRICULUM
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-ink tracking-tight">{subject.titleAr}</h1>
            </div>
            <p className="text-ink/80 text-sm max-w-2xl leading-relaxed font-bold">
              {subject.description}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => navigate('/mock')}
              className="flex items-center gap-2 px-5 py-3 bg-yellow hover:bg-yellow-hover text-ink border-3 border-ink rounded-[4px] font-black text-sm shadow-brutal-action hover:shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              <Award className="w-4 h-4 text-ink" />
              <span>محاكي الامتحان الوزاري 100د</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/exam')}
              className="flex items-center gap-2 px-5 py-3 bg-cobalt hover:bg-cobalt-hover text-surface border-3 border-ink rounded-[4px] font-black text-sm shadow-brutal-action hover:shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-yellow" />
              <span>بنك الأسئلة الوزارية</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grade Isolation Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-ink pb-4">
        <div>
          <h2 className="text-xl font-black text-ink flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cobalt" />
            <span>وحدات ودروس {currentGradeMeta.nameAr}</span>
          </h2>
          <p className="text-xs text-ink/70 font-bold mt-1">
            استعراض الوحدات، القواعد، والتمارين المقررة لـ {currentGradeMeta.shortName} فقط
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1.5 bg-yellow text-ink font-black text-xs border-2 border-ink shadow-brutal-sm">
            {currentGradeMeta.nameAr}
          </span>
          <button
            type="button"
            onClick={() => navigate(`/grade/${activeGrade}`)}
            className="px-3 py-1.5 bg-paper hover:bg-surface text-ink font-black text-xs border-2 border-ink shadow-brutal-sm cursor-pointer"
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
            className="bg-surface p-6 border-3 border-ink shadow-brutal-action space-y-4 min-w-0"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="px-3 py-1 bg-yellow text-ink border-2 border-ink font-black text-xs font-mono shadow-brutal-sm">
                UNIT 0{unit.number || unit.id}
              </span>
              <span className="text-xs text-ink/70 font-mono font-bold">
                {unit.lessons.length} LESSONS
              </span>
            </div>
            <div>
              <h3 className="text-lg font-black text-ink">
                {unit.titleAr}
              </h3>
              <p className="text-xs text-ink/60 font-mono font-bold break-words">{unit.titleEn}</p>
            </div>
            <div className="space-y-2 pt-2 border-t-2 border-ink/20">
              {unit.lessons.map((lesson) => {
                const isCompleted = studentState.completedLessonIds.includes(lesson.id);
                return (
                  <button
                    key={lesson.id}
                    type="button"
                    onClick={() => onSelectLesson(lesson)}
                    className="w-full flex items-center justify-between p-2.5 bg-paper hover:bg-yellow border-2 border-ink text-right text-xs font-black text-ink transition-all group cursor-pointer active:translate-x-0.5 active:translate-y-0.5 shadow-brutal-sm"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0" />
                      ) : (
                        <div className="w-2 h-2 bg-ink shrink-0" />
                      )}
                      <span className="truncate">{lesson.titleAr}</span>
                    </div>
                    <ChevronLeft className="w-4 h-4 text-ink group-hover:-translate-x-1 transition-transform shrink-0" />
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
