import { AIProvider, CurriculumDraft } from '../types/ai';
import { Quiz } from '../types/curriculum';
import { CurriculumAnalyzer } from './curriculumAnalyzer';

export class GeminiAIProvider implements AIProvider {
  /**
   * Analyzes curriculum text using server-side Gemini endpoint with truthful heuristic fallback
   */
  async analyzeCurriculum(input: string, fileName?: string): Promise<CurriculumDraft> {
    return CurriculumAnalyzer.analyze(input, fileName || 'ملزمة دراسية');
  }

  /**
   * Generates a pedagogical explanation for any lesson topic or concept
   */
  async explain(concept: string, context?: string): Promise<string> {
    try {
      const response = await fetch('/api/ai/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ concept, context })
      });
      if (!response.ok) throw new Error('AI explain network error');
      const data = await response.json();
      return data.explanation || 'تعذر الاتصال بالمساعد الذكي حالياً.';
    } catch (e: unknown) {
      console.warn('AI explain unavailable:', e);
      return 'تعذر الاتصال بالمساعد الذكي حالياً. يرجى المحاولة لاحقاً أو مراجعة ملخص الدرس.';
    }
  }

  /**
   * Summarizes long lesson texts or literature pieces
   */
  async summarize(text: string): Promise<string> {
    try {
      const response = await fetch('/api/ai/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      if (!response.ok) throw new Error('AI summarize network error');
      const data = await response.json();
      return data.summary || (text.slice(0, 200) + '...');
    } catch (e: unknown) {
      console.warn('AI summarize unavailable:', e);
      return text.slice(0, 200) + '...';
    }
  }

  /**
   * Generates interactive quiz questions based on lesson context.
   * Truthful failure: returns empty array if AI fails, no fabricated mock quizzes.
   */
  async generateQuiz(context: string, questionCount: number = 5): Promise<Quiz> {
    try {
      const response = await fetch('/api/ai/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context, questionCount })
      });
      if (!response.ok) {
        throw new Error('تعذر توليد الاختبار حالياً. حاول مرة أخرى لاحقاً.');
      }
      const data = await response.json();
      if (data.quiz && Array.isArray(data.quiz.questions) && data.quiz.questions.length > 0) {
        return data.quiz;
      }
      throw new Error('لم يتم استرجاع أسئلة صالحة من المعالج الذكي.');
    } catch (e: unknown) {
      console.warn('AI quiz generation failed:', e);
      throw new Error('تعذر توليد الاختبار حالياً. حاول مرة أخرى لاحقاً.');
    }
  }
}

export const aiProvider: AIProvider = new GeminiAIProvider();
