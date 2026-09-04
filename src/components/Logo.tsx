export function Logo() {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <div
        style={{
          width: 38,
          height: 38,
          background: 'var(--sketch-terracotta-wash)',
          border: '1.8px solid var(--sketch-ink)',
          borderRadius: 'var(--radius-sketch-sm)',
          boxShadow: '2px 2.5px 0px var(--sketch-ink)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--sketch-terracotta)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 22, height: 22 }}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1.35rem',
            letterSpacing: '-0.02em',
            color: 'var(--sketch-ink)',
            lineHeight: 1,
          }}
        >
          Momi<span style={{ color: 'var(--sketch-terracotta)' }}>Q</span>
        </span>
        <span
          className="sketch-handwriting"
          style={{
            fontSize: '0.78rem',
            color: 'var(--sketch-graphite)',
            lineHeight: 1,
            marginTop: 2,
          }}
        >
          // maternal notebook
        </span>
      </div>
    </div>
  );
}
