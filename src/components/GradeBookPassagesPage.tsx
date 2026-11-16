import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { EducationalGrade, StudentState } from '../types';
import { getGradeMeta, getUnitsForGrade, ORDERED_GRADES } from '../data/gradeContentResolver';
import { GradeBookPassageLibrary } from './GradeBookPassageLibrary';
import { NotFound } from './NotFound';

interface GradeBookPassagesPageProps {
  studentState: StudentState;
  onSelectGrade: (grade: EducationalGrade) => void;
}

export const GradeBookPassagesPage: React.FC<GradeBookPassagesPageProps> = ({
  studentState,
  onSelectGrade,
}) => {
  const { gradeId } = useParams<{ gradeId: string }>();
  const navigate = useNavigate();
  const isValidGrade = Boolean(gradeId && ORDERED_GRADES.includes(gradeId as EducationalGrade));
  const validGrade = isValidGrade
    ? (gradeId as EducationalGrade)
    : (studentState.selectedGrade || 'sixth-preparatory');

  useEffect(() => {
    if (isValidGrade && studentState.selectedGrade !== validGrade) {
      onSelectGrade(validGrade);
    }
  }, [isValidGrade, validGrade, studentState.selectedGrade, onSelectGrade]);

  if (!isValidGrade) {
    return <NotFound />;
  }

  const gradeMeta = getGradeMeta(validGrade);
  const units = getUnitsForGrade(validGrade);

  return (
    <div className="space-y-5 pb-24 w-full min-w-0 text-ink" dir="rtl">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-3 border-ink pb-4">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-11 h-11 shrink-0 bg-yellow border-2 border-ink shadow-brutal-sm flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-ink" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-mono font-black text-cobalt">LINGORA · {gradeMeta.shortName}</p>
            <h1 className="text-2xl sm:text-3xl font-black text-ink">قطع الكتاب</h1>
            <p className="text-xs sm:text-sm text-ink/70 font-bold mt-1">
              فهرس مستقل لقطع كتاب {gradeMeta.nameAr}، مرتّب حسب الوحدات.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => navigate(`/grade/${validGrade}`)}
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-surface hover:bg-yellow text-ink border-2 border-ink rounded-[4px] text-xs font-black shadow-brutal-sm transition-all"
        >
          <ArrowRight className="w-4 h-4" />
          العودة إلى صفحة الصف
        </button>
      </header>

      <GradeBookPassageLibrary
        grade={validGrade}
        gradeName={gradeMeta.nameAr}
        units={units}
        completedLessonIds={studentState.completedLessonIds}
        onOpenPassage={(unit, lessonId, passageId) => {
          navigate(`/grade/${validGrade}/unit/${unit.id}/lesson/${lessonId}`, {
            state: { openSection: 'passage', passageId },
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
};
