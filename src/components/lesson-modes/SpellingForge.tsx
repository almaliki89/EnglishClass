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
      { id: 's22', root: 'admit', target: 'admission', ruleCategory: '-sion', arabicMeaning: 'قبول', type: 'suffix' },
      { id: 's23', root: 'register', target: 'registration', ruleCategory: '-tion', arabicMeaning: 'تسجيل', type: 'suffix' },
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
    <div className="bg-surface border-2 border-ink text-ink p-6 sm:p-8 shadow-brutal-action space-y-6 relative overflow-hidden rounded-md">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-ink pb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-12 h-12 bg-coral text-ink border-2 border-ink shadow-brutal-sm flex items-center justify-center font-black text-xl shrink-0 rounded">
            <PenTool className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-yellow text-ink border border-ink text-[10px] font-mono font-black uppercase tracking-wider rounded-sm">
                Spelling & Morphology Forge
              </span>
              <span className="text-xs font-mono font-bold text-muted-gray">• ورشة الإملاء والتصريفات</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-ink mt-1 tracking-tight">
              مختبر كتابة الإملاء والسوابق واللواحق والأفعال الشاذة
            </h2>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-paper border-2 border-ink shadow-brutal-sm w-full sm:w-auto rounded">
          <button
            type="button"
            onClick={() => setActiveTab('prefixes')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 shrink-0 border-2 cursor-pointer rounded-sm ${
              activeTab === 'prefixes' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>سوابق النفي</span>
          </button>
          
          <button
            type="button"
            onClick={() => setActiveTab('suffixes')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 shrink-0 border-2 cursor-pointer rounded-sm ${
              activeTab === 'suffixes' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>لواحق الأسماء والصفات</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('irregulars')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 shrink-0 border-2 cursor-pointer rounded-sm ${
              activeTab === 'irregulars' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <ArrowRightLeft className="w-3.5 h-3.5 shrink-0" />
            <span>الأفعال الشاذة</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('trainer')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 shrink-0 border-2 cursor-pointer rounded-sm ${
              activeTab === 'trainer' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
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
          <div className="p-5 rounded-md bg-paper border-2 border-ink shadow-brutal-callout space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-ink font-extrabold text-xs">
                <Lightbulb className="w-4 h-4 text-cobalt shrink-0" />
                <span>القواعد الذهبية لسوابق النفي (im, il, ir, in, un, dis) الشائعة في المنهج والامتحانات</span>
              </div>
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 bg-yellow border border-ink rounded-sm text-ink">السؤال 3 فرع C • 5 درجات</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
              <div className="p-3 rounded bg-surface border border-ink shadow-brutal-press space-y-1 min-w-0">
                <span className="font-mono font-bold text-cobalt text-sm">im-</span>
                <p className="text-[11px] font-bold text-ink">قبل m و p</p>
                <p className="text-[10px] text-semantic-error font-black break-words">شواذ: unpopular, unpleasant</p>
              </div>

              <div className="p-3 rounded bg-surface border border-ink shadow-brutal-press space-y-1 min-w-0">
                <span className="font-mono font-bold text-semantic-success text-sm">il-</span>
                <p className="text-[11px] font-bold text-ink">قبل حرف L</p>
                <p className="text-[10px] text-muted-gray font-mono break-words">illegal, illiterate</p>
              </div>

              <div className="p-3 rounded bg-surface border border-ink shadow-brutal-press space-y-1 min-w-0">
                <span className="font-mono font-bold text-cobalt text-sm">ir-</span>
                <p className="text-[11px] font-bold text-ink">قبل حرف R</p>
                <p className="text-[10px] text-muted-gray font-mono break-words">irregular, irresponsible</p>
              </div>

              <div className="p-3 rounded bg-surface border border-ink shadow-brutal-press space-y-1 min-w-0">
                <span className="font-mono font-bold text-ink text-sm bg-blue-mist px-1.5 rounded-sm">in-</span>
                <p className="text-[11px] font-bold text-ink">قبل c, e, a, d</p>
                <p className="text-[10px] text-muted-gray font-mono break-words">incorrect, independent</p>
              </div>

              <div className="p-3 rounded bg-surface border border-ink shadow-brutal-press space-y-1 min-w-0">
                <span className="font-mono font-bold text-ink text-sm bg-lavender px-1.5 rounded-sm">un-</span>
                <p className="text-[11px] font-bold text-ink">مع باقي الحروف</p>
                <p className="text-[10px] text-muted-gray font-mono break-words">unhappy, unusual</p>
              </div>

              <div className="p-3 rounded bg-surface border border-ink shadow-brutal-press space-y-1 min-w-0">
                <span className="font-mono font-bold text-ink text-sm bg-coral px-1.5 rounded-sm">dis-</span>
                <p className="text-[11px] font-bold text-ink">مع الأفعال والأسماء</p>
                <p className="text-[10px] text-muted-gray font-mono break-words">disagree, dislike</p>
              </div>
            </div>
          </div>

          {/* Quick interactive flash list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {allChallenges.filter(c => c.type === 'prefix').map((item) => (
              <div key={item.id} className="p-3 rounded bg-paper border border-ink shadow-brutal-sm flex items-center justify-between gap-2 min-w-0">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span dir="ltr" className="font-mono font-bold text-ink text-xs break-words">{item.root}</span>
                    <span className="text-cobalt font-bold">➔</span>
                    <span dir="ltr" className="font-mono font-bold text-cobalt text-xs break-words">{item.target}</span>
                  </div>
                  <p className="text-[11px] font-medium text-muted-gray mt-0.5">{item.arabicMeaning}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleSpeak(item.target)}
                  aria-label={`استمع لنطق ${item.target}`}
                  className={`p-1.5 rounded border border-ink shadow-brutal-press cursor-pointer shrink-0 transition-all ${
                    speakingWord === item.target
                      ? 'bg-cobalt text-surface'
                      : 'bg-surface hover:bg-yellow text-ink'
                  }`}
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
          <div className="p-4 rounded-md bg-blue-mist border-2 border-ink shadow-brutal-sm">
            <span className="text-xs font-bold text-ink flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-cobalt shrink-0" />
              لواحق تحويل الأفعال والصفات إلى أسماء وظروف حال (-ment, -tion, -sion, -ful, -fully):
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {allChallenges.filter(c => c.type === 'suffix').map((item) => (
              <div key={item.id} className="p-4 rounded-md bg-paper border-2 border-ink shadow-brutal-sm flex items-center justify-between gap-3 min-w-0">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span dir="ltr" className="font-mono font-bold text-sm text-ink break-words">{item.root}</span>
                    <span className="text-semantic-success font-bold">➔</span>
                    <span dir="ltr" className="font-mono font-black text-sm text-semantic-success break-words">{item.target}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-sm bg-soft-mint border border-ink text-ink font-mono font-bold">
                      {item.ruleCategory}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-muted-gray mt-1">{item.arabicMeaning}</p>
                </div>

                <button
                  type="button"
                  onClick={() => handleSpeak(item.target)}
                  aria-label={`استمع لنطق ${item.target}`}
                  className={`p-2 rounded border border-ink shadow-brutal-press cursor-pointer shrink-0 transition-all ${
                    speakingWord === item.target
                      ? 'bg-cobalt text-surface'
                      : 'bg-surface hover:bg-yellow text-ink'
                  }`}
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
          <div className="p-4 rounded-md bg-yellow border-2 border-ink shadow-brutal-sm">
            <span className="text-xs font-bold text-ink flex items-center gap-1.5">
              <ArrowRightLeft className="w-4 h-4 text-ink shrink-0" />
              أهم الأفعال الشاذة والتصريف الثالث (V1 ➔ V2 ➔ V3) المتكررة في المنهج والامتحانات:
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {allChallenges.filter(c => c.type === 'irregular').map((item) => (
              <div key={item.id} className="p-4 rounded-md bg-paper border-2 border-ink shadow-brutal-sm flex items-center justify-between gap-3 min-w-0">
                <div className="min-w-0">
                  <span dir="ltr" className="font-mono font-black text-sm text-cobalt block text-left break-words">{item.root}</span>
                  <p dir="ltr" className="font-mono font-bold text-xs text-semantic-success mt-0.5 text-left break-words">{item.target}</p>
                  <p className="text-xs font-medium text-muted-gray mt-1">{item.arabicMeaning}</p>
                </div>

                <button
                  type="button"
                  onClick={() => handleSpeak(item.root.split(' ')[0])}
                  aria-label={`استمع لنطق ${item.root.split(' ')[0]}`}
                  className="p-2 rounded border border-ink shadow-brutal-press bg-surface hover:bg-yellow text-ink cursor-pointer shrink-0 transition-all"
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
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-ink">
              اكتب الكلمة بالصيغة الإملائية الصحيحة ثم اضغط "فحص":
            </span>
            <span className="text-[11px] font-bold text-muted-gray">دقة الحروف مطلوبة لتجنب خصم الدرجات</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {allChallenges.slice(0, 8).map((item) => {
              const currentVal = userInputs[item.id] || '';
              const status = checkedStatus[item.id];
              const isChecked = status !== undefined;

              return (
                <div 
                  key={item.id}
                  className={`p-4 rounded-md border-2 border-ink shadow-brutal-sm transition-all space-y-3 min-w-0 ${
                    isChecked 
                      ? status 
                        ? 'bg-answer-correct-bg text-ink' 
                        : 'bg-answer-review-bg text-ink'
                      : 'bg-paper text-ink'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2 min-w-0">
                      <span dir="ltr" className="font-mono text-sm sm:text-base font-black text-cobalt break-words">
                        {item.root} ➔ ?
                      </span>
                      {item.exceptionNote && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-coral text-ink border border-ink">
                          {item.exceptionNote}
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-bold text-muted-gray">{item.arabicMeaning}</span>
                  </div>

                  {/* Input & Action buttons */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2" dir="ltr">
                    <input
                      type="text"
                      placeholder="Type spelling..."
                      value={currentVal}
                      onChange={(e) => handleInputChange(item.id, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') checkAnswer(item);
                      }}
                      className={`flex-1 min-w-0 p-2.5 rounded border-2 text-sm font-mono font-bold transition-all focus:outline-none focus:shadow-brutal-cobalt-sm ${
                        isChecked
                          ? status 
                            ? 'bg-surface border-semantic-success text-semantic-success' 
                            : 'bg-surface border-semantic-error text-semantic-error'
                          : 'bg-surface border-ink text-ink'
                      }`}
                    />

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => checkAnswer(item)}
                        className="px-3 py-2.5 rounded bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink font-bold text-xs shadow-brutal-press cursor-pointer transition-all"
                      >
                        فحص
                      </button>

                      <button
                        type="button"
                        onClick={() => revealAnswer(item)}
                        aria-label="كشف الإجابة"
                        className="p-2.5 rounded bg-surface hover:bg-yellow text-ink border-2 border-ink shadow-brutal-press cursor-pointer text-xs transition-all"
                        title="كشف الإجابة"
                      >
                        <HelpCircle className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleSpeak(item.target.split(' ')[0])}
                        aria-label={`استمع لنطق ${item.target.split(' ')[0]}`}
                        className="p-2.5 rounded bg-surface hover:bg-yellow text-ink border-2 border-ink shadow-brutal-press cursor-pointer text-xs transition-all"
                        title="استمع للنطق"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Feedback line */}
                  {isChecked && (
                    <div className="flex items-center gap-1.5 text-xs pt-1">
                      {status ? (
                        <span className="text-semantic-success font-bold flex items-center gap-1">
                          <Check className="w-4 h-4 shrink-0" /> إملاء صحيح ممتاز!
                        </span>
                      ) : (
                        <span className="text-semantic-error font-bold flex items-center gap-1 flex-wrap">
                          <X className="w-4 h-4 shrink-0" /> انتبه: الإملاء الدقيق هو: <span dir="ltr" className="font-mono text-ink underline break-words">{item.target}</span>
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
