import React, { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';

interface PassageImageFigureProps {
  src?: string;
  alt: string;
  titleAr: string;
  titleEn?: string;
  priority?: boolean;
  className?: string;
  testId?: string;
}

export const PassageImageFigure: React.FC<PassageImageFigureProps> = ({
  src,
  alt,
  titleAr,
  titleEn,
  priority = false,
  className = '',
  testId,
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const showFallback = !src || hasError;

  return (
    <figure
      data-testid={testId}
      className={`relative aspect-video w-full overflow-hidden border-2 border-ink bg-paper select-none ${className}`}
    >
      {showFallback ? (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-paper via-yellow/20 to-blue-mist/40 p-4 text-center"
          role="img"
          aria-label={alt}
        >
          <div className="flex h-11 w-11 items-center justify-center border-2 border-ink bg-yellow text-ink shadow-brutal-xs">
            <BookOpen className="h-5 w-5" />
          </div>
          <p className="max-w-md text-xs sm:text-sm font-black text-ink line-clamp-2">{titleAr}</p>
          {titleEn && (
            <p dir="ltr" className="max-w-md text-[10px] font-mono font-bold text-cobalt line-clamp-1">
              {titleEn}
            </p>
          )}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      )}
    </figure>
  );
};
