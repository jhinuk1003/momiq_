import { useState } from 'react';
import { ArrowLeft, Activity, Plus, Minus, Save, Droplets, Thermometer, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface HealthMonitoringProps {
  onBack?: () => void;
}

export function HealthMonitoring({ onBack }: HealthMonitoringProps) {
  const [feeling, setFeeling] = useState('good');
  const [symptoms, setSymptoms] = useState<string[]>(['Fatigue']);
  const [weight, setWeight] = useState('148');
  const [notes, setNotes] = useState('');
  const [todayKicks, setTodayKicks] = useState(12);
  const [heartRate, setHeartRate] = useState('78');
  const [bpSys, setBpSys] = useState('120');
  const [bpDia, setBpDia] = useState('80');
  const [bloodSugar, setBloodSugar] = useState('95');
  const [hemoglobin, setHemoglobin] = useState('12.4');
  const [saved, setSaved] = useState(false);

  const feelingOpts = [
    { val: 'great', label: 'Great 😊', wash: 'var(--sketch-sage-wash)' },
    { val: 'good', label: 'Serene 🙂', wash: 'var(--sketch-blueprint-wash)' },
    { val: 'okay', label: 'Neutral 😐', wash: 'var(--sketch-ochre-wash)' },
    { val: 'tired', label: 'Fatigued 😴', wash: 'var(--sketch-terracotta-wash)' },
    { val: 'unwell', label: 'Queasy 😰', wash: 'var(--sketch-rose-wash)' },
  ];

  const symptomOpts = [
    'Nausea', 'Fatigue', 'Headache', 'Back Pain', 'Swelling',
    'Dizziness', 'Heartburn', 'Insomnia', 'Leg Cramps', 'Mood Swings',
  ];

  const toggleSymptom = (s: string) =>
    setSymptoms((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div style={{ width: '100%', maxWidth: 860, margin: '0 auto' }}>
      {onBack && (
        <div style={{ marginBottom: 20 }}>
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Overview
          </Button>
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span className="sketch-badge sketch-badge-terracotta">
            <Sparkles size={14} /> Spec 10 // Clinical Maternal Observation Log
          </span>
          <span className="sketch-handwriting" style={{ fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
            [Daily Vitals & Biometrics]
          </span>
        </div>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--sketch-ink)' }}>
          Clinical Vitals & Symptom Log
        </h1>
        <p className="sketch-note" style={{ fontSize: '1.05rem', color: 'var(--sketch-graphite)', margin: 0 }}>
          "Archiving daily blood pressure, maternal glucose curves, and physiological symptoms for your obstetric record."
        </p>
      </div>

      {/* Mood & Energy State */}
      <div className="sketch-card" style={{ background: 'var(--sketch-paper)', padding: '24px', marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 8 }}>
          <Activity size={18} color="var(--sketch-terracotta)" />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
            1. Maternal Energy & General Well-Being
          </h2>
        </div>

        <p className="sketch-handwriting" style={{ fontSize: '0.95rem', color: 'var(--sketch-graphite)', marginBottom: 12 }}>
          // Record emotional and somatic feeling today
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10, marginBottom: 20 }}>
          {feelingOpts.map((o) => {
            const isSelected = feeling === o.val;
            return (
              <button
                key={o.val}
                type="button"
                onClick={() => setFeeling(o.val)}
                style={{
                  padding: '12px 10px',
                  borderRadius: 'var(--radius-sketch-sm)',
                  border: isSelected ? '2px solid var(--sketch-ink)' : '1.5px dashed var(--sketch-lead)',
                  background: isSelected ? o.wash : 'var(--sketch-paper)',
                  color: isSelected ? 'var(--sketch-ink)' : 'var(--sketch-graphite)',
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '2.5px 2.5px 0 var(--sketch-ink)' : 'none',
                  transition: 'all 0.1s',
                }}
              >
                {o.label}
              </button>
            );
          })}
        </div>

        {/* Symptoms checklist */}
        <p className="sketch-handwriting" style={{ fontSize: '0.95rem', color: 'var(--sketch-graphite)', marginBottom: 10 }}>
          // Observed somatic symptoms (tap to toggle active status)
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {symptomOpts.map((s) => {
            const active = symptoms.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggleSymptom(s)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-sketch-sm)',
                  border: active ? '1.8px solid var(--sketch-ink)' : '1.5px dashed var(--sketch-lead)',
                  background: active ? 'var(--sketch-terracotta-wash)' : 'transparent',
                  color: active ? 'var(--sketch-terracotta)' : 'var(--sketch-graphite)',
                  fontWeight: active ? 700 : 500,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  boxShadow: active ? '2px 2px 0 var(--sketch-ink)' : 'none',
                  transition: 'all 0.1s',
                }}
              >
                {active ? '✓ ' : '+ '} {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Biometric Measurements Grid */}
      <div className="sketch-card" style={{ background: 'var(--sketch-paper)', padding: '24px', marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 8 }}>
          <Droplets size={18} color="var(--sketch-blueprint)" />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
            2. Biometric Laboratory Logs
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 20 }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 6 }}>
              Blood Pressure (Sys / Dia)
            </label>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input
                type="number"
                value={bpSys}
                onChange={(e) => setBpSys(e.target.value)}
                className="sketch-input"
                style={{ width: 80 }}
                placeholder="120"
              />
              <span style={{ fontWeight: 700, color: 'var(--sketch-lead)' }}>/</span>
              <input
                type="number"
                value={bpDia}
                onChange={(e) => setBpDia(e.target.value)}
                className="sketch-input"
                style={{ width: 80 }}
                placeholder="80"
              />
              <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>mmHg</span>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 6 }}>
              Fasting Blood Sugar
            </label>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input
                type="number"
                value={bloodSugar}
                onChange={(e) => setBloodSugar(e.target.value)}
                className="sketch-input"
                style={{ width: 100 }}
                placeholder="95"
              />
              <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>mg/dL</span>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 6 }}>
              Hemoglobin (Hb) Level
            </label>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input
                type="text"
                value={hemoglobin}
                onChange={(e) => setHemoglobin(e.target.value)}
                className="sketch-input"
                style={{ width: 100 }}
                placeholder="12.4"
              />
              <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>g/dL</span>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 6 }}>
              Current Weight
            </label>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="sketch-input"
                style={{ width: 100 }}
                placeholder="148"
              />
              <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>lbs</span>
            </div>
          </div>
        </div>

        {/* Kick Counter in Health Log */}
        <div style={{ background: 'var(--sketch-paper-tint)', border: '1.5px solid var(--sketch-ink)', padding: '16px', borderRadius: 'var(--radius-sketch-sm)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
          <div>
            <h4 style={{ margin: '0 0 2px', fontSize: '0.98rem', fontWeight: 700 }}>Today's Movement Score</h4>
            <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
              10+ movements per 2-hour window indicates healthy fetal reactivity
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Button variant="secondary" onClick={() => setTodayKicks((k) => Math.max(0, k - 1))} style={{ width: 36, height: 36, padding: 0 }}>
              <Minus size={16} />
            </Button>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.6rem', minWidth: 32, textAlign: 'center' }}>
              {todayKicks}
            </span>
            <Button onClick={() => setTodayKicks((k) => k + 1)} style={{ width: 36, height: 36, padding: 0 }}>
              <Plus size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Clinical Field Notes & Save */}
      <div className="sketch-card" style={{ background: 'var(--sketch-paper)', padding: '24px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 10px', color: 'var(--sketch-ink)' }}>
          Clinical Marginalia & Maternal Notes
        </h3>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Document questions for doctor, dietary reactions, or unusual sleep patterns..."
          className="sketch-input"
          style={{ minHeight: 90, marginBottom: 16 }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="sketch-handwriting" style={{ fontSize: '0.88rem', color: 'var(--sketch-lead)' }}>
            {saved ? '✓ Specimen log synced with medical archive!' : '// Ready to commit log entry'}
          </span>
          <Button onClick={handleSave}>
            <Save size={16} /> {saved ? 'Entry Recorded' : 'Archive Entry'}
          </Button>
        </div>
      </div>
    </div>
  );
}