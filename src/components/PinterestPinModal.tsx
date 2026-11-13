import React, { useState } from 'react';
import { 
  X, Bookmark, Heart, Share2, Sparkles, Award, CheckCircle2, 
  BookOpen, HelpCircle, ArrowLeft, Send, MessageCircle, AlertTriangle, Shield
} from 'lucide-react';
import { Lesson, MinisterialExamQuestion, Unit } from '../types';
import { triggerCelebration } from '../utils/storage';

export interface PinItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'grammar' | 'vocab' | 'ministerial' | 'literature' | 'activity' | 'student';
  grade: string;
  unitTitle: string;
  contentSummary: string;
  detailedNotes: string[];
  teacherTips: string[];
  commonMistakes?: string[];
  examples?: { en: string; ar: string; note?: string }[];
  questionData?: MinisterialExamQuestion;
  lessonRef?: Lesson;
  accentColor: string;
  likesCount: number;
  savesCount: number;
}

interface PinterestPinModalProps {
  pin: PinItem;
  onClose: () => void;
  onSaveToBoard: (pinId: string, boardName: string) => void;
  onCompleteLesson?: (lessonId: string) => void;
  isSaved?: boolean;
}

export const PinterestPinModal: React.FC<PinterestPinModalProps> = ({
  pin,
  onClose,
  onSaveToBoard,
  onCompleteLesson,
  isSaved = false
}) => {
  const [saved, setSaved] = useState(isSaved);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(pin.likesCount);
  const [selectedBoard, setSelectedBoard] = useState('قواعد وزارية مهمة');
  const [showBoardDropdown, setShowBoardDropdown] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<string[]>([
    'شرح رائع جداً أستاذ مصطفى، وضح الفكرة تماماً!',
    'هذه القاعدة تكررت في وزاري 2024 و 2025.',
    'تم الحفظ في لوحة المراجعة المركزة.'
  ]);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikesCount(c => c + 1);
      triggerCelebration();
    } else {
      setLiked(false);
      setLikesCount(c => c - 1);
    }
  };

  const handleSave = () => {
    setSaved(!saved);
    onSaveToBoard(pin.id, selectedBoard);
    triggerCelebration();
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments([commentText, ...comments]);
    setCommentText('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-ink/75 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-surface rounded-md shadow-brutal-modal border-2 border-ink overflow-hidden flex flex-col max-h-[92vh] text-ink">
        
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-5 py-3.5 border-b-2 border-ink bg-paper sticky top-0 z-20">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <button
              type="button"
              onClick={onClose}
              aria-label="إغلاق"
              className="p-2 rounded bg-surface hover:bg-coral border-2 border-ink shadow-brutal-press text-ink transition-all cursor-pointer shrink-0"
              title="إغلاق"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="min-w-0">
              <span className="inline-block text-[11px] font-bold text-ink bg-yellow border border-ink px-2 py-0.5 rounded-sm">
                {pin.unitTitle}
              </span>
              <h2 className="text-sm font-black text-ink mt-1 truncate max-w-xs sm:max-w-md">
                {pin.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold border-2 border-ink shadow-brutal-press transition-all cursor-pointer ${
                liked 
                  ? 'bg-coral text-ink' 
                  : 'bg-surface text-ink hover:bg-yellow'
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
              <span>{likesCount}</span>
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={handleSave}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded text-xs font-bold border-2 border-ink shadow-brutal-sm transition-all cursor-pointer ${
                  saved 
                    ? 'bg-soft-mint text-ink' 
                    : 'bg-cobalt hover:bg-cobalt-hover text-surface'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
                <span>{saved ? 'محفوظ في اللوحة' : 'حفظ البطاقة'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Body (Split Editorial Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Left / Top Visual Banner */}
          <div className={`md:col-span-5 p-6 sm:p-8 ${pin.accentColor} flex flex-col justify-between relative overflow-hidden border-b-2 md:border-b-0 md:border-l-2 border-ink`}>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface text-ink border border-ink shadow-brutal-press text-xs font-black">
                <Sparkles className="w-3.5 h-3.5 text-cobalt" />
                <span>منهج العراق • الأستاذ مصطفى تركي</span>
              </div>
              
              <h1 className="text-xl sm:text-2xl font-black leading-snug">
                {pin.title}
              </h1>

              <p className="text-xs sm:text-sm font-medium leading-relaxed opacity-90 break-words">
                {pin.contentSummary}
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-6 border-t-2 border-current/20 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
                <span>الصف الدراسي:</span>
                <span className="bg-surface text-ink border border-ink px-2.5 py-1 rounded-sm">{pin.grade}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
                <span>التصنيف المنهجي:</span>
                <span className="bg-surface text-ink border border-ink px-2.5 py-1 rounded-sm">{pin.subtitle}</span>
              </div>
            </div>
          </div>

          {/* Right / Content Details */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6 bg-surface text-ink overflow-y-auto">
            
            {/* Detailed Notes / Bullet Points */}
            {pin.detailedNotes && pin.detailedNotes.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-cobalt uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>الشرح المفصل والقواعد</span>
                </h3>
                <ul className="space-y-2">
                  {pin.detailedNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm bg-paper p-3 rounded border border-ink shadow-brutal-press">
                      <span className="w-5 h-5 rounded-sm bg-cobalt text-surface border border-ink text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed break-words">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Teacher's Golden Notes */}
            {pin.teacherTips && pin.teacherTips.length > 0 && (
              <div className="p-4 rounded-md bg-yellow border-2 border-ink shadow-brutal-sm space-y-2">
                <div className="flex items-center gap-2 text-ink font-black text-xs">
                  <Shield className="w-4 h-4 text-cobalt shrink-0" />
                  <span>ملاحظات الأستاذ مصطفى تركي الذهبية</span>
                </div>
                <ul className="space-y-1.5">
                  {pin.teacherTips.map((tip, idx) => (
                    <li key={idx} className="text-xs font-medium text-ink leading-relaxed flex items-start gap-2">
                      <span className="text-cobalt font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Common Mistakes / Traps */}
            {pin.commonMistakes && pin.commonMistakes.length > 0 && (
              <div className="p-4 rounded-md bg-answer-review-bg border-2 border-ink shadow-brutal-sm space-y-2">
                <div className="flex items-center gap-2 text-semantic-error font-black text-xs">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>أخطاء شائعة احذر منها</span>
                </div>
                <ul className="space-y-1.5">
                  {pin.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="text-xs font-medium text-ink leading-relaxed flex items-start gap-2">
                      <span className="text-semantic-error font-bold">!</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Examples */}
            {pin.examples && pin.examples.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-ink uppercase">أمثلة توضيحية من المنهج:</h4>
                <div className="space-y-2">
                  {pin.examples.map((ex, idx) => (
                    <div key={idx} className="p-3 rounded bg-paper border border-ink space-y-1">
                      <p dir="ltr" className="text-xs sm:text-sm font-mono font-bold text-cobalt text-left break-words">
                        {ex.en}
                      </p>
                      <p className="text-xs font-medium text-muted-gray">
                        {ex.ar}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Comments & Discussion */}
            <div className="pt-4 border-t-2 border-ink/15 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-ink">
                <MessageCircle className="w-4 h-4 text-cobalt" />
                <span>ملاحظات ونقاشات الطلبة ({comments.length})</span>
              </div>

              <form onSubmit={handleAddComment} className="flex flex-wrap sm:flex-nowrap gap-2">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="أضف ملاحظتك أو سؤالك حول هذه البطاقة..."
                  className="flex-1 min-w-0 px-4 py-2 text-xs rounded bg-paper border-2 border-ink focus:outline-none focus:shadow-brutal-cobalt-sm text-ink placeholder-muted-gray"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink shadow-brutal-press font-bold text-xs flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>إرسال</span>
                </button>
              </form>

              <div className="space-y-2 max-h-40 overflow-y-auto">
                {comments.map((c, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-paper border border-ink text-xs text-ink flex items-start gap-2">
                    <span className="w-5 h-5 rounded-sm bg-cobalt text-surface font-bold text-[10px] flex items-center justify-center shrink-0">
                      ط
                    </span>
                    <span className="leading-relaxed break-words">{c}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
