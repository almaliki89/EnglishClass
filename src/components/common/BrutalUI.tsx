import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, Lightbulb, AlertTriangle, Sparkles, CheckCircle2 } from 'lucide-react';

// -------------------------------------------------------------
// Official Design System Tokens
// -------------------------------------------------------------
export const BRUTAL_COLORS = {
  paper: 'var(--token-paper)',
  surface: 'var(--token-surface)',
  white: 'var(--token-surface)',
  ink: 'var(--token-ink)',
  cobalt: 'var(--token-cobalt)',
  yellow: 'var(--token-yellow)',
  coral: 'var(--token-coral)',
  lavender: 'var(--token-lavender)',
  blueMist: 'var(--token-blue-mist)',
  softMint: 'var(--token-mint)',
  mint: 'var(--token-mint)',
  muted: 'var(--token-muted)',
  softBorder: 'var(--token-border)',
  success: 'var(--token-success)',
  error: 'var(--token-error)',
} as const;

// -------------------------------------------------------------
// 1. BrutalCard
// -------------------------------------------------------------
interface BrutalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'white' | 'paper' | 'yellow' | 'sky' | 'vermilion' | 'cobalt' | 'mint' | 'blueMist';
  borderSize?: '2' | '3' | '4';
  shadowSize?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrutalCard: React.FC<BrutalCardProps> = ({
  children,
  variant = 'white',
  borderSize = '2',
  shadowSize = 'md',
  className = '',
  ...props
}) => {
  const bgClasses = {
    white: 'bg-surface text-ink',
    paper: 'bg-paper text-ink',
    yellow: 'bg-yellow text-ink',
    sky: 'bg-lavender text-ink',
    vermilion: 'bg-coral text-ink',
    cobalt: 'bg-cobalt text-surface',
    mint: 'bg-soft-mint text-ink',
    blueMist: 'bg-blue-mist text-ink',
  }[variant];

  const borderClass = {
    '2': 'border-2 border-ink',
    '3': 'border-3 border-ink',
    '4': 'border-4 border-ink',
  }[borderSize];

  const shadowClass = {
    none: '',
    sm: 'shadow-brutal-sm',
    md: 'shadow-brutal-md',
    lg: 'shadow-brutal-lg',
  }[shadowSize];

  return (
    <div
      className={`${bgClasses} ${borderClass} ${shadowClass} rounded-[6px] transition-all duration-150 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// -------------------------------------------------------------
// 2. BrutalButton
// -------------------------------------------------------------
interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'yellow' | 'sky' | 'white' | 'outline' | 'mint';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrutalButton: React.FC<BrutalButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-cobalt text-surface hover:bg-cobalt-hover',
    secondary: 'bg-coral text-ink hover:bg-coral-hover',
    yellow: 'bg-yellow text-ink hover:bg-yellow-hover',
    sky: 'bg-lavender text-ink hover:bg-lavender-hover',
    mint: 'bg-soft-mint text-ink hover:bg-mint-hover',
    white: 'bg-surface text-ink hover:bg-paper',
    outline: 'bg-transparent text-ink hover:bg-ink/5',
  }[variant];

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs font-bold gap-1.5 min-h-[36px]',
    md: 'px-4 py-2 text-sm font-bold gap-2 min-h-[40px]',
    lg: 'px-6 py-3 text-base font-bold gap-2.5 min-h-[44px]',
  }[size];

  return (
    <button
      type={type}
      className={`border-2 border-ink rounded-[4px] shadow-brutal-btn active:shadow-brutal-press active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-3 focus-visible:outline-cobalt focus-visible:outline-offset-2 transition-all inline-flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// -------------------------------------------------------------
// 3. BrutalBadge
// -------------------------------------------------------------
interface BrutalBadgeProps {
  children: React.ReactNode;
  variant?: 'yellow' | 'vermilion' | 'cobalt' | 'sky' | 'white' | 'paper' | 'mint' | 'blueMist';
  className?: string;
}

export const BrutalBadge: React.FC<BrutalBadgeProps> = ({
  children,
  variant = 'yellow',
  className = '',
}) => {
  const variantClasses = {
    yellow: 'bg-yellow text-ink',
    vermilion: 'bg-coral text-ink',
    cobalt: 'bg-cobalt text-surface',
    sky: 'bg-lavender text-ink',
    mint: 'bg-soft-mint text-ink',
    white: 'bg-surface text-ink',
    paper: 'bg-paper text-ink',
    blueMist: 'bg-blue-mist text-ink',
  }[variant];

  return (
    <span
      className={`px-2.5 py-0.5 border border-ink rounded-[4px] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1 shadow-brutal-xs ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};

// -------------------------------------------------------------
// 4. SectionHeader
// -------------------------------------------------------------
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badgeText?: string;
  badgeVariant?: 'yellow' | 'vermilion' | 'cobalt' | 'sky';
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  badgeText,
  badgeVariant = 'yellow',
  icon,
  action,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap items-center justify-between gap-4 border-b-2 border-ink pb-4 ${className}`}>
      <div className="flex items-center gap-3">
        {icon && (
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-cobalt text-surface border-2 border-ink shadow-brutal-sm rounded-[4px] flex items-center justify-center font-black text-lg shrink-0">
            {icon}
          </div>
        )}
        <div>
          {badgeText && (
            <div className="mb-1">
              <BrutalBadge variant={badgeVariant}>{badgeText}</BrutalBadge>
            </div>
          )}
          <h2 className="text-xl sm:text-2xl font-black text-ink tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm font-mono font-bold text-muted-gray mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};

// -------------------------------------------------------------
// 5. CalloutBox
// -------------------------------------------------------------
interface CalloutBoxProps {
  type: 'golden_note' | 'ministerial_trap' | 'rule_formula' | 'info';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const CalloutBox: React.FC<CalloutBoxProps> = ({
  type,
  title,
  children,
  className = '',
}) => {
  const config = {
    golden_note: {
      bg: 'bg-yellow',
      text: 'text-ink',
      border: 'border-2 border-ink',
      shadow: 'shadow-brutal-callout',
      defaultTitle: 'ملاحظة الأستاذ مصطفى تركي الذهبية 💡',
      icon: <Lightbulb className="w-5 h-5 shrink-0 text-ink" />,
    },
    ministerial_trap: {
      bg: 'bg-coral',
      text: 'text-ink',
      border: 'border-2 border-ink',
      shadow: 'shadow-brutal-callout',
      defaultTitle: 'فخ وزاري - احذر منه 🚨',
      icon: <AlertTriangle className="w-5 h-5 shrink-0 text-ink" />,
    },
    rule_formula: {
      bg: 'bg-lavender',
      text: 'text-ink',
      border: 'border-2 border-ink',
      shadow: 'shadow-brutal-callout',
      defaultTitle: 'صيغة القاعدة الأساسية (Formula) ⚡',
      icon: <Sparkles className="w-5 h-5 shrink-0 text-cobalt" />,
    },
    info: {
      bg: 'bg-surface',
      text: 'text-ink',
      border: 'border-2 border-ink',
      shadow: 'shadow-brutal-callout',
      defaultTitle: 'معلومات عامة 📌',
      icon: <CheckCircle2 className="w-5 h-5 shrink-0 text-cobalt" />,
    },
  }[type];

  return (
    <div
      className={`${config.bg} ${config.text} ${config.border} ${config.shadow} p-4 rounded-[6px] space-y-2 ${className}`}
    >
      <div className="flex items-center gap-2 font-black text-sm sm:text-base border-b-2 border-ink/20 pb-1.5">
        {config.icon}
        <span>{title || config.defaultTitle}</span>
      </div>
      <div className="text-xs sm:text-sm font-bold leading-relaxed">{children}</div>
    </div>
  );
};

// -------------------------------------------------------------
// 6. AccordionBlock
// -------------------------------------------------------------
interface AccordionBlockProps {
  title: string;
  badge?: string;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const AccordionBlock: React.FC<AccordionBlockProps> = ({
  title,
  badge,
  icon,
  defaultOpen = true,
  children,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`bg-surface border-2 border-ink shadow-brutal-md rounded-[6px] transition-all overflow-hidden ${className}`}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between gap-3 text-right bg-paper hover:bg-blue-mist border-b-2 border-ink cursor-pointer transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-8 h-8 bg-cobalt text-surface border border-ink rounded-[4px] flex items-center justify-center shrink-0 font-black">
              {icon}
            </div>
          )}
          <div>
            {badge && (
              <span className="px-2 py-0.5 bg-yellow text-ink border border-ink rounded-[4px] text-[10px] font-mono font-black uppercase tracking-wider mb-1 inline-block">
                {badge}
              </span>
            )}
            <h3 className="text-sm sm:text-base font-black text-ink">{title}</h3>
          </div>
        </div>
        <div className="w-8 h-8 bg-surface border border-ink rounded-[4px] flex items-center justify-center shrink-0 text-ink">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {isOpen && <div className="p-4 sm:p-5 space-y-4">{children}</div>}
    </div>
  );
};

// -------------------------------------------------------------
// 7. BreadcrumbsNav
// -------------------------------------------------------------
interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbsNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const BreadcrumbsNav: React.FC<BreadcrumbsNavProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="مسار التنقل" className={`flex items-center flex-wrap gap-1.5 text-xs sm:text-sm font-mono font-bold text-ink ${className}`}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            {idx > 0 && <ChevronLeft className="w-4 h-4 text-muted-gray shrink-0" />}
            {isLast ? (
              <span className="px-2 py-0.5 bg-yellow border border-ink rounded-[4px] font-black text-ink">
                {item.label}
              </span>
            ) : item.onClick ? (
              <button
                type="button"
                onClick={item.onClick}
                className="hover:underline hover:text-cobalt cursor-pointer py-1 px-1 rounded-[4px]"
              >
                {item.label}
              </button>
            ) : item.href ? (
              <a href={item.href} className="hover:underline hover:text-cobalt py-1 px-1 rounded-[4px]">
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
