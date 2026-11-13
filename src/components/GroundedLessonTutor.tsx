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
      text: `مرحباً بك! أنا مساعدك التعليمي الخاص بدرس (${lesson.titleAr}). إجاباتي مرتبطة بمحتوى هذا الدرس والوحدة. ما الذي تود الاستفسار عنه؟`,
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
      // Build textbook context from the lesson's structured data
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
          citation: 'كتاب النشاط وقواعد الدرس',
          timestamp: new Date().toLocaleTimeString('ar-IQ', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-md bg-surface border-2 border-ink shadow-brutal-md overflow-hidden text-ink" dir="rtl">
      {/* Header Accordion Bar */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-right cursor-pointer hover:bg-paper transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded bg-cobalt text-surface border-2 border-ink shadow-brutal-press flex items-center justify-center shrink-0">
            <Bot className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-black text-ink">
                المساعد التعليمي للدرس
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-soft-mint text-ink border border-ink">
                مرتبط بمحتوى الدرس
              </span>
            </div>
            <p className="text-[11px] font-medium text-muted-gray mt-0.5">
              استفسر عن أي نقطة أو صيغة أو تمرين متعلق بدرس ({lesson.titleAr})
            </p>
          </div>
        </div>

        <div className="p-2 rounded bg-paper border border-ink text-ink shrink-0">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Expanded Interactive Chat Drawer */}
      {isOpen && (
        <div className="border-t-2 border-ink p-4 sm:p-6 space-y-4 bg-paper">
          
          {/* Messages Feed */}
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1 pl-1">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${m.role === 'user' ? 'justify-start flex-row-reverse' : 'justify-start'}`}
              >
                <div className={`w-7 h-7 rounded-sm border border-ink flex items-center justify-center shrink-0 text-xs ${
                  m.role === 'user'
                    ? 'bg-cobalt text-surface'
                    : 'bg-yellow text-ink'
                }`}>
                  {m.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                <div className={`max-w-[85%] rounded-md p-3.5 text-xs sm:text-sm leading-relaxed border-2 border-ink shadow-brutal-press min-w-0 ${
                  m.role === 'user'
                    ? 'bg-cobalt text-surface'
                    : 'bg-surface text-ink'
                }`}>
                  <p className="whitespace-pre-wrap break-words">{m.text}</p>
                  
                  {m.citation && m.role === 'assistant' && (
                    <div className="mt-2 pt-2 border-t border-ink/15 flex items-center gap-1.5 text-[10px] text-semantic-success font-bold">
                      <Quote className="w-3 h-3 shrink-0" />
                      <span>المصدر: {m.citation}</span>
                    </div>
                  )}

                  <span className={`block text-[9px] font-mono mt-1 text-left ${m.role === 'user' ? 'text-surface/80' : 'text-muted-gray'}`}>
                    {m.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs font-bold text-muted-gray py-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-cobalt" />
                <span>المساعد يسترجع نص القاعدة من محتوى الدرس ويصيغ الشرح...</span>
              </div>
            )}
          </div>

          {/* Preset Inquiries */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] font-bold text-muted-gray ml-1">أسئلة شائعة:</span>
            {[
              'ما هي النقطة الأهم في هذا الدرس؟',
              'كيف أميز هذه القاعدة في الامتحان؟',
              'أعطني مثالاً تطبيقياً إضافياً مع الترجمة'
            ].map((preset, pIdx) => (
              <button
                key={pIdx}
                type="button"
                onClick={() => setInputQuery(preset)}
                className="text-[10px] font-bold px-2.5 py-1 rounded-sm bg-surface border border-ink text-ink hover:bg-yellow transition-colors cursor-pointer"
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
              className="flex-1 min-w-0 text-xs sm:text-sm p-3 rounded bg-surface border-2 border-ink text-ink placeholder-muted-gray focus:outline-none focus:shadow-brutal-cobalt-sm"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isLoading}
              aria-label="إرسال السؤال"
              className="p-3 rounded bg-cobalt hover:bg-cobalt-hover disabled:opacity-50 text-surface border-2 border-ink shadow-brutal-sm cursor-pointer transition-all shrink-0"
            >
              <Send className="w-4 h-4 rtl:rotate-180" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
