import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', style, ...props }, ref) => (
    <textarea
      ref={ref}
      className={`sketch-input ${className}`}
      style={{ minHeight: 90, resize: 'vertical', ...style }}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';
