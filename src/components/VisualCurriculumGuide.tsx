import React, { useState } from 'react';
import { 
  Sparkles, Compass, Award, CheckCircle2, Lightbulb, 
  Layers, ArrowRight, Zap, BookMarked, Brain, HelpCircle
} from 'lucide-react';
import { EducationalGrade } from '../types';
import { getGradeMeta, getUnitsForGrade, getStoriesForGrade, getEssaysForGrade } from '../data/gradeContentResolver';
import { 
  BrutalCard, 
  BrutalButton, 
  BrutalBadge, 
  SectionHeader, 
  CalloutBox 
} from './common/BrutalUI';

interface VisualCurriculumGuideProps {
  grade: EducationalGrade;
  onSelectLesson?: (lessonId: string) => void;
  onNavigateTab?: (tab: string) => void;
}

export const VisualCurriculumGuide: React.FC<VisualCurriculumGuideProps> = ({
  grade,
  onSelectLesson,
  onNavigateTab,
}) => {
  const gradeMeta = getGradeMeta(grade);
  const units = getUnitsForGrade(grade);
  const stories = getStoriesForGrade(grade);
  const essays = getEssaysForGrade(grade);
  const [activeTab, setActiveTab] = useState<'units' | 'grammar' | 'literature' | 'exam'>('units');

  return (
    <BrutalCard variant="paper" borderSize="3" shadowSize="lg" className="p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b-3 border-ink pb-6">
        <div className="min-w-0">
          <div className="mb-2 inline-block">
            <BrutalBadge variant="yellow" className="text-xs sm:text-sm">
              <Brain className="w-4 h-4 text-ink inline ml-1" />
              الشرح الصوري والتفاعلي المخصص • المنهج العراقي المقرر
            </BrutalBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight">
            الدليل البصري الشامل لصف: <span className="bg-yellow px-2 border border-ink inline-block">{gradeMeta.nameAr}</span>
          </h2>
          <p className="text-ink/80 text-xs sm:text-sm font-bold font-mono mt-1">
            {gradeMeta.description} • إشراف الأستاذ مصطفى تركي
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 bg-surface p-2 border-3 border-ink shadow-brutal-callout">
          <button
            type="button"
            onClick={() => setActiveTab('units')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 border-2 border-ink ${
              activeTab === 'units'
                ? 'bg-cobalt text-surface shadow-brutal-sm'
                : 'bg-paper text-ink hover:bg-yellow'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>الوحدات والدروس</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('grammar')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 border-2 border-ink ${
              activeTab === 'grammar'
                ? 'bg-cobalt text-surface shadow-brutal-sm'
                : 'bg-paper text-ink hover:bg-yellow'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>القواعد المصورة</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('literature')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 border-2 border-ink ${
              activeTab === 'literature'
                ? 'bg-cobalt text-surface shadow-brutal-sm'
                : 'bg-paper text-ink hover:bg-yellow'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>القصص والأدب</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('exam')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 border-2 border-ink ${
              activeTab === 'exam'
                ? 'bg-cobalt text-surface shadow-brutal-sm'
                : 'bg-paper text-ink hover:bg-yellow'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>خريطة الامتحان</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {/* 1. Units & Lessons Visual Cards */}
        {activeTab === 'units' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink/20 pb-2">
              <h3 className="text-lg font-black text-ink flex items-center gap-2">
                <Compass className="w-5 h-5 text-cobalt" />
                <span>خريطة وحدات المنهج ({units.length} وحدات دراسية)</span>
              </h3>
              <BrutalBadge variant="sky">محتوى مخصص لـ {gradeMeta.shortName}</BrutalBadge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {units.map((unit, idx) => (
                <BrutalCard
                  key={unit.id}
                  variant="white"
                  borderSize="3"
                  shadowSize="md"
                  className="p-5 flex flex-col justify-between group hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform"
                >
                  <div className="min-w-0">
                    <div className="flex items-center justify-between mb-3">
                      <BrutalBadge variant="cobalt">
                        الوحدة {idx + 1}
                      </BrutalBadge>
                      <span className="text-xs font-mono font-bold text-ink/70 bg-paper px-2 py-0.5 border border-ink tabular-nums">
                        {unit.lessons.length} دروس
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-black text-ink group-hover:text-cobalt transition-colors">
                      {unit.titleAr}
                    </h4>
                    <p className="text-xs font-mono font-bold text-cobalt mt-0.5 break-words" dir="ltr">
                      {unit.titleEn}
                    </p>
                    <p className="text-xs font-bold text-ink/80 mt-3 line-clamp-2 bg-paper p-3 border-2 border-ink">
                      {unit.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t-2 border-ink flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-ink/70">شرح صوري ومعاينة</span>
                    {onNavigateTab && (
                      <button
                        type="button"
                        onClick={() => onNavigateTab('subjects')}
                        className="text-xs font-black text-cobalt hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>استعراض الدروس</span>
                        <ArrowRight className="w-4 h-4 rotate-180" />
                      </button>
                    )}
                  </div>
                </BrutalCard>
              ))}
            </div>
          </div>
        )}

        {/* 2. Pictorial Grammar Cards */}
        {activeTab === 'grammar' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink/20 pb-2">
              <h3 className="text-lg font-black text-ink flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-ink fill-yellow" />
                <span>أبرز قواعد وبطاقات الشرح البصري لـ {gradeMeta.nameAr}</span>
              </h3>
              <BrutalBadge variant="yellow">مبسطة بالأمثلة التطبيقية</BrutalBadge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <BrutalCard variant="white" borderSize="3" shadowSize="md" className="p-5 space-y-4">
                <div className="flex items-center gap-2 font-black text-sm text-cobalt">
                  <Zap className="w-5 h-5 text-cobalt" />
                  <span>قاعدة الأزمنة والتكوين (Tenses Structure)</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-ink leading-relaxed">
                  يتم التركيز في منهج {gradeMeta.shortName} على إتقان التفرقة بين المضارع البسيط والمستمر، والماضي بنوعيه، مع التطبيق المباشر.
                </p>
                <CalloutBox type="rule_formula" title="Formula التكوين">
                  <div dir="ltr" className="font-mono font-black text-ink break-words">
                    Subject + Auxiliary + Verb (Base/V2/V3) + Complement
                  </div>
                </CalloutBox>
              </BrutalCard>

              <BrutalCard variant="white" borderSize="3" shadowSize="md" className="p-5 space-y-4">
                <div className="flex items-center gap-2 font-black text-sm text-semantic-error">
                  <CheckCircle2 className="w-5 h-5 text-semantic-error" />
                  <span>الأخطاء الشائعة في الامتحانات</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-ink leading-relaxed">
                  تجنب الأخطاء الإملائية الشائعة في إضافة (-ed) أو (-ing) والتصريفات الشاذة للأفعال مع مراعاة التنقيط السليم للجملة.
                </p>
                <CalloutBox type="ministerial_trap" title="احذر من الأخطاء الإملائية والترميز">
                  <div dir="ltr" className="font-mono font-bold text-xs text-ink break-words">
                    ✓ Always double-check punctuation marks (capital letters & full stops).
                  </div>
                </CalloutBox>
              </BrutalCard>
            </div>
          </div>
        )}

        {/* 3. Stories & Literature */}
        {activeTab === 'literature' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink/20 pb-2">
              <h3 className="text-lg font-black text-ink flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-cobalt" />
                <span>{gradeMeta.stage === 'intermediate' ? 'قصص المطالعة المقررة (Story Time)' : 'الأدب والشعر والنصوص المقررة'}</span>
              </h3>
              <BrutalBadge variant="vermilion">{stories.length} أعمال أدبية رئيسية</BrutalBadge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {stories.map((story) => (
                <BrutalCard key={story.id} variant="white" borderSize="3" shadowSize="md" className="p-5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <BrutalBadge variant="sky">
                      {story.author || 'منهج المادة'}
                    </BrutalBadge>
                    <BrutalBadge variant="yellow">سؤال امتحاني متكرر</BrutalBadge>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-ink">{story.titleAr}</h4>
                  <p className="text-xs font-mono font-bold text-cobalt break-words" dir="ltr">{story.title}</p>
                  <p className="text-xs font-bold text-ink leading-relaxed bg-paper p-3 border-2 border-ink">
                    {story.summaryAr || 'قصة ومقال أدبي مقرر في المنهج الدراسي مع الأسئلة والإجابات النموذجية.'}
                  </p>
                </BrutalCard>
              ))}
            </div>
          </div>
        )}

        {/* 4. Exam Blueprint */}
        {activeTab === 'exam' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink/20 pb-2">
              <h3 className="text-lg font-black text-ink flex items-center gap-2">
                <Award className="w-5 h-5 text-cobalt" />
                <span>هيكلية وتوزيع درجات الامتحان (100 درجة كاملة)</span>
              </h3>
              <BrutalBadge variant="cobalt">{gradeMeta.nameAr}</BrutalBadge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {(gradeMeta.stage === 'intermediate' ? [
                { q: 'Q1', title: 'القطعة الخارجية', marks: '20 درجة' },
                { q: 'Q2', title: 'القواعد والوظائف', marks: '25 درجة' },
                { q: 'Q3', title: 'المفردات والتنقيط', marks: '20 درجة' },
                { q: 'Q4', title: 'قصص المطالعة', marks: '15 درجة' },
                { q: 'Q5', title: 'الإنشاء والتعبير', marks: '20 درجة' },
              ] : [
                { q: 'Q1', title: 'القطعة الخارجية والفهم', marks: '20 درجة' },
                { q: 'Q2', title: 'القواعد (أساسيات)', marks: '30 درجة' },
                { q: 'Q3', title: 'المفردات والتهجئة', marks: '20 درجة' },
                { q: 'Q4', title: 'الأدب والشعر', marks: '10 درجات' },
                { q: 'Q5', title: 'الإنشاء المنهجي', marks: '20 درجة' },
              ]).map((item, i) => (
                <BrutalCard key={i} variant="white" borderSize="2" shadowSize="sm" className="p-4 text-center space-y-2">
                  <BrutalBadge variant="yellow">{item.q}</BrutalBadge>
                  <h4 className="text-sm font-black text-ink">{item.title}</h4>
                  <p className="text-xs font-mono font-black text-semantic-error">{item.marks}</p>
                </BrutalCard>
              ))}
            </div>

            <BrutalCard variant="sky" borderSize="3" shadowSize="md" className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cobalt text-surface border-2 border-ink flex items-center justify-center font-black shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-black text-ink">هل أنت مستعد لتجربة الامتحان التجريبي الكامل؟</p>
                  <p className="text-xs font-bold text-ink/80">يحتوي المحاكي الشامل على ورقة أسئلة متكاملة بمدة 100 دقيقة بنمط تدريبي متكامل.</p>
                </div>
              </div>
              {onNavigateTab && (
                <BrutalButton
                  variant="yellow"
                  size="md"
                  onClick={() => onNavigateTab('mock')}
                  className="shrink-0"
                >
                  بدء المحاكي الآن
                </BrutalButton>
              )}
            </BrutalCard>
          </div>
        )}
      </div>
    </BrutalCard>
  );
};

