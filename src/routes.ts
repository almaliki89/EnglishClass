import { SubjectId } from './types/subject';

export const VALID_SUBJECT_IDS: SubjectId[] = ['english'];

export function isValidSubjectId(id: string | undefined): id is SubjectId {
  return id === 'english';
}

export const APP_ROUTES = {
  home: '/',
  grades: '/grades',
  grade: (gradeId: string) => `/grade/${gradeId}`,
  gradeSubject: (gradeId: string, subjectId: string) => `/grade/${gradeId}/subject/${subjectId}`,
  unit: (gradeId: string, unitId: string | number) => `/grade/${gradeId}/unit/${unitId}`,
  gradeLesson: (gradeId: string, unitId: string | number, lessonId: string) =>
    `/grade/${gradeId}/unit/${unitId}/lesson/${lessonId}`,
  subjects: '/subjects',
  subject: (id: SubjectId | string) => `/subject/${id}`,
  lesson: (lessonId: string) => `/lesson/${lessonId}`,
  exam: '/exam',
  mock: '/mock',
  literature: '/literature',
  essays: '/essays',
  verbs: '/verbs',
  vocab: '/vocab',
  review: '/review',
  malzama: '/malzama',
  curriculum: '/curriculum',
} as const;
