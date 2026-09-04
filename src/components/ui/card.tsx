import * as React from 'react';

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', style, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`sketch-card ${className}`}
      style={{ padding: '20px', ...style }}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = 'Card';

export const CardHeader = ({ className = '', style, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`mb-4 ${className}`} style={{ borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 10, ...style }} {...props} />
);

export const CardTitle = ({ className = '', style, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`font-bold ${className}`} style={{ fontSize: '1.15rem', color: 'var(--sketch-ink)', margin: 0, ...style }} {...props} />
);

export const CardDescription = ({ className = '', style, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`sketch-handwriting ${className}`} style={{ fontSize: '0.88rem', color: 'var(--sketch-graphite)', margin: '4px 0 0', ...style }} {...props} />
);

export const CardContent = ({ className = '', style, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={className} style={{ ...style }} {...props} />
);

export const CardFooter = ({ className = '', style, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`mt-4 ${className}`} style={{ borderTop: '1.5px dashed var(--sketch-lead)', paddingTop: 12, ...style }} {...props} />
);
