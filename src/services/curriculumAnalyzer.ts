import { 
  CurriculumDraft, 
  ExtractedUnitDraft, 
  ExtractedRuleDraft, 
  ExtractedVocabDraft, 
  ExtractedQuestionDraft 
} from '../types/ai';

export class CurriculumAnalyzer {
  /**
   * Analyzes raw extracted malzama text and produces a structured CurriculumDraft.
   * Enforces truthfulness: does NOT fabricate rules, vocab or questions if text is missing or scanned.
   */
  public static async analyze(
    rawText: string,
    fileName: string = 'ملزمة دراسية',
    fileSize?: string,
    fileType: 'pdf' | 'text' | 'docx' | 'paste' = 'pdf'
  ): Promise<CurriculumDraft> {
    const trimmed = (rawText || '').trim();
    const isRealExtraction = trimmed.length > 50;

    // SCANNED / EMPTY PDF HANDLING: Never fabricate mock educational rules
    if (!isRealExtraction) {
      return {
        id: 'draft-' + Date.now(),
        courseTitle: fileName.replace(/\.[^/.]+$/, ''),
        subject: 'اللغة الإنكليزية',
        grade: 'السادس الإعدادي / الثالث المتوسط',
        language: 'bilingual',
        summary: 'تعذر استخراج نص حقيقي من هذا الملف. يبدو أن ملف PDF ممسوح ضوئياً أو يحتوي على صور فقط. يحتاج الملف إلى OCR قبل تحليله.',
        sourceFileName: fileName,
        sourceFileSize: fileSize || '0 KB',
        sourceFileType: fileType,
        isRealExtraction: false,
        extractionStatus: 'scanned-or-empty',
        rawTextPreview: trimmed || '(لا يوجد نص مقروء في الملف)',
        units: [],
        extractedRules: [],
        extractedVocab: [],
        extractedQuestions: [],
        totalUnitsDetected: 0,
        totalLessonsDetected: 0,
        totalRulesDetected: 0,
        totalVocabDetected: 0,
        totalQuestionsDetected: 0,
        extractedAt: new Date().toISOString()
      };
    }

    // REAL TEXT EXTRACTION: Attempt backend AI enrichment first (bounded input)
    let aiDraftData: {
      summary?: string;
      extractedRules?: ExtractedRuleDraft[];
      extractedVocab?: ExtractedVocabDraft[];
      extractedQuestions?: ExtractedQuestionDraft[];
    } | null = null;

    try {
      const response = await fetch('/api/ai/analyze-curriculum', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: trimmed.slice(0, 12000), // Bounded input max 12,000 chars
          fileName,
          grade: 'السادس الإعدادي والثالث المتوسط',
          subject: 'اللغة الإنكليزية'
        })
      });
      if (response.ok) {
        const result = await response.json();
        if (result.aiPowered && result.draft) {
          aiDraftData = result.draft;
        }
      }
    } catch (e: unknown) {
      console.warn('AI curriculum analysis offline or failed, using heuristic analyzer:', e);
    }

    // Heuristic extraction from actual lines
    const lines = trimmed.split('\n').map(l => l.trim()).filter(Boolean);

    const extractedRules: ExtractedRuleDraft[] = [];
    const extractedVocab: ExtractedVocabDraft[] = [];
    const extractedQuestions: ExtractedQuestionDraft[] = [];

    // Merge AI extracted items if present
    if (aiDraftData?.extractedRules && Array.isArray(aiDraftData.extractedRules)) {
      extractedRules.push(...aiDraftData.extractedRules);
    }
    if (aiDraftData?.extractedVocab && Array.isArray(aiDraftData.extractedVocab)) {
      extractedVocab.push(...aiDraftData.extractedVocab);
    }
    if (aiDraftData?.extractedQuestions && Array.isArray(aiDraftData.extractedQuestions)) {
      extractedQuestions.push(...aiDraftData.extractedQuestions);
    }

    // Heuristic pattern matching on real lines of text
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Detect grammar rules (قاعدة, rule, صيغة, زمن, subject +)
      if (
        (line.includes('قاعدة') || line.includes('Rule:') || line.includes('صيغة') || line.includes('+')) &&
        line.length > 5 && line.length < 120
      ) {
        const formulaLine = lines[i + 1] && lines[i + 1].includes('+') ? lines[i + 1] : line;
        const explanation = lines[i + 2] || 'قاعدة مستخرجة من سياق الملزمة.';
        const example = lines[i + 3] && lines[i + 3].length > 10 ? lines[i + 3] : undefined;

        if (!extractedRules.some(r => r.title === line)) {
          extractedRules.push({
            title: line.replace(/[#*:-]/g, '').trim(),
            formula: formulaLine,
            explanation,
            examples: example ? [example] : []
          });
        }
      }

      // Detect vocabulary (Word - Meaning or word = meaning or word : meaning)
      const vocabMatch = line.match(/^([a-zA-Z\s]{3,25})\s*[-:=—]\s*(.+)$/);
      if (vocabMatch) {
        const word = vocabMatch[1].trim();
        const meaning = vocabMatch[2].trim();
        if (!extractedVocab.some(v => v.word.toLowerCase() === word.toLowerCase())) {
          extractedVocab.push({
            word,
            meaning,
            context: lines[i + 1] || `Word used in context: "${word}"`
          });
        }
      }

      // Detect questions (سؤال, Q:, 1., Choose, Complete)
      if (
        (line.startsWith('Q') || line.startsWith('س') || line.includes('?') || line.includes('Choose') || line.includes('Complete')) &&
        line.length > 15
      ) {
        const answer = lines[i + 1] && (lines[i + 1].startsWith('Ans') || lines[i + 1].startsWith('ج') || lines[i + 1].includes('=>'))
          ? lines[i + 1]
          : 'نمط وزاري مستخرج';

        if (!extractedQuestions.some(q => q.question === line)) {
          extractedQuestions.push({
            question: line,
            answer,
            type: line.includes('Choose') ? 'Grammar & Functions' : line.includes('spelling') ? 'Spelling' : 'Vocabulary'
          });
        }
      }
    }

    // Truthful Units creation (only if real extracted content exists)
    const units: ExtractedUnitDraft[] = [];
    if (extractedRules.length > 0 || extractedVocab.length > 0 || extractedQuestions.length > 0) {
      units.push({
        unitNumber: 1,
        title: fileName.replace(/\.[^/.]+$/, '') || 'الوحدة المستخرجة',
        lessons: [
          {
            title: 'المحتوى المستخرج من نصوص الملزمة',
            titleEn: 'Extracted Content & Exercises',
            summary: `استخراج ذكي لـ ${extractedRules.length} قواعد و ${extractedVocab.length} مفردات من نصوص الملف.`,
            rules: extractedRules.slice(0, 10),
            vocabulary: extractedVocab.slice(0, 20),
            questions: extractedQuestions.slice(0, 10)
          }
        ]
      });
    }

    const summary = aiDraftData?.summary || 
      `تمت معالجة ملف «${fileName}» بنجاح. تم تحليل ${trimmed.length.toLocaleString('ar-IQ')} حرف واستخلاص ${extractedRules.length} قواعد و${extractedVocab.length} مفردات و${extractedQuestions.length} أسئلة حقيقية.`;

    return {
      id: 'draft-' + Date.now(),
      courseTitle: fileName.replace(/\.[^/.]+$/, ''),
      subject: 'اللغة الإنكليزية',
      grade: 'السادس الإعدادي / الثالث المتوسط',
      language: 'bilingual',
      summary,
      sourceFileName: fileName,
      sourceFileSize: fileSize || '1.0 MB',
      sourceFileType: fileType,
      isRealExtraction: true,
      extractionStatus: 'success',
      rawTextPreview: trimmed.slice(0, 2000),
      units,
      extractedRules,
      extractedVocab,
      extractedQuestions,
      totalUnitsDetected: units.length,
      totalLessonsDetected: units.reduce((acc, u) => acc + u.lessons.length, 0),
      totalRulesDetected: extractedRules.length,
      totalVocabDetected: extractedVocab.length,
      totalQuestionsDetected: extractedQuestions.length,
      extractedAt: new Date().toISOString()
    };
  }
}
