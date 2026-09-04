import * as React from 'react';
import { X } from 'lucide-react';

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const DialogContext = React.createContext<{ open: boolean; setOpen: (open: boolean) => void }>({
  open: false,
  setOpen: () => {},
});

export function Dialog({ open = false, onOpenChange, children }: DialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(open);

  React.useEffect(() => {
    setInternalOpen(open);
  }, [open]);

  const setOpen = (o: boolean) => {
    setInternalOpen(o);
    onOpenChange?.(o);
  };

  return <DialogContext.Provider value={{ open: internalOpen, setOpen }}>{children}</DialogContext.Provider>;
}

export function DialogTrigger({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  const { setOpen } = React.useContext(DialogContext);
  return (
    <span onClick={() => setOpen(true)} style={{ display: 'inline-block', cursor: 'pointer' }}>
      {children}
    </span>
  );
}

export function DialogContent({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { open, setOpen } = React.useContext(DialogContext);
  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(40, 37, 33, 0.45)',
        backdropFilter: 'blur(4px)',
        padding: '16px',
      }}
      onClick={() => setOpen(false)}
    >
      <div
        className={`sketch-card ${className}`}
        style={{
          width: '100%',
          maxWidth: 520,
          background: 'var(--sketch-paper)',
          padding: '28px 24px',
          boxShadow: '6px 7px 0px var(--sketch-ink)',
          position: 'relative',
          ...style,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="sketch-btn-ghost"
          style={{ position: 'absolute', top: 12, right: 12, padding: 6 }}
        >
          <X size={16} />
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ className = '', style, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mb-4 ${className}`} style={{ borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 12, ...style }}>
      {children}
    </div>
  );
}

export function DialogTitle({ className = '', style, children }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)', ...style }} className={className}>
      {children}
    </h3>
  );
}

export function DialogDescription({ className = '', style, children }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`sketch-handwriting ${className}`} style={{ fontSize: '0.9rem', color: 'var(--sketch-graphite)', margin: '4px 0 0', ...style }}>
      {children}
    </p>
  );
}

export function DialogFooter({ className = '', style, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mt-6 flex justify-end gap-3 ${className}`} style={{ borderTop: '1.5px dashed var(--sketch-lead)', paddingTop: 14, ...style }}>
      {children}
    </div>
  );
}
