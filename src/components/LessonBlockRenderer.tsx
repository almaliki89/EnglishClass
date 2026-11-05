import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  AlertTriangle, 
  Flame, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  ArrowRight, 
  RotateCcw, 
  Lightbulb, 
  Award, 
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { 
  LessonBlock, 
  DefinitionBlock, 
  ExplanationBlock, 
  ExampleBlock, 
  ImportantBlock, 
  WarningBlock, 
  FormulaBlock, 
  StepsBlock, 
  ComparisonBlock, 
  TableBlock, 
  ImageBlock, 
  ExerciseBlock, 
  QuizBlock, 
  FlashcardBlock 
} from '../types/curriculum';

interface LessonBlockRendererProps {
  block: LessonBlock;
  onBookmarkBlock?: (blockId: string, title: string) => void;
  onAnswerExercise?: (exerciseId: string, isCorrect: boolean) => void;
}

export const LessonBlockRenderer: React.FC<LessonBlockRendererProps> = ({
  block,
  onBookmarkBlock,
  onAnswerExercise
}) => {
  // TTS Helper
  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  switch (block.type) {
    case 'definition':
      return <DefinitionBlockView block={block} onSpeak={speakText} />;

    case 'explanation':
      return <ExplanationBlockView block={block} />;

    case 'example':
      return <ExampleBlockView block={block} onSpeak={speakText} />;

    case 'formula':
      return <FormulaBlockView block={block} />;

    case 'important':
      return <ImportantBlockView block={block} />;

    case 'warning':
      return <WarningBlockView block={block} />;

    case 'steps':
      return <StepsBlockView block={block} />;

    case 'comparison':
      return <ComparisonBlockView block={block} />;

    case 'table':
      return <TableBlockView block={block} />;

    case 'image':
      return <ImageBlockView block={block} />;

    case 'exercise':
      return <ExerciseBlockView block={block} onAnswer={onAnswerExercise} />;

    case 'quiz':
      return <QuizBlockView block={block} />;

    case 'flashcard':
      return <FlashcardBlockView block={block} onSpeak={speakText} />;

    default:
      return null;
  }
};

// 1. Definition Block
const DefinitionBlockView: React.FC<{ block: DefinitionBlock; onSpeak: (t: string) => void }> = ({ block, onSpeak }) => (
  <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-5 my-4 shadow-lg relative overflow-hidden backdrop-blur-sm">
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            {block.partOfSpeech || 'مفردة / مصطلح'}
          </span>
          <h3 className="text-xl font-black text-white">{block.term}</h3>
          {block.phonetic && <span className="text-sm font-mono text-emerald-300">/{block.phonetic}/</span>}
        </div>
        <p className="mt-3 text-base text-slate-200 font-medium leading-relaxed">{block.definitionAr}</p>
        {block.definitionEn && <p className="mt-1 text-sm text-slate-400 italic font-mono">{block.definitionEn}</p>}
        {block.contextExample && (
          <div className="mt-3 p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-sm text-emerald-200/90 flex items-center justify-between">
            <span>"{block.contextExample}"</span>
            <button
              onClick={() => onSpeak(block.contextExample!)}
              className="p-1.5 hover:bg-emerald-500/20 text-emerald-400 rounded-lg transition-colors"
              title="استمع للمثال"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
      <button
        onClick={() => onSpeak(block.termEn || block.term)}
        className="p-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/20 transition-all flex-shrink-0"
        title="استمع للنطق"
      >
        <Volume2 className="w-5 h-5" />
      </button>
    </div>
  </div>
);

// 2. Explanation Block
const ExplanationBlockView: React.FC<{ block: ExplanationBlock }> = ({ block }) => (
  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 my-4 text-slate-200 leading-relaxed shadow-sm">
    {block.title && (
      <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-indigo-400" />
        {block.title}
      </h4>
    )}
    <p className="text-base text-slate-300 leading-relaxed">{block.textAr}</p>
    {block.textEn && <p className="mt-2 text-sm text-slate-400 font-sans">{block.textEn}</p>}
    {block.bulletPoints && block.bulletPoints.length > 0 && (
      <ul className="mt-3 space-y-2 list-none pr-0">
        {block.bulletPoints.map((pt, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
            <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

// 3. Example Block
const ExampleBlockView: React.FC<{ block: ExampleBlock; onSpeak: (t: string) => void }> = ({ block, onSpeak }) => (
  <div className="bg-gradient-to-r from-blue-950/40 to-indigo-950/30 border border-blue-500/30 rounded-2xl p-4 my-3 flex items-center justify-between gap-4">
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        {block.badge && (
          <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-md text-xs font-bold border border-blue-500/30">
            {block.badge}
          </span>
        )}
        <span className="text-xs text-blue-300 font-bold">مثال وزاري تطبيقي</span>
      </div>
      <p className="text-lg font-semibold text-white tracking-wide font-sans">{block.en}</p>
      <p className="text-sm text-slate-300 mt-0.5">{block.ar}</p>
      {block.note && <p className="text-xs text-amber-300/80 mt-1 italic">💡 {block.note}</p>}
    </div>
    <button
      onClick={() => onSpeak(block.en)}
      className="p-2.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/20 transition-all flex-shrink-0"
      title="استمع للمثال"
    >
      <Volume2 className="w-5 h-5" />
    </button>
  </div>
);

// 4. Formula Block
const FormulaBlockView: React.FC<{ block: FormulaBlock }> = ({ block }) => (
  <div className="bg-slate-900 border border-amber-500/40 rounded-2xl p-5 my-4 relative overflow-hidden shadow-md">
    <div className="flex items-center gap-2 mb-3">
      <Sparkles className="w-5 h-5 text-amber-400" />
      <h4 className="text-base font-bold text-amber-300">{block.title}</h4>
    </div>
    <div className="p-3.5 bg-slate-950/90 rounded-xl border border-amber-500/30 text-center font-mono text-base md:text-lg font-bold text-amber-300 tracking-wider overflow-x-auto">
      {block.ruleFormula}
    </div>
    {block.breakdown && block.breakdown.length > 0 && (
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2">
        {block.breakdown.map((item, idx) => (
          <div key={idx} className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 text-xs">
            <span className="font-bold text-amber-400 font-mono block">{item.part}</span>
            <span className="text-slate-300 block">{item.role}</span>
            <span className="text-slate-400 text-[11px] italic mt-1 block">مثال: {item.example}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

// 5. Important Block (Golden Ministerial Tip)
const ImportantBlockView: React.FC<{ block: ImportantBlock }> = ({ block }) => (
  <div className="bg-gradient-to-r from-amber-950/40 via-yellow-950/30 to-amber-950/40 border border-amber-500/50 rounded-2xl p-5 my-4 shadow-lg relative">
    <div className="flex items-center gap-2.5 mb-2">
      <Flame className="w-5 h-5 text-amber-400" />
      <span className="text-xs font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-2 py-0.5 rounded-md">
        ملاحظة ذهبية وزارية
      </span>
      <h4 className="text-base font-bold text-white">{block.title}</h4>
    </div>
    <p className="text-sm md:text-base text-amber-100/90 leading-relaxed pr-2">{block.content}</p>
  </div>
);

// 6. Warning Block (Ministerial Trap)
const WarningBlockView: React.FC<{ block: WarningBlock }> = ({ block }) => (
  <div className="bg-rose-950/30 border border-rose-500/40 rounded-2xl p-5 my-4">
    <div className="flex items-center gap-2 mb-2">
      <AlertTriangle className="w-5 h-5 text-rose-400" />
      <span className="text-xs font-bold bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-md border border-rose-500/30">
        فخ وزاري شائع!
      </span>
      <h4 className="text-base font-bold text-white">{block.title}</h4>
    </div>
    <p className="text-sm text-slate-200 leading-relaxed mb-3">{block.warningText}</p>
    {block.commonTrapExample && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <div className="p-3 bg-rose-950/40 border border-rose-500/30 rounded-xl text-xs flex items-start gap-2">
          <XCircle className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-bold text-rose-300 block mb-0.5">صياغة خاطئة:</span>
            <span className="font-mono text-slate-300">{block.commonTrapExample.wrong}</span>
          </div>
        </div>
        <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-bold text-emerald-300 block mb-0.5">الصياغة الصحيحة وزغارياً:</span>
            <span className="font-mono text-slate-200">{block.commonTrapExample.right}</span>
            <span className="text-slate-400 block mt-1 text-[11px]">{block.commonTrapExample.reason}</span>
          </div>
        </div>
      </div>
    )}
  </div>
);

// 7. Steps Block
const StepsBlockView: React.FC<{ block: StepsBlock }> = ({ block }) => (
  <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 my-4">
    <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
      <Layers className="w-5 h-5 text-cyan-400" />
      {block.title}
    </h4>
    <div className="space-y-3">
      {block.steps.map((st) => (
        <div key={st.stepNumber} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
          <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold text-xs flex-shrink-0">
            {st.stepNumber}
          </div>
          <div>
            <h5 className="font-bold text-sm text-slate-200">{st.title}</h5>
            <p className="text-xs text-slate-400 mt-0.5">{st.description}</p>
            {st.example && <p className="text-xs font-mono text-cyan-300/80 mt-1">مثال: {st.example}</p>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 8. Comparison Block
const ComparisonBlockView: React.FC<{ block: ComparisonBlock }> = ({ block }) => (
  <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 my-4">
    <h4 className="text-base font-bold text-white mb-3 text-center">{block.title}</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-slate-800/60 rounded-xl border border-cyan-500/30">
        <h5 className="font-bold text-sm text-cyan-400 mb-2">{block.itemA.name}</h5>
        <ul className="space-y-1.5 text-xs text-slate-300">
          {block.itemA.traits.map((t, idx) => (
            <li key={idx}>• {t}</li>
          ))}
        </ul>
        <p className="mt-3 p-2 bg-slate-900/60 rounded-lg text-xs font-mono text-cyan-200">
          {block.itemA.example}
        </p>
      </div>
      <div className="p-4 bg-slate-800/60 rounded-xl border border-purple-500/30">
        <h5 className="font-bold text-sm text-purple-400 mb-2">{block.itemB.name}</h5>
        <ul className="space-y-1.5 text-xs text-slate-300">
          {block.itemB.traits.map((t, idx) => (
            <li key={idx}>• {t}</li>
          ))}
        </ul>
        <p className="mt-3 p-2 bg-slate-900/60 rounded-lg text-xs font-mono text-purple-200">
          {block.itemB.example}
        </p>
      </div>
    </div>
  </div>
);

// 9. Table Block
const TableBlockView: React.FC<{ block: TableBlock }> = ({ block }) => (
  <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 my-4 overflow-hidden">
    {block.title && <h4 className="text-base font-bold text-white mb-3">{block.title}</h4>}
    <div className="overflow-x-auto">
      <table className="w-full text-right text-xs md:text-sm">
        <thead>
          <tr className="bg-slate-800/80 border-b border-slate-700 text-slate-300">
            {block.headers.map((h, idx) => (
              <th key={idx} className="p-3 font-bold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, rIdx) => (
            <tr key={rIdx} className="border-b border-slate-800/60 hover:bg-slate-800/30 transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="p-3 text-slate-300">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// 10. Image Block
const ImageBlockView: React.FC<{ block: ImageBlock }> = ({ block }) => (
  <div className="my-4 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
    <img src={block.url} alt={block.alt} className="w-full h-auto max-h-96 object-cover" />
    <div className="p-3 text-center bg-slate-950/80">
      <p className="text-sm font-semibold text-slate-200">{block.captionAr}</p>
      {block.captionEn && <p className="text-xs text-slate-400 mt-0.5">{block.captionEn}</p>}
    </div>
  </div>
);

// 11. Exercise Block (Interactive Question)
const ExerciseBlockView: React.FC<{ block: ExerciseBlock; onAnswer?: (id: string, ok: boolean) => void }> = ({
  block,
  onAnswer
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (option: string) => {
    if (revealed) return;
    setSelectedOption(option);
    setRevealed(true);
    const isOk = option.trim().toLowerCase() === block.correctAnswer.trim().toLowerCase();
    if (onAnswer) onAnswer(block.questionId, isOk);
  };

  const isCorrect = selectedOption?.trim().toLowerCase() === block.correctAnswer.trim().toLowerCase();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 my-4">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
          تمرين وزاري: {block.category}
        </span>
        {block.ministerialYear && (
          <span className="text-xs text-amber-400/90 font-mono font-bold">
            {block.ministerialYear}
          </span>
        )}
      </div>
      <p className="text-base font-bold text-white mb-2">{block.questionEn}</p>
      {block.questionAr && <p className="text-sm text-slate-400 mb-4">{block.questionAr}</p>}

      {block.options && block.options.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
          {block.options.map((opt, idx) => {
            const isThisCorrect = opt.trim().toLowerCase() === block.correctAnswer.trim().toLowerCase();
            const isThisSelected = selectedOption === opt;
            let btnClass = "bg-slate-800 hover:bg-slate-700/80 border-slate-700 text-slate-200";

            if (revealed) {
              if (isThisCorrect) {
                btnClass = "bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold";
              } else if (isThisSelected) {
                btnClass = "bg-rose-950/60 border-rose-500 text-rose-300";
              } else {
                btnClass = "bg-slate-900 border-slate-800 text-slate-500 opacity-60";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(opt)}
                disabled={revealed}
                className={`p-3 rounded-xl border text-sm text-right transition-all flex items-center justify-between ${btnClass}`}
              >
                <span>{opt}</span>
                {revealed && isThisCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                {revealed && isThisSelected && !isThisCorrect && <XCircle className="w-4 h-4 text-rose-400" />}
              </button>
            );
          })}
        </div>
      )}

      {revealed && (
        <div className={`mt-4 p-3.5 rounded-xl border text-xs leading-relaxed ${isCorrect ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200' : 'bg-rose-950/30 border-rose-500/40 text-rose-200'}`}>
          <div className="font-bold mb-1">{isCorrect ? 'إجابة وزارية صحيحة! أحسنت 🌟' : 'إجابة غير صحيحة، انتبه للصياغة الوزارية:'}</div>
          <p className="text-slate-300">{block.explanation}</p>
        </div>
      )}
    </div>
  );
};

// 12. Quiz Block
const QuizBlockView: React.FC<{ block: QuizBlock }> = ({ block }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const question = block.questions[currentIdx];

  const handlePick = (optIdx: number) => {
    setAnswers(prev => ({ ...prev, [currentIdx]: optIdx }));
  };

  const handleNext = () => {
    if (currentIdx < block.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResult(true);
    }
  };

  const score = Object.entries(answers).reduce((acc, [qIdx, chosen]) => {
    return acc + (block.questions[Number(qIdx)].correctIndex === chosen ? 1 : 0);
  }, 0);

  const total = block.questions.length;
  const passed = (score / total) * 100 >= block.passingScore;

  if (showResult) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-4 text-center">
        <Award className={`w-12 h-12 mx-auto mb-3 ${passed ? 'text-amber-400' : 'text-slate-400'}`} />
        <h4 className="text-xl font-black text-white">{passed ? 'مبروك! اجتزت الاختبار بنجاح' : 'تحتاج إلى مراجعة بعض النقاط'}</h4>
        <p className="text-sm text-slate-300 mt-2">
          حصلت على <span className="font-bold text-amber-400 text-lg">{score}</span> من أصل <span className="font-bold">{total}</span>
        </p>
        <button
          onClick={() => {
            setAnswers({});
            setCurrentIdx(0);
            setShowResult(false);
          }}
          className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all"
        >
          إعادة الاختبار
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-indigo-500/40 rounded-2xl p-5 my-4">
      <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
        <span className="font-bold text-indigo-400">{block.title}</span>
        <span>السؤال {currentIdx + 1} من {total}</span>
      </div>
      <p className="text-base font-bold text-white mb-3">{question.prompt}</p>
      <div className="space-y-2">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handlePick(idx)}
            className={`w-full p-3 rounded-xl border text-sm text-right transition-all ${answers[currentIdx] === idx ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-800 hover:bg-slate-700/80 border-slate-700 text-slate-200'}`}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleNext}
          disabled={answers[currentIdx] === undefined}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-1.5"
        >
          <span>{currentIdx < total - 1 ? 'السؤال التالي' : 'إنهاء الاختبار'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// 13. Flashcard Block
const FlashcardBlockView: React.FC<{ block: FlashcardBlock; onSpeak: (t: string) => void }> = ({ block, onSpeak }) => {
  const [activeCardIdx, setActiveCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const card = block.cards[activeCardIdx];

  const handleNext = () => {
    setIsFlipped(false);
    setActiveCardIdx((activeCardIdx + 1) % block.cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setActiveCardIdx((activeCardIdx - 1 + block.cards.length) % block.cards.length);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 my-4">
      <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
        <span className="font-bold text-emerald-400">بطاقات المراجعة السريعة (Flashcards)</span>
        <span>{activeCardIdx + 1} / {block.cards.length}</span>
      </div>

      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="cursor-pointer min-h-[160px] bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all shadow-inner"
      >
        <span className="text-[11px] text-slate-400 uppercase tracking-widest mb-2 font-mono">
          {isFlipped ? 'المعنى والتوضيح (الخلف)' : 'المصطلح أو العبارة (الأمام) • انقر للقلب'}
        </span>
        <p className="text-xl md:text-2xl font-black text-white">
          {isFlipped ? card.back : card.front}
        </p>
        {card.hint && !isFlipped && (
          <p className="text-xs text-amber-300/80 mt-2 font-medium">تلميح: {card.hint}</p>
        )}
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handlePrev}
          className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold"
        >
          السابق
        </button>
        <button
          onClick={() => onSpeak(card.audioText || card.front)}
          className="p-2 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 rounded-lg text-xs"
          title="استمع"
        >
          <Volume2 className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold"
        >
          التالي
        </button>
      </div>
    </div>
  );
};
