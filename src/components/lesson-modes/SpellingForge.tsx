import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, RotateCcw, Volume2, 
  HelpCircle, Check, X, Award, Lightbulb, PenTool, ShieldAlert,
  Layers, ArrowRightLeft, BookOpen
} from 'lucide-react';
import { Lesson } from '../../types';
import { speakEnglish } from '../../utils/speech';

interface SpellingForgeProps {
  lesson: Lesson;
}

interface SpellingChallenge {
  id: string;
  root: string;
  target: string;
  ruleCategory: string;
  arabicMeaning: string;
  exceptionNote?: string;
  type: 'prefix' | 'suffix' | 'irregular' | 'adverb';
}

export const SpellingForge: React.FC<SpellingForgeProps> = ({ lesson }) => {
  const [activeTab, setActiveTab] = useState<'prefixes' | 'suffixes' | 'irregulars' | 'trainer'>('prefixes');
  const [activePrefixFilter, setActivePrefixFilter] = useState<string>('all');
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [checkedStatus, setCheckedStatus] = useState<Record<string, boolean>>({});
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);

  const handleSpeak = (text: string) => {
    setSpeakingWord(text);
    speakEnglish(text, () => setSpeakingWord(null));
  };

  const getSpellingChallenges = (): SpellingChallenge[] => {
    return [
      // Prefixes
      { id: 's1', root: 'polite', target: 'impolite', ruleCategory: 'im-', arabicMeaning: 'غير مؤدب (تبدأ بـ p)', type: 'prefix' },
      { id: 's2', root: 'moral', target: 'immoral', ruleCategory: 'im-', arabicMeaning: 'غير أخلاقي (تبدأ بـ m)', type: 'prefix' },
      { id: 's3', root: 'popular', target: 'unpopular', ruleCategory: 'un-', arabicMeaning: 'غير محبوب (شاذة وزارية! تأخذ un رغم أنها تبدأ بـ p)', exceptionNote: 'شاذة وزارية خطيرة', type: 'prefix' },
      { id: 's4', root: 'pleasant', target: 'unpleasant', ruleCategory: 'un-', arabicMeaning: 'غير لطيف (شاذة وزارية تبدأ بـ p وتأخذ un)', exceptionNote: 'شاذة وزارية', type: 'prefix' },
      { id: 's5', root: 'legal', target: 'illegal', ruleCategory: 'il-', arabicMeaning: 'غير قانوني (تبدأ بـ l)', type: 'prefix' },
      { id: 's6', root: 'regular', target: 'irregular', ruleCategory: 'ir-', arabicMeaning: 'غير منتظم (تبدأ بـ r)', type: 'prefix' },
      { id: 's7', root: 'correct', target: 'incorrect', ruleCategory: 'in-', arabicMeaning: 'غير صحيح (تبدأ بـ c)', type: 'prefix' },
      { id: 's8', root: 'expensive', target: 'inexpensive', ruleCategory: 'in-', arabicMeaning: 'غير مكلف (تبدأ بـ e)', type: 'prefix' },
      { id: 's9', root: 'happy', target: 'unhappy', ruleCategory: 'un-', arabicMeaning: 'غير سعيد', type: 'prefix' },
      { id: 's10', root: 'agree', target: 'disagree', ruleCategory: 'dis-', arabicMeaning: 'لا يوافق', type: 'prefix' },
      { id: 's11', root: 'encourage', target: 'discourage', ruleCategory: 'dis-', arabicMeaning: 'يحبط (نحذف en ونضيف dis)', exceptionNote: 'قاعدة خاصة', type: 'prefix' },

      // Suffixes (Noun & Adjective Formation)
      { id: 's20', root: 'enrol', target: 'enrolment', ruleCategory: '-ment', arabicMeaning: 'تسجيل / التحاق', type: 'suffix' },
      { id: 's21', root: 'apply', target: 'application', ruleCategory: '-tion', arabicMeaning: 'طلب تقديم', type: 'suffix' },
      { id: 's22', root: 'admit', target: 'admission', ruleCategory: '-sion', arabicMeaning: 'قبول رسمي', type: 'suffix' },
      { id: 's23', root: 'register', target: 'registration', ruleCategory: '-tion', arabicMeaning: 'تسجيل رسمي', type: 'suffix' },
      { id: 's24', root: 'peace', target: 'peaceful', ruleCategory: '-ful', arabicMeaning: 'مسالم / هادئ', type: 'suffix' },
      { id: 's25', root: 'peaceful', target: 'peacefully', ruleCategory: '-fully', arabicMeaning: 'بسلام وهدوء (ظرف حال)', type: 'suffix' },

      // Irregular Verbs
      { id: 's30', root: 'bite (V1)', target: 'bit (V2) / bitten (V3)', ruleCategory: 'v-past', arabicMeaning: 'يعض / عض / معضوض', type: 'irregular' },
      { id: 's31', root: 'hide (V1)', target: 'hid (V2) / hidden (V3)', ruleCategory: 'v-past', arabicMeaning: 'يختبئ / اختبأ', type: 'irregular' },
      { id: 's32', root: 'catch (V1)', target: 'caught (V2/V3)', ruleCategory: 'v-past', arabicMeaning: 'يمسك / أمسك', type: 'irregular' },
      { id: 's33', root: 'fly (V1)', target: 'flew (V2) / flown (V3)', ruleCategory: 'v-past', arabicMeaning: 'يطير / طار', type: 'irregular' },
    ];
  };

  const allChallenges = getSpellingChallenges();

  const handleInputChange = (id: string, val: string) => {
    setUserInputs(prev => ({ ...prev, [id]: val }));
    setCheckedStatus(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const checkAnswer = (challenge: SpellingChallenge) => {
    const input = (userInputs[challenge.id] || '').trim().toLowerCase();
    const targetMain = challenge.target.toLowerCase();
    const isRight = input === targetMain || (targetMain.includes(input) && input.length >= 3);
    setCheckedStatus(prev => ({ ...prev, [challenge.id]: isRight }));

    if (isRight) {
      handleSpeak(challenge.target.split(' ')[0]);
    }
  };

  const revealAnswer = (challenge: SpellingChallenge) => {
    setUserInputs(prev => ({ ...prev, [challenge.id]: challenge.target }));
    setCheckedStatus(prev => ({ ...prev, [challenge.id]: true }));
    handleSpeak(challenge.target.split(' ')[0]);
  };

  return (
    <div className="bg-white border-2 border-[#202124] text-[#202124] p-6 sm:p-8 shadow-[4px_4px_0px_#202124] space-y-6 relative overflow-hidden rounded-lg">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#202124] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#F2A18E] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] flex items-center justify-center font-black text-xl shrink-0 rounded">
            <PenTool className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-[#F3E6A5] text-[#202124] border border-[#202124] text-[10px] font-mono font-black uppercase tracking-wider rounded-sm">
                Spelling & Morphology Forge
              </span>
              <span className="text-xs font-mono font-bold text-[#202124]/60">• ورشة الإملاء والتصريفات الوزارية</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#202124] mt-1 tracking-tight">
              مختبر كتابة الإملاء والسوابق واللواحق والأفعال الشاذة
            </h2>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F7F5EF] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] overflow-x-auto no-scrollbar w-full sm:w-auto max-w-full rounded">
          <button
            onClick={() => setActiveTab('prefixes')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 border-2 cursor-pointer rounded-sm ${
              activeTab === 'prefixes' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>سوابق النفي</span>
          </button>
          
          <button
            onClick={() => setActiveTab('suffixes')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 border-2 cursor-pointer rounded-sm ${
              activeTab === 'suffixes' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>لواحق الأسماء والصفات</span>
          </button>

          <button
            onClick={() => setActiveTab('irregulars')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 border-2 cursor-pointer rounded-sm ${
              activeTab === 'irregulars' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <ArrowRightLeft className="w-3.5 h-3.5 shrink-0" />
            <span>الأفعال الشاذة</span>
          </button>

          <button
            onClick={() => setActiveTab('trainer')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 border-2 cursor-pointer rounded-sm ${
              activeTab === 'trainer' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <PenTool className="w-3.5 h-3.5 shrink-0" />
            <span>تحدي الكتابة</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Prefixes Matrix */}
      {activeTab === 'prefixes' && (
        <div className="space-y-4 relative z-10">
          <div className="p-5 rounded-2xl bg-black/40 border border-rose-500/30 backdrop-blur-md space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-400 font-extrabold text-xs">
                <Lightbulb className="w-4 h-4" />
                <span>القواعد الذهبية لسوابق النفي (im, il, ir, in, un, dis) المعتمدة وزارياً</span>
              </div>
              <span className="text-[11px] text-slate-400">السؤال 3 فرع C • 5 درجات</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="font-mono font-bold text-amber-300 text-sm">im-</span>
                <p className="text-[11px] text-slate-300">قبل m و p</p>
                <p className="text-[10px] text-rose-300 font-black">شواذ: unpopular, unpleasant</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="font-mono font-bold text-emerald-300 text-sm">il-</span>
                <p className="text-[11px] text-slate-300">قبل حرف L</p>
                <p className="text-[10px] text-slate-400">illegal, illiterate</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="font-mono font-bold text-cyan-300 text-sm">ir-</span>
                <p className="text-[11px] text-slate-300">قبل حرف R</p>
                <p className="text-[10px] text-slate-400">irregular, irresponsible</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="font-mono font-bold text-indigo-300 text-sm">in-</span>
                <p className="text-[11px] text-slate-300">قبل c, e, a, d</p>
                <p className="text-[10px] text-slate-400">incorrect, independent</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="font-mono font-bold text-purple-300 text-sm">un-</span>
                <p className="text-[11px] text-slate-300">مع باقي الحروف</p>
                <p className="text-[10px] text-slate-400">unhappy, unusual</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="font-mono font-bold text-rose-300 text-sm">dis-</span>
                <p className="text-[11px] text-slate-300">مع الأفعال والأسماء</p>
                <p className="text-[10px] text-slate-400">disagree, dislike</p>
              </div>
            </div>
          </div>

          {/* Quick interactive flash list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {allChallenges.filter(c => c.type === 'prefix').map((item) => (
              <div key={item.id} className="p-3 rounded-xl bg-stone-900/80 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-slate-300 text-xs">{item.root}</span>
                    <span className="text-rose-400 font-bold">➔</span>
                    <span className="font-mono font-bold text-amber-300 text-xs">{item.target}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item.arabicMeaning}</p>
                </div>
                <button
                  onClick={() => handleSpeak(item.target)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                  title="استمع"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Suffixes Matrix */}
      {activeTab === 'suffixes' && (
        <div className="space-y-4 relative z-10">
          <div className="p-4 rounded-2xl bg-black/40 border border-rose-500/30 backdrop-blur-md">
            <span className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              لواحق تحويل الأفعال والصفات إلى أسماء وظروف حال (-ment, -tion, -sion, -ful, -fully):
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {allChallenges.filter(c => c.type === 'suffix').map((item) => (
              <div key={item.id} className="p-4 rounded-2xl bg-stone-900/80 border border-white/10 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-slate-300">{item.root}</span>
                    <span className="text-emerald-400 font-bold">➔</span>
                    <span className="font-mono font-black text-sm text-emerald-300">{item.target}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono">
                      {item.ruleCategory}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{item.arabicMeaning}</p>
                </div>

                <button
                  onClick={() => handleSpeak(item.target)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                  title="استمع"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Irregulars Matrix */}
      {activeTab === 'irregulars' && (
        <div className="space-y-4 relative z-10">
          <div className="p-4 rounded-2xl bg-black/40 border border-rose-500/30 backdrop-blur-md">
            <span className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
              <ArrowRightLeft className="w-4 h-4" />
              أهم الأفعال الشاذة والتصريف الثالث (V1 ➔ V2 ➔ V3) المتكررة وزارياً:
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {allChallenges.filter(c => c.type === 'irregular').map((item) => (
              <div key={item.id} className="p-4 rounded-2xl bg-stone-900/80 border border-white/10 flex items-center justify-between gap-3">
                <div>
                  <span className="font-mono font-black text-sm text-amber-300">{item.root}</span>
                  <p className="font-mono text-xs text-emerald-300 mt-0.5">{item.target}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.arabicMeaning}</p>
                </div>

                <button
                  onClick={() => handleSpeak(item.root.split(' ')[0])}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                  title="استمع"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Interactive Typing Trainer */}
      {activeTab === 'trainer' && (
        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-300">
              اكتب الكلمة بالصيغة الإملائية الصحيحة ثم اضغط "فحص":
            </span>
            <span className="text-[11px] text-slate-400">دقة الحروف مطلوبة لتجنب خصم الدرجات</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {allChallenges.slice(0, 8).map((item) => {
              const currentVal = userInputs[item.id] || '';
              const status = checkedStatus[item.id];
              const isChecked = status !== undefined;

              return (
                <div 
                  key={item.id}
                  className={`p-4 rounded-2xl border transition-all space-y-3 ${
                    isChecked 
                      ? status 
                        ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-100' 
                        : 'bg-rose-950/40 border-rose-500/60 text-rose-100'
                      : 'bg-stone-900/80 border-white/10 text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm sm:text-base font-black text-amber-300 dir-ltr">
                        {item.root} ➔ ?
                      </span>
                      {item.exceptionNote && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-500/30 text-rose-200 border border-rose-400/40">
                          {item.exceptionNote}
                        </span>
                      )}
                    </div>

                    <span className="text-xs text-slate-400">{item.arabicMeaning}</span>
                  </div>

                  {/* Input & Action buttons */}
                  <div className="flex items-center gap-2 dir-ltr">
                    <input
                      type="text"
                      placeholder="Type spelling..."
                      value={currentVal}
                      onChange={(e) => handleInputChange(item.id, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') checkAnswer(item);
                      }}
                      className={`flex-1 p-2.5 rounded-xl border text-sm font-mono font-bold transition-all focus:outline-hidden ${
                        isChecked
                          ? status 
                            ? 'bg-emerald-950/80 border-emerald-400 text-emerald-300' 
                            : 'bg-rose-950/80 border-rose-400 text-rose-300'
                          : 'bg-black/50 border-white/20 text-white focus:border-rose-400'
                      }`}
                    />

                    <button
                      onClick={() => checkAnswer(item)}
                      className="px-3 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-sm transition-all"
                    >
                      فحص
                    </button>

                    <button
                      onClick={() => revealAnswer(item)}
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs transition-all"
                      title="كشف الإجابة"
                    >
                      <HelpCircle className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleSpeak(item.target.split(' ')[0])}
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs transition-all"
                      title="استمع للنطق"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Feedback line */}
                  {isChecked && (
                    <div className="flex items-center gap-1.5 text-xs pt-1">
                      {status ? (
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <Check className="w-4 h-4" /> إملاء صحيح ممتاز!
                        </span>
                      ) : (
                        <span className="text-rose-400 font-bold flex items-center gap-1">
                          <X className="w-4 h-4" /> انتبه: الإملاء الدقيق هو: <span className="font-mono text-white underline">{item.target}</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
