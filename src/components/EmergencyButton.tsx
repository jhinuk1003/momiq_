import { PhoneCall } from 'lucide-react';

export function EmergencyButton() {
  const handleEmergencyCall = () => {
    alert(
      'Maternal Clinical Emergency Protocol:\n\nNational Emergency: 112 / 108\nObstetric Triage Desk: 1800-MOMIQ-CARE\n\nIn a production deployment, this immediately connects to your hospital emergency contact.'
    );
  };

  return (
    <button
      onClick={handleEmergencyCall}
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        width: '54px',
        height: '54px',
        borderRadius: 'var(--radius-sketch-sm)',
        background: '#FAF7F0',
        color: 'var(--sketch-terracotta)',
        border: '2px solid var(--sketch-terracotta)',
        boxShadow: '3.5px 3.5px 0px var(--sketch-ink)',
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(-2px, -2px)';
        e.currentTarget.style.boxShadow = '5.5px 5.5px 0px var(--sketch-ink)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        e.currentTarget.style.boxShadow = '3.5px 3.5px 0px var(--sketch-ink)';
      }}
      aria-label="Emergency Maternal Hotline"
      title="Emergency Maternal Hotline"
    >
      <PhoneCall size={22} strokeWidth={2.4} />
    </button>
  );
}
