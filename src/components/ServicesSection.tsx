import { Calendar, Baby, Activity, BookOpen, Bell, MessageCircle, Music, Users, Moon, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenTracker?: () => void;
  onOpenBabyDevelopment?: () => void;
  onOpenHealthMonitoring?: () => void;
  onOpenSmartReminders?: () => void;
  onOpenAIDoctorChat?: () => void;
  onOpenExpertArticles?: () => void;
  onOpenPersonalizedMusic?: () => void;
  onOpenSupportGroups?: () => void;
  onOpenMenstrualCycle?: () => void;
}

export function ServicesSection({
  onOpenTracker,
  onOpenBabyDevelopment,
  onOpenHealthMonitoring,
  onOpenSmartReminders,
  onOpenAIDoctorChat,
  onOpenExpertArticles,
  onOpenPersonalizedMusic,
  onOpenSupportGroups,
  onOpenMenstrualCycle,
}: ServicesSectionProps) {
  const services = [
    { plate: 'PL-01', icon: Calendar, title: 'Pregnancy Tracker', desc: 'Week-by-week timeline, physiological milestones, and fetal growth notes.', wash: 'var(--sketch-terracotta-wash)', accent: 'var(--sketch-terracotta)', onClick: onOpenTracker },
    { plate: 'PL-02', icon: Baby, title: 'Baby Development', desc: 'Anatomical dimensions, sensory development, and fruit size comparisons.', wash: 'var(--sketch-sage-wash)', accent: 'var(--sketch-sage)', onClick: onOpenBabyDevelopment },
    { plate: 'PL-03', icon: Activity, title: 'Health Monitoring', desc: 'Blood pressure, glucose curve, hydration logs, and maternal vitals archive.', wash: 'var(--sketch-blueprint-wash)', accent: 'var(--sketch-blueprint)', onClick: onOpenHealthMonitoring },
    { plate: 'PL-04', icon: Moon, title: 'Menstrual & Fertility', desc: 'Follicular phase tracking, ovulation predictions, and symptom patterns.', wash: 'var(--sketch-lavender-wash)', accent: 'var(--sketch-lavender)', onClick: onOpenMenstrualCycle },
    { plate: 'PL-05', icon: BookOpen, title: 'Expert Clinical Guides', desc: 'Evidence-based articles reviewed by board-certified OB/GYNs and midwives.', wash: 'var(--sketch-ochre-wash)', accent: 'var(--sketch-ochre)', onClick: onOpenExpertArticles },
    { plate: 'PL-06', icon: Bell, title: 'Smart Reminders', desc: 'Never miss prenatal vitamin doses, clinic ultrasounds, or hydration checks.', wash: 'var(--sketch-rose-wash)', accent: 'var(--sketch-rose)', onClick: onOpenSmartReminders },
    { plate: 'PL-07', icon: MessageCircle, title: 'AI OB/GYN Assistant', desc: 'Instant clinical triage and maternal reassurance trained on medical literature.', wash: 'var(--sketch-terracotta-wash)', accent: 'var(--sketch-terracotta)', onClick: onOpenAIDoctorChat },
    { plate: 'PL-08', icon: Music, title: 'Personalized Soundscapes', desc: 'Acoustic prenatal frequencies and calming lullabies for mother and baby.', wash: 'var(--sketch-sage-wash)', accent: 'var(--sketch-sage)', onClick: onOpenPersonalizedMusic },
    { plate: 'PL-09', icon: Users, title: 'Motherhood Circles', desc: 'Intimate community groups sharing real experiences and postpartum advice.', wash: 'var(--sketch-blueprint-wash)', accent: 'var(--sketch-blueprint)', onClick: onOpenSupportGroups },
  ];

  return (
    <section
      id="services"
      style={{
        background: 'var(--sketch-bg)',
        padding: '80px 0',
        borderTop: '2px solid var(--sketch-ink)',
        borderBottom: '2px solid var(--sketch-ink)',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div style={{ marginBottom: 44, maxWidth: 640 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span className="sketch-badge sketch-badge-terracotta">
              Index of Modules // 9 Care Modules
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
            Maternal Instruments &{' '}
            <span style={{ color: 'var(--sketch-terracotta)' }}>Clinical Archives</span>
          </h2>
          <p
            className="sketch-note"
            style={{
              fontSize: '1.15rem',
              color: 'var(--sketch-graphite)',
              lineHeight: 1.45,
            }}
          >
            "Everything an expectant mother requires to monitor, understand, and cherish every single phase of gestation."
          </p>
        </div>

        {/* Modular Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              onClick={s.onClick}
              className="sketch-card"
              style={{
                background: s.wash,
                padding: '22px 20px',
                cursor: s.onClick ? 'pointer' : 'default',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Top Plate Index */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 'var(--radius-sketch-sm)',
                      background: 'var(--sketch-paper)',
                      border: '1.5px solid var(--sketch-ink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '1.5px 1.5px 0 var(--sketch-ink)',
                    }}
                  >
                    <s.icon size={20} color={s.accent} strokeWidth={2.2} />
                  </div>
                  <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
                    [{s.plate}]
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    marginBottom: 8,
                    color: 'var(--sketch-ink)',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--sketch-graphite)',
                    lineHeight: 1.5,
                    marginBottom: 16,
                  }}
                >
                  {s.desc}
                </p>
              </div>

              {s.onClick && (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    color: s.accent,
                    borderTop: '1.5px dashed var(--sketch-lead)',
                    paddingTop: 10,
                  }}
                >
                  <span>Launch Tool</span>
                  <ArrowUpRight size={14} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}