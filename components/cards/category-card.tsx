'use client';

import { ReactNode } from 'react';

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function CategoryCard({
  icon,
  title,
  onClick,
  disabled = false,
  className = '',
}: CategoryCardProps) {
  // If a therapy-card class is provided, adapt inner markup class names so existing therapy styles apply.
  const usesTherapy = className.includes('therapy-card');
  const containerClass = `${className ? className : 'category-card'} ${disabled ? 'is-disabled' : ''}`.trim();
  const iconClass = usesTherapy ? 'card-icon' : 'icon-wrapper';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={containerClass}
    >
      <div className={iconClass}>{icon}</div>
      <div className="card-title">{title}</div>
    </button>
  );
}
