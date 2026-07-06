'use client';

import { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'help' | 'close' | 'repeat' | 'login';

interface ButtonBaseProps {
  variant: ButtonVariant;
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--color-primary-yellow)] text-[var(--color-primary-yellow-text)] hover:opacity-90',
  secondary: 'bg-[var(--color-secondary-blue)] text-[var(--color-secondary-blue-text)] hover:opacity-90',
  help: 'bg-[var(--color-accent-violet)] text-[var(--color-accent-violet-text)] hover:opacity-90',
  close: 'bg-[var(--color-error-orange)] text-[var(--color-error-orange-text)] hover:opacity-90',
  repeat: 'bg-[var(--color-secondary-green)] text-[var(--color-secondary-green-text)] hover:opacity-90',
  login: 'bg-[var(--color-secondary-blue)] text-[var(--color-secondary-blue-text)] hover:opacity-90',
};

export function ButtonBase({
  variant,
  children,
  icon,
  onClick,
  disabled = false,
  className = '',
}: ButtonBaseProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center gap-2
        px-6 py-3
        rounded-[var(--radius-button)]
        font-medium text-base
        transition-[var(--transition-smooth)]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {icon}
      {children}
    </button>
  );
}
