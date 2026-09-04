import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Is MomiQ free to use for expecting mothers?',
    a: 'MomiQ offers a robust free tier containing the complete gestational tracker, weekly anatomical developmental notes, clinic calendar, and community circles. The Clinical Care Pass (₹799/month) activates 24/7 AI OB/GYN triage, Spotify acoustic soundscapes, and advanced biometric analytics.',
  },
  {
    q: 'How is maternal & clinical data protected?',
    a: 'All biometric vitals, doctor notes, and ultrasound scans are secured with end-to-end encryption complying with HIPAA and India\'s Digital Personal Data Protection (DPDP) Act. We never monetize or distribute maternal records to third parties.',
  },
  {
    q: 'Can MomiQ be used postpartum once the baby arrives?',
    a: 'Absolutely. MomiQ smoothly transitions into your postpartum notebook: tracking newborn feeding intervals, pediatric vaccinations, sleep routines, and maternal mental recovery.',
  },
  {
    q: 'How does the AI OB/GYN Companion function?',
    a: 'Our AI is trained on vetted obstetric and pediatric guidelines to provide immediate reassurance, symptom explanations, and triage. Note: It is an assistive educational companion and should always be paired with your licensed obstetrician for emergencies.',
  },
  {
    q: 'Does the personalized music integrate with Spotify?',
    a: 'Yes! Subscribers enjoy direct Spotify-powered soundscapes, womb heartbeat rhythms, and gentle acoustic lullabies designed to reduce maternal cortisol and soothe infants.',
  },
  {
    q: 'What distinguishes MomiQ from standard pregnancy apps?',
    a: 'MomiQ is crafted with an artist\'s eye and an engineer\'s precision: blending hand-drawn conceptual anatomical sketches with real-time vitals tracking, empathetic AI triage, and authentic mother support circles.',
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        background: 'var(--sketch-bg)',
        padding: '80px 0',
        borderTop: '2px solid var(--sketch-ink)',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div style={{ marginBottom: 44, maxWidth: 640 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span className="sketch-badge sketch-badge-terracotta">
              <HelpCircle size={14} /> Spec 09 // Inquiries & Clinical Clarifications
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: 10,
            }}
          >
            Questions &{' '}
            <span style={{ color: 'var(--sketch-terracotta)' }}>Clinical Clarifications</span>
          </h2>
          <p
            className="sketch-note"
            style={{
              fontSize: '1.15rem',
              color: 'var(--sketch-graphite)',
            }}
          >
            "Clear answers regarding clinical privacy, AI capabilities, and subscription details."
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ maxWidth: 800, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="sketch-card"
                style={{
                  background: isOpen ? 'var(--sketch-paper)' : 'var(--sketch-paper-tint)',
                  overflow: 'hidden',
                  padding: 0,
                  boxShadow: isOpen ? '4px 4px 0 var(--sketch-ink)' : '2px 2px 0 var(--sketch-ink)',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 14,
                    padding: '18px 22px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: 'var(--sketch-ink)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.02rem', letterSpacing: '-0.01em' }}>
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 'var(--radius-sketch-sm)',
                      background: isOpen ? 'var(--sketch-terracotta-wash)' : 'var(--sketch-paper)',
                      border: '1.5px solid var(--sketch-ink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? <ChevronUp size={16} color="var(--sketch-terracotta)" /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 22px 20px',
                      borderTop: '1.5px dashed var(--sketch-lead-light)',
                      marginTop: 2,
                      paddingTop: 16,
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.92rem',
                        color: 'var(--sketch-graphite)',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
