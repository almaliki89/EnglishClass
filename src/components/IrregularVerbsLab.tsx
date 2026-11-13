import React, { useState } from 'react';
import { Compass, Search, Volume2, Sparkles, Check, X, RotateCcw, Trophy, Zap } from 'lucide-react';
import { IRREGULAR_VERBS } from '../data/verbsData';
import { IrregularVerb } from '../types';
import { triggerCelebration } from '../utils/storage';

import { EducationalGrade } from '../types';
import { getGradeMeta, ORDERED_GRADES, ALL_GRADES_META } from '../data/gradeContentResolver';

interface IrregularVerbsLabProps {
  grade?: EducationalGrade;
  onSelectGrade?: (grade: EducationalGrade) => void;
  onRecordAnswer: (isCorrect: boolean) => void;
}

export const IrregularVerbsLab: React.FC<IrregularVerbsLabProps> = ({
  grade = 'sixth-preparatory',
  onSelectGrade,
  onRecordAnswer,
}) => {
  const activeGrade = grade || 'sixth-preparatory';
  const gradeMeta = getGradeMeta(activeGrade);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState<'all' | 'all-same' | 'two-same' | 'all-different'>('all');

  // Fast Practice Speed Test Game
  const [isTestMode, setIsTestMode] = useState(false);
  const [currentTestVerb, setCurrentTestVerb] = useState<IrregularVerb>(IRREGULAR_VERBS[0]);
  const [testTargetForm, setTestTargetForm] = useState<'past' | 'pp'>('past');
  const [userTestInput, setUserTestInput] = useState('');
  const [testFeedback, setTestFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [testStreak, setTestStreak] = useState(0);

  // Pronounce word using browser speech synthesis
  const speakWord = (word: string) => {
    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
      }
    } catch (e) {
      // Ignored if blocked
    }
  };

  // Pick random verb for speed test
  const pickRandomVerb = () => {
    const randomVerb = IRREGULAR_VERBS[Math.floor(Math.random() * IRREGULAR_VERBS.length)];
    const form: 'past' | 'pp' = Math.random() > 0.5 ? 'past' : 'pp';
    setCurrentTestVerb(randomVerb);
    setTestTargetForm(form);
    setUserTestInput('');
    setTestFeedback(null);
  };

  const handleStartSpeedTest = () => {
    setIsTestMode(true);
    setTestStreak(0);
    pickRandomVerb();
  };

  const handleCheckSpeedAnswer = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userTestInput.trim()) return;

    const targetAnswer = testTargetForm === 'past' ? currentTestVerb.past : currentTestVerb.pastParticiple;
    const isCorrect = userTestInput.trim().toLowerCase() === targetAnswer.toLowerCase();

    if (isCorrect) {
      setTestFeedback({ isCorrect: true, message: `إجابة صحيحة! (${targetAnswer}) 🎉` });
      setTestStreak(prev => prev + 1);
      onRecordAnswer(true);
      if (testStreak + 1 >= 5) {
        triggerCelebration();
      }
      setTimeout(() => {
        pickRandomVerb();
      }, 1200);
    } else {
      setTestFeedback({ isCorrect: false, message: `خطأ! الإجابة الصحيحة هي: ${targetAnswer}` });
      setTestStreak(0);
      onRecordAnswer(false);
    }
  };

  // Filtered verbs list
  const filteredVerbs = IRREGULAR_VERBS.filter(v => {
    const matchesSearch = v.base.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.past.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.pastParticiple.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.arabicMeaning.includes(searchQuery);
    const matchesGroup = activeGroup === 'all' || v.group === activeGroup;
    return matchesSearch && matchesGroup;
  });

  return (
    <div className="space-y-6 pb-20 max-w-5xl mx-auto">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 bg-surface border-3 border-ink shadow-brutal-lg text-ink space-y-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-coral text-ink border-2 border-ink shadow-brutal-sm text-xs font-mono font-bold mb-2 rounded-xs">
            <Compass className="w-3.5 h-3.5 shrink-0" />
            <span>مختبر الأفعال الشاذة والتصريفات</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-black text-ink">
            جدول وتصريف الأفعال الشاذة • {gradeMeta.nameAr}
          </h1>

          <p className="text-xs sm:text-sm text-ink/80 max-w-xl leading-relaxed font-medium">
            مقسمة بذكاء وفق نمط التغير اللفظي مع النطق الصوتي واختبار سرعة التثبيت لمنهج {gradeMeta.nameAr}.
          </p>

          {/* Grade Isolation Badge */}
          <div className="flex items-center gap-2 pt-3">
            <span className="px-3 py-1 bg-cobalt text-surface border-2 border-ink font-black text-xs shadow-brutal-sm">
              {gradeMeta.nameAr}
            </span>
          </div>
        </div>

        <button
          type="button"
          id="toggle-speed-test-btn"
          onClick={() => {
            if (isTestMode) {
              setIsTestMode(false);
            } else {
              handleStartSpeedTest();
            }
          }}
          className="px-5 py-3 bg-yellow hover:bg-yellow-hover text-ink border-3 border-ink shadow-brutal-action active:translate-x-[2px] active:translate-y-[2px] active:shadow-none rounded-[4px] font-black text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <Zap className="w-4 h-4 text-ink fill-coral" />
          <span>{isTestMode ? 'العودة لجدول الأفعال' : 'تحدي اختبار السرعة'}</span>
        </button>
      </div>

      {/* ================= SPEED TEST GAME ================= */}
      {isTestMode ? (
        <div className="p-6 sm:p-10 rounded-[6px] bg-surface border-3 border-ink shadow-brutal-lg max-w-xl mx-auto text-center space-y-6">
          
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-xs font-mono font-bold text-muted-gray">تحدي تصريف الأفعال</span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-yellow border-2 border-ink shadow-brutal-sm text-ink text-xs font-black tabular-nums">
              <Trophy className="w-3.5 h-3.5 text-ink" />
              <span>التتابع الصحيح: {testStreak}</span>
            </div>
          </div>

          <div className="space-y-2 p-6 rounded-[6px] bg-paper border-2 border-ink shadow-brutal-callout">
            <p className="text-xs font-bold text-cobalt">
              ما هو تصريف ({testTargetForm === 'past' ? 'الماضي البسيط Past' : 'التصريف الثالث Past Participle P.P'}) للفعل:
            </p>
            <p dir="ltr" className="text-3xl sm:text-4xl font-black font-mono text-ink text-center bidi-en break-words">
              {currentTestVerb.base}
            </p>
            <p className="text-xs font-bold text-muted-gray">
              المعنى بالعربية: {currentTestVerb.arabicMeaning}
            </p>
          </div>

          <form onSubmit={handleCheckSpeedAnswer} className="space-y-4">
            <input
              type="text"
              dir="ltr"
              autoFocus
              placeholder="Type the verb form..."
              value={userTestInput}
              onChange={(e) => setUserTestInput(e.target.value)}
              className="w-full px-5 py-3.5 rounded-[4px] bg-paper border-2 border-ink text-center font-mono font-bold text-lg text-ink placeholder:text-muted-gray focus:outline-none focus:bg-surface focus:shadow-brutal-sm transition-all"
            />

            <div className="flex items-center gap-2.5">
              <button
                type="submit"
                className="flex-1 py-3.5 rounded-[4px] bg-cobalt hover:bg-cobalt-hover text-surface font-black text-sm border-2 border-ink shadow-brutal-callout active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
              >
                تحقق من الإجابة
              </button>

              <button
                type="button"
                onClick={pickRandomVerb}
                className="px-4 py-3.5 rounded-[4px] bg-paper hover:bg-surface text-ink border-2 border-ink shadow-brutal-sm text-xs font-black transition-all cursor-pointer"
                title="تخطي لفعل آخر"
              >
                تخطي
              </button>
            </div>
          </form>

          {testFeedback && (
            <div className={`p-4 rounded-[4px] text-xs sm:text-sm font-black border-2 border-ink shadow-brutal-sm ${
              testFeedback.isCorrect ? 'bg-soft-mint text-ink' : 'bg-answer-review-bg text-semantic-error'
            }`}>
              {testFeedback.message}
            </div>
          )}

        </div>
      ) : (
        /* ================= VERBS TABLE VIEW ================= */
        <div className="space-y-4">
          
          {/* Controls Bar */}
          <div className="p-4 sm:p-5 rounded-[6px] bg-surface border-3 border-ink shadow-brutal-action space-y-4">
            
            <div className="relative">
              <Search className="w-4 h-4 text-muted-gray absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="ابحث عن فعل، ماضيه، أو معناه بالعربية (مثلاً: see, saw, رأى)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-2.5 rounded-[4px] bg-paper border-2 border-ink text-sm font-bold text-ink placeholder:text-muted-gray focus:outline-none focus:bg-surface transition-colors"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full text-xs font-black">
              <button
                type="button"
                onClick={() => setActiveGroup('all')}
                className={`px-3.5 py-2 rounded-[4px] border-2 border-ink transition-all cursor-pointer ${
                  activeGroup === 'all' ? 'bg-cobalt text-surface shadow-brutal-sm' : 'bg-paper text-ink hover:bg-surface'
                }`}
              >
                الكل ({IRREGULAR_VERBS.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveGroup('all-same')}
                className={`px-3.5 py-2 rounded-[4px] border-2 border-ink transition-all cursor-pointer ${
                  activeGroup === 'all-same' ? 'bg-cobalt text-surface shadow-brutal-sm' : 'bg-paper text-ink hover:bg-surface'
                }`}
              >
                المجموعة 1: متطابقة (cost / cut)
              </button>
              <button
                type="button"
                onClick={() => setActiveGroup('two-same')}
                className={`px-3.5 py-2 rounded-[4px] border-2 border-ink transition-all cursor-pointer ${
                  activeGroup === 'two-same' ? 'bg-cobalt text-surface shadow-brutal-sm' : 'bg-paper text-ink hover:bg-surface'
                }`}
              >
                المجموعة 2: شكلان متطابقان (buy / bought)
              </button>
              <button
                type="button"
                onClick={() => setActiveGroup('all-different')}
                className={`px-3.5 py-2 rounded-[4px] border-2 border-ink transition-all cursor-pointer ${
                  activeGroup === 'all-different' ? 'bg-cobalt text-surface shadow-brutal-sm' : 'bg-paper text-ink hover:bg-surface'
                }`}
              >
                المجموعة 3: 3 أشكال مختلفة (break / broke / broken)
              </button>
            </div>

          </div>

          {/* Table Container */}
          <div className="bg-surface rounded-[6px] border-3 border-ink shadow-brutal-action overflow-hidden">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-right text-xs sm:text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-paper border-b-2 border-ink text-ink font-black text-xs">
                    <th className="p-3.5 sm:p-4 text-center w-12 font-mono">#</th>
                    <th dir="ltr" className="p-3.5 sm:p-4 text-left font-mono">Base (المصدر)</th>
                    <th dir="ltr" className="p-3.5 sm:p-4 text-left font-mono">Past (الماضي)</th>
                    <th dir="ltr" className="p-3.5 sm:p-4 text-left font-mono">P.P (التصريف الثالث)</th>
                    <th className="p-3.5 sm:p-4 text-right">المعنى بالعربية</th>
                    <th className="p-3.5 sm:p-4 text-center w-16">نطق</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/15">
                  {filteredVerbs.map((verb, idx) => (
                    <tr key={idx} className="hover:bg-paper/70 transition-colors">
                      <td className="p-3.5 sm:p-4 text-center text-muted-gray font-mono font-bold text-xs tabular-nums">
                        {idx + 1}
                      </td>
                      <td dir="ltr" className="p-3.5 sm:p-4 font-mono font-black text-cobalt text-left">
                        {verb.base}
                      </td>
                      <td dir="ltr" className="p-3.5 sm:p-4 font-mono font-black text-ink text-left">
                        {verb.past}
                      </td>
                      <td dir="ltr" className="p-3.5 sm:p-4 font-mono font-black text-semantic-success text-left">
                        {verb.pastParticiple}
                      </td>
                      <td className="p-3.5 sm:p-4 font-bold text-ink">
                        {verb.arabicMeaning}
                      </td>
                      <td className="p-3.5 sm:p-4 text-center">
                        <button
                          type="button"
                          onClick={() => speakWord(`${verb.base}, ${verb.past}, ${verb.pastParticiple}`)}
                          className="p-2 rounded-[4px] bg-paper hover:bg-yellow text-ink border border-ink shadow-brutal-xs transition-colors cursor-pointer"
                          title="استمع للنطق الإنجليزي"
                          aria-label={`استمع لنطق الفعل ${verb.base}`}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
