import React, { useState } from 'react';
import { ArrowLeft, Search, Plus, Users, Heart, Baby, AlertCircle, Activity, Smile, Briefcase, User, MessageCircle } from 'lucide-react';
import { SupportGroupChat } from './SupportGroupChat';
import { CreateSupportGroup, NewGroupData } from './CreateSupportGroup';
import { Button } from './ui/button';

interface SupportGroup {
  id: string;
  name: string;
  description: string;
  category: string;
  members: number;
  icon: React.ReactNode;
  color: string;
}

const getCategoryWash = (cat: string) => {
  const map: Record<string, string> = {
    Pregnancy: 'var(--sketch-terracotta-wash)',
    Medical: 'var(--sketch-rose-wash)',
    Postpartum: 'var(--sketch-lavender-wash)',
    Parenting: 'var(--sketch-sage-wash)',
    Wellness: 'var(--sketch-blueprint-wash)',
    Support: 'var(--sketch-ochre-wash)',
    Lifestyle: 'var(--sketch-paper)',
  };
  return map[cat] || 'var(--sketch-paper)';
};

const getCategoryIcon = (cat: string) => {
  const map: Record<string, React.ReactNode> = {
    Pregnancy: <Baby size={18} color="var(--sketch-terracotta)" />,
    Medical: <AlertCircle size={18} color="var(--sketch-rose)" />,
    Postpartum: <Activity size={18} color="var(--sketch-lavender)" />,
    Parenting: <Baby size={18} color="var(--sketch-sage)" />,
    Wellness: <Smile size={18} color="var(--sketch-blueprint)" />,
    Support: <Heart size={18} color="var(--sketch-ochre)" />,
    Lifestyle: <Briefcase size={18} color="var(--sketch-graphite)" />,
  };
  return map[cat] || <Users size={18} />;
};

const defaultGroups: SupportGroup[] = [
  { id: 'first-time-moms', name: 'First-Time Mothers', description: 'A welcoming space for first-time mothers to share weekly observations and advice.', category: 'Pregnancy', members: 1420, icon: <Baby size={18} color="var(--sketch-terracotta)" />, color: 'var(--sketch-terracotta-wash)' },
  { id: 'expecting-mothers', name: 'Gestational Trimester Circles', description: 'Connect with mothers sharing identical due dates and milestones.', category: 'Pregnancy', members: 980, icon: <Heart size={18} color="var(--sketch-terracotta)" />, color: 'var(--sketch-terracotta-wash)' },
  { id: 'postpartum-recovery', name: 'Postpartum Sanctuary', description: 'Healing guidance, pelvic floor care, and emotional balance after birth.', category: 'Postpartum', members: 820, icon: <Activity size={18} color="var(--sketch-lavender)" />, color: 'var(--sketch-lavender-wash)' },
  { id: 'breastfeeding', name: 'Lactation & Nourishment', description: 'Certified lactation guidance and peer support for nursing mothers.', category: 'Parenting', members: 1140, icon: <Heart size={18} color="var(--sketch-sage)" />, color: 'var(--sketch-sage-wash)' },
  { id: 'mental-wellness', name: 'Maternal Emotional Wellness', description: 'A safe, judgment-free space to discuss emotional shifts and anxiety.', category: 'Wellness', members: 760, icon: <Smile size={18} color="var(--sketch-blueprint)" />, color: 'var(--sketch-blueprint-wash)' },
  { id: 'working-moms', name: 'Career & Motherhood Balance', description: 'Navigating maternity leave, professional goals, and newborn schedules.', category: 'Lifestyle', members: 630, icon: <Briefcase size={18} color="var(--sketch-ochre)" />, color: 'var(--sketch-ochre-wash)' },
];

const categories = ['All', 'Pregnancy', 'Medical', 'Postpartum', 'Parenting', 'Wellness', 'Lifestyle'];

interface SupportGroupsDashboardProps {
  onBack: () => void;
}

export function SupportGroupsDashboard({ onBack }: SupportGroupsDashboardProps) {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [selectedGroup, setSelectedGroup] = useState<SupportGroup | null>(null);
  const [joined, setJoined] = useState<Set<string>>(new Set(['first-time-moms']));
  const [showCreate, setShowCreate] = useState(false);
  const [groups, setGroups] = useState<SupportGroup[]>(defaultGroups);

  const handleJoin = (g: SupportGroup) => {
    setJoined((p) => new Set([...p, g.id]));
    setSelectedGroup(g);
  };

  const handleCreate = (d: NewGroupData) => {
    setGroups((prev) => [
      {
        id: `custom-${Date.now()}`,
        name: d.name,
        description: d.description,
        category: d.category,
        members: 1,
        icon: getCategoryIcon(d.category),
        color: getCategoryWash(d.category),
      },
      ...prev,
    ]);
    setShowCreate(false);
  };

  if (selectedGroup) {
    return (
      <SupportGroupChat
        group={selectedGroup}
        onBack={() => setSelectedGroup(null)}
        isJoined={false}
      />
    );
  }

  if (showCreate) {
    return <CreateSupportGroup onBack={() => setShowCreate(false)} onCreateGroup={handleCreate} />;
  }

  const filtered = groups.filter((g) => {
    const matchCat = selectedCat === 'All' || g.category === selectedCat;
    const matchSearch = g.name.toLowerCase().includes(search.toLowerCase()) || g.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ width: '100%', maxWidth: 880, margin: '0 auto' }}>
      {/* Header controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft size={16} /> Back to Overview
        </Button>
        <Button onClick={() => setShowCreate(true)}>
          <Plus size={16} /> Create Circle
        </Button>
      </div>

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span className="sketch-badge sketch-badge-terracotta">
            <Users size={13} /> Spec 16 // Motherhood Discussion Circles
          </span>
          <span className="sketch-handwriting" style={{ fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
            [Encrypted Peer Forum]
          </span>
        </div>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--sketch-ink)' }}>
          Maternal Discussion Circles
        </h1>
        <p className="sketch-note" style={{ fontSize: '1.05rem', color: 'var(--sketch-graphite)', margin: 0 }}>
          "Join specialized circles to share clinical experiences, birth plans, and gentle motherly encouragement."
        </p>
      </div>

      {/* Search & Categories */}
      <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ position: 'relative' }}>
          <Search size={18} color="var(--sketch-lead)" style={{ position: 'absolute', left: 14, top: 12 }} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search discussion circles by topic or milestone..."
            className="sketch-input"
            style={{ paddingLeft: 42 }}
          />
        </div>

        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
          {categories.map((c) => {
            const isSelected = selectedCat === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setSelectedCat(c)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-sketch-sm)',
                  border: isSelected ? '1.8px solid var(--sketch-ink)' : '1.5px dashed var(--sketch-lead)',
                  background: isSelected ? 'var(--sketch-terracotta-wash)' : 'var(--sketch-paper)',
                  color: isSelected ? 'var(--sketch-terracotta)' : 'var(--sketch-ink)',
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '2px 2px 0 var(--sketch-ink)' : 'none',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.1s',
                }}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      {/* Circles Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 18 }}>
        {filtered.map((g) => {
          const isMember = joined.has(g.id);
          return (
            <div
              key={g.id}
              className="sketch-card"
              style={{
                background: g.color,
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
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
                    {g.icon}
                  </div>
                  <span className="sketch-badge" style={{ fontSize: '0.68rem', background: 'var(--sketch-paper)' }}>
                    {g.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--sketch-ink)' }}>
                  {g.name}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--sketch-graphite)', lineHeight: 1.45, margin: '0 0 16px' }}>
                  {g.description}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1.5px dashed var(--sketch-lead)', paddingTop: 12 }}>
                <span className="sketch-handwriting" style={{ fontSize: '0.82rem', color: 'var(--sketch-lead)' }}>
                  {g.members.toLocaleString()} mothers
                </span>
                <Button
                  size="sm"
                  variant={isMember ? 'secondary' : 'primary'}
                  onClick={() => handleJoin(g)}
                >
                  <MessageCircle size={14} /> {isMember ? 'Open Circle' : 'Join Circle'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}