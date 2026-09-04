import * as React from 'react';

interface RadioContextType {
  value: string;
  onValueChange: (val: string) => void;
}

const RadioContext = React.createContext<RadioContextType | null>(null);

export function RadioGroup({
  value = '',
  onValueChange,
  children,
  className = '',
  style,
}: {
  value?: string;
  onValueChange?: (val: string) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [val, setVal] = React.useState(value);

  const handleChange = (v: string) => {
    setVal(v);
    onValueChange?.(v);
  };

  return (
    <RadioContext.Provider value={{ value: value || val, onValueChange: handleChange }}>
      <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
        {children}
      </div>
    </RadioContext.Provider>
  );
}

export function RadioGroupItem({
  value,
  id,
  className = '',
}: {
  value: string;
  id?: string;
  className?: string;
}) {
  const ctx = React.useContext(RadioContext);
  const isSelected = ctx?.value === value;

  return (
    <button
      type="button"
      id={id}
      onClick={() => ctx?.onValueChange(value)}
      className={className}
      style={{
        width: 18,
        height: 18,
        borderRadius: 'var(--radius-sketch-sm)',
        border: '1.8px solid var(--sketch-ink)',
        background: isSelected ? 'var(--sketch-terracotta)' : 'var(--sketch-paper)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        padding: 0,
      }}
    >
      {isSelected && <div style={{ width: 6, height: 6, background: '#fff', borderRadius: '50%' }} />}
    </button>
  );
}
