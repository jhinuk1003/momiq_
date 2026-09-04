import { useState, useRef } from 'react';
import { Camera, User, Bell, Lock, Palette, Globe, HelpCircle, ChevronRight, Save, Check, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface SettingsScreenProps {
  onBack?: () => void;
  userName?: string;
  userEmail?: string;
}

const sketchColorThemes = [
  { name: 'Warm Terracotta', wash: 'var(--sketch-terracotta-wash)', accent: 'var(--sketch-terracotta)' },
  { name: 'Sage Botanicals', wash: 'var(--sketch-sage-wash)', accent: 'var(--sketch-sage)' },
  { name: 'Blueprint Indigo', wash: 'var(--sketch-blueprint-wash)', accent: 'var(--sketch-blueprint)' },
  { name: 'Amber Ochre', wash: 'var(--sketch-ochre-wash)', accent: 'var(--sketch-ochre)' },
  { name: 'Soft Rose', wash: 'var(--sketch-rose-wash)', accent: 'var(--sketch-rose)' },
];

const languages = ['English', 'हिंदी (Hindi)', 'বাংলা (Bengali)', 'తెలుగు (Telugu)', 'मराठी (Marathi)'];

export function SettingsScreen({ onBack, userName: propName = 'User', userEmail: propEmail = '' }: SettingsScreenProps) {
  const [name, setName] = useState(propName);
  const [email, setEmail] = useState(propEmail);
  const [phone, setPhone] = useState('+91 98765 43210');
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [language, setLanguage] = useState('English');
  const [notif, setNotif] = useState({ reminders: true, appointments: true, milestones: true, health: true });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ width: '100%', maxWidth: 860, margin: '0 auto' }}>
      {/* Back button */}
      {onBack && (
        <div style={{ marginBottom: 20 }}>
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Overview
          </Button>
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 14 }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span className="sketch-badge sketch-badge-terracotta">
              Spec 15 // System Configurations
            </span>
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
            Maternal Preferences & Settings
          </h1>
        </div>
        <Button onClick={handleSave}>
          <Save size={16} /> {saved ? 'Configuration Saved' : 'Save Preferences'}
        </Button>
      </div>

      {/* Identity Configuration */}
      <div className="sketch-card" style={{ background: 'var(--sketch-paper)', padding: '24px', marginBottom: 22 }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 16px', borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 8 }}>
          Maternal Account Details
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: 4 }}>
              Account Holder Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="sketch-input"
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: 4 }}>
              Registered Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sketch-input"
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: 4 }}>
              Primary Mobile
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="sketch-input"
            />
          </div>
        </div>
      </div>

      {/* Aesthetic Tone Washes */}
      <div className="sketch-card" style={{ background: 'var(--sketch-paper)', padding: '24px', marginBottom: 22 }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 14px', borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 8 }}>
          Drafting Watercolor Palette
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10 }}>
          {sketchColorThemes.map((t, idx) => {
            const isSelected = selectedTheme === idx;
            return (
              <button
                key={t.name}
                onClick={() => setSelectedTheme(idx)}
                style={{
                  padding: '12px 10px',
                  borderRadius: 'var(--radius-sketch-sm)',
                  border: isSelected ? '2px solid var(--sketch-ink)' : '1.5px dashed var(--sketch-lead)',
                  background: t.wash,
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: isSelected ? '2.5px 2.5px 0 var(--sketch-ink)' : 'none',
                }}
              >
                <p style={{ margin: 0, fontWeight: 700, fontSize: '0.86rem', color: t.accent }}>
                  {isSelected ? '✓ ' : ''}{t.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Notifications & Language */}
      <div className="sketch-card" style={{ background: 'var(--sketch-paper)', padding: '24px' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 16px', borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 8 }}>
          Alarms & Localization
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem' }}>Daily Medication & Vitamin Alarms</p>
              <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.82rem', color: 'var(--sketch-lead)' }}>Push prompts for scheduled supplements</p>
            </div>
            <button
              onClick={() => setNotif({ ...notif, reminders: !notif.reminders })}
              className="sketch-btn-secondary"
              style={{ padding: '6px 14px', fontSize: '0.8rem' }}
            >
              {notif.reminders ? 'Enabled ✓' : 'Disabled'}
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem' }}>Anatomy Ultrasound & Clinic Calendar Sync</p>
              <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.82rem', color: 'var(--sketch-lead)' }}>24-hour advance doctor notice</p>
            </div>
            <button
              onClick={() => setNotif({ ...notif, appointments: !notif.appointments })}
              className="sketch-btn-secondary"
              style={{ padding: '6px 14px', fontSize: '0.8rem' }}
            >
              {notif.appointments ? 'Enabled ✓' : 'Disabled'}
            </button>
          </div>

          <div style={{ borderTop: '1.5px dashed var(--sketch-lead-light)', paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem' }}>Maternal Language</p>
              <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.82rem', color: 'var(--sketch-lead)' }}>Local dialect for health guides</p>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="sketch-input"
              style={{ width: 'auto', padding: '6px 12px', fontSize: '0.85rem' }}
            >
              {languages.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
