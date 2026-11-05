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
          <Search className="w-5 h-5 text-[#304FFE]" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`ابحث في محتوى ودروس وقواعد ${gradeMeta.nameAr} فقط...`}
          className="w-full pr-11 pl-10 py-3 bg-white text-[#171717] font-bold text-sm sm:text-base border-3 border-[#171717] shadow-[4px_4px_0px_#171717] focus:outline-none focus:bg-[#E9FF57]/20 placeholder-[#171717]/50 transition-all"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#171717]/60 hover:text-[#FF5738] cursor-pointer"
            title="مسح البحث"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Scope Badge indicator */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold text-[#171717]/70">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
          <span>نطاق البحث مقيد حصراً بـ:</span>
          <BrutalBadge variant="cobalt">{gradeMeta.nameAr}</BrutalBadge>
        </div>
        {results && (
          <span className="bg-[#E9FF57] px-2 py-0.5 border border-[#171717] text-[#171717] font-black">
            {results.totalCount} نتيجة مطابقة
          </span>
        )}
      </div>

      {/* Results Dropdown / Container */}
      {results && (
        <BrutalCard variant="paper" borderSize="3" shadowSize="md" className="p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#171717] pb-2">
            <span className="text-xs sm:text-sm font-black text-[#171717]">
              نتائج البحث عن: &ldquo;{query}&rdquo;
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setFilterType('all')}
                className={`px-2 py-0.5 text-xs font-bold border border-[#171717] cursor-pointer ${
                  filterType === 'all' ? 'bg-[#304FFE] text-white' : 'bg-white text-[#171717]'
                }`}
              >
                الكل
              </button>
              <button
                onClick={() => setFilterType('lessons')}
                className={`px-2 py-0.5 text-xs font-bold border border-[#171717] cursor-pointer ${
                  filterType === 'lessons' ? 'bg-[#304FFE] text-white' : 'bg-white text-[#171717]'
                }`}
              >
                الدروس ({results.lessons.length})
              </button>
              <button
                onClick={() => setFilterType('units')}
                className={`px-2 py-0.5 text-xs font-bold border border-[#171717] cursor-pointer ${
                  filterType === 'units' ? 'bg-[#304FFE] text-white' : 'bg-white text-[#171717]'
                }`}
              >
                الوحدات ({results.units.length})
              </button>
            </div>
          </div>

          {results.totalCount === 0 ? (
            <div className="text-center py-6 text-sm font-bold text-[#171717]/60">
              لا توجد نتائج تطابق بحثك في منهج {gradeMeta.nameAr}. جرّب كلمات أخرى مثل اسم القاعدة أو المفردة.
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {/* Lessons Results */}
              {(filterType === 'all' || filterType === 'lessons') &&
                results.lessons.map(({ unit, lesson }) => (
                  <div
                    key={lesson.id}
                    onClick={() => {
                      if (onSelectLesson) onSelectLesson(lesson);
                      navigate(`/grade/${grade}/unit/${unit.id}/lesson/${lesson.id}`);
                    }}
                    className="p-3 bg-white hover:bg-[#E9FF57]/30 border-2 border-[#171717] shadow-[2px_2px_0px_#171717] cursor-pointer transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <BrutalBadge variant="yellow">درس</BrutalBadge>
                        <span className="text-xs font-mono font-bold text-[#304FFE]">
                          الوحدة 0{unit.id} • درس {lesson.lessonNumber}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-black text-[#171717] group-hover:text-[#304FFE]">
                        {lesson.titleAr}
                      </h4>
                      <p className="text-xs font-mono text-[#FF5738]" dir="ltr">
                        {lesson.titleEn}
                      </p>
                      <p className="text-xs text-[#171717]/70 line-clamp-1">{lesson.summary}</p>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-[#304FFE] shrink-0 group-hover:-translate-x-1 transition-transform" />
                  </div>
                ))}

              {/* Units Results */}
              {(filterType === 'all' || filterType === 'units') &&
                results.units.map((unit) => (
                  <div
                    key={unit.id}
                    onClick={() => navigate(`/grade/${grade}/unit/${unit.id}`)}
                    className="p-3 bg-white hover:bg-[#A8D8FF]/30 border-2 border-[#171717] shadow-[2px_2px_0px_#171717] cursor-pointer transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <BrutalBadge variant="cobalt">وحدة دراسية</BrutalBadge>
                        <span className="text-xs font-mono font-bold text-[#171717]/70">
                          {unit.lessons.length} دروس
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-black text-[#171717] group-hover:text-[#304FFE]">
                        {unit.titleAr}
                      </h4>
                      <p className="text-xs font-mono text-[#304FFE]" dir="ltr">
                        {unit.titleEn}
                      </p>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-[#304FFE] shrink-0 group-hover:-translate-x-1 transition-transform" />
                  </div>
                ))}

              {/* Stories Results */}
              {(filterType === 'all' || filterType === 'stories') &&
                results.stories.map((story) => (
                  <div
                    key={story.id}
                    onClick={() => navigate('/literature')}
                    className="p-3 bg-white hover:bg-[#FF5738]/20 border-2 border-[#171717] shadow-[2px_2px_0px_#171717] cursor-pointer transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <BrutalBadge variant="vermilion">قصة / أدب</BrutalBadge>
                      <h4 className="text-sm font-black text-[#171717]">{story.titleAr}</h4>
                      <p className="text-xs font-mono text-[#304FFE]" dir="ltr">{story.title}</p>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-[#304FFE] shrink-0 group-hover:-translate-x-1 transition-transform" />
                  </div>
                ))}

              {/* Essays Results */}
              {(filterType === 'all' || filterType === 'essays') &&
                results.essays.map((essay) => (
                  <div
                    key={essay.id}
                    onClick={() => navigate('/essays')}
                    className="p-3 bg-white hover:bg-[#E9FF57]/40 border-2 border-[#171717] shadow-[2px_2px_0px_#171717] cursor-pointer transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <BrutalBadge variant="yellow">إنشاء وزاري</BrutalBadge>
                      <h4 className="text-sm font-black text-[#171717]">{essay.titleAr}</h4>
                      <p className="text-xs font-mono text-[#304FFE]" dir="ltr">{essay.titleEn}</p>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-[#304FFE] shrink-0 group-hover:-translate-x-1 transition-transform" />
                  </div>
                ))}
            </div>
          )}
        </BrutalCard>
      )}
    </div>
  );
};
