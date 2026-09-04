import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'default', style, children, ...props }, ref) => {
    let btnClass = 'sketch-btn-primary';
    if (variant === 'secondary') btnClass = 'sketch-btn-secondary';
    if (variant === 'ghost') btnClass = 'sketch-btn-ghost';
    if (variant === 'outline') btnClass = 'sketch-btn-secondary';
    if (variant === 'danger') btnClass = 'sketch-btn-primary';

    const sizeStyles: React.CSSProperties =
      size === 'sm'
        ? { padding: '6px 12px', fontSize: '0.8rem' }
        : size === 'lg'
        ? { padding: '14px 28px', fontSize: '1rem' }
        : size === 'icon'
        ? { padding: '8px', width: 38, height: 38, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }
        : {};

    const dangerStyle: React.CSSProperties =
      variant === 'danger' ? { background: 'var(--sketch-terracotta)', borderColor: 'var(--sketch-ink)' } : {};

    return (
      <button
        ref={ref}
        className={`${btnClass} ${className}`}
        style={{ ...sizeStyles, ...dangerStyle, ...style }}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
