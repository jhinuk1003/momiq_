import { MessageCircle } from 'lucide-react';

interface FloatingAIButtonProps {
  onClick: () => void;
}

export function FloatingAIButton({ onClick }: FloatingAIButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '58px',
        height: '58px',
        borderRadius: 'var(--radius-sketch-sm)',
        background: 'var(--sketch-terracotta)',
        color: '#ffffff',
        border: '2px solid var(--sketch-ink)',
        boxShadow: '4px 4px 0px var(--sketch-ink)',
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(-2px, -2px)';
        e.currentTarget.style.boxShadow = '6px 6px 0px var(--sketch-ink)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        e.currentTarget.style.boxShadow = '4px 4px 0px var(--sketch-ink)';
      }}
      aria-label="Open AI Doctor Consultation"
      title="Consult AI OB/GYN Assistant"
    >
      <MessageCircle size={26} strokeWidth={2.2} />
    </button>
  );
}
