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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
              title="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-1 rounded-full">
                {pin.unitTitle}
              </span>
              <h2 className="text-sm font-black text-slate-900 dark:text-white mt-0.5 truncate max-w-xs sm:max-w-md">
                {pin.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                liked 
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
              <span>{likesCount}</span>
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={handleSave}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  saved 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
                <span>{saved ? 'محفوظ في اللوحة' : 'حفظ البن'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Body (Pinterest Close-up style: Split layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Left / Top Visual Banner */}
          <div className={`md:col-span-5 p-6 sm:p-8 ${pin.accentColor} text-white flex flex-col justify-between relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl pointer-events-none -ml-10 -mb-10" />
            
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>منهج العراق • الأستاذ مصطفى تركي</span>
              </div>
              
              <h1 className="text-xl sm:text-2xl font-black leading-snug">
                {pin.title}
              </h1>

              <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                {pin.contentSummary}
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-6 border-t border-white/20 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-white/80">
                <span>الصف الدراسي:</span>
                <span className="bg-white/20 px-2.5 py-1 rounded-lg text-white">{pin.grade}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-white/80">
                <span>التصنيف المنهجي:</span>
                <span className="bg-white/20 px-2.5 py-1 rounded-lg text-white">{pin.subtitle}</span>
              </div>
            </div>
          </div>

          {/* Right / Content Details */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 overflow-y-auto">
            
            {/* Detailed Notes / Bullet Points */}
            {pin.detailedNotes && pin.detailedNotes.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>الشرح المفصل والقواعد</span>
                </h3>
                <ul className="space-y-2">
                  {pin.detailedNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Teacher's Golden Notes */}
            {pin.teacherTips && pin.teacherTips.length > 0 && (
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-black text-xs">
                  <Shield className="w-4 h-4" />
                  <span>ملاحظات الأستاذ مصطفى تركي الذهبية 🌟</span>
                </div>
                <ul className="space-y-1.5">
                  {pin.teacherTips.map((tip, idx) => (
                    <li key={idx} className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Common Mistakes / Ministerial Traps */}
            {pin.commonMistakes && pin.commonMistakes.length > 0 && (
              <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-2">
                <div className="flex items-center gap-2 text-rose-800 dark:text-rose-400 font-black text-xs">
                  <AlertTriangle className="w-4 h-4" />
                  <span>فخوخ وزارية احذر منها ⚠️</span>
                </div>
                <ul className="space-y-1.5">
                  {pin.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="text-xs text-rose-900 dark:text-rose-200 leading-relaxed flex items-start gap-2">
                      <span className="text-rose-500 font-bold">⚠️</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Examples */}
            {pin.examples && pin.examples.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">أمثلة توضيحية من المنهج:</h4>
                <div className="space-y-2">
                  {pin.examples.map((ex, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 space-y-1">
                      <p className="text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300 ltr text-left">
                        {ex.en}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {ex.ar}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Comments & Discussion */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                <MessageCircle className="w-4 h-4 text-indigo-500" />
                <span>تعليقات ونقاشات الطلبة ({comments.length})</span>
              </div>

              <form onSubmit={handleAddComment} className="flex gap-2">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="أضف ملاحظتك أو سؤالك حول هذا البن..."
                  className="flex-1 px-4 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1 cursor-pointer shadow-md shadow-indigo-600/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>إرسال</span>
                </button>
              </form>

              <div className="space-y-2 max-h-40 overflow-y-auto">
                {comments.map((c, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                      ط
                    </span>
                    <span className="leading-relaxed">{c}</span>
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
