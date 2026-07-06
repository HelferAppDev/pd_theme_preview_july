'use client';

import { MdArrowForward, MdSkipNext, MdClose, MdRefresh } from 'react-icons/md';
import { FiHelpCircle, FiLogIn } from 'react-icons/fi';
import { ButtonBase } from './button-base';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function ButtonWeiter({ onClick, disabled, className }: ButtonProps) {
  return (
    <ButtonBase
      variant="primary"
      icon={<MdArrowForward size={20} />}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      Weiter
    </ButtonBase>
  );
}

export function ButtonÜberspringen({ onClick, disabled, className }: ButtonProps) {
  return (
    <ButtonBase
      variant="secondary"
      icon={<MdSkipNext size={20} />}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      Überspringen
    </ButtonBase>
  );
}

export function ButtonHilfe({ onClick, disabled, className }: ButtonProps) {
  return (
    <ButtonBase
      variant="help"
      icon={<FiHelpCircle size={20} />}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      Hilfe
    </ButtonBase>
  );
}

export function ButtonSchließen({ onClick, disabled, className }: ButtonProps) {
  return (
    <ButtonBase
      variant="close"
      icon={<MdClose size={20} />}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      Schließen
    </ButtonBase>
  );
}

export function ButtonWiederholen({ onClick, disabled, className }: ButtonProps) {
  return (
    <ButtonBase
      variant="repeat"
      icon={<MdRefresh size={20} />}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      Wiederholen
    </ButtonBase>
  );
}

export function ButtonAnmelden({ onClick, disabled, className }: ButtonProps) {
  return (
    <ButtonBase
      variant="login"
      icon={<FiLogIn size={20} />}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      Anmelden
    </ButtonBase>
  );
}
