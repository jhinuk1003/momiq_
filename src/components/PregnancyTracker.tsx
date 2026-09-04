import { useState } from 'react';
import { Card } from './ui/card';
import {
  Calendar,
  Activity,
  Heart,
  TrendingUp,
  Baby,
  ArrowLeft,
  Lightbulb,
  Clock,
  Sparkles,
  Play,
  RotateCcw,
} from 'lucide-react';
import { Button } from './ui/button';

interface PregnancyTrackerProps {
  onBack?: () => void;
}

interface PregnancyData {
  isPregnant: boolean;
  lmpDate: string;
  dueDate: string;
  weight: string;
  height: string;
  isFirstPregnancy: boolean | null;
}

export function PregnancyTracker({ onBack }: PregnancyTrackerProps) {
  const [currentView, setCurrentView] = useState<'setup' | 'summary' | 'dashboard'>('setup');
  const [kickCount, setKickCount] = useState(0);
  const [contractionTimer, setContractionTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  const [pregnancyData, setPregnancyData] = useState<PregnancyData>({
    isPregnant: true,
    lmpDate: '2026-05-15',
    dueDate: '2027-02-19',
    weight: '148',
    height: '165',
    isFirstPregnancy: true,
  });

  const calculateDueDate = (lmpDate: string) => {
    if (!lmpDate) return '';
    const lmp = new Date(lmpDate);
    const dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + 280);
    return dueDate.toISOString().split('T')[0];
  };

  const calculatePregnancyWeek = (lmpDate: string) => {
    if (!lmpDate) return { week: 14, day: 3 };
    const lmp = new Date(lmpDate);
    const today = new Date();
    const diffTime = today.getTime() - lmp.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const week = Math.max(1, Math.min(40, Math.floor(diffDays / 7) || 14));
    const day = Math.max(0, diffDays % 7 || 3);
    return { week, day };
  };

  const handleLmpChange = (date: string) => {
    setPregnancyData({
      ...pregnancyData,
      lmpDate: date,
      dueDate: calculateDueDate(date),
    });
  };

  // Setup View
  if (currentView === 'setup') {
    return (
      <div style={{ width: '100%', maxWidth: 680, margin: '0 auto', padding: '16px 0 40px' }}>
        {onBack && (
          <div style={{ marginBottom: 20 }}>
            <Button variant="ghost" onClick={onBack}>
              <ArrowLeft size={16} /> Back to Overview
            </Button>
          </div>
        )}

        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <span className="sketch-badge sketch-badge-terracotta">
              <Sparkles size={13} /> SPEC 01 // MATERNAL INITIATION
            </span>
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--sketch-ink)' }}>
            Initiate Your Maternal Journal
          </h1>
          <p className="sketch-note" style={{ fontSize: '1.05rem', color: 'var(--sketch-graphite)', margin: 0 }}>
            "Provide your baseline dates to calibrate weekly fetal milestones and clinical reminders."
          </p>
        </div>

        <Card style={{ padding: '32px 28px', background: 'var(--sketch-paper)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Is Pregnant Selection */}
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: 8, color: 'var(--sketch-ink)' }}>
                Current Gestational Status
              </label>
              <div style={{ display: 'flex', gap: 12 }}>
                <Button
                  type="button"
                  variant={pregnancyData.isPregnant ? 'primary' : 'secondary'}
                  onClick={() => setPregnancyData({ ...pregnancyData, isPregnant: true })}
                  style={{ flex: 1 }}
                >
                  ✓ Currently Expecting
                </Button>
                <Button
                  type="button"
                  variant={!pregnancyData.isPregnant ? 'primary' : 'secondary'}
                  onClick={() => setPregnancyData({ ...pregnancyData, isPregnant: false })}
                  style={{ flex: 1 }}
                >
                  Postpartum / Planning
                </Button>
              </div>
            </div>

            {/* Last Menstrual Period */}
            <div>
              <label htmlFor="lmp" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: 6, color: 'var(--sketch-ink)' }}>
                Last Menstrual Period (LMP) Date <span style={{ color: 'var(--sketch-terracotta)' }}>*</span>
              </label>
              <input
                id="lmp"
                type="date"
                value={pregnancyData.lmpDate}
                onChange={(e) => handleLmpChange(e.target.value)}
                className="sketch-input"
                required
              />
              <span className="sketch-handwriting" style={{ fontSize: '0.82rem', color: 'var(--sketch-lead)', marginTop: 4, display: 'block' }}>
                // Used for Naegele's rule calculation (+280 days)
              </span>
            </div>

            {/* Expected Due Date */}
            <div>
              <label htmlFor="dueDate" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: 6, color: 'var(--sketch-ink)' }}>
                Estimated Clinical Due Date (EDD) <span style={{ color: 'var(--sketch-terracotta)' }}>*</span>
              </label>
              <input
                id="dueDate"
                type="date"
                value={pregnancyData.dueDate}
                onChange={(e) => setPregnancyData({ ...pregnancyData, dueDate: e.target.value })}
                className="sketch-input"
              />
            </div>

            {/* Weight and Height */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label htmlFor="weight" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: 6, color: 'var(--sketch-ink)' }}>
                  Pre-pregnancy Weight (lbs)
                </label>
                <input
                  id="weight"
                  type="number"
                  placeholder="e.g. 145"
                  value={pregnancyData.weight}
                  onChange={(e) => setPregnancyData({ ...pregnancyData, weight: e.target.value })}
                  className="sketch-input"
                />
              </div>
              <div>
                <label htmlFor="height" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: 6, color: 'var(--sketch-ink)' }}>
                  Maternal Height (cm)
                </label>
                <input
                  id="height"
                  type="number"
                  placeholder="e.g. 165"
                  value={pregnancyData.height}
                  onChange={(e) => setPregnancyData({ ...pregnancyData, height: e.target.value })}
                  className="sketch-input"
                />
              </div>
            </div>

            <Button
              onClick={() => setCurrentView('summary')}
              style={{ width: '100%', padding: '14px', marginTop: 10 }}
            >
              Generate Gestational Roadmap →
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Summary View
  if (currentView === 'summary') {
    const { week, day } = calculatePregnancyWeek(pregnancyData.lmpDate);
    const trimester = week <= 13 ? 'First Trimester' : week <= 26 ? 'Second Trimester' : 'Third Trimester';

    return (
      <div style={{ width: '100%', maxWidth: 680, margin: '0 auto', padding: '16px 0 40px' }}>
        <div style={{ marginBottom: 20 }}>
          <Button variant="ghost" onClick={() => setCurrentView('setup')}>
            <ArrowLeft size={16} /> Edit Baseline Parameters
          </Button>
        </div>

        <Card style={{ padding: '32px', background: 'var(--sketch-paper)' }} className="sketch-crosshair">
          <div style={{ textAlign: 'center', marginBottom: 24, borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 16 }}>
            <span className="sketch-badge sketch-badge-sage" style={{ marginBottom: 8 }}>
              CALCULATED SPECIFICATION // READY
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '6px 0', color: 'var(--sketch-ink)' }}>
              Week {week}, Day {day}
            </h2>
            <p className="sketch-handwriting" style={{ margin: 0, fontSize: '1rem', color: 'var(--sketch-terracotta)' }}>
              EDD: {pregnancyData.dueDate} · {trimester}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 24 }}>
            <div style={{ background: 'var(--sketch-terracotta-wash)', border: '1.5px solid var(--sketch-ink)', padding: '14px', borderRadius: 'var(--radius-sketch-sm)' }}>
              <p className="sketch-handwriting" style={{ margin: '0 0 2px', fontSize: '0.85rem', color: 'var(--sketch-graphite)' }}>Current Phase</p>
              <p style={{ fontWeight: 700, fontSize: '1.1rem', margin: 0, color: 'var(--sketch-ink)' }}>{trimester}</p>
            </div>
            <div style={{ background: 'var(--sketch-sage-wash)', border: '1.5px solid var(--sketch-ink)', padding: '14px', borderRadius: 'var(--radius-sketch-sm)' }}>
              <p className="sketch-handwriting" style={{ margin: '0 0 2px', fontSize: '0.85rem', color: 'var(--sketch-graphite)' }}>Gestational Milestones</p>
              <p style={{ fontWeight: 700, fontSize: '1.1rem', margin: 0, color: 'var(--sketch-ink)' }}>Week {week} of 40 Active</p>
            </div>
          </div>

          <div style={{ background: 'var(--sketch-paper-tint)', border: '1.5px solid var(--sketch-ink)', padding: '18px', borderRadius: 'var(--radius-sketch-sm)', marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Lightbulb size={18} color="var(--sketch-ochre)" />
              <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700 }}>Immediate Recommended Protocol</h4>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.88rem', color: 'var(--sketch-graphite)' }}>
              <li>✓ Schedule anatomy ultrasound between gestational weeks 18 and 22</li>
              <li>✓ Maintain daily prenatal folate & iron supplementation with water</li>
              <li>✓ Log biometric blood pressure curve twice weekly</li>
            </ul>
          </div>

          <Button onClick={() => setCurrentView('dashboard')} style={{ width: '100%', padding: '14px' }}>
            Open Living Tracker Dashboard →
          </Button>
        </Card>
      </div>
    );
  }

  // Active Dashboard View
  const { week, day } = calculatePregnancyWeek(pregnancyData.lmpDate);
  const pct = Math.round((week / 40) * 100);

  return (
    <div style={{ width: '100%' }}>
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
              Week {week}, Day {day}
            </span>
            <span className="sketch-handwriting" style={{ fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
              // Due: {pregnancyData.dueDate}
            </span>
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
            Living Pregnancy Chronology
          </h1>
        </div>
        <Button variant="secondary" onClick={() => setCurrentView('setup')}>
          Adjust Parameters
        </Button>
      </div>

      {/* Gestational Dial / Arc */}
      <div
        className="sketch-card sketch-crosshair"
        style={{
          background: 'var(--sketch-paper)',
          padding: '24px',
          marginBottom: 24,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          {/* SVG Circular Sketch Arc */}
          <div style={{ position: 'relative', width: 140, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="var(--sketch-paper-tint)"
                strokeWidth="7"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="var(--sketch-terracotta)"
                strokeWidth="7"
                strokeDasharray={`${2 * Math.PI * 42}`}
                strokeDashoffset={`${2 * Math.PI * 42 * (1 - pct / 100)}`}
                strokeLinecap="round"
              />
            </svg>
            <div style={{ position: 'absolute', textAlign: 'center' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--sketch-ink)' }}>
                {pct}%
              </span>
              <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.78rem', color: 'var(--sketch-lead)' }}>
                Complete
              </p>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 240 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--sketch-ink)' }}>
              Week {week} Development Milestone
            </h3>
            <p className="sketch-note" style={{ fontSize: '1.05rem', color: 'var(--sketch-graphite)', margin: '0 0 12px' }}>
              "Your baby is roughly the size of a bell pepper (5.6 inches, ~190 grams). Neural synaptogenesis is occurring at an extraordinary rate."
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span className="sketch-badge sketch-badge-sage">CRL ~14.2 cm</span>
              <span className="sketch-badge sketch-badge-blueprint">Fetal Heart ~142 bpm</span>
              <span className="sketch-badge sketch-badge-terracotta">Trimester II Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Maternal Instruments: Kick Counter & Contraction Timer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        {/* Kick Counter */}
        <div className="sketch-card" style={{ background: 'var(--sketch-terracotta-wash)', padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
              Fetal Movement & Kick Counter
            </h3>
            <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-graphite)' }}>
              [Session Count]
            </span>
          </div>

          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: 700, color: 'var(--sketch-ink)' }}>
              {kickCount}
            </span>
            <p className="sketch-handwriting" style={{ fontSize: '0.95rem', color: 'var(--sketch-lead)', margin: '4px 0 16px' }}>
              Active kicks recorded in current hour
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <Button onClick={() => setKickCount((k) => k + 1)}>
                + Record Movement
              </Button>
              <Button variant="secondary" onClick={() => setKickCount(0)}>
                <RotateCcw size={15} /> Reset
              </Button>
            </div>
          </div>
        </div>

        {/* Contraction Rhythm Timekeeper */}
        <div className="sketch-card" style={{ background: 'var(--sketch-sage-wash)', padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
              Contraction Rhythm Timer
            </h3>
            <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-graphite)' }}>
              [Duration Chronometer]
            </span>
          </div>

          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: 700, color: 'var(--sketch-ink)' }}>
              {contractionTimer}s
            </span>
            <p className="sketch-handwriting" style={{ fontSize: '0.95rem', color: 'var(--sketch-lead)', margin: '4px 0 16px' }}>
              {timerRunning ? 'Timer active — observe interval' : 'Idle — tap to log wave duration'}
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <Button
                onClick={() => {
                  setTimerRunning(!timerRunning);
                  if (!timerRunning) {
                    setContractionTimer(1);
                  }
                }}
              >
                <Play size={15} /> {timerRunning ? 'Stop Wave' : 'Start Wave'}
              </Button>
              <Button variant="secondary" onClick={() => { setContractionTimer(0); setTimerRunning(false); }}>
                <RotateCcw size={15} /> Reset
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}