import { Users, MessageCircle, Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import doctorCareSketchImg from '../assets/sketch-doctor-care.jpg';

const features = [
  {
    icon: Users,
    label: 'Due Date Trimester Circles',
    desc: 'Connect with mothers sharing identical gestational timelines, ultrasound dates, and symptoms.',
    wash: 'var(--sketch-terracotta-wash)',
    accent: 'var(--sketch-terracotta)',
  },
  {
    icon: MessageCircle,
    label: 'Clinician Moderated Dialogue',
    desc: 'Community forums moderated by certified lactation consultants and pediatric nurse practitioners.',
    wash: 'var(--sketch-sage-wash)',
    accent: 'var(--sketch-sage)',
  },
  {
    icon: Heart,
    label: 'Safe Milestone Sharing',
    desc: 'Private, encrypted photo and journal updates shared only with your chosen trusted circle.',
    wash: 'var(--sketch-blueprint-wash)',
    accent: 'var(--sketch-blueprint)',
  },
];

const stats = [
  { num: '50,000+', label: 'Active Mothers' },
  { num: '2,400+', label: 'Weekly Circles' },
  { num: '4.95 / 5', label: 'Satisfaction' },
];

export function CommunitySection() {
  return (
    <section
      id="community"
      style={{
        background: 'var(--sketch-bg)',
        padding: '80px 0',
        borderTop: '2px solid var(--sketch-ink)',
        borderBottom: '2px solid var(--sketch-ink)',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div style={{ marginBottom: 48, maxWidth: 640 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span className="sketch-badge sketch-badge-terracotta">
              Spec 07 // Community Circles
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            A Sanctuary of Understanding,{' '}
            <span style={{ color: 'var(--sketch-terracotta)' }}>Never Walk Alone</span>
          </h2>
          <p
            className="sketch-note"
            style={{
              fontSize: '1.15rem',
              color: 'var(--sketch-graphite)',
              lineHeight: 1.45,
            }}
          >
            "Pregnancy brings profound transformations. Connect with mothers who understand every kick, worry, and joyful milestone."
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">

          {/* Left Column: Sketch Clinical & Community Illustration */}
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
                  <ShieldCheck size={12} /> CONSULTATION LOG // WK 32
                </span>
                <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
                  Fig. 03 — Maternal Care
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
                  src={doctorCareSketchImg}
                  alt="Doctor and mother conceptual consultation sketch"
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: 'min(280px, 40vh)',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Stats Bar */}
              <div
                style={{
                  marginTop: 12,
                  padding: '12px',
                  background: 'var(--sketch-paper-tint)',
                  borderRadius: 'var(--radius-sketch-sm)',
                  border: '1.5px solid var(--sketch-ink)',
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                {stats.map((s, idx) => (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', margin: 0, color: 'var(--sketch-ink)' }}>
                      {s.num}
                    </p>
                    <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.8rem', color: 'var(--sketch-graphite)' }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Feature items & Join CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {features.map((f, i) => (
              <div
                key={i}
                className="sketch-card"
                style={{
                  background: f.wash,
                  padding: '20px',
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-sketch-sm)',
                    background: 'var(--sketch-paper)',
                    border: '1.5px solid var(--sketch-ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '1.5px 1.5px 0 var(--sketch-ink)',
                  }}
                >
                  <f.icon size={22} color={f.accent} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 4, color: 'var(--sketch-ink)' }}>
                    {f.label}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--sketch-graphite)', lineHeight: 1.5, margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}

            <button
              onClick={() => {
                const el = document.getElementById('home');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="sketch-btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
            >
              <Users size={18} /> Join Maternal Discussion Circles <ArrowRight size={18} />
            </button>
          </div>

        </div>

        {/* Bottom Tag Topics */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', borderTop: '1.5px dashed var(--sketch-lead)', paddingTop: 24 }}>
          {[
            '🤰 Gestational Trimester 1 & 2',
            '👶 Newborn Feeding Rhythms',
            '💊 Clinical Vitals & Lab Q&A',
            '🎵 Acoustic Baby Bonding',
            '📚 Midwifery & Labor Preparation',
            '🌸 Postpartum Emotional Balance',
            '🍼 Breastfeeding Support',
            '✨ Ultrasound Memory Archive',
          ].map((tag) => (
            <span key={tag} className="sketch-badge" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}