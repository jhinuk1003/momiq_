import { ArrowRight, Sparkles, Compass, FileText } from 'lucide-react';
import heroSketchImg from '../assets/sketch-hero-mother.jpg';

interface HeroSectionProps {
  onOpenTracker?: () => void;
  onGetStarted?: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section
      id="home"
      style={{
        padding: '36px 0 50px',
        borderBottom: '2px solid var(--sketch-ink)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column — Text & Editorial Annotations */}
          <div>
            {/* Architectural Drafting Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <span className="sketch-badge sketch-badge-terracotta">
                <Sparkles size={14} /> Spec. 2026 // Clinical Pregnancy Journal
              </span>
              <span className="sketch-handwriting" style={{ fontSize: '1rem', color: 'var(--sketch-lead)' }}>
                [Fig. 01 — Overview]
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 4.2rem)',
                lineHeight: 1.1,
                marginBottom: 16,
                fontWeight: 700,
                color: 'var(--sketch-ink)',
              }}
            >
              Every pregnancy is a masterpiece{' '}
              <span
                style={{
                  color: 'var(--sketch-terracotta)',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                in the making.
                <svg
                  viewBox="0 0 200 12"
                  style={{
                    position: 'absolute',
                    bottom: -6,
                    left: 0,
                    width: '100%',
                    height: 10,
                    overflow: 'visible',
                  }}
                >
                  <path
                    d="M2 7 C 50 1, 150 12, 198 6"
                    fill="none"
                    stroke="var(--sketch-terracotta)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Handwritten Subtitle */}
            <p
              className="sketch-note"
              style={{
                fontSize: '1.2rem',
                color: 'var(--sketch-graphite)',
                marginBottom: 18,
                maxWidth: 520,
              }}
            >
              "From first heartbeat murmur to first cry, MomiQ is your artist's notebook and clinical compass — recording every milestone with precision and tenderness."
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--sketch-graphite)',
                marginBottom: 32,
                lineHeight: 1.6,
                maxWidth: 480,
              }}
            >
              A thoughtfully crafted pregnancy companion combining clinical medical intelligence, weekly embryonic progress sketches, vital health tracking, and 24/7 empathetic guidance.
            </p>

            {/* Call to Actions */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <button onClick={onGetStarted} className="sketch-btn-primary">
                Begin Your Journal <ArrowRight size={18} />
              </button>
              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="sketch-btn-secondary"
              >
                <Compass size={16} /> Explore Features
              </button>
              <button
                onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
                className="sketch-btn-ghost"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.84rem' }}
              >
                <FileText size={15} /> Research Paper
              </button>
            </div>

            {/* Stats — Sketch Blueprint Cards */}
            <div style={{ display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap' }}>
              {[
                { number: '10K+', label: 'Expectant Mothers', note: 'active journals' },
                { number: '99.4%', label: 'Clinical Accuracy', note: 'board verified' },
                { number: '24/7', label: 'AI OB/GYN Care', note: 'always available' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="sketch-card"
                  style={{
                    padding: '12px 18px',
                    background: 'var(--sketch-paper)',
                    flex: '1 1 120px',
                    minWidth: 120,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '1.5rem',
                      color: 'var(--sketch-ink)',
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      color: 'var(--sketch-terracotta)',
                      marginTop: 2,
                    }}
                  >
                    {stat.label}
                  </div>
                  <div className="sketch-handwriting" style={{ fontSize: '0.8rem', color: 'var(--sketch-lead)' }}>
                    // {stat.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Conceptual Sketch Artwork Framing */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Washi Tape Strip on Top */}
            <div className="sketch-tape" style={{ width: 120, top: -14 }} />

            {/* Sketchbook Frame */}
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
              {/* Header Label inside Frame */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: 8,
                  marginBottom: 8,
                  borderBottom: '1.5px dashed var(--sketch-lead)',
                }}
              >
                <span className="sketch-badge sketch-badge-sage" style={{ fontSize: '0.7rem' }}>
                  ANATOMICAL DRAFT // WK 14
                </span>
                <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-graphite)' }}>
                  Scale: 1:1 Growth
                </span>
              </div>

              {/* Real Conceptual Sketch Artwork */}
              <div
                style={{
                  borderRadius: 'var(--radius-sketch-sm)',
                  border: '1.5px solid var(--sketch-ink)',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#FAF7F0',
                  maxHeight: 'min(300px, 42vh)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={heroSketchImg}
                  alt="Conceptual pencil sketch of expectant mother"
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: 'min(300px, 42vh)',
                    display: 'block',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                  }}
                />

                {/* Hand-drawn Overlay Tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    background: 'rgba(255, 253, 249, 0.92)',
                    border: '1.5px solid var(--sketch-ink)',
                    borderRadius: 'var(--radius-sketch-sm)',
                    boxShadow: '2px 2px 0px var(--sketch-ink)',
                    padding: '6px 14px',
                  }}
                >
                  <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.92rem', color: 'var(--sketch-ink)', fontWeight: 600 }}>
                    Trimester II · Growth velocity active ✓
                  </p>
                </div>
              </div>

              {/* Bottom Drafting Notes */}
              <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
                  Ref. #MQ-882-B // Human Form Development
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--sketch-terracotta)',
                  }}
                >
                  Validated by OB/GYN Board
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}