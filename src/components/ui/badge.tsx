import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'sage' | 'terracotta';
}

export function Badge({ className = '', variant = 'default', style, children, ...props }: BadgeProps) {
  let badgeClass = 'sketch-badge';
  if (variant === 'destructive' || variant === 'terracotta') badgeClass = 'sketch-badge sketch-badge-terracotta';
  if (variant === 'sage') badgeClass = 'sketch-badge sketch-badge-sage';

  return (
    <div className={`${badgeClass} ${className}`} style={{ ...style }} {...props}>
      {children}
    </div>
  );
}
