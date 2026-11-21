import React, { useState } from 'react';

export const MENTOR_PORTRAIT_SRC = '/assets/aistudio/photo_2026-11-14_19-25-09_02692711.jpg';
export const MENTOR_PORTRAIT_ALT = 'الأستاذ مصطفى تركي — مشرف منصة ORBIT (أوربت) لتعلّم اللغة الإنكليزية';

export type MentorPortraitSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MentorPortraitAccent = 'yellow' | 'coral' | 'cobalt' | 'lavender' | 'mint';

interface MentorPortraitProps {
  size?: MentorPortraitSize;
  accent?: MentorPortraitAccent;
  withGeometricBackdrop?: boolean;
  stampText?: string;
  className?: string;
  priority?: boolean;
}

const SIZE_CLASSES: Record<MentorPortraitSize, string> = {
  xs: 'h-9 w-9 border-2 shadow-brutal-xs',
  sm: 'h-12 w-12 border-2 shadow-brutal-sm',
  md: 'h-16 w-16 border-2 shadow-brutal-callout',
  lg: 'h-24 w-24 sm:h-28 sm:w-28 border-3 shadow-brutal-action',
  xl: 'h-36 w-36 sm:h-44 sm:w-44 border-3 shadow-brutal-lg',
};

const BACKDROP_OFFSET: Record<MentorPortraitSize, string> = {
  xs: 'translate-x-0.5 translate-y-0.5',
  sm: 'translate-x-1 translate-y-1',
  md: 'translate-x-1.5 translate-y-1.5',
  lg: 'translate-x-2 translate-y-2',
  xl: 'translate-x-2.5 translate-y-2.5',
};

const ACCENT_BG: Record<MentorPortraitAccent, string> = {
  yellow: 'bg-yellow',
  coral: 'bg-coral',
  cobalt: 'bg-cobalt',
  lavender: 'bg-lavender',
  mint: 'bg-soft-mint',
};

const FALLBACK_TEXT_SIZE: Record<MentorPortraitSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-2xl',
  xl: 'text-4xl',
};

export const MentorPortrait: React.FC<MentorPortraitProps> = ({
  size = 'md',
  accent = 'yellow',
  withGeometricBackdrop = false,
  stampText,
  className = '',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative inline-flex shrink-0 items-center justify-center ${className}`}>
      {withGeometricBackdrop && (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 rounded-full border-2 border-ink ${ACCENT_BG[accent]} ${BACKDROP_OFFSET[size]}`}
        />
      )}

      <div
        className={`relative z-10 overflow-hidden rounded-full border-ink bg-ink ${SIZE_CLASSES[size]}`}
      >
        {!hasError ? (
          <img
            src={MENTOR_PORTRAIT_SRC}
            alt={MENTOR_PORTRAIT_ALT}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="h-full w-full rounded-full object-cover object-center scale-[1.07]"
          />
        ) : (
          <div
            aria-label={MENTOR_PORTRAIT_ALT}
            className={`flex h-full w-full items-center justify-center rounded-full bg-cobalt font-black text-surface ${FALLBACK_TEXT_SIZE[size]}`}
          >
            م ت
          </div>
        )}
      </div>

      {stampText && (
        <span className="absolute -bottom-2 -left-2 z-20 -rotate-3 whitespace-nowrap rounded-[4px] border-2 border-ink bg-yellow px-2.5 py-0.5 text-[11px] font-black text-ink shadow-brutal-sm">
          {stampText}
        </span>
      )}
    </div>
  );
};
