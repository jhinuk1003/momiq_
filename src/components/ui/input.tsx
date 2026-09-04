import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', style, ...props }, ref) => (
    <input
      ref={ref}
      className={`sketch-input ${className}`}
      style={{ ...style }}
      {...props}
    />
  )
);
Input.displayName = 'Input';
