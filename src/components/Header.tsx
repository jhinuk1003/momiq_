import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Home,
  Sparkles,
  FileText,
  HeartHandshake,
  CreditCard,
  Compass,
  HelpCircle,
  LogIn,
  PlayCircle,
} from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenTracker?: () => void;
  onOpenAuth?: (view: 'login' | 'signup') => void;
  onGuestLogin?: () => void;
  showAuthButtons?: boolean;
}

const navItems = [
  { label: 'Home', id: 'home', icon: Home, num: '01' },
  { label: 'Features', id: 'features', icon: Sparkles, num: '02' },
  { label: 'Research', id: 'research', icon: FileText, num: '03' },
  { label: 'Services', id: 'services', icon: HeartHandshake, num: '04' },
  { label: 'Pricing', id: 'pricing', icon: CreditCard, num: '05' },
  { label: 'About', id: 'about', icon: Compass, num: '06' },
  { label: 'FAQ', id: 'faq', icon: HelpCircle, num: '07' },
];

export function Header({ onOpenAuth, onGuestLogin, showAuthButtons = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(250, 247, 240, 0.96)',
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

            {/* Desktop Navigation (strictly hidden on mobile via .header-desktop-nav) */}
            <nav className="header-desktop-nav">
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

            {/* Actions: Auth Buttons (Desktop) + Hamburger (Mobile) */}
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

              {/* Hamburger Button — strictly visible on mobile, hidden on lg+ */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="sketch-btn-secondary header-hamburger-btn"
                style={{ padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>Menu</span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown Menu */}
          {mobileOpen && (
            <div
              className="lg:hidden"
              style={{
                borderTop: '1.5px dashed var(--sketch-lead)',
                padding: '14px 0 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                animation: 'sketchFadeIn 0.2s ease forwards',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px 8px' }}>
                <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
                  // Journal Sections
                </span>
                <span className="sketch-badge sketch-badge-terracotta" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                  Navigation
                </span>
              </div>

              {navItems.map((n) => {
                const Icon = n.icon;
                return (
                  <button
                    key={n.id}
                    onClick={() => scrollTo(n.id)}
                    className="sketch-card-static"
                    style={{
                      background: 'var(--sketch-paper)',
                      border: '1.5px solid var(--sketch-ink)',
                      borderRadius: 'var(--radius-sketch-sm)',
                      padding: '12px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      boxShadow: '2px 2px 0px var(--sketch-ink)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 'var(--radius-sketch-sm)',
                          background: 'var(--sketch-paper-tint)',
                          border: '1.2px solid var(--sketch-ink)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--sketch-terracotta)',
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          color: 'var(--sketch-ink)',
                        }}
                      >
                        {n.label}
                      </span>
                    </div>

                    <span className="sketch-handwriting" style={{ fontSize: '0.82rem', color: 'var(--sketch-lead)' }}>
                      #{n.num}
                    </span>
                  </button>
                );
              })}

              {/* Mobile Auth Actions inside Hamburger */}
              {showAuthButtons && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    paddingTop: 14,
                    marginTop: 8,
                    borderTop: '1.5px dashed var(--sketch-lead-light)',
                  }}
                >
                  <button
                    onClick={() => {
                      onOpenAuth?.('login');
                      setMobileOpen(false);
                    }}
                    className="sketch-btn-primary"
                    style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
                  >
                    <LogIn size={18} /> Log In to Your Journal
                  </button>

                  <button
                    onClick={() => {
                      onGuestLogin?.();
                      setMobileOpen(false);
                    }}
                    className="sketch-btn-secondary"
                    style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
                  >
                    <PlayCircle size={18} /> Explore Guest Demo
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden"
          style={{
            position: 'fixed',
            inset: 0,
            top: 68,
            background: 'rgba(40, 37, 33, 0.4)',
            zIndex: 40,
            backdropFilter: 'blur(2px)',
          }}
        />
      )}
    </>
  );
}
