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
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F2A18E] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-mono font-bold mb-2 rounded-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>مختبر الأفعال الشاذة والتصريفات</span>
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
          className="px-5 py-3 bg-[#F3E6A5] hover:bg-[#E5D792] text-[#202124] border-3 border-[#202124] shadow-[4px_4px_0px_#202124] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none rounded-[4px] font-black text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <Zap className="w-4 h-4 text-[#202124] fill-[#F2A18E]" />
          <span>{isTestMode ? 'العودة لجدول الأفعال' : 'تحدي اختبار السرعة'}</span>
        </button>
      </div>

      {/* ================= SPEED TEST GAME ================= */}
      {isTestMode ? (
        <div className="p-6 sm:p-10 rounded-[6px] bg-white border-3 border-[#202124] shadow-[5px_5px_0px_#202124] max-w-xl mx-auto text-center space-y-6">
          
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-xs font-mono font-bold text-[#747474]">تحدي تصريف الأفعال</span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#F3E6A5] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-[#202124] text-xs font-black tabular-nums">
              <Trophy className="w-3.5 h-3.5 text-[#202124]" />
              <span>التتابع الصحيح: {testStreak}</span>
            </div>
          </div>

          <div className="space-y-2 p-6 rounded-[6px] bg-[#F7F5EF] border-2 border-[#202124] shadow-[3px_3px_0px_#202124]">
            <p className="text-xs font-bold text-[#405DE6]">
              ما هو تصريف ({testTargetForm === 'past' ? 'الماضي البسيط Past' : 'التصريف الثالث Past Participle P.P'}) للفعل:
            </p>
            <p dir="ltr" className="text-3xl sm:text-4xl font-black font-mono text-[#202124] text-center bidi-en">
              {currentTestVerb.base}
            </p>
            <p className="text-xs font-bold text-[#747474]">
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
              className="w-full px-5 py-3.5 rounded-[4px] bg-[#F7F5EF] border-2 border-[#202124] text-center font-mono font-bold text-lg text-[#202124] placeholder:text-[#747474] focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#202124] transition-all"
            />

            <div className="flex items-center gap-2.5">
              <button
                type="submit"
                className="flex-1 py-3.5 rounded-[4px] bg-[#405DE6] hover:bg-[#334DC6] text-white font-black text-sm border-2 border-[#202124] shadow-[3px_3px_0px_#202124] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
              >
                تحقق من الإجابة
              </button>

              <button
                type="button"
                onClick={pickRandomVerb}
                className="px-4 py-3.5 rounded-[4px] bg-[#F7F5EF] hover:bg-white text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-black transition-all cursor-pointer"
                title="تخطي لفعل آخر"
              >
                تخطي
              </button>
            </div>
          </form>

          {testFeedback && (
            <div className={`p-4 rounded-[4px] text-xs sm:text-sm font-black border-2 border-[#202124] shadow-[2px_2px_0px_#202124] ${
              testFeedback.isCorrect ? 'bg-[#D7E9DA] text-[#202124]' : 'bg-[#FDF6F4] text-[#B83A3A]'
            }`}>
              {testFeedback.message}
            </div>
          )}

        </div>
      ) : (
        /* ================= VERBS TABLE VIEW ================= */
        <div className="space-y-4">
          
          {/* Controls Bar */}
          <div className="p-4 sm:p-5 rounded-[6px] bg-white border-3 border-[#202124] shadow-[4px_4px_0px_#202124] space-y-4">
            
            <div className="relative">
              <Search className="w-4 h-4 text-[#747474] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="ابحث عن فعل، ماضيه، أو معناه بالعربية (مثلاً: see, saw, رأى)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-2.5 rounded-[4px] bg-[#F7F5EF] border-2 border-[#202124] text-sm font-bold text-[#202124] placeholder:text-[#747474] focus:outline-none focus:bg-white transition-colors"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full text-xs font-black">
              <button
                type="button"
                onClick={() => setActiveGroup('all')}
                className={`px-3.5 py-2 rounded-[4px] border-2 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeGroup === 'all' ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' : 'bg-[#F7F5EF] text-[#202124] border-[#202124] hover:bg-white'
                }`}
              >
                الكل ({IRREGULAR_VERBS.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveGroup('all-same')}
                className={`px-3.5 py-2 rounded-[4px] border-2 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeGroup === 'all-same' ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' : 'bg-[#F7F5EF] text-[#202124] border-[#202124] hover:bg-white'
                }`}
              >
                المجموعة 1: متطابقة (cost / cut)
              </button>
              <button
                type="button"
                onClick={() => setActiveGroup('two-same')}
                className={`px-3.5 py-2 rounded-[4px] border-2 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeGroup === 'two-same' ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' : 'bg-[#F7F5EF] text-[#202124] border-[#202124] hover:bg-white'
                }`}
              >
                المجموعة 2: شكلان متطابقان (buy / bought)
              </button>
              <button
                type="button"
                onClick={() => setActiveGroup('all-different')}
                className={`px-3.5 py-2 rounded-[4px] border-2 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeGroup === 'all-different' ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' : 'bg-[#F7F5EF] text-[#202124] border-[#202124] hover:bg-white'
                }`}
              >
                المجموعة 3: 3 أشكال مختلفة (break / broke / broken)
              </button>
            </div>

          </div>

          {/* Table Container */}
          <div className="bg-white rounded-[6px] border-3 border-[#202124] shadow-[4px_4px_0px_#202124] overflow-hidden">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-right text-xs sm:text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-[#F7F5EF] border-b-2 border-[#202124] text-[#202124] font-black text-xs">
                    <th className="p-3.5 sm:p-4 text-center w-12 font-mono">#</th>
                    <th dir="ltr" className="p-3.5 sm:p-4 text-left font-mono">Base (المصدر)</th>
                    <th dir="ltr" className="p-3.5 sm:p-4 text-left font-mono">Past (الماضي)</th>
                    <th dir="ltr" className="p-3.5 sm:p-4 text-left font-mono">P.P (التصريف الثالث)</th>
                    <th className="p-3.5 sm:p-4 text-right">المعنى بالعربية</th>
                    <th className="p-3.5 sm:p-4 text-center w-16">نطق</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#202124]/15">
                  {filteredVerbs.map((verb, idx) => (
                    <tr key={idx} className="hover:bg-[#F7F5EF]/70 transition-colors">
                      <td className="p-3.5 sm:p-4 text-center text-[#747474] font-mono font-bold text-xs tabular-nums">
                        {idx + 1}
                      </td>
                      <td dir="ltr" className="p-3.5 sm:p-4 font-mono font-black text-[#405DE6] text-left">
                        {verb.base}
                      </td>
                      <td dir="ltr" className="p-3.5 sm:p-4 font-mono font-black text-[#202124] text-left">
                        {verb.past}
                      </td>
                      <td dir="ltr" className="p-3.5 sm:p-4 font-mono font-black text-[#287A52] text-left">
                        {verb.pastParticiple}
                      </td>
                      <td className="p-3.5 sm:p-4 font-bold text-[#202124]">
                        {verb.arabicMeaning}
                      </td>
                      <td className="p-3.5 sm:p-4 text-center">
                        <button
                          type="button"
                          onClick={() => speakWord(`${verb.base}, ${verb.past}, ${verb.pastParticiple}`)}
                          className="p-2 rounded-[4px] bg-[#F7F5EF] hover:bg-[#F3E6A5] text-[#202124] border border-[#202124] shadow-[1.5px_1.5px_0px_#202124] transition-colors cursor-pointer"
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
