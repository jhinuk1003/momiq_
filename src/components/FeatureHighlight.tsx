import { Sparkles, Check, Bookmark } from 'lucide-react';
import babySketchImg from '../assets/sketch-baby-development.jpg';

export function FeatureHighlight() {
  const features = [
    'Weekly anatomical fetal development with hand-drafted illustrations',
    'Clinical kick counter and contraction rhythm timekeeper',
    'Milestone tracking from embryonic blastocyst to toddler years',
    'Personalized AI health synthesis calibrated to your gestational week',
  ];

  return (
    <section
      style={{
        background: 'var(--sketch-paper-tint)',
        padding: '80px 0',
        borderTop: '2px solid var(--sketch-ink)',
        borderBottom: '2px solid var(--sketch-ink)',
        position: 'relative',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Sketch Artwork Frame */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Washi tape on corner */}
            <div className="sketch-tape-corner" />

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
                <span className="sketch-badge sketch-badge-blueprint" style={{ fontSize: '0.7rem' }}>
                  <Bookmark size={12} /> SKETCHBOOK PLATE IV
                </span>
                <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-graphite)' }}>
                  Gestational Comparative Study
                </span>
              </div>

              <div
                style={{
                  border: '1.5px solid var(--sketch-ink)',
                  borderRadius: 'var(--radius-sketch-sm)',
                  overflow: 'hidden',
                  background: '#FFFDF9',
                  maxHeight: 'min(280px, 40vh)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={babySketchImg}
                  alt="Conceptual sketch of gestational baby growth"
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: 'min(280px, 40vh)',
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
                  CRL & Crown-Rump Dimensions documented weekly
                </span>
                <span className="sketch-badge sketch-badge-sage" style={{ fontSize: '0.68rem' }}>
                  Anatomical v2.4
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Checklist */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span className="sketch-badge sketch-badge-terracotta">
                <Sparkles size={14} /> Spec 02 // Developmental Milestones
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                marginBottom: 14,
                lineHeight: 1.15,
                fontWeight: 700,
              }}
            >
              Watch Your Little One Form,{' '}
              <span style={{ color: 'var(--sketch-terracotta)' }}>Week by Week</span>
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
              "From microscopic cell division to distinct hiccups and somersaults, record the architecture of life in your personal maternal notebook."
            </p>

            {/* Sketch checklist cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {features.map((f, i) => (
                <div
                  key={i}
                  className="sketch-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '12px 16px',
                    boxShadow: '2.5px 2.5px 0px var(--sketch-ink)',
                  }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 'var(--radius-sketch-sm)',
                      background: 'var(--sketch-sage-wash)',
                      border: '1.5px solid var(--sketch-sage)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={16} color="var(--sketch-sage)" strokeWidth={2.5} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--sketch-ink)' }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}