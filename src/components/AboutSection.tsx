import aboutImage from 'figma:asset/f67da2099602a2b6f58367ec1e31475b9e6c8507.png';
import { Heart, Compass, Sparkles } from 'lucide-react';

const blocks = [
  {
    icon: Compass,
    title: 'The Maternal Manifesto',
    wash: 'var(--sketch-terracotta-wash)',
    accent: 'var(--sketch-terracotta)',
    text: 'Pregnancy is an intricate, awe-inspiring journey that deserves deeply personal care. We crafted MomiQ as a living digital notebook where mothers can record vitals, understand fetal development, and access trustworthy clinical support without anxiety.',
  },
  {
    icon: Sparkles,
    title: 'Unified Clinical Architecture',
    wash: 'var(--sketch-sage-wash)',
    accent: 'var(--sketch-sage)',
    text: 'An integrated suite uniting pregnancy milestone charting, weekly embryonic progression sketches, evidence-based obstetrics articles, smart reminder alarms, and compassionate 24/7 AI OB/GYN triage.',
  },
  {
    icon: Heart,
    title: 'Engineered with Empathy',
    wash: 'var(--sketch-blueprint-wash)',
    accent: 'var(--sketch-blueprint)',
    text: 'Developed by four final-year B.Tech engineering researchers committed to democratizing maternal health intelligence for every mother, family, and newborn.',
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--sketch-paper-tint)',
        padding: '80px 0',
        borderTop: '2px solid var(--sketch-ink)',
        borderBottom: '2px solid var(--sketch-ink)',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Manifesto & Blocks */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span className="sketch-badge sketch-badge-terracotta">
                Spec 08 // The Origin & Vision
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
              Reimagining Pregnancy as an{' '}
              <span style={{ color: 'var(--sketch-terracotta)' }}>Art Form & Science</span>
            </h2>

            <p
              className="sketch-note"
              style={{
                fontSize: '1.15rem',
                color: 'var(--sketch-graphite)',
                marginBottom: 24,
                lineHeight: 1.45,
              }}
            >
              "Blending the intimacy of an artist's personal diary with the clinical rigor of modern obstetrics."
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {blocks.map((b) => (
                <div
                  key={b.title}
                  className="sketch-card"
                  style={{
                    background: b.wash,
                    padding: '18px 20px',
                    display: 'flex',
                    gap: 14,
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 'var(--radius-sketch-sm)',
                      background: 'var(--sketch-paper)',
                      border: '1.5px solid var(--sketch-ink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <b.icon size={18} color={b.accent} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 4, color: 'var(--sketch-ink)' }}>
                      {b.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--sketch-graphite)', margin: 0, lineHeight: 1.5 }}>
                      {b.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Framing Artwork */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div className="sketch-tape" style={{ width: 110 }} />

            <div
              className="sketch-card sketch-crosshair"
              style={{
                width: '100%',
                maxWidth: 390,
                padding: '14px',
                background: 'var(--sketch-paper)',
                boxShadow: '4px 5px 0px var(--sketch-ink)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                  paddingBottom: 6,
                  borderBottom: '1.5px dashed var(--sketch-lead)',
                }}
              >
                <span className="sketch-badge sketch-badge-sage" style={{ fontSize: '0.7rem' }}>
                  ARCHIVE NOTE // PED-09
                </span>
                <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
                  Mother & Infant Bonding
                </span>
              </div>

              <div
                style={{
                  border: '1.5px solid var(--sketch-ink)',
                  borderRadius: 'var(--radius-sketch-sm)',
                  overflow: 'hidden',
                  background: '#FAF7F0',
                  maxHeight: 'min(280px, 40vh)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={aboutImage}
                  alt="Doctor with newborn infant"
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: 'min(280px, 40vh)',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div style={{ marginTop: 12, textAlign: 'center' }}>
                <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.92rem', color: 'var(--sketch-graphite)' }}>
                  "Dedicated to every mother holding new life in her arms."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}