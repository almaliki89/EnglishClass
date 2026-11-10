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
      <div className="p-6 sm:p-8 bg-white border-3 border-[#202124] shadow-[5px_5px_0px_#202124] text-[#202124] space-y-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F2A18E] text-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-mono font-black mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>IRREGULAR VERBS LAB // 80 VERBS</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-black text-[#202124]">
            جدول وتصريف الأفعال الشاذة • {gradeMeta.nameAr}
          </h1>

          <p className="text-xs sm:text-sm text-[#202124]/80 max-w-xl leading-relaxed font-medium">
            مقسمة بذكاء وفق نمط التغير اللفظي مع النطق الصوتي واختبار سرعة التثبيت لمنهج {gradeMeta.nameAr}.
          </p>

          {/* Grade Isolation Badge */}
          <div className="flex items-center gap-2 pt-3">
            <span className="px-3 py-1 bg-[#405DE6] text-white border-2 border-[#202124] font-black text-xs shadow-[2px_2px_0px_#202124]">
              {gradeMeta.nameAr}
            </span>
          </div>
        </div>

        <button
          id="toggle-speed-test-btn"
          onClick={() => {
            if (isTestMode) {
              setIsTestMode(false);
            } else {
              handleStartSpeedTest();
            }
          }}
          className="px-5 py-3 bg-[#F3E6A5] hover:bg-[#E6D99A] text-[#202124] border-3 border-[#202124] shadow-[4px_4px_0px_#202124] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-black text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <Zap className="w-4 h-4 text-[#F2A18E] fill-[#F2A18E]" />
          <span>{isTestMode ? 'العودة لجدول الأفعال' : 'تحدي اختبار السرعة'}</span>
        </button>
      </div>

      {/* ================= SPEED TEST GAME ================= */}
      {isTestMode ? (
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs max-w-xl mx-auto text-center space-y-6">
          
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">تحدي تصريف الأفعال</span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>التتابع الصحيح: {testStreak}</span>
            </div>
          </div>

          <div className="space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-xs font-bold text-indigo-600">
              ما هو تصريف ({testTargetForm === 'past' ? 'الماضي البسيط Past' : 'التصريف الثالث Past Participle P.P'}) للفعل:
            </p>
            <p dir="ltr" className="text-3xl sm:text-4xl font-black font-mono text-slate-900 text-center bidi-en">
              {currentTestVerb.base}
            </p>
            <p className="text-xs text-slate-500">
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
              className="w-full px-5 py-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-center font-mono font-bold text-lg focus:outline-hidden focus:border-rose-500 focus:bg-white transition-all"
            />

            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="flex-1 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md shadow-rose-200 transition-all"
              >
                تحقق من الإجابة
              </button>

              <button
                type="button"
                onClick={pickRandomVerb}
                className="px-4 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition-all"
                title="تخطي لفعل آخر"
              >
                تخطي
              </button>
            </div>
          </form>

          {testFeedback && (
            <div className={`p-4 rounded-2xl text-xs sm:text-sm font-bold ${
              testFeedback.isCorrect ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
            }`}>
              {testFeedback.message}
            </div>
          )}

        </div>
      ) : (
        /* ================= VERBS TABLE VIEW ================= */
        <div className="space-y-4">
          
          {/* Controls Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
              <input
                type="text"
                placeholder="ابحث عن فعل، ماضيه، أو معناه بالعربية (مثلاً: see, saw, رأى)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:border-rose-500"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full text-xs font-bold">
              <button
                onClick={() => setActiveGroup('all')}
                className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  activeGroup === 'all' ? 'bg-rose-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                الكل ({IRREGULAR_VERBS.length})
              </button>
              <button
                onClick={() => setActiveGroup('all-same')}
                className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  activeGroup === 'all-same' ? 'bg-rose-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                المجموعة 1: متطابقة (cost / cut)
              </button>
              <button
                onClick={() => setActiveGroup('two-same')}
                className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  activeGroup === 'two-same' ? 'bg-rose-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                المجموعة 2: شكلان متطابقان (buy / bought)
              </button>
              <button
                onClick={() => setActiveGroup('all-different')}
                className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  activeGroup === 'all-different' ? 'bg-rose-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                المجموعة 3: 3 أشكال مختلفة (break / broke / broken)
              </button>
            </div>

          </div>

          {/* Table Container */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-right text-xs sm:text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-extrabold text-xs">
                    <th className="p-3.5 sm:p-4 text-center w-12">#</th>
                    <th dir="ltr" className="p-3.5 sm:p-4 text-left">Base (المصدر)</th>
                    <th dir="ltr" className="p-3.5 sm:p-4 text-left">Past (الماضي)</th>
                    <th dir="ltr" className="p-3.5 sm:p-4 text-left">P.P (التصريف الثالث)</th>
                    <th className="p-3.5 sm:p-4 text-right">المعنى بالعربية</th>
                    <th className="p-3.5 sm:p-4 text-center w-16">نطق</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredVerbs.map((verb, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 sm:p-4 text-center text-slate-400 font-mono text-xs">
                        {idx + 1}
                      </td>
                      <td dir="ltr" className="p-3.5 sm:p-4 font-mono font-bold text-indigo-900 text-left">
                        {verb.base}
                      </td>
                      <td dir="ltr" className="p-3.5 sm:p-4 font-mono font-bold text-amber-800 text-left">
                        {verb.past}
                      </td>
                      <td dir="ltr" className="p-3.5 sm:p-4 font-mono font-bold text-emerald-800 text-left">
                        {verb.pastParticiple}
                      </td>
                      <td className="p-3.5 sm:p-4 font-medium text-slate-700">
                        {verb.arabicMeaning}
                      </td>
                      <td className="p-3.5 sm:p-4 text-center">
                        <button
                          onClick={() => speakWord(`${verb.base}, ${verb.past}, ${verb.pastParticiple}`)}
                          className="p-2 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-500 transition-colors"
                          title="استمع للنطق الإنجليزي"
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
