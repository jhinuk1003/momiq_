import { Check, Zap, Crown, Users } from 'lucide-react';

const plans = [
  {
    name: 'Maternal Journal',
    tier: 'Basic Tier',
    price: '₹0',
    period: 'forever free',
    popular: false,
    wash: 'var(--sketch-paper)',
    icon: Users,
    features: [
      'Weekly fetal milestones & notes',
      'Basic kick counter & contraction timer',
      'Doctor appointment scheduler',
      'Community discussion circles',
      'Evidence-based health guides',
    ],
    cta: 'Start Free Journal',
    btnClass: 'sketch-btn-secondary',
  },
  {
    name: 'Clinical Care Pass',
    tier: 'Architect Choice',
    price: '₹799',
    period: '/month',
    popular: true,
    wash: 'var(--sketch-terracotta-wash)',
    icon: Zap,
    features: [
      'All Journal tier features',
      '24/7 AI OB/GYN Consultation',
      'Personalized prenatal acoustic soundscapes',
      'Advanced biometric vitals analysis',
      'Trimester nutrition & meal blueprints',
      'Priority midwife support channel',
    ],
    cta: 'Begin 14-Day Trial',
    btnClass: 'sketch-btn-primary',
  },
  {
    name: 'Family Sanctuary',
    tier: 'Extended Spec',
    price: '₹1,199',
    period: '/month',
    popular: false,
    wash: 'var(--sketch-sage-wash)',
    icon: Crown,
    features: [
      'All Clinical Care Pass features',
      'Partner companion sync (up to 3 users)',
      'Postpartum recovery care archive (6 mos)',
      'Infant developmental tracker & records',
      'Vaccination timeline alerts',
      'High-resolution ultrasound archive',
    ],
    cta: 'Begin 14-Day Trial',
    btnClass: 'sketch-btn-secondary',
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      style={{
        background: 'var(--sketch-paper-tint)',
        padding: '80px 0',
        borderTop: '2px solid var(--sketch-ink)',
        borderBottom: '2px solid var(--sketch-ink)',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div style={{ marginBottom: 48, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span className="sketch-badge sketch-badge-terracotta">
              Spec 04 // Transparent Subscriptions
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: 10,
            }}
          >
            Invest in Peace of Mind,{' '}
            <span style={{ color: 'var(--sketch-terracotta)' }}>Every Trimester</span>
          </h2>
          <p
            className="sketch-note"
            style={{
              fontSize: '1.15rem',
              color: 'var(--sketch-graphite)',
              maxWidth: 580,
              margin: '0 auto',
            }}
          >
            "Every plan includes a 14-day risk-free trial. No surprise fees. Cancel anytime with a single click."
          </p>
        </div>

        {/* Plan Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 24,
            alignItems: 'stretch',
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="sketch-card"
              style={{
                background: plan.wash,
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transform: plan.popular ? 'translateY(-6px)' : 'none',
                boxShadow: plan.popular ? '6px 7px 0px var(--sketch-ink)' : '3px 3.5px 0px var(--sketch-ink)',
              }}
            >
              {plan.popular && (
                <div className="sketch-tape" style={{ width: 140 }}>
                  <span
                    style={{
                      position: 'absolute',
                      top: 1,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--sketch-ink)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    ★ MOST POPULAR SPEC
                  </span>
                </div>
              )}

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span className="sketch-handwriting" style={{ fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
                    // {plan.tier}
                  </span>
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
                    }}
                  >
                    <plan.icon size={18} color="var(--sketch-terracotta)" />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: 8, color: 'var(--sketch-ink)' }}>
                  {plan.name}
                </h3>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 20, paddingBottom: 16, borderBottom: '1.5px dashed var(--sketch-lead)' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--sketch-ink)' }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--sketch-graphite)', fontWeight: 600 }}>
                    {plan.period}
                  </span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {plan.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 'var(--radius-sketch-sm)',
                          background: 'var(--sketch-paper)',
                          border: '1.5px solid var(--sketch-ink)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        <Check size={12} color="var(--sketch-terracotta)" strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '0.9rem', color: 'var(--sketch-ink)', lineHeight: 1.4, fontWeight: 500 }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={plan.btnClass} style={{ width: '100%', padding: '12px' }}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="sketch-handwriting" style={{ textAlign: 'center', marginTop: 28, fontSize: '0.95rem', color: 'var(--sketch-lead)' }}>
          // Note: Invoices generated in INR. All clinical data encrypted with HIPAA compliant standards.
        </p>
      </div>
    </section>
  );
}
