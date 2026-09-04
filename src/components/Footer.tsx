import { Logo } from './Logo';
import { Facebook, Instagram, Twitter, Mail, Heart, FileText } from 'lucide-react';

interface FooterProps {
  onNavigateTerms?: () => void;
}

export function Footer({ onNavigateTerms }: FooterProps) {
  return (
    <footer
      style={{
        background: 'var(--sketch-paper-tint)',
        borderTop: '2px solid var(--sketch-ink)',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">

          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p
              className="sketch-note"
              style={{
                color: 'var(--sketch-graphite)',
                fontSize: '1rem',
                lineHeight: 1.5,
              }}
            >
              "Your trusted clinical sketchbook & maternal compass through pregnancy, childbirth, and beyond."
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="sketch-btn-ghost"
                  style={{
                    width: 36,
                    height: 36,
                    padding: 0,
                    borderRadius: 'var(--radius-sketch-sm)',
                    background: 'var(--sketch-paper)',
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.95rem',
                borderBottom: '1.5px solid var(--sketch-ink)',
                paddingBottom: 8,
                marginBottom: 14,
                letterSpacing: '0.02em',
              }}
            >
              Navigation Index
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['home', 'features', 'services', 'pricing', 'about', 'faq'].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    style={{
                      color: 'var(--sketch-graphite)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      textTransform: 'capitalize',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--sketch-terracotta)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--sketch-graphite)')}
                  >
                    // {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.95rem',
                borderBottom: '1.5px solid var(--sketch-ink)',
                paddingBottom: 8,
                marginBottom: 14,
                letterSpacing: '0.02em',
              }}
            >
              Clinical Protocol
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li>
                <button
                  onClick={onNavigateTerms}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--sketch-graphite)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--sketch-terracotta)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--sketch-graphite)')}
                >
                  <FileText size={14} color="var(--sketch-terracotta)" /> Terms & Conditions
                </button>
              </li>
              <li>
                <a
                  href="#privacy"
                  style={{ color: 'var(--sketch-graphite)', fontWeight: 600, fontSize: '0.88rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--sketch-terracotta)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--sketch-graphite)')}
                >
                  Privacy & Data Policy
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{ color: 'var(--sketch-graphite)', fontWeight: 600, fontSize: '0.88rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--sketch-terracotta)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--sketch-graphite)')}
                >
                  Clinical Advisory Board
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.95rem',
                borderBottom: '1.5px solid var(--sketch-ink)',
                paddingBottom: 8,
                marginBottom: 14,
                letterSpacing: '0.02em',
              }}
            >
              Direct Dispatch
            </h4>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
              <Mail size={16} color="var(--sketch-terracotta)" style={{ flexShrink: 0, marginTop: 3 }} />
              <a
                href="mailto:momiq787@gmail.com"
                style={{
                  color: 'var(--sketch-ink)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  wordBreak: 'break-all',
                }}
              >
                momiq787@gmail.com
              </a>
            </div>
            <p className="sketch-handwriting" style={{ fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
              Response window: within 24 hours
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ paddingTop: 20, borderTop: '1.5px dashed var(--sketch-lead)', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--sketch-graphite)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              flexWrap: 'wrap',
            }}
          >
            <span>© 2026 MomiQ · Designed with</span>
            <Heart size={14} color="var(--sketch-terracotta)" fill="var(--sketch-terracotta)" />
            <span>for mothers everywhere ·</span>
            <button
              onClick={onNavigateTerms}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--sketch-terracotta)',
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: '0.85rem',
                textDecoration: 'underline',
              }}
            >
              Terms of Care
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}