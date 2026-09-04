import * as React from 'react';

export const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className = '', style, ...props }, ref) => (
    <label
      ref={ref}
      className={className}
      style={{
        display: 'block',
        fontSize: '0.85rem',
        fontWeight: 700,
        fontFamily: 'var(--font-heading)',
        color: 'var(--sketch-ink)',
        marginBottom: 6,
        ...style,
      }}
      {...props}
    />
  )
);
Label.displayName = 'Label';
