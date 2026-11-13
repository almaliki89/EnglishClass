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
      bg: 'bg-blue-mist',
      border: 'border-ink',
      text: 'text-cobalt',
      badge: 'bg-yellow text-ink',
      gradient: 'bg-cobalt text-surface',
    },
    unitsCount: 8,
    hasSimulations: false,
    isAvailable: true,
  },
];
