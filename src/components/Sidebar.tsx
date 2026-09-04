import { useState, useEffect } from 'react';
import {
  Activity, Heart, Bell, Calendar, Baby,
  MessageCircle, Users, BookOpen, Music,
  Settings, LogOut, ChevronLeft, Menu, Check, X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  userName: string;
  pregnancyWeek: number;
  onNavigate: (destination: string) => void;
  currentView: string;
  onLogout?: () => void;
}

export function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  userName = 'User',
  pregnancyWeek = 14,
  onNavigate,
  currentView,
  onLogout,
}: SidebarProps) {
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = [
    { icon: Heart, label: 'Dashboard', action: 'dashboard', path: '/dashboard' },
    { icon: Calendar, label: 'Calendar', action: 'calendar', path: '/dashboard/calendar' },
    { icon: Baby, label: 'Baby Dev', action: 'baby', path: '/dashboard/baby' },
    { icon: Activity, label: 'Health', action: 'health', path: '/dashboard/health' },
    { icon: MessageCircle, label: 'AI Doctor', action: 'aiDoctorChat', path: '/dashboard/ai-doctor' },
    { icon: Bell, label: 'Reminders', action: 'smartReminders', path: '/dashboard/reminders' },
    { icon: Users, label: 'Groups', action: 'supportGroups', path: '/dashboard/support-groups' },
    { icon: BookOpen, label: 'Articles', action: 'expertArticles', path: '/dashboard/articles' },
    { icon: Music, label: 'Music', action: 'personalizedMusic', path: '/dashboard/music' },
    { icon: Settings, label: 'Settings', action: 'settings', path: '/dashboard/settings' },
  ];

  // Determine active item by matching currentView (URL segment) or path
  const getActive = (item: typeof items[0]) => {
    if (currentView === item.action) return true;
    // Also match by path segment
    const segment = item.path.split('/')[2] || 'dashboard';
    return currentView === segment || currentView === item.path;
  };

  const W = isMobile ? 280 : (sidebarOpen ? 256 : 74);
  const translateX = isMobile ? (sidebarOpen ? 0 : -320) : 0;

  return (
    <>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.aside
        layout={!isMobile}
        animate={{ width: W, x: translateX }}
        transition={{ type: 'spring', stiffness: 340, damping: 34 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          zIndex: isMobile ? 50 : 40,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          background: 'var(--sketch-paper)',
          borderRight: '2px solid var(--sketch-ink)',
          boxShadow: isMobile ? '4px 0 16px rgba(40, 37, 33, 0.25)' : '3px 0 0 0 rgba(40, 37, 33, 0.08)',
          width: W,
          maxWidth: isMobile ? '85vw' : undefined,
        }}
      >
        {/* Brand */}
        <div
          style={{
            padding: '16px',
            borderBottom: '1.8px solid var(--sketch-ink)',
            background: 'var(--sketch-paper-tint)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, overflow: 'hidden' }}>
            <div
              style={{
                width: 36,
                height: 36,
                background: 'var(--sketch-terracotta-wash)',
                border: '1.5px solid var(--sketch-ink)',
                borderRadius: 'var(--radius-sketch-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '1.1rem',
                flexShrink: 0,
                color: 'var(--sketch-terracotta)',
                boxShadow: '1.5px 1.5px 0 var(--sketch-ink)',
              }}
            >
              ♥
            </div>
            {(sidebarOpen || isMobile) && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  color: 'var(--sketch-ink)',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                Momi<span style={{ color: 'var(--sketch-terracotta)' }}>Q</span>
              </motion.span>
            )}
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="sketch-btn-ghost"
            style={{ padding: '4px 6px', borderRadius: 'var(--radius-sketch-sm)' }}
            aria-label={isMobile ? "Close menu" : (sidebarOpen ? "Collapse sidebar" : "Expand sidebar")}
          >
            {isMobile ? <X size={18} /> : (sidebarOpen ? <ChevronLeft size={16} /> : <Menu size={16} />)}
          </button>
        </div>

        {/* User Card */}
        <AnimatePresence>
          {(sidebarOpen || isMobile) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                padding: '12px 16px',
                borderBottom: '1.5px dashed var(--sketch-lead-light)',
                background: 'var(--sketch-paper)',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 'var(--radius-sketch-sm)',
                    background: 'var(--sketch-terracotta-wash)',
                    border: '1.5px solid var(--sketch-ink)',
                    color: 'var(--sketch-terracotta)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    flexShrink: 0,
                  }}
                >
                  {userName.charAt(0).toUpperCase()}
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      color: 'var(--sketch-ink)',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}
                  >
                    {userName}
                  </p>
                  <p
                    className="sketch-handwriting"
                    style={{
                      margin: 0,
                      fontSize: '0.78rem',
                      color: 'var(--sketch-lead)',
                    }}
                  >
                    Week {pregnancyWeek} · Trimester {Math.ceil(pregnancyWeek / 13)}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Nav List */}
        <nav style={{ flex: 1, padding: 8, overflowY: 'auto', overflowX: 'hidden' }}>
          {items.map((item) => {
            const active = getActive(item);
            return (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate?.(item.action);
                  if (window.innerWidth < 1024) setSidebarOpen(false);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: (sidebarOpen || isMobile) ? 12 : 0,
                  justifyContent: (sidebarOpen || isMobile) ? 'flex-start' : 'center',
                  padding: '10px 12px',
                  marginBottom: 5,
                  cursor: 'pointer',
                  border: active ? '1.5px solid var(--sketch-ink)' : '1.5px solid transparent',
                  borderRadius: 'var(--radius-sketch-sm)',
                  background: active ? 'var(--sketch-terracotta-wash)' : 'transparent',
                  color: active ? 'var(--sketch-terracotta)' : 'var(--sketch-graphite)',
                  fontWeight: active ? 700 : 600,
                  fontSize: '0.82rem',
                  letterSpacing: '0.01em',
                  boxShadow: active ? '2px 2px 0px var(--sketch-ink)' : 'none',
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    const el = e.currentTarget;
                    el.style.background = 'var(--sketch-paper-tint)';
                    el.style.color = 'var(--sketch-ink)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    const el = e.currentTarget;
                    el.style.background = 'transparent';
                    el.style.color = 'var(--sketch-graphite)';
                  }
                }}
              >
                <item.icon size={18} style={{ flexShrink: 0 }} />
                {(sidebarOpen || isMobile) && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div style={{ padding: 8, borderTop: '1.5px dashed var(--sketch-lead-light)' }}>
          {confirmLogout ? (
            /* Inline confirm row */
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px' }}>
              {(sidebarOpen || isMobile) && (
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--sketch-ink)', flex: 1, whiteSpace: 'nowrap' }}>
                  Sure?
                </span>
              )}
              <button
                onClick={() => { setConfirmLogout(false); onLogout?.(); }}
                title="Yes, log out"
                style={{
                  background: 'var(--sketch-terracotta)',
                  color: 'var(--sketch-paper)',
                  border: '1.5px solid var(--sketch-ink)',
                  borderRadius: 'var(--radius-sketch-sm)',
                  boxShadow: '2px 2px 0 var(--sketch-ink)',
                  padding: '5px 8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                <Check size={13} />{sidebarOpen && ' Yes'}
              </button>
              <button
                onClick={() => setConfirmLogout(false)}
                title="Cancel"
                style={{
                  background: 'var(--sketch-paper)',
                  color: 'var(--sketch-ink)',
                  border: '1.5px solid var(--sketch-ink)',
                  borderRadius: 'var(--radius-sketch-sm)',
                  boxShadow: '2px 2px 0 var(--sketch-ink)',
                  padding: '5px 8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                <X size={13} />{sidebarOpen && ' No'}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmLogout(true)}
              className="sketch-btn-ghost"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: (sidebarOpen || isMobile) ? 12 : 0,
                justifyContent: (sidebarOpen || isMobile) ? 'flex-start' : 'center',
                padding: '10px 12px',
                color: 'var(--sketch-terracotta)',
                borderColor: 'transparent',
              }}
            >
              <LogOut size={18} />
              {(sidebarOpen || isMobile) && <span>Logout</span>}
            </button>
          )}
        </div>
      </motion.aside>
    </>
  );
}
