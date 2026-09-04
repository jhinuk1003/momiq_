import * as React from 'react';

export function Avatar({ className = '', style, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={className}
      style={{
        width: 38,
        height: 38,
        borderRadius: 'var(--radius-sketch-sm)',
        border: '1.5px solid var(--sketch-ink)',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--sketch-paper-tint)',
        flexShrink: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt = '' }: { src?: string; alt?: string }) {
  if (!src) return null;
  return <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
}

export function AvatarFallback({ children }: { children?: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: '0.85rem',
        color: 'var(--sketch-ink)',
      }}
    >
      {children}
    </span>
  );
}
