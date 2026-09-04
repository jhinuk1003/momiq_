import * as React from 'react';

export function ScrollArea({
  children,
  className = '',
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        overflowY: 'auto',
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
