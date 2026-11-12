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
  <div className="bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs p-5 my-4 relative">
    <div className="flex items-start justify-between gap-4">
      <div className="space-y-2 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-xs text-[11px] font-black uppercase tracking-wider bg-[#E9ECFA] text-[#405DE6] border border-[#202124] font-mono shadow-[1px_1px_0px_#202124]">
            {block.partOfSpeech || 'مفردة / مصطلح'}
          </span>
          <h3 dir="ltr" className="text-xl font-black font-mono text-[#202124] bidi-en">
            {block.term}
          </h3>
          {block.phonetic && (
            <span dir="ltr" className="text-xs font-mono font-bold text-[#405DE6]">
              /{block.phonetic}/
            </span>
          )}
        </div>

        <p className="text-base text-[#202124] font-bold leading-relaxed pt-1">
          {block.definitionAr}
        </p>

        {block.definitionEn && (
          <p dir="ltr" className="text-xs text-[#747474] font-mono text-left en-sentence">
            {block.definitionEn}
          </p>
        )}

        {block.contextExample && (
          <div className="mt-3 p-3 bg-[#F7F5EF] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] rounded-xs text-xs sm:text-sm text-[#202124] flex items-center justify-between gap-3">
            <span dir="ltr" className="font-mono font-bold text-left en-sentence">
              "{block.contextExample}"
            </span>
            <button
              type="button"
              onClick={() => onSpeak(block.contextExample!)}
              className="p-1.5 bg-white hover:bg-[#F3E6A5] text-[#202124] border border-[#202124] rounded-xs shadow-[1px_1px_0px_#202124] transition-colors cursor-pointer shrink-0"
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
        className="p-2.5 bg-[#F7F5EF] hover:bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] rounded-xs transition-all shrink-0 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
        title="استمع للنطق"
      >
        <Volume2 className="w-4 h-4" />
      </button>
    </div>
  </div>
);

// 2. Explanation Block
const ExplanationBlockView: React.FC<{ block: ExplanationBlock }> = ({ block }) => (
  <div className="bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs p-5 my-4 text-[#202124] leading-relaxed space-y-3">
    {block.title && (
      <div className="flex items-center gap-2 border-b-2 border-[#202124]/10 pb-2">
        <BookOpen className="w-4 h-4 text-[#405DE6]" />
        <h4 className="text-base font-black text-[#202124]">{block.title}</h4>
      </div>
    )}

    <p className="text-sm sm:text-base text-[#202124] leading-relaxed font-bold">
      {block.textAr}
    </p>

    {block.textEn && (
      <p dir="ltr" className="text-xs font-mono font-bold text-[#405DE6] bg-[#F7F5EF] p-2.5 border border-[#202124] text-left en-sentence">
        {block.textEn}
      </p>
    )}

    {block.bulletPoints && block.bulletPoints.length > 0 && (
      <ul className="space-y-2 list-none pr-0 pt-1">
        {block.bulletPoints.map((pt, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202124] font-bold">
            <span className="w-2 h-2 bg-[#405DE6] mt-1.5 shrink-0" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

// 3. Example Block
const ExampleBlockView: React.FC<{ block: ExampleBlock; onSpeak: (t: string) => void }> = ({ block, onSpeak }) => (
  <div className="bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs p-4 my-3 flex items-center justify-between gap-4">
    <div className="flex-1 space-y-1">
      <div className="flex items-center gap-2 mb-1">
        <span className="px-2 py-0.5 bg-[#E9ECFA] text-[#405DE6] border border-[#202124] text-[10px] font-mono font-black uppercase shadow-[1px_1px_0px_#202124]">
          {block.badge || 'مثال تطبيقي'}
        </span>
        <span className="text-[11px] font-black text-[#747474]">نموذج وزاري معتمد</span>
      </div>

      <p dir="ltr" className="text-base sm:text-lg font-black font-mono text-[#202124] text-left en-sentence">
        {block.en}
      </p>
      <p className="text-xs sm:text-sm font-bold text-[#202124]/80">{block.ar}</p>

      {block.note && (
        <p className="text-xs font-black text-[#405DE6] bg-[#F7F5EF] p-2 border border-[#202124] mt-1">
          💡 {block.note}
        </p>
      )}
    </div>

    <button
      type="button"
      onClick={() => onSpeak(block.en)}
      className="p-2.5 bg-[#F7F5EF] hover:bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] rounded-xs transition-all shrink-0 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
      title="استمع للمثال"
    >
      <Volume2 className="w-4 h-4" />
    </button>
  </div>
);

// 4. Formula Block
const FormulaBlockView: React.FC<{ block: FormulaBlock }> = ({ block }) => (
  <div className="bg-[#E9ECFA] border-3 border-[#202124] shadow-[4px_4px_0px_#202124] rounded-xs p-5 my-4 space-y-3">
    <div className="flex items-center gap-2 border-b-2 border-[#202124]/20 pb-2">
      <Sparkles className="w-4 h-4 text-[#405DE6]" />
      <h4 className="text-sm sm:text-base font-black text-[#202124]">{block.title}</h4>
      <span className="text-[10px] font-mono font-black bg-[#F3E6A5] text-[#202124] px-2 py-0.2 border border-[#202124] mr-auto shadow-[1px_1px_0px_#202124]">
        FORMULA
      </span>
    </div>

    <div dir="ltr" className="p-3.5 bg-white border-2 border-[#202124] shadow-[2.5px_2.5px_0px_#202124] text-center font-mono text-base sm:text-lg font-black text-[#405DE6] tracking-wider overflow-x-auto en-sentence">
      {block.ruleFormula}
    </div>

    {block.breakdown && block.breakdown.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-2">
        {block.breakdown.map((item, idx) => (
          <div key={idx} className="bg-white p-3 border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs space-y-1">
            <span dir="ltr" className="font-black text-[#405DE6] font-mono block text-left bidi-en">
              {item.part}
            </span>
            <span className="text-[#202124] font-bold block">{item.role}</span>
            <span dir="ltr" className="text-[#747474] font-mono text-[11px] block text-left border-t border-[#E5E3DC] pt-1">
              Ex: {item.example}
            </span>
          </div>
        ))}
      </div>
    )}
  </div>
);

// 5. Important Block (Golden Ministerial Tip)
const ImportantBlockView: React.FC<{ block: ImportantBlock }> = ({ block }) => (
  <div className="bg-[#F3E6A5] border-3 border-[#202124] shadow-[4px_4px_0px_#202124] rounded-xs p-5 my-4 space-y-2">
    <div className="flex items-center gap-2 border-b-2 border-[#202124] pb-2">
      <Flame className="w-5 h-5 text-[#202124]" />
      <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-white text-[#202124] px-2 py-0.5 border border-[#202124] shadow-[1px_1px_0px_#202124]">
        ملاحظة ذهبية وزارية
      </span>
      <h4 className="text-sm sm:text-base font-black text-[#202124]">{block.title}</h4>
    </div>
    <p className="text-sm sm:text-base text-[#202124] leading-relaxed font-bold">
      {block.content}
    </p>
  </div>
);

// 6. Warning Block (Ministerial Trap)
const WarningBlockView: React.FC<{ block: WarningBlock }> = ({ block }) => (
  <div className="bg-[#FDF6F4] border-3 border-[#202124] shadow-[4px_4px_0px_#202124] rounded-xs p-5 my-4 space-y-3">
    <div className="flex items-center gap-2 border-b-2 border-[#202124] pb-2">
      <AlertTriangle className="w-5 h-5 text-[#B83A3A]" />
      <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-[#F2A18E] text-[#202124] px-2 py-0.5 border border-[#202124] shadow-[1px_1px_0px_#202124]">
        فخ وزاري شائع! احذر منه 🚨
      </span>
      <h4 className="text-sm sm:text-base font-black text-[#202124]">{block.title}</h4>
    </div>

    <p className="text-sm text-[#202124] leading-relaxed font-bold">
      {block.warningText}
    </p>

    {block.commonTrapExample && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        <div className="p-3 bg-white border-2 border-[#B83A3A] shadow-[2px_2px_0px_#B83A3A] rounded-xs text-xs flex items-start gap-2">
          <XCircle className="w-4 h-4 text-[#B83A3A] mt-0.5 shrink-0" />
          <div className="space-y-0.5">
            <span className="font-black text-[#B83A3A] block">صياغة خاطئة (احذرها):</span>
            <span dir="ltr" className="font-mono text-[#202124] font-bold block text-left">
              {block.commonTrapExample.wrong}
            </span>
          </div>
        </div>

        <div className="p-3 bg-white border-2 border-[#287A52] shadow-[2px_2px_0px_#287A52] rounded-xs text-xs flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#287A52] mt-0.5 shrink-0" />
          <div className="space-y-0.5">
            <span className="font-black text-[#287A52] block">الصياغة النموذجية المعتمدة:</span>
            <span dir="ltr" className="font-mono text-[#202124] font-bold block text-left">
              {block.commonTrapExample.right}
            </span>
            <span className="text-[#747474] font-bold block pt-1 border-t border-[#E5E3DC]">
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
  <div className="bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs p-5 my-4 space-y-4">
    <div className="flex items-center gap-2 border-b-2 border-[#202124] pb-2">
      <Layers className="w-5 h-5 text-[#405DE6]" />
      <h4 className="text-base font-black text-[#202124]">{block.title}</h4>
    </div>

    <div className="space-y-3">
      {block.steps.map((st) => (
        <div key={st.stepNumber} className="flex items-start gap-3 p-3 bg-[#F7F5EF] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] rounded-xs">
          <div className="w-7 h-7 bg-[#405DE6] text-white border-2 border-[#202124] flex items-center justify-center font-black font-mono text-xs shrink-0 shadow-[1px_1px_0px_#202124]">
            {st.stepNumber}
          </div>
          <div className="space-y-1 flex-1">
            <h5 className="font-black text-sm text-[#202124]">{st.title}</h5>
            <p className="text-xs text-[#202124]/80 font-bold leading-relaxed">{st.description}</p>
            {st.example && (
              <p dir="ltr" className="text-xs font-mono font-bold text-[#405DE6] bg-white p-2 border border-[#202124] text-left en-sentence">
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
  <div className="bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs p-5 my-4 space-y-4">
    <h4 className="text-base font-black text-[#202124] text-center border-b-2 border-[#202124] pb-2">
      {block.title}
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Column A */}
      <div className="p-4 bg-[#E9ECFA] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] rounded-xs space-y-2">
        <h5 className="font-black text-sm text-[#405DE6] border-b border-[#202124]/20 pb-1">
          {block.itemA.name}
        </h5>
        <ul className="space-y-1.5 text-xs text-[#202124] font-bold">
          {block.itemA.traits.map((t, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <span>▪</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        {block.itemA.example && (
          <p dir="ltr" className="mt-3 p-2 bg-white border border-[#202124] text-xs font-mono font-bold text-[#202124] text-left en-sentence">
            {block.itemA.example}
          </p>
        )}
      </div>

      {/* Column B */}
      <div className="p-4 bg-[#DCD8FA] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] rounded-xs space-y-2">
        <h5 className="font-black text-sm text-[#202124] border-b border-[#202124]/20 pb-1">
          {block.itemB.name}
        </h5>
        <ul className="space-y-1.5 text-xs text-[#202124] font-bold">
          {block.itemB.traits.map((t, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <span>▪</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        {block.itemB.example && (
          <p dir="ltr" className="mt-3 p-2 bg-white border border-[#202124] text-xs font-mono font-bold text-[#202124] text-left en-sentence">
            {block.itemB.example}
          </p>
        )}
      </div>
    </div>
  </div>
);

// 9. Table Block
const TableBlockView: React.FC<{ block: TableBlock }> = ({ block }) => (
  <div className="bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs p-5 my-4 overflow-hidden space-y-3">
    {block.title && (
      <h4 className="text-base font-black text-[#202124] border-b-2 border-[#202124] pb-2">
        {block.title}
      </h4>
    )}
    <div className="overflow-x-auto">
      <table className="w-full text-right text-xs sm:text-sm border-2 border-[#202124]">
        <thead>
          <tr className="bg-[#F7F5EF] border-b-2 border-[#202124] text-[#202124]">
            {block.headers.map((h, idx) => (
              <th key={idx} className="p-3 font-black border-l border-[#202124] last:border-l-0">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, rIdx) => (
            <tr key={rIdx} className="border-b border-[#E5E3DC] hover:bg-[#F7F5EF] transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="p-3 font-bold text-[#202124] border-l border-[#E5E3DC] last:border-l-0">
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
  <div className="my-4 rounded-xs overflow-hidden border-2 border-[#202124] shadow-[3px_3px_0px_#202124] bg-white">
    <img src={block.url} alt={block.alt} className="w-full h-auto max-h-96 object-cover" />
    <div className="p-3 text-center bg-[#F7F5EF] border-t-2 border-[#202124]">
      <p className="text-sm font-black text-[#202124]">{block.captionAr}</p>
      {block.captionEn && (
        <p dir="ltr" className="text-xs font-mono text-[#747474] mt-0.5 en-sentence">
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
    <div className="bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs p-5 my-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#202124] pb-2">
        <span className="px-2.5 py-0.5 rounded-xs text-[11px] font-black uppercase tracking-wider bg-[#F3E6A5] text-[#202124] border border-[#202124] font-mono shadow-[1px_1px_0px_#202124]">
          تمرين وزاري: {block.category}
        </span>
        {block.ministerialYear && (
          <span className="text-xs text-[#202124] font-mono font-black bg-[#F7F5EF] px-2 py-0.5 border border-[#202124]">
            {block.ministerialYear}
          </span>
        )}
      </div>

      <p dir="ltr" className="text-base font-black font-mono text-[#202124] text-left en-sentence">
        {block.questionEn}
      </p>
      {block.questionAr && <p className="text-xs sm:text-sm font-bold text-[#747474]">{block.questionAr}</p>}

      {block.options && block.options.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          {block.options.map((opt, idx) => {
            const isThisCorrect = opt.trim().toLowerCase() === block.correctAnswer.trim().toLowerCase();
            const isThisSelected = selectedOption === opt;
            let btnClass = "bg-[#F7F5EF] hover:bg-[#E9ECFA] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124]";

            if (revealed) {
              if (isThisCorrect) {
                btnClass = "bg-[#D7E9DA] border-2 border-[#202124] text-[#287A52] font-black shadow-[2px_2px_0px_#202124]";
              } else if (isThisSelected) {
                btnClass = "bg-[#F2A18E] border-2 border-[#202124] text-[#202124] font-black shadow-[2px_2px_0px_#202124]";
              } else {
                btnClass = "bg-[#F7F5EF] border-2 border-[#E5E3DC] text-[#747474] opacity-60";
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
                {revealed && isThisCorrect && <CheckCircle2 className="w-4 h-4 text-[#287A52] shrink-0" />}
                {revealed && isThisSelected && !isThisCorrect && <XCircle className="w-4 h-4 text-[#B83A3A] shrink-0" />}
              </button>
            );
          })}
        </div>
      )}

      {revealed && (
        <div className={`lesson-answer ${isCorrect ? 'lesson-answer--correct' : 'lesson-answer--review'}`}>
          <div className="flex items-center justify-between gap-2">
            <span className="lesson-answer__label">
              {isCorrect ? 'إجابة وزارية صحيحة! أحسنت 🌟' : 'راجع الحل والتعليل الوزاري'}
            </span>
            <span className="text-xs font-mono font-black text-[#202124]">
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
      <div className="bg-white border-3 border-[#202124] shadow-[5px_5px_0px_#202124] rounded-xs p-6 my-4 text-center space-y-4">
        <Award className={`w-12 h-12 mx-auto ${passed ? 'text-[#405DE6]' : 'text-[#747474]'}`} />
        <h4 className="text-xl font-black text-[#202124]">
          {passed ? 'مبروك! اجتزت الاختبار بنجاح 🎯' : 'تحتاج إلى مراجعة بعض النقاط والتدرب مجدداً'}
        </h4>
        <div className="p-4 bg-[#F7F5EF] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] inline-block">
          <p className="text-sm font-bold text-[#202124]">
            حصلت على <span className="font-mono text-2xl font-black text-[#405DE6]">{score}</span> من أصل <span className="font-mono font-bold">{total}</span>
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
            className="px-5 py-2.5 bg-[#405DE6] hover:bg-[#334DC6] text-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs text-xs font-black transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
          >
            إعادة الاختبار
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs p-5 my-4 space-y-4">
      <div className="flex items-center justify-between text-xs border-b-2 border-[#202124] pb-2 font-mono font-bold text-[#202124]">
        <span className="font-black text-[#405DE6]">{block.title}</span>
        <span>السؤال {currentIdx + 1} من {total}</span>
      </div>

      <p dir="ltr" className="text-base font-black font-mono text-[#202124] text-left en-sentence">
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
                ? 'bg-[#405DE6] border-[#202124] text-white shadow-[2px_2px_0px_#202124]' 
                : 'bg-[#F7F5EF] hover:bg-white border-[#202124] text-[#202124] shadow-[2px_2px_0px_#202124]'
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
          className="px-5 py-2.5 bg-[#405DE6] hover:bg-[#334DC6] disabled:opacity-50 text-white font-black border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs text-xs transition-all flex items-center gap-1.5 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
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
    <div className="bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs p-5 my-4 space-y-4">
      <div className="flex items-center justify-between text-xs border-b-2 border-[#202124] pb-2 font-mono font-bold text-[#202124]">
        <span className="font-black text-[#405DE6]">بطاقات المراجعة السريعة (FLASHCARDS)</span>
        <span>{activeCardIdx + 1} / {block.cards.length}</span>
      </div>

      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="cursor-pointer min-h-[170px] bg-[#F7F5EF] hover:bg-[#E9ECFA] border-3 border-[#202124] shadow-[4px_4px_0px_#202124] rounded-xs p-6 flex flex-col items-center justify-center text-center transition-all select-none"
      >
        <span className="text-[11px] text-[#747474] uppercase tracking-widest mb-2 font-mono font-bold">
          {isFlipped ? 'المعنى والتوضيح (الخلف)' : 'المصطلح أو العبارة (الأمام) • انقر للقلب'}
        </span>
        <p dir="ltr" className="text-xl sm:text-2xl font-black font-mono text-[#202124] en-sentence">
          {isFlipped ? card.back : card.front}
        </p>
        {card.hint && !isFlipped && (
          <p className="text-xs text-[#747474] mt-2 font-bold">💡 تلميح: {card.hint}</p>
        )}
      </div>

      <div className="flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={handlePrev}
          className="px-4 py-2 bg-white hover:bg-[#F7F5EF] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] rounded-xs text-xs font-black cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
        >
          السابق
        </button>

        <button
          type="button"
          onClick={() => onSpeak(card.audioText || card.front)}
          className="p-2 bg-[#F3E6A5] hover:bg-[#ebdca0] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] rounded-xs text-xs cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
          title="استمع"
        >
          <Volume2 className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="px-4 py-2 bg-white hover:bg-[#F7F5EF] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] rounded-xs text-xs font-black cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
        >
          التالي
        </button>
      </div>
    </div>
  );
};
