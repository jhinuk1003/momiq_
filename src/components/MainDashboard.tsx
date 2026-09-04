import { useState } from 'react';
import {
  Activity, Heart, Weight, Smile, Pill, Stethoscope,
  Baby, MessageCircle, Plus, ChevronRight, Droplet, Sparkles,
} from 'lucide-react';

interface MainDashboardProps {
  userName?: string;
  pregnancyWeek?: number;
  pregnancyDay?: number;
  onNavigate?: (destination: string) => void;
}

export function MainDashboard({
  userName = 'User',
  pregnancyWeek = 14,
  pregnancyDay = 3,
  onNavigate,
}: MainDashboardProps) {
  const [healthData] = useState({
    bloodPressure: '120/80',
    bloodSugar: '95 mg/dL',
    weight: '148 lbs',
    mood: 'Serene & Calm',
  });

  const [todayAlerts] = useState([
    { id: 1, type: 'medicine', title: 'Prenatal Multivitamin & DHA', time: '9:00 AM', completed: true },
    { id: 2, type: 'appointment', title: 'Anatomy Ultrasound Consult', time: '2:30 PM', completed: false },
    { id: 3, type: 'medicine', title: 'Iron Supplement & Orange Juice', time: '9:00 PM', completed: false },
  ]);

  const trimester = pregnancyWeek <= 13 ? 'First' : pregnancyWeek <= 26 ? 'Second' : 'Third';
  const pct = Math.round((pregnancyWeek / 40) * 100);
  const daysLeft = 280 - (pregnancyWeek * 7 + pregnancyDay);

  return (
    <div style={{ width: '100%' }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span className="sketch-badge sketch-badge-terracotta">
            Clinical Log // Week {pregnancyWeek}, Day {pregnancyDay}
          </span>
          <span className="sketch-handwriting" style={{ fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
            // {trimester} Trimester
          </span>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--sketch-ink)' }}>
          Welcome Back, {userName}{' '}
          <span className="sketch-handwriting" style={{ fontSize: '1.8rem', color: 'var(--sketch-terracotta)', fontWeight: 400 }}>
            // Journal open
          </span>
        </h1>
        <p className="sketch-note" style={{ margin: 0, fontSize: '1.05rem', color: 'var(--sketch-graphite)' }}>
          "Fetal movements rhythmic and active. Maintain optimal hydration and rest intervals."
        </p>
      </div>

      {/* Pregnancy Progress Ruler Card */}
      <div
        className="sketch-card sketch-crosshair"
        style={{
          background: 'var(--sketch-paper)',
          padding: '24px',
          marginBottom: 24,
          boxShadow: '4px 5px 0 var(--sketch-ink)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 'var(--radius-sketch-sm)',
                background: 'var(--sketch-terracotta-wash)',
                border: '1.5px solid var(--sketch-ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--sketch-terracotta)',
              }}
            >
              <Baby size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
                Gestational Arc Progression
              </h2>
              <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
                {pct}% of gestational cycle completed
              </p>
            </div>
          </div>
          <span className="sketch-badge sketch-badge-sage" style={{ fontSize: '0.8rem' }}>
            Week {pregnancyWeek} of 40
          </span>
        </div>

        {/* Draftsman Ruler Progress Bar */}
        <div
          style={{
            position: 'relative',
            height: '26px',
            background: 'var(--sketch-paper-tint)',
            border: '1.8px solid var(--sketch-ink)',
            borderRadius: 'var(--radius-sketch-sm)',
            marginBottom: 20,
            overflow: 'hidden',
          }}
        >
          {/* Ruler Millimeter Ticks Background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'repeating-linear-gradient(to right, var(--sketch-lead-light) 0, var(--sketch-lead-light) 1px, transparent 1px, transparent 10px)',
              opacity: 0.6,
              pointerEvents: 'none',
            }}
          />
          {/* Active Fill */}
          <div
            style={{
              height: '100%',
              width: `${pct}%`,
              background: 'var(--sketch-terracotta)',
              borderRight: '2px solid var(--sketch-ink)',
              transition: 'width 0.4s ease',
              position: 'relative',
            }}
          />
        </div>

        {/* 4 Metric Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 12 }}>
          {[
            { label: 'Current Week', val: `Wk ${pregnancyWeek}`, wash: 'var(--sketch-terracotta-wash)', accent: 'var(--sketch-terracotta)' },
            { label: 'Days to Arrival', val: `${daysLeft} Days`, wash: 'var(--sketch-sage-wash)', accent: 'var(--sketch-sage)' },
            { label: 'Trimester', val: `${trimester}`, wash: 'var(--sketch-blueprint-wash)', accent: 'var(--sketch-blueprint)' },
            { label: 'Gestation Day', val: `Day ${pregnancyDay}`, wash: 'var(--sketch-ochre-wash)', accent: 'var(--sketch-ochre)' },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: item.wash,
                border: '1.5px solid var(--sketch-ink)',
                borderRadius: 'var(--radius-sketch-sm)',
                padding: '12px 14px',
                boxShadow: '2px 2px 0 var(--sketch-ink)',
              }}
            >
              <p className="sketch-handwriting" style={{ margin: '0 0 2px', fontSize: '0.82rem', color: 'var(--sketch-graphite)' }}>
                {item.label}
              </p>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.4rem', margin: 0, color: 'var(--sketch-ink)' }}>
                {item.val}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Vitals Biometric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 16, marginBottom: 24 }}>
        {[
          { icon: Activity, label: 'Blood Pressure', val: healthData.bloodPressure, note: 'Normal range', wash: 'var(--sketch-terracotta-wash)', accent: 'var(--sketch-terracotta)' },
          { icon: Droplet, label: 'Blood Glucose', val: healthData.bloodSugar, note: 'Fasting stable', wash: 'var(--sketch-blueprint-wash)', accent: 'var(--sketch-blueprint)' },
          { icon: Weight, label: 'Maternal Weight', val: healthData.weight, note: '+12 lbs total', wash: 'var(--sketch-ochre-wash)', accent: 'var(--sketch-ochre)' },
          { icon: Smile, label: 'Emotional State', val: healthData.mood, note: 'Equilibrium good', wash: 'var(--sketch-sage-wash)', accent: 'var(--sketch-sage)' },
        ].map((m, idx) => (
          <div
            key={idx}
            className="sketch-card"
            style={{
              background: m.wash,
              padding: '18px 16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
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
                <m.icon size={18} color={m.accent} />
              </div>
              <span className="sketch-badge" style={{ fontSize: '0.68rem', background: 'var(--sketch-paper)' }}>
                {m.note}
              </span>
            </div>
            <p className="sketch-handwriting" style={{ margin: '0 0 2px', fontSize: '0.85rem', color: 'var(--sketch-graphite)' }}>
              {m.label}
            </p>
            <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.35rem', margin: 0, color: 'var(--sketch-ink)' }}>
              {m.val}
            </p>
          </div>
        ))}
      </div>

      {/* Two Column Section: Fetal Size Metaphor & Today's Schedule */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        {/* Fetal Developmental Size Card */}
        <div
          className="sketch-card"
          style={{
            background: 'var(--sketch-paper)',
            padding: '22px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 8 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
              🫑 Week 14 Size Comparison
            </h3>
            <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
              [Spec: Lemon to Bell Pepper]
            </span>
          </div>

          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: 'var(--radius-sketch-sm)',
                background: 'var(--sketch-sage-wash)',
                border: '1.5px solid var(--sketch-ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                flexShrink: 0,
              }}
            >
              🫑
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '1.1rem', margin: '0 0 4px', color: 'var(--sketch-ink)' }}>
                Bell Pepper Scale
              </p>
              <p className="sketch-handwriting" style={{ fontSize: '0.95rem', color: 'var(--sketch-graphite)', margin: '0 0 10px' }}>
                Approx 5.6 inches · 6.7 ounces (190g)
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {['Thumb sucking reflex observed', 'Unique fingerprint ridges forming', 'Practicing respiratory chest movements'].map((m, i) => (
                  <li key={i} style={{ fontSize: '0.82rem', color: 'var(--sketch-graphite)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: 'var(--sketch-terracotta)', fontWeight: 700 }}>✓</span> {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Today's Clinical Schedule */}
        <div
          className="sketch-card"
          style={{
            background: 'var(--sketch-paper)',
            padding: '22px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 8 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
              Today's Care Regimen
            </h3>
            <button
              onClick={() => onNavigate?.('smartReminders')}
              style={{ background: 'none', border: 'none', color: 'var(--sketch-terracotta)', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
            >
              All Alarms <ChevronRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {todayAlerts.map((alert) => (
              <div
                key={alert.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 14px',
                  background: alert.completed ? 'var(--sketch-paper-tint)' : 'var(--sketch-paper)',
                  border: '1.5px solid var(--sketch-ink)',
                  borderRadius: 'var(--radius-sketch-sm)',
                  boxShadow: alert.completed ? 'none' : '2px 2px 0 var(--sketch-ink)',
                  opacity: alert.completed ? 0.75 : 1,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 'var(--radius-sketch-sm)',
                    background: alert.type === 'medicine' ? 'var(--sketch-blueprint-wash)' : 'var(--sketch-terracotta-wash)',
                    border: '1.5px solid var(--sketch-ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {alert.type === 'medicine' ? <Pill size={15} color="var(--sketch-blueprint)" /> : <Stethoscope size={15} color="var(--sketch-terracotta)" />}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, fontSize: '0.88rem', margin: 0, textDecoration: alert.completed ? 'line-through' : 'none', color: 'var(--sketch-ink)' }}>
                    {alert.title}
                  </p>
                  <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.78rem', color: 'var(--sketch-lead)' }}>
                    {alert.time}
                  </p>
                </div>
                {alert.completed && (
                  <span className="sketch-badge sketch-badge-sage" style={{ fontSize: '0.65rem' }}>
                    Done ✓
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Quick Launch Instruments */}
      <div
        className="sketch-card"
        style={{
          background: 'var(--sketch-paper-tint)',
          padding: '20px 24px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
            Quick Clinical Dispatch
          </h3>
          <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
            Instant Navigation
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          <button onClick={() => onNavigate?.('aiDoctorChat')} className="sketch-btn-primary" style={{ justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <MessageCircle size={18} /> AI Doctor Chat
            </span>
            <ChevronRight size={16} />
          </button>
          <button onClick={() => onNavigate?.('smartReminders')} className="sketch-btn-secondary" style={{ justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Plus size={18} /> Add Reminder
            </span>
            <ChevronRight size={16} />
          </button>
          <button onClick={() => onNavigate?.('baby')} className="sketch-btn-secondary" style={{ justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Baby size={18} /> Baby Development
            </span>
            <ChevronRight size={16} />
          </button>
          <button onClick={() => onNavigate?.('supportGroups')} className="sketch-btn-secondary" style={{ justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Heart size={18} /> Mother Circles
            </span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
