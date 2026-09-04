import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Jessica Martinez',
    role: 'First-time Mother',
    rating: 5,
    text: 'MomiQ has been my constant companion throughout my pregnancy. The AI doctor chat feature gave me peace of mind during those late-night worries. Absolutely love this app!',
    location: 'San Francisco, CA',
    weeks: '32 weeks pregnant',
    wash: 'var(--sketch-terracotta-wash)',
    accent: 'var(--sketch-terracotta)',
  },
  {
    name: 'Aisha Patel',
    role: 'Expecting Mother of Twins',
    rating: 5,
    text: 'Managing a twin pregnancy was overwhelming until I found MomiQ. The personalized tracking and community support have been invaluable. Best pregnancy app out there!',
    location: 'London, UK',
    weeks: '28 weeks pregnant',
    wash: 'var(--sketch-sage-wash)',
    accent: 'var(--sketch-sage)',
  },
  {
    name: 'Rachel Thompson',
    role: 'Second-time Mother',
    rating: 5,
    text: 'Even with my second pregnancy, MomiQ taught me so much. The expert articles and health monitoring features are top-notch. Highly recommend to all expecting mothers!',
    location: 'Toronto, Canada',
    weeks: '24 weeks pregnant',
    wash: 'var(--sketch-blueprint-wash)',
    accent: 'var(--sketch-blueprint)',
  },
  {
    name: 'Maria Garcia',
    role: 'New Mother',
    rating: 5,
    text: 'The postpartum support features helped me navigate those challenging first months. MomiQ isn\'t just for pregnancy - it\'s for the entire journey into motherhood.',
    location: 'Madrid, Spain',
    weeks: 'New mother (3 mos postpartum)',
    wash: 'var(--sketch-ochre-wash)',
    accent: 'var(--sketch-ochre)',
  },
  {
    name: 'Sophia Lee',
    role: 'Expecting Mother',
    rating: 5,
    text: 'The community feature connected me with other moms going through the same experiences. I\'ve made lifelong friends and got amazing advice. Thank you, MomiQ!',
    location: 'Singapore',
    weeks: '20 weeks pregnant',
    wash: 'var(--sketch-lavender-wash)',
    accent: 'var(--sketch-lavender)',
  },
  {
    name: 'Emma Wilson',
    role: 'First-time Mother',
    rating: 5,
    text: 'The personalized soundscapes helped me bond with my baby and manage stress. Every feature is thoughtfully designed with moms in mind.',
    location: 'Sydney, Australia',
    weeks: '36 weeks pregnant',
    wash: 'var(--sketch-rose-wash)',
    accent: 'var(--sketch-rose)',
  },
];

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => setStartIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const visible = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      style={{
        background: 'var(--sketch-paper-tint)',
        padding: '80px 0',
        borderTop: '2px solid var(--sketch-ink)',
        borderBottom: '2px solid var(--sketch-ink)',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 20 }}>
          <div style={{ maxWidth: 600 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span className="sketch-badge sketch-badge-terracotta">
                Spec 06 // Field Journals & Stories
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
              Letters from the{' '}
              <span style={{ color: 'var(--sketch-terracotta)' }}>Motherhood Circle</span>
            </h2>
            <p
              className="sketch-note"
              style={{
                fontSize: '1.15rem',
                color: 'var(--sketch-graphite)',
              }}
            >
              "Real mothers documenting their milestones, late-night questions, and joyous moments."
            </p>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={prev} className="sketch-btn-secondary" style={{ padding: '10px 14px' }} aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="sketch-btn-secondary" style={{ padding: '10px 14px' }} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 24,
          }}
        >
          {visible.map((t, idx) => (
            <div
              key={idx}
              className="sketch-card"
              style={{
                background: t.wash,
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              {/* Tape Accent */}
              <div className="sketch-tape" style={{ width: 90 }} />

              <div>
                {/* Rating stars */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} color="var(--sketch-ochre)" fill="var(--sketch-ochre)" />
                    ))}
                  </div>
                  <Quote size={20} color="var(--sketch-lead)" style={{ opacity: 0.6 }} />
                </div>

                <p
                  className="sketch-note"
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--sketch-ink)',
                    lineHeight: 1.5,
                    marginBottom: 20,
                  }}
                >
                  "{t.text}"
                </p>
              </div>

              {/* Author footer */}
              <div style={{ borderTop: '1.5px dashed var(--sketch-lead)', paddingTop: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
                      {t.name}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--sketch-graphite)', margin: '2px 0 0' }}>
                      {t.role} · {t.location}
                    </p>
                  </div>
                  <span
                    className="sketch-badge"
                    style={{
                      fontSize: '0.68rem',
                      background: 'var(--sketch-paper)',
                      color: t.accent,
                      borderColor: t.accent,
                    }}
                  >
                    {t.weeks}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
