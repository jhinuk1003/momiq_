import { useState } from 'react';
import { ArrowLeft, Ruler, Weight, Heart, Lightbulb, Sparkles, BookOpen } from 'lucide-react';
import babySketchImg from '../assets/sketch-baby-development.jpg';

interface BabyDevelopmentProps {
  onBack?: () => void;
}

export function BabyDevelopment({ onBack }: BabyDevelopmentProps) {
  const [currentWeek, setCurrentWeek] = useState(14);

  const weeklyData = [
    { week: 4, size: 'Poppy Seed', emoji: '🌱', length: '0.04 in', weight: '0.01 oz', milestone: 'Neural tube forming', desc: 'The embryonic blastocyst establishes its primordial neural axis.' },
    { week: 6, size: 'Sweet Pea', emoji: '🌿', length: '0.25 in', weight: '0.04 oz', milestone: 'Heart begins beating', desc: 'Primitive cardiac tube initiates rhythmic contractions (~105 bpm).' },
    { week: 8, size: 'Raspberry', emoji: '🫐', length: '0.63 in', weight: '0.14 oz', milestone: 'Fingers forming', desc: 'Webbed digital rays separate into distinct phalanges.' },
    { week: 10, size: 'Strawberry', emoji: '🍓', length: '1.22 in', weight: '0.49 oz', milestone: 'Vital organs active', desc: 'Embryo transitions officially to fetus; kidneys begin fluid filtration.' },
    { week: 12, size: 'Lime', emoji: '🍋‍🟩', length: '2.13 in', weight: '0.49 oz', milestone: 'Reflexes developing', desc: 'Sucking reflexes emerge; vocal cords begin preliminary formation.' },
    { week: 14, size: 'Lemon', emoji: '🍋', length: '3.42 in', weight: '1.52 oz', milestone: 'Facial expressions', desc: 'Fetus exhibits squinting, frowning, and spontaneous grimaces.' },
    { week: 16, size: 'Avocado', emoji: '🥑', length: '4.57 in', weight: '3.53 oz', milestone: 'Acoustic sensing', desc: 'Auditory ossicles harden; fetus hears maternal heartbeat and voice.' },
    { week: 18, size: 'Bell Pepper', emoji: '🫑', length: '5.59 in', weight: '6.70 oz', milestone: 'Fingerprints forming', desc: 'Unique dermal friction ridges etch permanent fingerprint whorls.' },
    { week: 20, size: 'Banana', emoji: '🍌', length: '6.46 in', weight: '10.58 oz', milestone: 'Lanugo & vernix coat', desc: 'Protective lipid-rich vernix caseosa shields sensitive developing dermis.' },
    { week: 22, size: 'Papaya', emoji: '🥭', length: '7.36 in', weight: '15.17 oz', milestone: 'Eyes fully formed', desc: 'Retinal layers structure; sensory touch receptors disperse throughout.' },
    { week: 24, size: 'Corn', emoji: '🌽', length: '8.46 in', weight: '1.32 lbs', milestone: 'Alveoli branching', desc: 'Surfactant production begins in developing pulmonary airways.' },
    { week: 26, size: 'Lettuce', emoji: '🥬', length: '9.19 in', weight: '1.68 lbs', milestone: 'Eyelids separate', desc: 'Optic fissure unseals; fetus opens and closes eyes to light stimuli.' },
    { week: 28, size: 'Eggplant', emoji: '🍆', length: '10.04 in', weight: '2.22 lbs', milestone: 'REM sleep cycles', desc: 'Rapid Eye Movement waves observed — baby is dreaming in the womb.' },
    { week: 30, size: 'Cabbage', emoji: '🥬', length: '10.79 in', weight: '2.91 lbs', milestone: 'Cerebral expansion', desc: 'Brain folds into characteristic gyri and sulci to accelerate intelligence.' },
    { week: 32, size: 'Pineapple', emoji: '🍍', length: '11.69 in', weight: '3.75 lbs', milestone: 'Breathing practice', desc: 'Rhythmic diaphragm practice prepares baby for atmospheric respiration.' },
    { week: 34, size: 'Cantaloupe', emoji: '🍈', length: '12.52 in', weight: '4.73 lbs', milestone: 'Immune transfer', desc: 'Maternal IgG antibodies transfer actively across the placental barrier.' },
    { week: 36, size: 'Honeydew', emoji: '🍈', length: '13.38 in', weight: '5.78 lbs', milestone: 'Shedding lanugo', desc: 'Fine hair thins; subcutaneous fat stores accumulate for body heat.' },
    { week: 38, size: 'Pumpkin', emoji: '🎃', length: '14.02 in', weight: '6.80 lbs', milestone: 'Full organic maturity', desc: 'All anatomical systems mature; head descends into the pelvic inlet.' },
    { week: 40, size: 'Watermelon', emoji: '🍉', length: '14.96 in', weight: '7.63 lbs', milestone: 'Full term arrival', desc: 'Ready for birth! The gestational masterpiece is complete.' },
  ];

  const data = weeklyData.find((w) => w.week === currentWeek) || weeklyData[5];
  const weeks = weeklyData.map((w) => w.week);
  const trimester = currentWeek <= 13 ? 'First Trimester' : currentWeek <= 26 ? 'Second Trimester' : 'Third Trimester';

  return (
    <div style={{ width: '100%' }}>
      {/* Back button */}
      {onBack && (
        <div style={{ marginBottom: 20 }}>
          <button onClick={onBack} className="sketch-btn-ghost">
            <ArrowLeft size={16} /> Back to Overview
          </button>
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span className="sketch-badge sketch-badge-terracotta">
            <Sparkles size={14} /> Spec 03 // Anatomical Developmental Plates
          </span>
          <span className="sketch-handwriting" style={{ fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
            [Weeks 4 through 40]
          </span>
        </div>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--sketch-ink)' }}>
          Fetal Developmental Sketchbook
        </h1>
        <p className="sketch-note" style={{ fontSize: '1.05rem', color: 'var(--sketch-graphite)', margin: 0 }}>
          "Explore the weekly anatomical transformations, sensory awakening, and organ growth of your baby."
        </p>
      </div>

      {/* Hero Developmental Focus Card */}
      <div
        className="sketch-card sketch-crosshair"
        style={{
          background: 'var(--sketch-paper)',
          padding: '28px',
          marginBottom: 24,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 10 }}>
          <span className="sketch-badge sketch-badge-sage">
            GESTATIONAL WEEK {data.week} OF 40
          </span>
          <span className="sketch-handwriting" style={{ fontSize: '0.95rem', color: 'var(--sketch-terracotta)', fontWeight: 600 }}>
            {trimester}
          </span>
        </div>

        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
          {/* Fruit / Metaphor Badge */}
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: 'var(--radius-sketch-sm)',
              background: 'var(--sketch-ochre-wash)',
              border: '1.8px solid var(--sketch-ink)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3.8rem',
              boxShadow: '2.5px 2.5px 0 var(--sketch-ink)',
            }}
          >
            {data.emoji}
          </div>

          <div style={{ flex: 1, minWidth: 260 }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--sketch-ink)' }}>
              Size of a {data.size}
            </h2>
            <p className="sketch-note" style={{ fontSize: '1.15rem', color: 'var(--sketch-graphite)', margin: '0 0 8px' }}>
              "{data.desc}"
            </p>
            <span className="sketch-badge sketch-badge-terracotta" style={{ fontSize: '0.75rem' }}>
              Key Milestone: {data.milestone}
            </span>
          </div>
        </div>

        {/* 3 Metrics: Length, Weight, Organ Status */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          <div style={{ background: 'var(--sketch-terracotta-wash)', border: '1.5px solid var(--sketch-ink)', padding: '14px', borderRadius: 'var(--radius-sketch-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <Ruler size={16} color="var(--sketch-terracotta)" />
              <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-graphite)' }}>Crown-Rump Length</span>
            </div>
            <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.3rem', margin: 0 }}>{data.length}</p>
          </div>

          <div style={{ background: 'var(--sketch-blueprint-wash)', border: '1.5px solid var(--sketch-ink)', padding: '14px', borderRadius: 'var(--radius-sketch-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <Weight size={16} color="var(--sketch-blueprint)" />
              <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-graphite)' }}>Estimated Weight</span>
            </div>
            <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.3rem', margin: 0 }}>{data.weight}</p>
          </div>

          <div style={{ background: 'var(--sketch-sage-wash)', border: '1.5px solid var(--sketch-ink)', padding: '14px', borderRadius: 'var(--radius-sketch-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <Heart size={16} color="var(--sketch-sage)" />
              <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-graphite)' }}>Fetal Activity</span>
            </div>
            <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>{data.milestone}</p>
          </div>
        </div>
      </div>

      {/* Week Dial Selector */}
      <div
        className="sketch-card"
        style={{
          background: 'var(--sketch-paper-tint)',
          padding: '20px 24px',
          marginBottom: 24,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
            Gestational Timeline Chronometer
          </h3>
          <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
            // Select week plate
          </span>
        </div>

        {/* Horizontal Week Pills */}
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 8 }}>
          {weeks.map((w) => {
            const isSelected = w === currentWeek;
            return (
              <button
                key={w}
                onClick={() => setCurrentWeek(w)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sketch-sm)',
                  border: '1.5px solid var(--sketch-ink)',
                  background: isSelected ? 'var(--sketch-terracotta)' : 'var(--sketch-paper)',
                  color: isSelected ? '#ffffff' : 'var(--sketch-ink)',
                  fontWeight: isSelected ? 700 : 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '2px 2px 0 var(--sketch-ink)' : 'none',
                  flexShrink: 0,
                  transition: 'all 0.1s',
                }}
              >
                Wk {w}
              </button>
            );
          })}
        </div>
      </div>

      {/* Anatomical Reference Plate Sketch */}
      <div
        className="sketch-card"
        style={{
          background: 'var(--sketch-paper)',
          padding: '24px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <BookOpen size={18} color="var(--sketch-terracotta)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
              Scientific Anatomical Sketch Study
            </h3>
          </div>
          <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
            [Archive Plate No. IV]
          </span>
        </div>

        <div style={{ border: '1.5px solid var(--sketch-ink)', borderRadius: 'var(--radius-sketch-sm)', overflow: 'hidden', marginBottom: 14 }}>
          <img
            src={babySketchImg}
            alt="Anatomical baby growth sketch"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          />
        </div>

        <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.92rem', color: 'var(--sketch-graphite)', textAlign: 'center' }}>
          "Hand-sketched comparative progression: Osseous tissue consolidation, pulmonary branching, and sensory nerve mapping."
        </p>
      </div>
    </div>
  );
}