import * as React from 'react';

interface SelectContextType {
  value: string;
  onValueChange: (val: string) => void;
}

const SelectContext = React.createContext<SelectContextType | null>(null);

export function Select({
  value = '',
  onValueChange,
  children,
}: {
  value?: string;
  onValueChange?: (val: string) => void;
  children: React.ReactNode;
}) {
  const [val, setVal] = React.useState(value);

  const handleChange = (newVal: string) => {
    setVal(newVal);
    onValueChange?.(newVal);
  };

  return (
    <SelectContext.Provider value={{ value: value || val, onValueChange: handleChange }}>
      <div style={{ position: 'relative', width: '100%' }}>{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({
  className = '',
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`sketch-input ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function SelectValue({ placeholder = 'Select an option' }: { placeholder?: string }) {
  const ctx = React.useContext(SelectContext);
  return <span>{ctx?.value || placeholder}</span>;
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="sketch-card"
      style={{
        marginTop: 6,
        padding: '6px',
        background: 'var(--sketch-paper)',
        boxShadow: '3px 3px 0 var(--sketch-ink)',
      }}
    >
      {children}
    </div>
  );
}

export function SelectItem({
  value,
  children,
  className = '',
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(SelectContext);
  const isSelected = ctx?.value === value;

  return (
    <div
      onClick={() => ctx?.onValueChange(value)}
      className={className}
      style={{
        padding: '8px 12px',
        fontSize: '0.88rem',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sketch-sm)',
        background: isSelected ? 'var(--sketch-terracotta-wash)' : 'transparent',
        color: isSelected ? 'var(--sketch-terracotta)' : 'var(--sketch-ink)',
        fontWeight: isSelected ? 700 : 500,
      }}
    >
      {children}
    </div>
  );
}
