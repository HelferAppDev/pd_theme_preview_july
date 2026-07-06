'use client';

import { ReactNode } from 'react';

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function CategoryCard({
  icon,
  title,
  onClick,
  disabled = false,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`category-card ${disabled ? 'is-disabled' : ''}`}
    >
      <div className="icon-wrapper">{icon}</div>
      <div className="card-title">{title}</div>
    </button>
  );
}
