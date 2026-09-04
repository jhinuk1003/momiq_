import { useState } from 'react';
import {
  ArrowLeft, Calendar as CalendarIcon, ChevronLeft, ChevronRight,
  Pill, Stethoscope, Heart, Bell, Activity, Moon, Sun, Sparkles, Droplet,
} from 'lucide-react';
import { Button } from './ui/button';

interface CalendarEvent {
  id: number;
  date: string;
  type: 'medicine' | 'appointment' | 'vaccine' | 'milestone' | 'reminder';
  title: string;
  time?: string;
  location?: string;
  notes?: string;
  completed?: boolean;
}

type CyclePhase = 'period' | 'follicular' | 'ovulation' | 'luteal' | 'none';

interface SmartCalendarProps {
  onBack?: () => void;
}

export function SmartCalendar({ onBack }: SmartCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [events] = useState<CalendarEvent[]>([
    { id: 1, date: new Date().toISOString().split('T')[0], type: 'medicine', title: 'Prenatal Multivitamin', time: '09:00 AM', completed: true },
    { id: 2, date: new Date().toISOString().split('T')[0], type: 'medicine', title: 'Iron & Calcium Tablet', time: '09:00 PM', completed: false },
    { id: 3, date: '2026-09-18', type: 'appointment', title: 'Anatomy Ultrasound Scan', time: '10:30 AM', location: 'City Maternal Health Center', completed: false },
    { id: 4, date: '2026-09-22', type: 'milestone', title: 'Gestational Midpoint (Wk 20)', completed: false },
  ]);

  const periodStart = new Date(2026, 8, 1);
  const cycleLength = 28;

  const getCyclePhase = (date: Date): CyclePhase => {
    const d = Math.floor((date.getTime() - periodStart.getTime()) / 86400000);
    const day = ((d % cycleLength) + cycleLength) % cycleLength;
    if (day < 5) return 'period';
    if (day < 12) return 'follicular';
    if (day < 15) return 'ovulation';
    if (day < 28) return 'luteal';
    return 'none';
  };

  const getPhaseInfo = (phase: CyclePhase) => {
    const map = {
      period: { name: 'Menstrual Phase', wash: 'var(--sketch-terracotta-wash)', accent: 'var(--sketch-terracotta)', icon: Droplet, desc: 'Rest & gentle nourishment' },
      follicular: { name: 'Follicular Phase', wash: 'var(--sketch-sage-wash)', accent: 'var(--sketch-sage)', icon: Sun, desc: 'Maternal vitality rising' },
      ovulation: { name: 'Ovulation Window', wash: 'var(--sketch-ochre-wash)', accent: 'var(--sketch-ochre)', icon: Sparkles, desc: 'Peak fertility window' },
      luteal: { name: 'Luteal Phase', wash: 'var(--sketch-blueprint-wash)', accent: 'var(--sketch-blueprint)', icon: Moon, desc: 'Progesterone synthesis' },
      none: { name: 'Standard Day', wash: 'var(--sketch-paper)', accent: 'var(--sketch-graphite)', icon: CalendarIcon, desc: '' },
    };
    return map[phase];
  };

  const getDays = (d: Date) => {
    const first = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
    const last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    const days: (Date | null)[] = Array(first).fill(null);
    for (let i = 1; i <= last; i++) days.push(new Date(d.getFullYear(), d.getMonth(), i));
    return days;
  };

  const fmtKey = (d: Date) => d.toISOString().split('T')[0];
  const eventsOn = (d: Date | null) => (d ? events.filter((e) => e.date === fmtKey(d)) : []);
  const isToday = (d: Date | null) => (d ? fmtKey(d) === fmtKey(new Date()) : false);
  const isSel = (d: Date | null) => (d && selectedDate ? fmtKey(d) === fmtKey(selectedDate) : false);

  const days = getDays(currentDate);
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const selEvents = eventsOn(selectedDate);
  const selPhase = selectedDate ? getCyclePhase(selectedDate) : 'none';
  const phaseInfo = getPhaseInfo(selPhase);

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
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span className="sketch-badge sketch-badge-terracotta">
            <CalendarIcon size={13} /> Spec 12 // Clinical Prenatal Calendar
          </span>
          <span className="sketch-handwriting" style={{ fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
            [Monthly Schedule & Phase Sync]
          </span>
        </div>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--sketch-ink)' }}>
          Clinical Gestational Calendar
        </h1>
        <p className="sketch-note" style={{ fontSize: '1.05rem', color: 'var(--sketch-graphite)', margin: 0 }}>
          "Monitor appointments, ultrasound dates, and nutritional regimen on your architectural desk schedule."
        </p>
      </div>

      {/* Calendar Card */}
      <div className="sketch-card sketch-crosshair" style={{ background: 'var(--sketch-paper)', padding: '24px', marginBottom: 24 }}>
        {/* Month Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 12 }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
            {monthName}
          </h2>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
            >
              <ChevronLeft size={16} />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setCurrentDate(new Date())}
            >
              Today
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>

        {/* Days of week header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', marginBottom: 8 }}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
            <span key={d} className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)', fontWeight: 700 }}>
              {d}
            </span>
          ))}
        </div>

        {/* Calendar Day Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
          {days.map((d, i) => {
            if (!d) return <div key={i} style={{ height: 48 }} />;
            const hasEvents = eventsOn(d).length > 0;
            const selected = isSel(d);
            const today = isToday(d);

            return (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedDate(d)}
                style={{
                  height: 48,
                  borderRadius: 'var(--radius-sketch-sm)',
                  border: selected ? '2px solid var(--sketch-ink)' : today ? '1.5px solid var(--sketch-terracotta)' : '1px solid var(--sketch-paper-dark)',
                  background: selected ? 'var(--sketch-terracotta-wash)' : today ? 'var(--sketch-sage-wash)' : 'var(--sketch-paper)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  boxShadow: selected ? '2px 2px 0 var(--sketch-ink)' : 'none',
                  transition: 'all 0.1s',
                }}
              >
                <span style={{ fontSize: '0.88rem', fontWeight: selected || today ? 700 : 500, color: 'var(--sketch-ink)' }}>
                  {d.getDate()}
                </span>
                {hasEvents && (
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--sketch-terracotta)', marginTop: 2 }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Agenda */}
      {selectedDate && (
        <div className="sketch-card" style={{ background: 'var(--sketch-paper)', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 10 }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
                Agenda // {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </h3>
              <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
                Phase: {phaseInfo.name} ({phaseInfo.desc})
              </span>
            </div>
            <span className="sketch-badge" style={{ background: phaseInfo.wash, color: phaseInfo.accent, borderColor: phaseInfo.accent }}>
              {phaseInfo.name}
            </span>
          </div>

          {selEvents.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {selEvents.map((e) => (
                <div
                  key={e.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    background: 'var(--sketch-paper-tint)',
                    border: '1.5px solid var(--sketch-ink)',
                    borderRadius: 'var(--radius-sketch-sm)',
                    boxShadow: '2px 2px 0 var(--sketch-ink)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 'var(--radius-sketch-sm)',
                        background: 'var(--sketch-paper)',
                        border: '1.5px solid var(--sketch-ink)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {e.type === 'medicine' ? <Pill size={15} color="var(--sketch-terracotta)" /> : <Stethoscope size={15} color="var(--sketch-blueprint)" />}
                    </div>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: '0.92rem' }}>{e.title}</p>
                      <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.8rem', color: 'var(--sketch-graphite)' }}>
                        {e.time} {e.location ? `· ${e.location}` : ''}
                      </p>
                    </div>
                  </div>
                  {e.completed && (
                    <span className="sketch-badge sketch-badge-sage" style={{ fontSize: '0.65rem' }}>
                      Completed ✓
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="sketch-note" style={{ textAlign: 'center', margin: '20px 0', color: 'var(--sketch-lead)' }}>
              "No clinical events logged for this date. Tap '+ Add Reminder' to schedule a dose or ultrasound."
            </p>
          )}
        </div>
      )}
    </div>
  );
}
