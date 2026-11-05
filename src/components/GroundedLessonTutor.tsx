import React, { useState } from 'react';
import { 
  Sparkles, HelpCircle, Send, CheckCircle2, AlertCircle, 
  BookOpen, RefreshCw, Bot, User, Quote, ChevronDown, ChevronUp
} from 'lucide-react';
import { Lesson, Unit } from '../types';
import { getAuthHeaders } from '../utils/apiAuth';

interface GroundedLessonTutorProps {
  unit: Unit;
  lesson: Lesson;
  gradeTitle?: string;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
  citation?: string;
  timestamp: string;
}

export const GroundedLessonTutor: React.FC<GroundedLessonTutorProps> = ({
  unit,
  lesson,
  gradeTitle = 'السادس الإعدادي'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: `مرحباً بك! أنا مساعدك التعليمي الخاص بدرس (${lesson.titleAr}). إجاباتي منضبطة حصراً وفق المنهج العراقي المعتمد لهذا الدرس والوحدة. ما الذي تود الاستفسار عنه؟`,
      citation: `${unit.titleAr} • ${lesson.titleAr}`,
      timestamp: new Date().toLocaleTimeString('ar-IQ', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim() || isLoading) return;

    const userText = inputQuery.trim();
    const timeNow = new Date().toLocaleTimeString('ar-IQ', { hour: '2-digit', minute: '2-digit' });

    setMessages(prev => [
      ...prev,
      { role: 'user', text: userText, timestamp: timeNow }
    ]);
    setInputQuery('');
    setIsLoading(true);

    try {
      // Build authentic textbook context from the lesson's verified data
      const contextBundle = `
عنوان الدرس: ${lesson.titleAr} (${lesson.titleEn})
الوحدة: ${unit.titleAr}
ملخص الدرس: ${lesson.summary}
الصيغة والقاعدة: ${lesson.grammarRuleFormula || 'قاعدة سياقية'}
محتوى الدرس وشرحه: ${lesson.detailedContent?.join('\n') || ''}
ملاحظات الأستاذ الذهبية: ${lesson.teacherNotes?.join('\n') || ''}
الفخاخ الشائعة: ${lesson.commonMistakes?.join('\n') || ''}
أمثلة الدرس:
${lesson.examples?.map(ex => `- ${ex.en} => ${ex.ar} (${ex.note || ''})`).join('\n')}
      `.trim();

      const authHeaders = await getAuthHeaders();
      const response = await fetch('/api/ai/grounded-qa', {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({
          question: userText,
          grade: gradeTitle,
          unitTitle: unit.titleAr,
          lessonTitle: `${lesson.titleAr} (${lesson.titleEn})`,
          textbookContext: contextBundle
        })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            text: data.answer || 'لم يتم استرجاع إجابة.',
            citation: data.citation || `${unit.titleAr} • الدرس ${lesson.lessonNumber}`,
            timestamp: new Date().toLocaleTimeString('ar-IQ', { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } else {
        throw new Error('فشل الرد من الخادم');
      }

    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          text: `وفقاً لمنهج ${gradeTitle}: راجع قاعدة الدرس (${lesson.grammarRuleFormula || lesson.summary}) وتأكد من تطبيق مفاتيح الحل بدقة.`,
          citation: 'كتاب النشاط والقواعد المعتمدة',
          timestamp: new Date().toLocaleTimeString('ar-IQ', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" dir="rtl">
      {/* Header Accordion Bar */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-5 flex items-center justify-between text-right cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-black text-slate-900 dark:text-white">
                المساعد الأكاديمي المعتمد للدرس
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                منضبط بمصدر المنهج حصراً
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              استفسر عن أي نقطة غامضة، فخ وزاري، أو صيغة اشتقاق متعلقة بـ ({lesson.titleAr})
            </p>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Expanded Interactive Chat Drawer */}
      {isOpen && (
        <div className="border-t border-slate-200 dark:border-slate-800 p-4 sm:p-6 space-y-4 bg-slate-50/50 dark:bg-slate-950/40">
          
          {/* Messages Feed */}
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1 pl-1">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${m.role === 'user' ? 'justify-start flex-row-reverse' : 'justify-start'}`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
                  m.role === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-emerald-600 text-white'
                }`}>
                  {m.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                <div className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-tl-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 shadow-2xs rounded-tr-xs'
                }`}>
                  <p className="whitespace-pre-wrap">{m.text}</p>
                  
                  {m.citation && m.role === 'assistant' && (
                    <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700 flex items-center gap-1.5 text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">
                      <Quote className="w-3 h-3" />
                      <span>المصدر: {m.citation}</span>
                    </div>
                  )}

                  <span className={`block text-[9px] mt-1 text-left ${m.role === 'user' ? 'text-indigo-200' : 'text-slate-400'}`}>
                    {m.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-slate-500 py-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-600" />
                <span>المساعد يسترجع نص القاعدة من المنهج المعتمد ويصيغ الشرح...</span>
              </div>
            )}
          </div>

          {/* Preset Inquiries */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-400 ml-1">أسئلة شائعة:</span>
            {[
              'ما هو الفخ الوزاري الأهم في هذا الدرس؟',
              'كيف أميز هذه القاعدة في الامتحان؟',
              'أعطني مثالاً تطبيقياً إضافياً مع الترجمة'
            ].map((preset, pIdx) => (
              <button
                key={pIdx}
                type="button"
                onClick={() => setInputQuery(preset)}
                className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-400 transition-colors cursor-pointer"
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Query Input */}
          <form onSubmit={handleSend} className="flex items-center gap-2">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="اكتب سؤالك حول هذا الدرس بالتحديد..."
              className="flex-1 text-xs sm:text-sm p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isLoading}
              className="p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white cursor-pointer shadow-md shadow-indigo-600/20 transition-all shrink-0"
            >
              <Send className="w-4 h-4 rtl:rotate-180" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
