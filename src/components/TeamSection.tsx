import { Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const teamMembers = [
  {
    name: 'Jhinuk Roy',
    role: 'Full-Stack Architecture',
    bio: 'B.Tech final-year engineer designing high-reliability systems for maternal health monitoring.',
    initials: 'JR',
    email: 'jhinuk@momiq.app',
    wash: 'var(--sketch-terracotta-wash)',
    accent: 'var(--sketch-terracotta)',
  },
  {
    name: 'Jyoti Kumari',
    role: 'Product & UX Design',
    bio: 'Crafts accessible, empathetic sketch experiences tailored to expecting mothers and postpartum care.',
    initials: 'JK',
    email: 'jyoti@momiq.app',
    wash: 'var(--sketch-sage-wash)',
    accent: 'var(--sketch-sage)',
  },
  {
    name: 'Riki Bouri',
    role: 'AI / Clinical Intelligence',
    bio: 'Trains empathetic generative models for contextual obstetric triage and maternal reassurance.',
    initials: 'RB',
    email: 'riki@momiq.app',
    wash: 'var(--sketch-blueprint-wash)',
    accent: 'var(--sketch-blueprint)',
  },
  {
    name: 'Krishna Mahato',
    role: 'Community & Advocacy',
    bio: 'Fosters safe, supportive circles for expecting mothers across regional communities in India.',
    initials: 'KM',
    email: 'krishna@momiq.app',
    wash: 'var(--sketch-ochre-wash)',
    accent: 'var(--sketch-ochre)',
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
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
              Spec 05 // Research & Engineering Team
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
            The Minds Behind the{' '}
            <span style={{ color: 'var(--sketch-terracotta)' }}>Notebook</span>
          </h2>
          <p
            className="sketch-note"
            style={{
              fontSize: '1.15rem',
              color: 'var(--sketch-graphite)',
              lineHeight: 1.45,
            }}
          >
            "Four B.Tech final-year engineers and designers uniting clinical intelligence with human empathy to reimagine motherhood."
          </p>
        </div>

        {/* Team Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: 24,
          }}
        >
          {teamMembers.map((m) => (
            <div
              key={m.name}
              className="sketch-card"
              style={{
                background: 'var(--sketch-paper)',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* Top tape accent */}
              <div className="sketch-tape" style={{ width: 80 }} />

              {/* Avatar stamp */}
              <div
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: 'var(--radius-sketch-sm)',
                  background: m.wash,
                  border: '1.8px solid var(--sketch-ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 6,
                  marginBottom: 14,
                  boxShadow: '2px 2px 0 var(--sketch-ink)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: m.accent,
                  }}
                >
                  {m.initials}
                </span>
              </div>

              {/* Role badge */}
              <span
                className="sketch-badge"
                style={{
                  fontSize: '0.72rem',
                  marginBottom: 12,
                  background: m.wash,
                  color: m.accent,
                  borderColor: m.accent,
                }}
              >
                {m.role}
              </span>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 8, color: 'var(--sketch-ink)' }}>
                {m.name}
              </h3>

              <p
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--sketch-graphite)',
                  lineHeight: 1.5,
                  marginBottom: 20,
                  flex: 1,
                }}
              >
                {m.bio}
              </p>

              {/* Social icons */}
              <div style={{ display: 'flex', gap: 10, borderTop: '1.5px dashed var(--sketch-lead)', paddingTop: 14, width: '100%', justifyContent: 'center' }}>
                <a
                  href="#"
                  className="sketch-btn-ghost"
                  style={{ width: 34, height: 34, padding: 0, borderRadius: 'var(--radius-sketch-sm)' }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="#"
                  className="sketch-btn-ghost"
                  style={{ width: 34, height: 34, padding: 0, borderRadius: 'var(--radius-sketch-sm)' }}
                  aria-label="Twitter"
                >
                  <Twitter size={14} />
                </a>
                <a
                  href={`mailto:${m.email}`}
                  className="sketch-btn-ghost"
                  style={{ width: 34, height: 34, padding: 0, borderRadius: 'var(--radius-sketch-sm)' }}
                  aria-label="Email"
                >
                  <Mail size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          className="sketch-card sketch-crosshair"
          style={{
            marginTop: 40,
            background: 'var(--sketch-paper-tint)',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 'var(--radius-sketch-sm)',
                background: 'var(--sketch-terracotta-wash)',
                border: '1.8px solid var(--sketch-ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Heart size={22} color="var(--sketch-terracotta)" fill="var(--sketch-terracotta)" />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '1.05rem', margin: 0, color: 'var(--sketch-ink)' }}>
                Crafted with care for Every Expecting Mother
              </p>
              <p className="sketch-handwriting" style={{ margin: 0, color: 'var(--sketch-lead)', fontSize: '0.95rem' }}>
                // B.Tech Final-Year Capstone Project · Developed with clinical research guidance
              </p>
            </div>
          </div>
          <a href="mailto:support@momiq.app" className="sketch-btn-primary">
            Connect With Team →
          </a>
        </div>
      </div>
    </section>
  );
}
