import React from 'react';

export const MENTOR_CONTACT_LINKS = [
  {
    id: 'whatsapp',
    labelAr: 'واتساب',
    handle: '+964 770 565 8419',
    href: 'https://wa.me/9647705658419',
    ariaLabel: 'تواصل عبر واتساب مع الأستاذ مصطفى تركي +9647705658419',
    toneClass: 'bg-soft-mint hover:bg-mint-hover text-ink',
  },
  {
    id: 'facebook',
    labelAr: 'فيسبوك',
    handle: 'mustafa.almaliki',
    href: 'https://www.facebook.com/mustafa.almaliki',
    ariaLabel: 'صفحة الأستاذ مصطفى تركي على فيسبوك',
    toneClass: 'bg-cobalt hover:bg-cobalt-hover text-surface',
  },
  {
    id: 'instagram',
    labelAr: 'إنستغرام',
    handle: '@mustafa.turki.almaliki',
    href: 'https://www.instagram.com/mustafa.turki.almaliki/',
    ariaLabel: 'حساب الأستاذ مصطفى تركي على إنستغرام',
    toneClass: 'bg-coral hover:bg-coral-hover text-ink',
  },
] as const;

const SocialBrandIcon: React.FC<{ id: (typeof MENTOR_CONTACT_LINKS)[number]['id'] }> = ({ id }) => {
  if (id === 'whatsapp') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M9.5 9.2c.2-.4.4-.4.6-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.7l-.4.5c-.1.1-.1.3 0 .5.4.8 1.1 1.5 1.9 1.9.2.1.4.1.5 0l.5-.4c.2-.1.5-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .2 0 .4-.4.6-.5.3-1.4.5-2.6 0-1.6-.6-3.2-2.2-3.8-3.8-.5-1.2-.3-2.1 0-2.6z" />
      </svg>
    );
  }
  if (id === 'facebook') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
};

interface MentorSocialLinksProps {
  variant?: 'footer' | 'spotlight';
  className?: string;
}

export const MentorSocialLinks: React.FC<MentorSocialLinksProps> = ({
  variant = 'footer',
  className = '',
}) => {
  const isSpotlight = variant === 'spotlight';

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${isSpotlight ? 'justify-center' : ''} ${className}`}>
      {MENTOR_CONTACT_LINKS.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.ariaLabel}
          data-social-link={item.id}
          className={`inline-flex min-h-9 max-w-full items-center gap-2 rounded-[4px] border-2 px-3 py-1.5 text-xs font-black transition-all hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-cobalt motion-reduce:transition-none ${
            item.toneClass
          } ${
            isSpotlight
              ? 'border-surface/25 shadow-brutal-sm'
              : 'border-ink shadow-brutal-sm hover:shadow-brutal-callout'
          }`}
        >
          <SocialBrandIcon id={item.id} />
          <span className="whitespace-nowrap">{item.labelAr}</span>
          {item.id === 'whatsapp' && (
            <span dir="ltr" className="font-mono text-[11px] font-bold opacity-90">
              {item.handle}
            </span>
          )}
        </a>
      ))}
    </div>
  );
};
