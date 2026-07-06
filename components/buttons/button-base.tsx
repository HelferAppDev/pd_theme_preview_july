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

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'btn-weiter',
  secondary: 'btn-überspringen',
  help: 'btn-hilfe',
  close: 'btn-schliessen',
  repeat: 'btn-wiederholen',
  login: 'btn-anmelden',
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
      className={`btn-therapy ${variantClasses[variant]} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}
