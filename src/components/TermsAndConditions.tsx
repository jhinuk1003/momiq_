import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, Shield, Heart, Lock, Eye, FileText, Phone } from 'lucide-react';
import { Button } from './ui/button';

interface TermsProps {
  onBack?: () => void;
}

const sections = [
  {
    id: 'acceptance',
    icon: FileText,
    wash: 'var(--sketch-terracotta-wash)',
    accent: 'var(--sketch-terracotta)',
    title: '1. Acceptance of Terms',
    content: `By downloading, installing, or accessing the MomiQ application ("App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using the App.

These Terms constitute an agreement between you ("User") and MomiQ ("Company", "we", "us", or "our"). We reserve the right to update these Terms at any time with notification.`,
  },
  {
    id: 'medical',
    icon: Heart,
    wash: 'var(--sketch-rose-wash)',
    accent: 'var(--sketch-rose)',
    title: '2. Clinical & Medical Disclaimer',
    content: `IMPORTANT: MomiQ is NOT a licensed medical diagnostic device and does NOT provide definitive diagnosis or medical prescription.

• The AI Obstetric Companion provides general wellness and evidence-based educational insights only.
• All content is designed for supportive informational purposes and should never replace physical medical consultations.
• In the event of maternal emergencies (e.g. heavy bleeding, acute abdominal pain, or loss of consciousness), immediately contact 112 / 108 or your local emergency department.`,
  },
  {
    id: 'privacy',
    icon: Lock,
    wash: 'var(--sketch-sage-wash)',
    accent: 'var(--sketch-sage)',
    title: '3. Privacy & Maternal Data Protection',
    content: `We prioritize maternal confidentiality. By using MomiQ, you consent to the handling of your data in accordance with the Digital Personal Data Protection Act (DPDP) and international HIPAA standards.

• All biometric vitals, ultrasound logs, and journal notes are encrypted at rest and in transit.
• We do not sell or monetize personal medical data with advertisers or third-party data brokers.`,
  },
  {
    id: 'ai',
    icon: Eye,
    wash: 'var(--sketch-blueprint-wash)',
    accent: 'var(--sketch-blueprint)',
    title: '4. AI Companion Guidelines',
    content: `MomiQ utilizes generative artificial intelligence to deliver contextual maternal reassurance and triage guidance:

• AI triage recommendations should always be validated with your licensed obstetrician or midwife.
• The AI Assistant is calibrated for prenatal well-being, nutrition advice, and appointment preparation, not emergency trauma care.`,
  },
  {
    id: 'conduct',
    icon: Shield,
    wash: 'var(--sketch-ochre-wash)',
    accent: 'var(--sketch-ochre)',
    title: '5. Motherhood Circles & Code of Conduct',
    content: `Our community discussion circles are safe, empathetic spaces for expecting mothers.

• Members agree to maintain mutual respect, compassion, and privacy regarding shared experiences.
• Commercial solicitations, harassment, or unsubstantiated medical claims will result in immediate moderation and account suspension.`,
  },
];

export function TermsAndConditions({ onBack }: TermsProps) {
  const [openSections, setOpenSections] = useState<string[]>(['acceptance', 'medical']);

  const toggle = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ width: '100%', maxWidth: 840, margin: '0 auto', padding: '24px 16px 60px' }}>
      {onBack && (
        <div style={{ marginBottom: 20 }}>
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Overview
          </Button>
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span className="sketch-badge sketch-badge-terracotta">
            <Shield size={13} /> Legal Specification // Care Protocol
          </span>
          <span className="sketch-handwriting" style={{ fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
            [Updated: 2026 Revision]
          </span>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 8px', color: 'var(--sketch-ink)' }}>
          Terms & Conditions of Care
        </h1>
        <p className="sketch-note" style={{ fontSize: '1.05rem', color: 'var(--sketch-graphite)', margin: 0 }}>
          "Please review the clinical boundaries, intellectual property, and data protection policies of MomiQ."
        </p>
      </div>

      {/* Sections Accordion */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {sections.map((sec) => {
          const isOpen = openSections.includes(sec.id);
          return (
            <div
              key={sec.id}
              className="sketch-card"
              style={{
                background: isOpen ? 'var(--sketch-paper)' : 'var(--sketch-paper-tint)',
                padding: 0,
                overflow: 'hidden',
              }}
            >
              <button
                type="button"
                onClick={() => toggle(sec.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '18px 22px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: 'var(--sketch-ink)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 'var(--radius-sketch-sm)',
                      background: sec.wash,
                      border: '1.5px solid var(--sketch-ink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <sec.icon size={17} color={sec.accent} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem' }}>
                    {sec.title}
                  </span>
                </div>
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {isOpen && (
                <div style={{ padding: '0 22px 22px', borderTop: '1.5px dashed var(--sketch-lead-light)', paddingTop: 16 }}>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--sketch-graphite)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {sec.content}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Support & Grievance Box */}
      <div
        className="sketch-card sketch-crosshair"
        style={{
          marginTop: 32,
          background: 'var(--sketch-paper-tint)',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <h4 style={{ margin: '0 0 4px', fontSize: '1.05rem', fontWeight: 700 }}>
            Clinical & Legal Inquiries
          </h4>
          <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
            // Contact Grievance Officer: legal@momiq.app · Emergency: 112
          </p>
        </div>
        <Button variant="secondary" onClick={() => window.print()}>
          Print Documentation
        </Button>
      </div>
    </div>
  );
}
