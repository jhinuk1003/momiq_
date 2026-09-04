import { useState } from 'react';
import {
  Bell, Pill, Stethoscope, Plus, Activity,
  Heart, X, Syringe, Check, Droplet, ArrowLeft,
} from 'lucide-react';
import { VaccineTracker } from './VaccineTracker';
import { Button } from './ui/button';

interface Reminder {
  id: number;
  title: string;
  type: string;
  time: string;
  date: string;
  completed: boolean;
  enabled: boolean;
}

interface Alert {
  id: number;
  title: string;
  description: string;
  time: string;
  wash: string;
  enabled: boolean;
}

interface SmartRemindersProps {
  onBack?: () => void;
}

export function SmartReminders({ onBack }: SmartRemindersProps) {
  const [showVaccine, setShowVaccine] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newR, setNewR] = useState({ title: '', type: 'medication', time: '', date: '' });

  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: 'Prenatal Multivitamin & Folate', type: 'medication', time: '08:00 AM', date: '2026-09-20', completed: false, enabled: true },
    { id: 2, title: 'Elemental Iron & Vitamin C', type: 'medication', time: '02:00 PM', date: '2026-09-20', completed: false, enabled: true },
    { id: 3, title: 'Doctor Clinical Consult – Week 20', type: 'appointment', time: '10:30 AM', date: '2026-09-22', completed: false, enabled: true },
    { id: 4, title: 'Fasting Oral Glucose Tolerance Test', type: 'health', time: '09:00 AM', date: '2026-09-25', completed: false, enabled: true },
  ]);

  const [alerts, setAlerts] = useState<Alert[]>([
    { id: 1, title: 'Hydration Protocol', description: 'Drink a glass of water for amniotic fluid balance', time: 'Every 2 hours', wash: 'var(--sketch-blueprint-wash)', enabled: true },
    { id: 2, title: 'Pelvic Floor & Gentle Mobility', description: '15-minute prenatal posture alignment', time: '06:00 PM Daily', wash: 'var(--sketch-sage-wash)', enabled: true },
    { id: 3, title: 'Left-Side Recumbent Rest', description: 'Rest on left side to optimize fetal circulation', time: '03:00 PM Daily', wash: 'var(--sketch-terracotta-wash)', enabled: true },
  ]);

  const addReminder = () => {
    if (newR.title && newR.time && newR.date) {
      setReminders((p) => [...p, { id: Date.now(), ...newR, completed: false, enabled: true }]);
      setNewR({ title: '', type: 'medication', time: '', date: '' });
      setShowAddForm(false);
    }
  };

  const toggleCompleted = (id: number) => {
    setReminders((p) => p.map((r) => (r.id === id ? { ...r, completed: !r.completed } : r)));
  };

  if (showVaccine) return <VaccineTracker onBack={() => setShowVaccine(false)} />;

  return (
    <div style={{ width: '100%', maxWidth: 880, margin: '0 auto' }}>
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
              <Bell size={13} /> Spec 13 // Prescription & Clinical Reminders
            </span>
            <span className="sketch-handwriting" style={{ fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
              [Scheduled Regimen]
            </span>
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
            Maternal Prescription & Alarms
          </h1>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus size={16} /> New Reminder Slip
        </Button>
      </div>

      {/* Vaccine Tracker Banner */}
      <div
        onClick={() => setShowVaccine(true)}
        className="sketch-card"
        style={{
          background: 'var(--sketch-lavender-wash)',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          cursor: 'pointer',
          marginBottom: 24,
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 'var(--radius-sketch-sm)',
            background: 'var(--sketch-paper)',
            border: '1.5px solid var(--sketch-ink)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Syringe size={22} color="var(--sketch-terracotta)" />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: '0 0 2px', fontSize: '1.1rem', fontWeight: 700, color: 'var(--sketch-ink)' }}>
            Vaccination & Immunization Timeline
          </h3>
          <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.9rem', color: 'var(--sketch-graphite)' }}>
            // Tdap, Influenza, and Infant immunization schedule tracker
          </p>
        </div>
        <span className="sketch-badge sketch-badge-sage">Open Tracker →</span>
      </div>

      {/* Scheduled Reminders Card */}
      <div className="sketch-card" style={{ background: 'var(--sketch-paper)', padding: '24px', marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 10 }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
            Active Scheduled Regimen
          </h3>
          <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
            {reminders.filter((r) => !r.completed).length} items pending
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {reminders.map((r) => (
            <div
              key={r.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                background: r.completed ? 'var(--sketch-paper-tint)' : 'var(--sketch-paper)',
                border: '1.5px solid var(--sketch-ink)',
                borderRadius: 'var(--radius-sketch-sm)',
                boxShadow: r.completed ? 'none' : '2px 2.5px 0 var(--sketch-ink)',
                opacity: r.completed ? 0.75 : 1,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button
                  onClick={() => toggleCompleted(r.id)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 'var(--radius-sketch-sm)',
                    border: '1.8px solid var(--sketch-ink)',
                    background: r.completed ? 'var(--sketch-sage)' : 'var(--sketch-paper)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  {r.completed && <Check size={16} strokeWidth={3} />}
                </button>
                <div>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem', textDecoration: r.completed ? 'line-through' : 'none' }}>
                    {r.title}
                  </p>
                  <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.82rem', color: 'var(--sketch-lead)' }}>
                    {r.time} · Date: {r.date}
                  </p>
                </div>
              </div>
              <span className="sketch-badge" style={{ fontSize: '0.7rem' }}>
                {r.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Routine Daily Alarms */}
      <div className="sketch-card" style={{ background: 'var(--sketch-paper)', padding: '24px' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 16px', borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 10 }}>
          Continuous Maternal Wellness Prompts
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
          {alerts.map((a) => (
            <div
              key={a.id}
              style={{
                background: a.wash,
                border: '1.5px solid var(--sketch-ink)',
                borderRadius: 'var(--radius-sketch-sm)',
                padding: '16px',
                boxShadow: '2px 2px 0 var(--sketch-ink)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--sketch-ink)' }}>{a.title}</span>
                <span className="sketch-badge" style={{ background: 'var(--sketch-paper)', fontSize: '0.68rem' }}>{a.time}</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--sketch-graphite)', lineHeight: 1.45 }}>
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Form for New Reminder */}
      {showAddForm && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(40, 37, 33, 0.45)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
          onClick={() => setShowAddForm(false)}
        >
          <div
            className="sketch-card"
            style={{ width: '100%', maxWidth: 460, background: 'var(--sketch-paper)', padding: '28px', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAddForm(false)}
              className="sketch-btn-ghost"
              style={{ position: 'absolute', top: 12, right: 12, padding: 6 }}
            >
              <X size={16} />
            </button>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 16px', borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 8 }}>
              Draft New Reminder
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 4 }}>Reminder Title</label>
                <input
                  value={newR.title}
                  onChange={(e) => setNewR({ ...newR, title: e.target.value })}
                  placeholder="e.g. Calcium Tablet or Ultrasound"
                  className="sketch-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 4 }}>Time</label>
                  <input
                    type="time"
                    value={newR.time}
                    onChange={(e) => setNewR({ ...newR, time: e.target.value })}
                    className="sketch-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 4 }}>Date</label>
                  <input
                    type="date"
                    value={newR.date}
                    onChange={(e) => setNewR({ ...newR, date: e.target.value })}
                    className="sketch-input"
                  />
                </div>
              </div>

              <Button onClick={addReminder} style={{ marginTop: 8 }}>
                Schedule Reminder Slip
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}