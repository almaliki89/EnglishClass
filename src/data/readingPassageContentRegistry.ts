import { ReadingPassage } from '../types';
import { getBookPassageContent as getBaseBookPassageContent, getBookPassageContentIds as getBaseBookPassageContentIds } from './readingPassageContent';
import { ADDITIONAL_READING_PASSAGE_CONTENT } from './readingPassageContentAdditional';

export function getBookPassageContent(passageId: string): Partial<ReadingPassage> | undefined {
  return ADDITIONAL_READING_PASSAGE_CONTENT[passageId]
    || getBaseBookPassageContent(passageId);
}

export function getBookPassageContentIds(): string[] {
  return Array.from(new Set([
    ...getBaseBookPassageContentIds(),
    ...Object.keys(ADDITIONAL_READING_PASSAGE_CONTENT),
  ]));
}
