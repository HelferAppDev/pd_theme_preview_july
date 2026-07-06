'use client';

import { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'help' | 'close' | 'repeat' | 'login';

interface ButtonBaseProps {
  variant: ButtonVariant;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  nav?: boolean;
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
  iconPosition = 'left',
  nav = false,
  onClick,
  disabled = false,
  className = '',
}: ButtonBaseProps) {
  const baseClass = `btn-therapy tracking-02 ${variantClasses[variant]} ${className} ${nav ? 'nav-button' : ''}`;
  const iconOnLeft = Boolean(icon) && iconPosition !== 'right';

  return (
    <button onClick={onClick} disabled={disabled} className={baseClass}>
      {iconOnLeft && icon}
      <span className="button-label-content">{children}</span>
      {!iconOnLeft && icon}
    </button>
  );
}
