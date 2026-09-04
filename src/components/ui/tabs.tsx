import * as React from 'react';

interface TabsContextValue {
  value: string;
  onValueChange: (val: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

export function Tabs({
  value,
  defaultValue = '',
  onValueChange,
  children,
  className = '',
  style,
}: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (val: string) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [currentVal, setCurrentVal] = React.useState(value || defaultValue);

  const handleVal = (val: string) => {
    setCurrentVal(val);
    onValueChange?.(val);
  };

  return (
    <TabsContext.Provider value={{ value: value ?? currentVal, onValueChange: handleVal }}>
      <div className={className} style={{ ...style }}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        gap: 6,
        padding: 4,
        background: 'var(--sketch-paper-tint)',
        border: '1.5px solid var(--sketch-ink)',
        borderRadius: 'var(--radius-sketch-sm)',
        marginBottom: 16,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  className = '',
  style,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ctx = React.useContext(TabsContext);
  const isActive = ctx?.value === value;

  return (
    <button
      type="button"
      onClick={() => ctx?.onValueChange(value)}
      className={className}
      style={{
        padding: '6px 14px',
        fontSize: '0.85rem',
        fontWeight: 700,
        fontFamily: 'var(--font-heading)',
        border: isActive ? '1.5px solid var(--sketch-ink)' : '1.5px solid transparent',
        borderRadius: 'var(--radius-sketch-sm)',
        background: isActive ? 'var(--sketch-paper)' : 'transparent',
        color: isActive ? 'var(--sketch-ink)' : 'var(--sketch-graphite)',
        boxShadow: isActive ? '1.5px 1.5px 0 var(--sketch-ink)' : 'none',
        cursor: 'pointer',
        transition: 'all 0.1s',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  children,
  className = '',
  style,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ctx = React.useContext(TabsContext);
  if (ctx?.value !== value) return null;

  return (
    <div className={className} style={{ ...style }}>
      {children}
    </div>
  );
}
