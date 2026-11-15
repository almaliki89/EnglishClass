import React, { useMemo, useState } from 'react';
import { BookOpen, FileText, RotateCw, Volume2 } from 'lucide-react';
import { Lesson } from '../../types';
import { speakEnglish } from '../../utils/speech';

interface ReadingDossierProps {
  lesson: Lesson;
}

type StudyCard = {
  id: string;
  question: string;
  answer: string;
  note: string;
  direction: 'ltr' | 'rtl';
};

export const ReadingDossier: React.FC<ReadingDossierProps> = ({ lesson }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'flashcards'>('overview');
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const cards = useMemo<StudyCard[]>(() => {
    const exerciseCards = lesson.exercises.map((exercise) => ({
      id: `exercise-${exercise.id}`,
      question: exercise.question,
      answer: [exercise.correctAnswer, exercise.explanation].filter(Boolean).join(' — '),
      note: exercise.sourcePages || exercise.ministerialYear || 'سؤال تدريبي مرتبط بالدرس',
      direction: 'ltr' as const,
    }));

    const exampleCards = lesson.examples.map((example, index) => ({
      id: `example-${index}`,
      question: example.en,
      answer: example.ar,
      note: example.note || 'مثال توضيحي',
      direction: 'ltr' as const,
    }));

    return [...exerciseCards, ...exampleCards];
  }, [lesson.exercises, lesson.examples]);

  const handleSpeak = (id: string, text: string) => {
    setSpeakingId(id);
    speakEnglish(text, () => setSpeakingId(null));
  };

  const handleFlip = (id: string) => {
    setFlippedCardId((current) => current === id ? null : id);
  };

  return (
    <section className="bg-surface border-2 border-ink text-ink p-5 sm:p-8 shadow-brutal-action space-y-6 relative overflow-hidden rounded-md">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-ink pb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-12 h-12 bg-cobalt text-surface border-2 border-ink shadow-brutal-sm flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <span className="px-2.5 py-0.5 bg-yellow text-ink border border-ink text-[10px] font-mono font-black uppercase tracking-wider">
              READING STUDY DOSSIER
            </span>
            <h2 className="text-lg sm:text-2xl font-black mt-1">ملف القراءة والاستيعاب</h2>
            <p dir="ltr" className="text-xs font-mono font-bold text-cobalt mt-1">{lesson.titleEn}</p>
          </div>
        </div>
        <div className="text-xs text-muted-gray font-bold">
          {lesson.sourcePages ? `مرجع الدرس: ${lesson.sourcePages}` : 'مرجع الصفحة غير محدد'}
        </div>
      </header>

      <div className="flex flex-wrap items-center gap-2 p-1 bg-paper border-2 border-ink shadow-brutal-sm w-fit max-w-full">
        <button
          type="button"
          onClick={() => setActiveTab('overview')}
          className={`px-3 py-2 text-xs font-black border-2 transition-all ${activeTab === 'overview' ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' : 'bg-surface text-ink border-transparent hover:border-ink'}`}
        >
          <span className="inline-flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> نظرة عامة</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('flashcards')}
          className={`px-3 py-2 text-xs font-black border-2 transition-all ${activeTab === 'flashcards' ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' : 'bg-surface text-ink border-transparent hover:border-ink'}`}
        >
          <span className="inline-flex items-center gap-1.5"><RotateCw className="w-3.5 h-3.5" /> بطاقات المراجعة ({cards.length})</span>
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-4">
          <article className="bg-paper border-2 border-ink shadow-brutal-sm p-5 space-y-3">
            <h3 className="font-black text-base">موضوع الدرس</h3>
            <p className="text-sm leading-8 font-medium">{lesson.summary}</p>
            <div className="border-r-4 border-cobalt pr-3 text-xs text-ink/70 leading-6">
              هذا وصف موجز للموضوع، وليس بديلاً عن نص الكتاب. لعرض النص الإنجليزي المطابق للمصدر، استخدم تبويب «نص القراءة الأصلي» في الأعلى.
            </div>
          </article>

          {lesson.detailedContent.length > 0 && (
            <article className="bg-surface border-2 border-ink p-5 space-y-3">
              <h3 className="font-black text-base">ملاحظات الدرس وشرحه</h3>
              <p className="text-xs text-ink/65">المحتوى التالي شرح ونقاط دراسية كما أُدخلت في المنصة، وليس بالضرورة نصًا حرفيًا من كتاب الطالب.</p>
              <ol className="space-y-3 list-decimal pr-5">
                {lesson.detailedContent.map((point, index) => (
                  <li key={index} className="text-sm leading-7">{point}</li>
                ))}
              </ol>
            </article>
          )}

          {lesson.teacherNotes.length > 0 && (
            <article className="bg-yellow/25 border-2 border-ink p-5 space-y-2">
              <h3 className="font-black text-sm">ملاحظات الأستاذ</h3>
              <ul className="space-y-2 list-disc pr-5">
                {lesson.teacherNotes.map((note, index) => (
                  <li key={index} className="text-xs leading-6">{note}</li>
                ))}
              </ul>
            </article>
          )}
        </div>
      )}

      {activeTab === 'flashcards' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-black">بطاقات التذكر والاسترجاع</h3>
              <p className="text-xs text-muted-gray mt-1">اقرأ السؤال أو المثال، حاول الإجابة، ثم اقلب البطاقة للتحقق.</p>
            </div>
            <span className="px-2.5 py-1 bg-yellow border border-ink text-xs font-black">{cards.length} بطاقة</span>
          </div>

          {cards.length === 0 ? (
            <p className="bg-paper border-2 border-ink p-5 text-sm">لا توجد أسئلة أو أمثلة مضافة لهذا الدرس بعد.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cards.map((card) => {
                const flipped = flippedCardId === card.id;
                const visibleText = flipped ? card.answer : card.question;
                return (
                  <article
                    key={card.id}
                    className={`relative border-2 border-ink shadow-brutal-sm p-5 min-h-[170px] flex flex-col gap-4 ${flipped ? 'bg-yellow' : 'bg-paper'}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-[10px] font-black bg-surface border border-ink px-2 py-1">
                        {flipped ? 'الإجابة / التفسير' : 'السؤال / المثال'}
                      </span>
                      {card.direction === 'ltr' && !flipped && (
                        <button
                          type="button"
                          onClick={() => handleSpeak(card.id, card.question)}
                          aria-label="استمع للنص الإنجليزي"
                          className={`p-1.5 border border-ink ${speakingId === card.id ? 'bg-cobalt text-surface' : 'bg-surface hover:bg-yellow'}`}
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <p dir={flipped && /[\u0600-\u06FF]/.test(card.answer) ? 'rtl' : card.direction} className="font-bold text-sm leading-7 break-words flex-1">
                      {visibleText}
                    </p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] text-ink/65">{card.note}</span>
                      <button
                        type="button"
                        onClick={() => handleFlip(card.id)}
                        className="px-3 py-1.5 bg-surface border-2 border-ink text-xs font-black shadow-brutal-sm"
                      >
                        {flipped ? 'إظهار السؤال' : 'اكشف الإجابة'}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
};
