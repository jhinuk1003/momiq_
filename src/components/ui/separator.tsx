import * as React from 'react';

export function Separator({ className = '', style }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={className}
      style={{
        border: 'none',
        borderBottom: '1.5px dashed var(--sketch-lead-light)',
        margin: '16px 0',
        ...style,
      }}
    />
  );
}
