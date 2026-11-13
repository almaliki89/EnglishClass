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
  Layers
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
  <div className="bg-surface border-2 border-ink shadow-brutal-callout rounded-xs p-5 my-4 relative">
    <div className="flex items-start justify-between gap-4">
      <div className="space-y-2 flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-xs text-[11px] font-black uppercase tracking-wider bg-blue-mist text-cobalt border border-ink font-mono shadow-brutal-press">
            {block.partOfSpeech || 'مفردة / مصطلح'}
          </span>
          <h3 dir="ltr" className="text-xl font-black font-mono text-ink bidi-en">
            {block.term}
          </h3>
          {block.phonetic && (
            <span dir="ltr" className="text-xs font-mono font-bold text-cobalt">
              /{block.phonetic}/
            </span>
          )}
        </div>

        <p className="text-base text-ink font-bold leading-relaxed pt-1">
          {block.definitionAr}
        </p>

        {block.definitionEn && (
          <p dir="ltr" className="text-xs text-muted-gray font-mono text-left en-sentence">
            {block.definitionEn}
          </p>
        )}

        {block.contextExample && (
          <div className="mt-3 p-3 bg-paper border-2 border-ink shadow-brutal-sm rounded-xs text-xs sm:text-sm text-ink flex items-center justify-between gap-3">
            <span dir="ltr" className="font-mono font-bold text-left en-sentence min-w-0 break-words">
              "{block.contextExample}"
            </span>
            <button
              type="button"
              onClick={() => onSpeak(block.contextExample!)}
              className="p-1.5 bg-surface hover:bg-yellow text-ink border border-ink rounded-xs shadow-brutal-press transition-colors cursor-pointer shrink-0"
              title="استمع للمثال"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={() => onSpeak(block.termEn || block.term)}
        className="p-2.5 bg-paper hover:bg-yellow text-ink border-2 border-ink shadow-brutal-sm rounded-xs transition-all shrink-0 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
        title="استمع للنطق"
      >
        <Volume2 className="w-4 h-4" />
      </button>
    </div>
  </div>
);

// 2. Explanation Block
const ExplanationBlockView: React.FC<{ block: ExplanationBlock }> = ({ block }) => (
  <div className="bg-surface border-2 border-ink shadow-brutal-callout rounded-xs p-5 my-4 text-ink leading-relaxed space-y-3">
    {block.title && (
      <div className="flex items-center gap-2 border-b-2 border-ink/10 pb-2">
        <BookOpen className="w-4 h-4 text-cobalt" />
        <h4 className="text-base font-black text-ink">{block.title}</h4>
      </div>
    )}

    <p className="text-sm sm:text-base text-ink leading-relaxed font-bold">
      {block.textAr}
    </p>

    {block.textEn && (
      <p dir="ltr" className="text-xs font-mono font-bold text-cobalt bg-paper p-2.5 border border-ink text-left en-sentence">
        {block.textEn}
      </p>
    )}

    {block.bulletPoints && block.bulletPoints.length > 0 && (
      <ul className="space-y-2 list-none pr-0 pt-1">
        {block.bulletPoints.map((pt, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink font-bold">
            <span className="w-2 h-2 bg-cobalt mt-1.5 shrink-0" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

// 3. Example Block
const ExampleBlockView: React.FC<{ block: ExampleBlock; onSpeak: (t: string) => void }> = ({ block, onSpeak }) => (
  <div className="bg-surface border-2 border-ink shadow-brutal-callout rounded-xs p-4 my-3 flex items-center justify-between gap-4">
    <div className="flex-1 min-w-0 space-y-1">
      <div className="flex items-center gap-2 mb-1 flex-wrap">
        <span className="px-2 py-0.5 bg-blue-mist text-cobalt border border-ink text-[10px] font-mono font-black uppercase shadow-brutal-press">
          {block.badge || 'مثال تطبيقي'}
        </span>
        <span className="text-[11px] font-black text-muted-gray">نموذج دراسي تطبيقي</span>
      </div>

      <p dir="ltr" className="text-base sm:text-lg font-black font-mono text-ink text-left en-sentence break-words">
        {block.en}
      </p>
      <p className="text-xs sm:text-sm font-bold text-ink/80">{block.ar}</p>

      {block.note && (
        <p className="text-xs font-black text-cobalt bg-paper p-2 border border-ink mt-1">
          💡 {block.note}
        </p>
      )}
    </div>

    <button
      type="button"
      onClick={() => onSpeak(block.en)}
      className="p-2.5 bg-paper hover:bg-yellow text-ink border-2 border-ink shadow-brutal-sm rounded-xs transition-all shrink-0 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
      title="استمع للمثال"
    >
      <Volume2 className="w-4 h-4" />
    </button>
  </div>
);

// 4. Formula Block
const FormulaBlockView: React.FC<{ block: FormulaBlock }> = ({ block }) => (
  <div className="bg-blue-mist border-3 border-ink shadow-brutal-action rounded-xs p-5 my-4 space-y-3">
    <div className="flex items-center gap-2 border-b-2 border-ink/20 pb-2">
      <Sparkles className="w-4 h-4 text-cobalt" />
      <h4 className="text-sm sm:text-base font-black text-ink">{block.title}</h4>
      <span className="text-[10px] font-mono font-black bg-yellow text-ink px-2 py-0.2 border border-ink mr-auto shadow-brutal-press">
        FORMULA
      </span>
    </div>

    <div dir="ltr" className="p-3.5 bg-surface border-2 border-ink shadow-brutal-btn text-center font-mono text-base sm:text-lg font-black text-cobalt tracking-wider break-words min-w-0 en-sentence">
      {block.ruleFormula}
    </div>

    {block.breakdown && block.breakdown.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-2">
        {block.breakdown.map((item, idx) => (
          <div key={idx} className="bg-surface p-3 border-2 border-ink shadow-brutal-sm text-xs space-y-1">
            <span dir="ltr" className="font-black text-cobalt font-mono block text-left bidi-en">
              {item.part}
            </span>
            <span className="text-ink font-bold block">{item.role}</span>
            <span dir="ltr" className="text-muted-gray font-mono text-[11px] block text-left border-t border-soft-border pt-1">
              Ex: {item.example}
            </span>
          </div>
        ))}
      </div>
    )}
  </div>
);

// 5. Important Block (Golden Tip)
const ImportantBlockView: React.FC<{ block: ImportantBlock }> = ({ block }) => (
  <div className="bg-yellow border-3 border-ink shadow-brutal-action rounded-xs p-5 my-4 space-y-2">
    <div className="flex flex-wrap items-center gap-2 border-b-2 border-ink pb-2">
      <Flame className="w-5 h-5 text-ink" />
      <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-surface text-ink px-2 py-0.5 border border-ink shadow-brutal-press">
        ملاحظة ذهبية مهمة
      </span>
      <h4 className="text-sm sm:text-base font-black text-ink">{block.title}</h4>
    </div>
    <p className="text-sm sm:text-base text-ink leading-relaxed font-bold">
      {block.content}
    </p>
  </div>
);

// 6. Warning Block (Exam Trap)
const WarningBlockView: React.FC<{ block: WarningBlock }> = ({ block }) => (
  <div className="bg-answer-review-bg border-3 border-ink shadow-brutal-action rounded-xs p-5 my-4 space-y-3">
    <div className="flex flex-wrap items-center gap-2 border-b-2 border-ink pb-2">
      <AlertTriangle className="w-5 h-5 text-semantic-error" />
      <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-coral text-ink px-2 py-0.5 border border-ink shadow-brutal-press">
        فخ امتحاني شائع! احذر منه 🚨
      </span>
      <h4 className="text-sm sm:text-base font-black text-ink">{block.title}</h4>
    </div>

    <p className="text-sm text-ink leading-relaxed font-bold">
      {block.warningText}
    </p>

    {block.commonTrapExample && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        <div className="p-3 bg-surface border-2 border-semantic-error shadow-brutal-sm rounded-xs text-xs flex items-start gap-2">
          <XCircle className="w-4 h-4 text-semantic-error mt-0.5 shrink-0" />
          <div className="space-y-0.5 min-w-0">
            <span className="font-black text-semantic-error block">صياغة خاطئة (احذرها):</span>
            <span dir="ltr" className="font-mono text-ink font-bold block text-left break-words">
              {block.commonTrapExample.wrong}
            </span>
          </div>
        </div>

        <div className="p-3 bg-surface border-2 border-semantic-success shadow-brutal-sm rounded-xs text-xs flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-semantic-success mt-0.5 shrink-0" />
          <div className="space-y-0.5 min-w-0">
            <span className="font-black text-semantic-success block">الصياغة النموذجية الصحيحة:</span>
            <span dir="ltr" className="font-mono text-ink font-bold block text-left break-words">
              {block.commonTrapExample.right}
            </span>
            <span className="text-muted-gray font-bold block pt-1 border-t border-soft-border">
              {block.commonTrapExample.reason}
            </span>
          </div>
        </div>
      </div>
    )}
  </div>
);

// 7. Steps Block
const StepsBlockView: React.FC<{ block: StepsBlock }> = ({ block }) => (
  <div className="bg-surface border-2 border-ink shadow-brutal-callout rounded-xs p-5 my-4 space-y-4">
    <div className="flex items-center gap-2 border-b-2 border-ink pb-2">
      <Layers className="w-5 h-5 text-cobalt" />
      <h4 className="text-base font-black text-ink">{block.title}</h4>
    </div>

    <div className="space-y-3">
      {block.steps.map((st) => (
        <div key={st.stepNumber} className="flex items-start gap-3 p-3 bg-paper border-2 border-ink shadow-brutal-sm rounded-xs">
          <div className="w-7 h-7 bg-cobalt text-surface border-2 border-ink flex items-center justify-center font-black font-mono text-xs shrink-0 shadow-brutal-press">
            {st.stepNumber}
          </div>
          <div className="space-y-1 flex-1 min-w-0">
            <h5 className="font-black text-sm text-ink">{st.title}</h5>
            <p className="text-xs text-ink/80 font-bold leading-relaxed">{st.description}</p>
            {st.example && (
              <p dir="ltr" className="text-xs font-mono font-bold text-cobalt bg-surface p-2 border border-ink text-left en-sentence break-words">
                Ex: {st.example}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 8. Comparison Block
const ComparisonBlockView: React.FC<{ block: ComparisonBlock }> = ({ block }) => (
  <div className="bg-surface border-2 border-ink shadow-brutal-callout rounded-xs p-5 my-4 space-y-4">
    <h4 className="text-base font-black text-ink text-center border-b-2 border-ink pb-2">
      {block.title}
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Column A */}
      <div className="p-4 bg-blue-mist border-2 border-ink shadow-brutal-sm rounded-xs space-y-2">
        <h5 className="font-black text-sm text-cobalt border-b border-ink/20 pb-1">
          {block.itemA.name}
        </h5>
        <ul className="space-y-1.5 text-xs text-ink font-bold">
          {block.itemA.traits.map((t, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <span>▪</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        {block.itemA.example && (
          <p dir="ltr" className="mt-3 p-2 bg-surface border border-ink text-xs font-mono font-bold text-ink text-left en-sentence break-words">
            {block.itemA.example}
          </p>
        )}
      </div>

      {/* Column B */}
      <div className="p-4 bg-lavender border-2 border-ink shadow-brutal-sm rounded-xs space-y-2">
        <h5 className="font-black text-sm text-ink border-b border-ink/20 pb-1">
          {block.itemB.name}
        </h5>
        <ul className="space-y-1.5 text-xs text-ink font-bold">
          {block.itemB.traits.map((t, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <span>▪</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        {block.itemB.example && (
          <p dir="ltr" className="mt-3 p-2 bg-surface border border-ink text-xs font-mono font-bold text-ink text-left en-sentence break-words">
            {block.itemB.example}
          </p>
        )}
      </div>
    </div>
  </div>
);

// 9. Table Block
const TableBlockView: React.FC<{ block: TableBlock }> = ({ block }) => (
  <div className="bg-surface border-2 border-ink shadow-brutal-callout rounded-xs p-5 my-4 overflow-hidden space-y-3">
    {block.title && (
      <h4 className="text-base font-black text-ink border-b-2 border-ink pb-2">
        {block.title}
      </h4>
    )}
    <div className="overflow-x-auto">
      <table className="w-full text-right text-xs sm:text-sm border-2 border-ink">
        <thead>
          <tr className="bg-paper border-b-2 border-ink text-ink">
            {block.headers.map((h, idx) => (
              <th key={idx} className="p-3 font-black border-l border-ink last:border-l-0">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, rIdx) => (
            <tr key={rIdx} className="border-b border-soft-border hover:bg-paper transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="p-3 font-bold text-ink border-l border-soft-border last:border-l-0">
                  {cell}
                </td>
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
  <div className="my-4 rounded-xs overflow-hidden border-2 border-ink shadow-brutal-callout bg-surface">
    <img src={block.url} alt={block.alt} className="w-full h-auto max-h-96 object-cover" />
    <div className="p-3 text-center bg-paper border-t-2 border-ink">
      <p className="text-sm font-black text-ink">{block.captionAr}</p>
      {block.captionEn && (
        <p dir="ltr" className="text-xs font-mono text-muted-gray mt-0.5 en-sentence">
          {block.captionEn}
        </p>
      )}
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
    <div className="bg-surface border-2 border-ink shadow-brutal-callout rounded-xs p-5 my-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink pb-2">
        <span className="px-2.5 py-0.5 rounded-xs text-[11px] font-black uppercase tracking-wider bg-yellow text-ink border border-ink font-mono shadow-brutal-press">
          تمرين تطبيقي: {block.category}
        </span>
        {block.ministerialYear && (
          <span className="text-xs text-ink font-mono font-black bg-paper px-2 py-0.5 border border-ink">
            {block.ministerialYear}
          </span>
        )}
      </div>

      <p dir="ltr" className="text-base font-black font-mono text-ink text-left en-sentence break-words">
        {block.questionEn}
      </p>
      {block.questionAr && <p className="text-xs sm:text-sm font-bold text-muted-gray">{block.questionAr}</p>}

      {block.options && block.options.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          {block.options.map((opt, idx) => {
            const isThisCorrect = opt.trim().toLowerCase() === block.correctAnswer.trim().toLowerCase();
            const isThisSelected = selectedOption === opt;
            let btnClass = "bg-paper hover:bg-blue-mist text-ink border-2 border-ink shadow-brutal-sm";

            if (revealed) {
              if (isThisCorrect) {
                btnClass = "bg-soft-mint border-2 border-ink text-semantic-success font-black shadow-brutal-sm";
              } else if (isThisSelected) {
                btnClass = "bg-coral border-2 border-ink text-ink font-black shadow-brutal-sm";
              } else {
                btnClass = "bg-paper border-2 border-soft-border text-muted-gray opacity-60";
              }
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(opt)}
                disabled={revealed}
                className={`p-3 rounded-xs text-sm font-bold text-left transition-all flex items-center justify-between cursor-pointer active:translate-x-0.5 active:translate-y-0.5 ${btnClass}`}
              >
                <span dir="ltr" className="font-mono">{opt}</span>
                {revealed && isThisCorrect && <CheckCircle2 className="w-4 h-4 text-semantic-success shrink-0" />}
                {revealed && isThisSelected && !isThisCorrect && <XCircle className="w-4 h-4 text-semantic-error shrink-0" />}
              </button>
            );
          })}
        </div>
      )}

      {revealed && (
        <div className={`lesson-answer ${isCorrect ? 'lesson-answer--correct' : 'lesson-answer--review'}`}>
          <div className="flex items-center justify-between gap-2">
            <span className="lesson-answer__label">
              {isCorrect ? 'إجابة صحيحة! أحسنت 🌟' : 'راجع الحل والتعليل'}
            </span>
            <span className="text-xs font-mono font-black text-ink">
              {isCorrect ? 'CORRECT ✓' : 'REVIEW'}
            </span>
          </div>
          <p dir="ltr" className="lesson-answer__value">{block.correctAnswer}</p>
          <p className="lesson-answer__explanation">{block.explanation}</p>
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
      <div className="bg-surface border-3 border-ink shadow-brutal-lg rounded-xs p-6 my-4 text-center space-y-4">
        <Award className={`w-12 h-12 mx-auto ${passed ? 'text-cobalt' : 'text-muted-gray'}`} />
        <h4 className="text-xl font-black text-ink">
          {passed ? 'مبروك! اجتزت الاختبار بنجاح 🎯' : 'تحتاج إلى مراجعة بعض النقاط والتدرب مجدداً'}
        </h4>
        <div className="p-4 bg-paper border-2 border-ink shadow-brutal-sm inline-block">
          <p className="text-sm font-bold text-ink">
            حصلت على <span className="font-mono text-2xl font-black text-cobalt">{score}</span> من أصل <span className="font-mono font-bold">{total}</span>
          </p>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              setAnswers({});
              setCurrentIdx(0);
              setShowResult(false);
            }}
            className="px-5 py-2.5 bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink shadow-brutal-callout rounded-xs text-xs font-black transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
          >
            إعادة الاختبار
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface border-2 border-ink shadow-brutal-callout rounded-xs p-5 my-4 space-y-4">
      <div className="flex items-center justify-between text-xs border-b-2 border-ink pb-2 font-mono font-bold text-ink">
        <span className="font-black text-cobalt">{block.title}</span>
        <span>السؤال {currentIdx + 1} من {total}</span>
      </div>

      <p dir="ltr" className="text-base font-black font-mono text-ink text-left en-sentence break-words">
        {question.prompt}
      </p>

      <div className="space-y-2">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handlePick(idx)}
            className={`w-full p-3 rounded-xs border-2 text-sm font-bold text-left transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5 ${
              answers[currentIdx] === idx 
                ? 'bg-cobalt border-ink text-surface shadow-brutal-sm' 
                : 'bg-paper hover:bg-surface border-ink text-ink shadow-brutal-sm'
            }`}
          >
            <span dir="ltr" className="font-mono">{opt}</span>
          </button>
        ))}
      </div>

      <div className="pt-2 flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          disabled={answers[currentIdx] === undefined}
          className="px-5 py-2.5 bg-cobalt hover:bg-cobalt-hover disabled:opacity-50 text-surface font-black border-2 border-ink shadow-brutal-callout rounded-xs text-xs transition-all flex items-center gap-1.5 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
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
    <div className="bg-surface border-2 border-ink shadow-brutal-callout rounded-xs p-5 my-4 space-y-4">
      <div className="flex items-center justify-between text-xs border-b-2 border-ink pb-2 font-mono font-bold text-ink">
        <span className="font-black text-cobalt">بطاقات المراجعة السريعة (FLASHCARDS)</span>
        <span>{activeCardIdx + 1} / {block.cards.length}</span>
      </div>

      <button
        type="button"
        onClick={() => setIsFlipped(!isFlipped)}
        aria-pressed={isFlipped}
        className="w-full cursor-pointer min-h-[170px] bg-paper hover:bg-blue-mist border-3 border-ink shadow-brutal-action rounded-xs p-6 flex flex-col items-center justify-center text-center transition-all select-none"
      >
        <span className="text-[11px] text-muted-gray uppercase tracking-widest mb-2 font-mono font-bold">
          {isFlipped ? 'المعنى والتوضيح (الخلف)' : 'المصطلح أو العبارة (الأمام) • انقر للقلب'}
        </span>
        <p dir="ltr" className="text-xl sm:text-2xl font-black font-mono text-ink en-sentence break-words">
          {isFlipped ? card.back : card.front}
        </p>
        {card.hint && !isFlipped && (
          <p className="text-xs text-muted-gray mt-2 font-bold">💡 تلميح: {card.hint}</p>
        )}
      </button>

      <div className="flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={handlePrev}
          className="px-4 py-2 bg-surface hover:bg-paper text-ink border-2 border-ink shadow-brutal-sm rounded-xs text-xs font-black cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
        >
          السابق
        </button>

        <button
          type="button"
          onClick={() => onSpeak(card.audioText || card.front)}
          className="p-2 bg-yellow hover:bg-yellow-hover text-ink border-2 border-ink shadow-brutal-sm rounded-[4px] text-xs cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
          title="استمع"
        >
          <Volume2 className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="px-4 py-2 bg-surface hover:bg-paper text-ink border-2 border-ink shadow-brutal-sm rounded-xs text-xs font-black cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
        >
          التالي
        </button>
      </div>
    </div>
  );
};
