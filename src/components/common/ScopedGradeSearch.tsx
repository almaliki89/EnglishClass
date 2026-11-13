import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Layers, Sparkles, ArrowLeft, BookMarked, FileText } from 'lucide-react';
import { EducationalGrade, Lesson, Unit } from '../../types';
import { getUnitsForGrade, getGradeMeta, getStoriesForGrade, getEssaysForGrade } from '../../data/gradeContentResolver';
import { BrutalCard, BrutalBadge, BrutalButton } from './BrutalUI';

interface ScopedGradeSearchProps {
  grade: EducationalGrade;
  onSelectLesson?: (lesson: Lesson) => void;
  className?: string;
}

export const ScopedGradeSearch: React.FC<ScopedGradeSearchProps> = ({
  grade,
  onSelectLesson,
  className = '',
}) => {
  const navigate = useNavigate();
  const gradeMeta = getGradeMeta(grade);
  const units = getUnitsForGrade(grade);
  const stories = getStoriesForGrade(grade);
  const essays = getEssaysForGrade(grade);

  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'lessons' | 'units' | 'stories' | 'essays'>('all');

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return null;

    const matchedUnits: Unit[] = [];
    const matchedLessons: { unit: Unit; lesson: Lesson }[] = [];

    units.forEach((unit) => {
      if (
        unit.titleAr.toLowerCase().includes(trimmed) ||
        unit.titleEn.toLowerCase().includes(trimmed) ||
        (unit.description && unit.description.toLowerCase().includes(trimmed))
      ) {
        matchedUnits.push(unit);
      }

      unit.lessons.forEach((lesson) => {
        if (
          lesson.titleAr.toLowerCase().includes(trimmed) ||
          lesson.titleEn.toLowerCase().includes(trimmed) ||
          lesson.summary.toLowerCase().includes(trimmed) ||
          (lesson.grammarRuleFormula && lesson.grammarRuleFormula.toLowerCase().includes(trimmed))
        ) {
          matchedLessons.push({ unit, lesson });
        }
      });
    });

    const matchedStories = stories.filter(
      (s) =>
        s.titleAr.toLowerCase().includes(trimmed) ||
        s.title.toLowerCase().includes(trimmed) ||
        (s.summaryAr && s.summaryAr.toLowerCase().includes(trimmed))
    );

    const matchedEssays = essays.filter(
      (e) =>
        e.titleAr.toLowerCase().includes(trimmed) ||
        e.titleEn.toLowerCase().includes(trimmed)
    );

    return {
      units: matchedUnits,
      lessons: matchedLessons,
      stories: matchedStories,
      essays: matchedEssays,
      totalCount:
        matchedUnits.length +
        matchedLessons.length +
        matchedStories.length +
        matchedEssays.length,
    };
  }, [query, units, stories, essays]);

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Search Input Box */}
      <div className="relative">
        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-cobalt" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`ابحث في محتوى ودروس وقواعد ${gradeMeta.nameAr} فقط...`}
          className="w-full pr-11 pl-10 py-3 bg-surface text-ink font-bold text-sm sm:text-base border-2 border-ink shadow-brutal-callout focus:outline-none focus:bg-yellow/25 placeholder-ink/50 transition-all rounded"
        />
        {query && (
          <button
            type="button"
            aria-label="مسح البحث"
            onClick={() => setQuery('')}
            className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-gray hover:text-semantic-error cursor-pointer"
            title="مسح البحث"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Scope Badge indicator */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold text-ink/70">
        <div className="flex items-center gap-1.5">
          <span>نطاق البحث مقيد بـ:</span>
          <BrutalBadge variant="cobalt">{gradeMeta.nameAr}</BrutalBadge>
        </div>
        {results && (
          <span className="bg-yellow px-2 py-0.5 border border-ink text-ink font-black rounded-sm">
            {results.totalCount} نتيجة مطابقة
          </span>
        )}
      </div>

      {/* Results Dropdown / Container */}
      {results && (
        <BrutalCard variant="paper" borderSize="2" shadowSize="md" className="p-4 sm:p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink pb-2">
            <span className="text-xs sm:text-sm font-black text-ink">
              نتائج البحث عن: &ldquo;{query}&rdquo;
            </span>
            <div className="flex flex-wrap items-center gap-1">
              <button
                type="button"
                onClick={() => setFilterType('all')}
                className={`px-2.5 py-1 text-xs font-bold border border-ink cursor-pointer transition-colors ${
                  filterType === 'all' ? 'bg-cobalt text-surface' : 'bg-surface text-ink'
                }`}
              >
                الكل
              </button>
              <button
                type="button"
                onClick={() => setFilterType('lessons')}
                className={`px-2.5 py-1 text-xs font-bold border border-ink cursor-pointer transition-colors ${
                  filterType === 'lessons' ? 'bg-cobalt text-surface' : 'bg-surface text-ink'
                }`}
              >
                الدروس ({results.lessons.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterType('units')}
                className={`px-2.5 py-1 text-xs font-bold border border-ink cursor-pointer transition-colors ${
                  filterType === 'units' ? 'bg-cobalt text-surface' : 'bg-surface text-ink'
                }`}
              >
                الوحدات ({results.units.length})
              </button>
            </div>
          </div>

          {results.totalCount === 0 ? (
            <div className="text-center py-6 text-sm font-bold text-ink/60">
              لا توجد نتائج تطابق بحثك في منهج {gradeMeta.nameAr}. جرّب كلمات أخرى مثل اسم القاعدة أو المفردة.
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {/* Lessons Results */}
              {(filterType === 'all' || filterType === 'lessons') &&
                results.lessons.map(({ unit, lesson }) => (
                  <button
                    type="button"
                    key={lesson.id}
                    onClick={() => {
                      if (onSelectLesson) onSelectLesson(lesson);
                      navigate(`/grade/${grade}/unit/${unit.id}/lesson/${lesson.id}`);
                    }}
                    className="w-full text-right p-3 bg-surface hover:bg-yellow/25 border-2 border-ink shadow-brutal-sm cursor-pointer transition-all flex items-center justify-between gap-3 group rounded"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <BrutalBadge variant="yellow">درس</BrutalBadge>
                        <span className="text-xs font-mono font-bold text-cobalt">
                          الوحدة 0{unit.id} • درس {lesson.lessonNumber}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-black text-ink group-hover:text-cobalt">
                        {lesson.titleAr}
                      </h4>
                      <p className="text-xs font-mono font-bold text-cobalt break-words" dir="ltr">
                        {lesson.titleEn}
                      </p>
                      <p className="text-xs text-ink/70 line-clamp-1">{lesson.summary}</p>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-cobalt shrink-0 group-hover:-translate-x-1 transition-transform" />
                  </button>
                ))}

              {/* Units Results */}
              {(filterType === 'all' || filterType === 'units') &&
                results.units.map((unit) => (
                  <button
                    type="button"
                    key={unit.id}
                    onClick={() => navigate(`/grade/${grade}/unit/${unit.id}`)}
                    className="w-full text-right p-3 bg-surface hover:bg-lavender/30 border-2 border-ink shadow-brutal-sm cursor-pointer transition-all flex items-center justify-between gap-3 group rounded"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <BrutalBadge variant="cobalt">وحدة دراسية</BrutalBadge>
                        <span className="text-xs font-mono font-bold text-ink/70">
                          {unit.lessons.length} دروس
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-black text-ink group-hover:text-cobalt">
                        {unit.titleAr}
                      </h4>
                      <p className="text-xs font-mono text-cobalt break-words" dir="ltr">
                        {unit.titleEn}
                      </p>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-cobalt shrink-0 group-hover:-translate-x-1 transition-transform" />
                  </button>
                ))}

              {/* Stories Results */}
              {(filterType === 'all' || filterType === 'stories') &&
                results.stories.map((story) => (
                  <button
                    type="button"
                    key={story.id}
                    onClick={() => navigate('/literature')}
                    className="w-full text-right p-3 bg-surface hover:bg-coral/20 border-2 border-ink shadow-brutal-sm cursor-pointer transition-all flex items-center justify-between gap-3 group rounded"
                  >
                    <div className="space-y-1 min-w-0">
                      <BrutalBadge variant="vermilion">قصة / أدب</BrutalBadge>
                      <h4 className="text-sm font-black text-ink">{story.titleAr}</h4>
                      <p className="text-xs font-mono text-cobalt break-words" dir="ltr">{story.title}</p>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-cobalt shrink-0 group-hover:-translate-x-1 transition-transform" />
                  </button>
                ))}

              {/* Essays Results */}
              {(filterType === 'all' || filterType === 'essays') &&
                results.essays.map((essay) => (
                  <button
                    type="button"
                    key={essay.id}
                    onClick={() => navigate('/essays')}
                    className="w-full text-right p-3 bg-surface hover:bg-yellow/30 border-2 border-ink shadow-brutal-sm cursor-pointer transition-all flex items-center justify-between gap-3 group rounded"
                  >
                    <div className="space-y-1 min-w-0">
                      <BrutalBadge variant="yellow">إنشاء وزاري</BrutalBadge>
                      <h4 className="text-sm font-black text-ink">{essay.titleAr}</h4>
                      <p className="text-xs font-mono text-cobalt break-words" dir="ltr">{essay.titleEn}</p>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-cobalt shrink-0 group-hover:-translate-x-1 transition-transform" />
                  </button>
                ))}
            </div>
          )}
        </BrutalCard>
      )}
    </div>
  );
};
