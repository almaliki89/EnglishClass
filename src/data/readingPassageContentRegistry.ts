import { ReadingPassage } from '../types';
import { getBookPassageContent as getBaseBookPassageContent, getBookPassageContentIds as getBaseBookPassageContentIds } from './readingPassageContent';
import { ADDITIONAL_READING_PASSAGE_CONTENT } from './readingPassageContentAdditional';
import { FIFTH_READING_PASSAGE_CONTENT } from './readingPassageContentFifth';
import { FOURTH_READING_PASSAGE_CONTENT } from './readingPassageContentFourth';
import { THIRD_READING_PASSAGE_CONTENT } from './readingPassageContentThird';

export function getBookPassageContent(passageId: string): Partial<ReadingPassage> | undefined {
  return ADDITIONAL_READING_PASSAGE_CONTENT[passageId]
    || FIFTH_READING_PASSAGE_CONTENT[passageId]
    || FOURTH_READING_PASSAGE_CONTENT[passageId]
    || THIRD_READING_PASSAGE_CONTENT[passageId]
    || getBaseBookPassageContent(passageId);
}

export function getBookPassageContentIds(): string[] {
  return Array.from(new Set([
    ...getBaseBookPassageContentIds(),
    ...Object.keys(ADDITIONAL_READING_PASSAGE_CONTENT),
    ...Object.keys(FIFTH_READING_PASSAGE_CONTENT),
    ...Object.keys(FOURTH_READING_PASSAGE_CONTENT),
    ...Object.keys(THIRD_READING_PASSAGE_CONTENT),
  ]));
}
