import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Menu, Heart } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userName?: string;
  pregnancyWeek?: number;
  currentView: string;
  onNavigate: (view: string) => void;
  onLogout?: () => void;
}

export function DashboardLayout({
  children,
  userName = 'User',
  pregnancyWeek = 14,
  currentView,
  onNavigate,
  onLogout,
}: DashboardLayoutProps) {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );
  const [sidebarOpen, setSidebarOpen] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarWidth = isDesktop ? (sidebarOpen ? 256 : 74) : 0;

  // Format title for current view
  const getViewTitle = (v: string) => {
    const map: Record<string, string> = {
      dashboard: 'Dashboard',
      calendar: 'Smart Calendar',
      baby: 'Baby Development',
      health: 'Health Monitoring',
      aiDoctorChat: 'AI Doctor Consultation',
      smartReminders: 'Smart Reminders',
      supportGroups: 'Support Groups',
      expertArticles: 'Expert Articles',
      personalizedMusic: 'Prenatal Soundscapes',
      settings: 'Settings',
    };
    return map[v] || 'MomiQ';
  };

  return (
    <div className="dashboard-container">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        userName={userName}
        pregnancyWeek={pregnancyWeek}
        onNavigate={onNavigate}
        currentView={currentView}
        onLogout={onLogout}
      />

      {/* Main content */}
      <main
        className="dashboard-main"
        style={{
          marginLeft: sidebarWidth,
        }}
      >
        {/* Mobile Header Bar (hidden on desktop) */}
        <div className="dashboard-mobile-header">
          <button
            onClick={() => setSidebarOpen(true)}
            className="sketch-btn-secondary"
            style={{ padding: '6px 10px', display: 'inline-flex', alignItems: 'center', gap: 6 }}
            aria-label="Open Navigation"
          >
            <Menu size={18} />
            <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Menu</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--sketch-ink)',
              }}
            >
              {getViewTitle(currentView)}
            </span>
          </div>

          <span className="sketch-badge sketch-badge-terracotta" style={{ fontSize: '0.72rem', padding: '3px 8px' }}>
            <Heart size={11} fill="currentColor" /> Wk {pregnancyWeek}
          </span>
        </div>

        <div style={{ width: '100%', maxWidth: 1100 }}>
          {children}
        </div>
      </main>
    </div>
  );
}
