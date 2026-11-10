import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, Lightbulb, AlertTriangle, Sparkles, Bookmark, CheckCircle2 } from 'lucide-react';

// -------------------------------------------------------------
// Design Tokens
// -------------------------------------------------------------
export const BRUTAL_COLORS = {
  paper: '#F7F5EF',
  ink: '#202124',
  cobalt: '#405DE6',
  vermilion: '#F2A18E',
  acidYellow: '#F3E6A5',
  skyBlue: '#DCD8FA',
  softMint: '#D7E9DA',
  white: '#FFFFFF',
} as const;

// -------------------------------------------------------------
// 1. BrutalCard
// -------------------------------------------------------------
interface BrutalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'white' | 'paper' | 'yellow' | 'sky' | 'vermilion' | 'cobalt' | 'mint';
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
    white: 'bg-white text-[#202124]',
    paper: 'bg-[#F7F5EF] text-[#202124]',
    yellow: 'bg-[#F3E6A5] text-[#202124]',
    sky: 'bg-[#DCD8FA] text-[#202124]',
    vermilion: 'bg-[#F2A18E] text-[#202124]',
    cobalt: 'bg-[#405DE6] text-white',
    mint: 'bg-[#D7E9DA] text-[#202124]',
  }[variant];

  const borderClass = {
    '2': 'border-2 border-[#202124]',
    '3': 'border-2.5 border-[#202124]',
    '4': 'border-3 border-[#202124]',
  }[borderSize];

  const shadowClass = {
    none: '',
    sm: 'shadow-[2px_2px_0px_#202124]',
    md: 'shadow-[3.5px_3.5px_0px_#202124]',
    lg: 'shadow-[5px_5px_0px_#202124]',
  }[shadowSize];

  return (
    <div
      className={`${bgClasses} ${borderClass} ${shadowClass} transition-all duration-150 ${className}`}
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
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-[#405DE6] text-white hover:bg-[#324ec8]',
    secondary: 'bg-[#F2A18E] text-[#202124] hover:bg-[#e48e7b]',
    yellow: 'bg-[#F3E6A5] text-[#202124] hover:bg-[#e5d792]',
    sky: 'bg-[#DCD8FA] text-[#202124] hover:bg-[#cbaff8]',
    mint: 'bg-[#D7E9DA] text-[#202124] hover:bg-[#c2dec6]',
    white: 'bg-white text-[#202124] hover:bg-[#F7F5EF]',
    outline: 'bg-transparent text-[#202124] hover:bg-[#202124]/5',
  }[variant];

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs font-bold gap-1.5',
    md: 'px-4 py-2 text-sm font-bold gap-2',
    lg: 'px-6 py-3 text-base font-bold gap-2.5',
  }[size];

  return (
    <button
      className={`border-2 border-[#202124] shadow-[3px_3px_0px_#202124] active:shadow-[1px_1px_0px_#202124] active:translate-x-0.5 active:translate-y-0.5 transition-all inline-flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses} ${sizeClasses} ${className}`}
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
  variant?: 'yellow' | 'vermilion' | 'cobalt' | 'sky' | 'white' | 'paper' | 'mint';
  className?: string;
}

export const BrutalBadge: React.FC<BrutalBadgeProps> = ({
  children,
  variant = 'yellow',
  className = '',
}) => {
  const variantClasses = {
    yellow: 'bg-[#F3E6A5] text-[#202124]',
    vermilion: 'bg-[#F2A18E] text-[#202124]',
    cobalt: 'bg-[#405DE6] text-white',
    sky: 'bg-[#DCD8FA] text-[#202124]',
    mint: 'bg-[#D7E9DA] text-[#202124]',
    white: 'bg-white text-[#202124]',
    paper: 'bg-[#F7F5EF] text-[#202124]',
  }[variant];

  return (
    <span
      className={`px-2.5 py-0.5 border border-[#202124] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1 shadow-[1.5px_1.5px_0px_#202124] ${variantClasses} ${className}`}
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
    <div className={`flex flex-wrap items-center justify-between gap-4 border-b-3 border-[#202124] pb-4 ${className}`}>
      <div className="flex items-center gap-3">
        {icon && (
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#405DE6] text-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124] flex items-center justify-center font-black text-lg shrink-0">
            {icon}
          </div>
        )}
        <div>
          {badgeText && (
            <div className="mb-1">
              <BrutalBadge variant={badgeVariant}>{badgeText}</BrutalBadge>
            </div>
          )}
          <h2 className="text-xl sm:text-2xl font-black text-[#202124] tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm font-mono font-bold text-[#202124]/70 mt-0.5">
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
      bg: 'bg-[#F3E6A5]',
      text: 'text-[#202124]',
      border: 'border-3 border-[#202124]',
      shadow: 'shadow-[3px_3px_0px_#202124]',
      defaultTitle: 'ملاحظة الأستاذ مصطفى تركي الذهبية 💡',
      icon: <Lightbulb className="w-5 h-5 shrink-0 text-[#202124]" />,
    },
    ministerial_trap: {
      bg: 'bg-[#F2A18E]',
      text: 'text-white',
      border: 'border-3 border-[#202124]',
      shadow: 'shadow-[3px_3px_0px_#202124]',
      defaultTitle: 'فخ وزاري - احذر منه 🚨',
      icon: <AlertTriangle className="w-5 h-5 shrink-0 text-white" />,
    },
    rule_formula: {
      bg: 'bg-[#DCD8FA]',
      text: 'text-[#202124]',
      border: 'border-3 border-[#202124]',
      shadow: 'shadow-[3px_3px_0px_#202124]',
      defaultTitle: 'صيغة القاعدة الأساسية (Formula) ⚡',
      icon: <Sparkles className="w-5 h-5 shrink-0 text-[#405DE6]" />,
    },
    info: {
      bg: 'bg-white',
      text: 'text-[#202124]',
      border: 'border-3 border-[#202124]',
      shadow: 'shadow-[3px_3px_0px_#202124]',
      defaultTitle: 'معلومات عامة 📌',
      icon: <CheckCircle2 className="w-5 h-5 shrink-0 text-[#405DE6]" />,
    },
  }[type];

  return (
    <div
      className={`${config.bg} ${config.text} ${config.border} ${config.shadow} p-4 rounded-none space-y-2 ${className}`}
    >
      <div className="flex items-center gap-2 font-black text-sm sm:text-base border-b-2 border-[#202124]/20 pb-1.5">
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
      className={`bg-white border-3 border-[#202124] shadow-[4px_4px_0px_#202124] transition-all ${className}`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between gap-3 text-right bg-[#F7F5EF] hover:bg-[#EEECE6] border-b-2 border-[#202124] cursor-pointer transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-8 h-8 bg-[#405DE6] text-white border border-[#202124] flex items-center justify-center shrink-0 font-black">
              {icon}
            </div>
          )}
          <div>
            {badge && (
              <span className="px-2 py-0.5 bg-[#F3E6A5] text-[#202124] border border-[#202124] text-[10px] font-mono font-black uppercase tracking-wider mb-1 inline-block">
                {badge}
              </span>
            )}
            <h3 className="text-sm sm:text-base font-black text-[#202124]">{title}</h3>
          </div>
        </div>
        <div className="w-8 h-8 bg-white border border-[#202124] flex items-center justify-center shrink-0 text-[#202124]">
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
    <nav className={`flex items-center flex-wrap gap-1.5 text-xs sm:text-sm font-mono font-bold text-[#202124] ${className}`}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            {idx > 0 && <ChevronLeft className="w-4 h-4 text-[#F2A18E] shrink-0" />}
            {isLast ? (
              <span className="px-2 py-0.5 bg-[#F3E6A5] border border-[#202124] font-black text-[#202124]">
                {item.label}
              </span>
            ) : item.onClick ? (
              <button
                onClick={item.onClick}
                className="hover:underline hover:text-[#405DE6] cursor-pointer"
              >
                {item.label}
              </button>
            ) : item.href ? (
              <a href={item.href} className="hover:underline hover:text-[#405DE6]">
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
