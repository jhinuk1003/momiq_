import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenTracker?: () => void;
  onOpenAuth?: (view: 'login' | 'signup') => void;
  onGuestLogin?: () => void;
  showAuthButtons?: boolean;
}

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Features', id: 'features' },
  { label: 'Research', id: 'research' },
  { label: 'Services', id: 'services' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'About', id: 'about' },
  { label: 'FAQ', id: 'faq' },
];

export function Header({ onOpenAuth, onGuestLogin, showAuthButtons = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(250, 247, 240, 0.94)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1.8px solid var(--sketch-ink)',
        boxShadow: scrolled ? '0 3px 0px rgba(40, 37, 33, 0.12)' : 'none',
        transition: 'box-shadow 0.2s ease',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

          {/* Logo */}
          <div onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="hidden lg:flex">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--sketch-graphite)',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.01em',
                  cursor: 'pointer',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-sketch-sm)',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = 'var(--sketch-ink)';
                  el.style.background = 'var(--sketch-paper-tint)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = 'var(--sketch-graphite)';
                  el.style.background = 'transparent';
                }}
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* Auth buttons (desktop) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {showAuthButtons && (
              <>
                <button
                  onClick={() => onOpenAuth?.('login')}
                  className="sketch-btn-primary auth-btn-desktop"
                  style={{ padding: '8px 18px', fontSize: '0.82rem' }}
                >
                  Log In
                </button>
                <button
                  onClick={() => onGuestLogin?.()}
                  className="sketch-btn-secondary auth-btn-desktop"
                  style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                >
                  Guest Demo
                </button>
              </>
            )}

            {/* Hamburger — hidden on lg+ */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="sketch-btn-secondary lg:hidden"
              style={{ padding: '7px 10px' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div
            style={{
              borderTop: '1.5px dashed var(--sketch-lead)',
              padding: '16px 0 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
            className="lg:hidden"
          >
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--sketch-ink)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  fontFamily: 'var(--font-heading)',
                  cursor: 'pointer',
                  padding: '10px 12px',
                  textAlign: 'left',
                  borderRadius: 'var(--radius-sketch-sm)',
                }}
              >
                {n.label}
              </button>
            ))}
            {showAuthButtons && (
              <div style={{ display: 'flex', gap: 10, paddingTop: 12, borderTop: '1.5px dashed var(--sketch-lead-light)' }}>
                <button
                  onClick={() => { onOpenAuth?.('login'); setMobileOpen(false); }}
                  className="sketch-btn-primary"
                  style={{ flex: 1 }}
                >
                  Log In
                </button>
                <button
                  onClick={() => { onGuestLogin?.(); setMobileOpen(false); }}
                  className="sketch-btn-secondary"
                  style={{ flex: 1 }}
                >
                  Guest Demo
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}