export type SubjectId = 'english';

export type SubjectCategory = 'language';

export interface Subject {
  id: SubjectId;
  titleAr: string;
  titleEn: string;
  description: string;
  category: SubjectCategory;
  icon: string;
  theme: {
    bg: string;
    border: string;
    text: string;
    badge: string;
    gradient: string;
  };
  unitsCount: number;
  hasSimulations: boolean;
  isAvailable: boolean;
}
