import { Subject } from '../types/subject';

export const SUBJECTS: Subject[] = [
  {
    id: 'english',
    titleAr: 'اللغة الإنكليزية',
    titleEn: 'English for Iraq',
    description: 'المنهج الكامل والشامل لمادة اللغة الإنكليزية للمراحل (الثالث المتوسط، الرابع، الخامس، والسادس الإعدادي): قواعد، مفردات، قطع كتاب، أدب، إنشاءات، وأسئلة امتحانات وزارية نموذجية.',
    category: 'language',
    icon: 'Languages',
    theme: {
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-700 dark:text-blue-300',
      badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
      gradient: 'from-blue-600 to-indigo-600',
    },
    unitsCount: 8,
    hasSimulations: false,
    isAvailable: true,
  },
];
