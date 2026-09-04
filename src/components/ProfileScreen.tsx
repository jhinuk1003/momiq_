import { useState } from 'react';
import {
  User, Mail, Phone, Calendar, Baby, Heart, Bell, Lock,
  ChevronRight, Edit2, Save, X, Settings, HelpCircle, Shield,
} from 'lucide-react';
import { Button } from './ui/button';

interface ProfileScreenProps {
  userName?: string;
  userEmail?: string;
}

export function ProfileScreen({ userName = 'User', userEmail = '' }: ProfileScreenProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    name: userName,
    email: userEmail || 'mother@momiq.app',
    phone: '+91 98765 43210',
    dob: '1996-05-15',
    bloodGroup: 'O+',
    lmp: '2026-05-15',
    due: '2027-02-19',
    weight: '148 lbs',
    height: "5'5\"",
    emergency: '+91 98765 43211',
  });

  const Field = ({ label, field, type = 'text' }: { label: string; field: keyof typeof data; type?: string }) => (
    <div>
      <label style={{ fontWeight: 700, fontSize: '0.8rem', display: 'block', marginBottom: 4, color: 'var(--sketch-ink)' }}>
        {label}
      </label>
      {isEditing ? (
        <input
          type={type}
          value={data[field]}
          onChange={(e) => setData((d) => ({ ...d, [field]: e.target.value }))}
          className="sketch-input"
        />
      ) : (
        <p
          style={{
            fontWeight: 600,
            fontSize: '0.92rem',
            padding: '10px 14px',
            background: 'var(--sketch-paper-tint)',
            border: '1.5px solid var(--sketch-paper-dark)',
            borderRadius: 'var(--radius-sketch-sm)',
            margin: 0,
            color: 'var(--sketch-ink)',
          }}
        >
          {type === 'date' ? new Date(data[field]).toLocaleDateString() : data[field]}
        </p>
      )}
    </div>
  );

  return (
    <div style={{ width: '100%', maxWidth: 860, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 14 }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span className="sketch-badge sketch-badge-terracotta">
              <User size={13} /> Maternal Identification // Clinical File
            </span>
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 700, margin: 0, color: 'var(--sketch-ink)' }}>
            Maternal Profile & Record
          </h1>
        </div>
        <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? 'primary' : 'secondary'}>
          {isEditing ? <Save size={16} /> : <Edit2 size={16} />}
          {isEditing ? 'Save Profile' : 'Edit Information'}
        </Button>
      </div>

      {/* Maternal Identity Card */}
      <div
        className="sketch-card sketch-crosshair"
        style={{
          background: 'var(--sketch-paper)',
          padding: '24px',
          marginBottom: 24,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 'var(--radius-sketch-sm)',
              background: 'var(--sketch-terracotta-wash)',
              border: '2px solid var(--sketch-ink)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.8rem',
              color: 'var(--sketch-terracotta)',
              boxShadow: '2px 2px 0 var(--sketch-ink)',
            }}
          >
            {data.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 2px', color: 'var(--sketch-ink)' }}>
              {data.name}
            </h2>
            <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
              {data.email} · Blood Group {data.bloodGroup} · EDD: {data.due}
            </p>
          </div>
        </div>

        {/* Data Fields Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          <Field label="Full Legal Name" field="name" />
          <Field label="Contact Email" field="email" type="email" />
          <Field label="Mobile Phone" field="phone" />
          <Field label="Date of Birth" field="dob" type="date" />
          <Field label="Blood Group" field="bloodGroup" />
          <Field label="Last Menstrual Period" field="lmp" type="date" />
          <Field label="Estimated Due Date" field="due" type="date" />
          <Field label="Pre-pregnancy Weight" field="weight" />
          <Field label="Maternal Height" field="height" />
          <Field label="Emergency Contact Number" field="emergency" />
        </div>
      </div>

      {/* Account Settings Menu */}
      <div className="sketch-card" style={{ background: 'var(--sketch-paper)', padding: '24px' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 16px', borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 8 }}>
          Maternal Settings & Permissions
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { icon: Bell, label: 'Notifications & Medication Alarms', note: 'Push alerts enabled' },
            { icon: Lock, label: 'Biometric Security & Encryption', note: 'HIPAA standard enabled' },
            { icon: Heart, label: 'Emergency Contact Sync', note: 'Direct hospital dispatch' },
            { icon: HelpCircle, label: 'Clinical Helpdesk & Advisory Desk', note: '24/7 support' },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                background: 'var(--sketch-paper-tint)',
                border: '1.5px solid var(--sketch-ink)',
                borderRadius: 'var(--radius-sketch-sm)',
                boxShadow: '1.5px 1.5px 0 var(--sketch-ink)',
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
                  <item.icon size={16} color="var(--sketch-terracotta)" />
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: '0.92rem' }}>{item.label}</p>
                  <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.8rem', color: 'var(--sketch-lead)' }}>
                    // {item.note}
                  </p>
                </div>
              </div>
              <ChevronRight size={16} color="var(--sketch-lead)" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
