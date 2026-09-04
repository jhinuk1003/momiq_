import { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft, MessageCircle, Send, Sparkles, AlertCircle,
  Thermometer, Wind, Droplet, Baby, Milk, Check, Bot, Loader, Stethoscope,
} from 'lucide-react';
import { Button } from './ui/button';

interface AIDoctorChatProps {
  onBack?: () => void;
}

type Screen = 'home' | 'chat' | 'summary';
interface Msg {
  id: number;
  text: string;
  sender: 'ai' | 'user';
  timestamp: Date;
}
interface Summary {
  symptoms: string[];
  homeCare: string[];
  monitor: string[];
  visitDoctor: string[];
}

const quickSymptoms = [
  { name: 'Fever', icon: Thermometer, wash: 'var(--sketch-terracotta-wash)' },
  { name: 'Cough / Cold', icon: Wind, wash: 'var(--sketch-blueprint-wash)' },
  { name: 'Morning Sickness', icon: Droplet, wash: 'var(--sketch-ochre-wash)' },
  { name: 'Fetal Hiccups', icon: Baby, wash: 'var(--sketch-sage-wash)' },
  { name: 'Lactation / Feeding', icon: Milk, wash: 'var(--sketch-lavender-wash)' },
  { name: 'Pelvic Pressure', icon: AlertCircle, wash: 'var(--sketch-rose-wash)' },
];

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_URL = `https://api.openai.com/v1/chat/completions`;

async function callOpenAI(prompt: string): Promise<string> {
  if (!OPENAI_API_KEY || OPENAI_API_KEY === 'your_openai_api_key_here') {
    if (prompt.toLowerCase().includes('fever'))
      return "A temperature reading above 100.4°F in pregnancy warrants prompt clinical evaluation. Stay thoroughly hydrated with electrolyte water, rest in a cool environment, and notify your obstetric provider.";
    if (prompt.toLowerCase().includes('cough'))
      return "Upper respiratory symptoms are common as maternal immune markers adapt. Use saline steam inhalation, warm honey-ginger tea, and keep hydration steady. Consult immediately if chest tightness or wheezing occurs.";
    if (prompt.toLowerCase().includes('vomiting') || prompt.toLowerCase().includes('sickness'))
      return "First and second trimester nausea can be mitigated with small frequent meals containing complex carbohydrates and vitamin B6. Ensure small sips of ginger or lemon infused water throughout the day.";
    return "Based on your clinical inquiry, maintain gentle rest and monitor symptom frequency. If pain persists or baby movement decreases, contact your OB/GYN triage desk immediately. Always honor your maternal intuition!";
  }
  try {
    const systemPrompt = `You are a compassionate, board-certified AI OB/GYN companion for pregnant women and new mothers. Provide supportive, accurate clinical guidance while emphasizing consultation with their physician. Keep responses concise (2 paragraphs max), empathetic, and professional.`;

    const response = await fetch(OPENAI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 512,
      }),
    });
    if (!response.ok) throw new Error('API error');
    const data = await response.json();
    return data.choices?.[0]?.message?.content || "I am reflecting on your inquiry. Please consult your physician for personalized clinical care.";
  } catch {
    return "Unable to connect to live AI triage right now. Please monitor your symptoms closely and contact your hospital's obstetric desk.";
  }
}

export function AIDoctorChat({ onBack }: AIDoctorChatProps) {
  const [screen, setScreen] = useState<Screen>('home');
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs]);

  const toggleSymptom = (s: string) =>
    setSelectedSymptoms((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const addMsg = (text: string, sender: 'ai' | 'user') =>
    setMsgs((p) => [...p, { id: Date.now() + Math.random(), text, sender, timestamp: new Date() }]);

  const startChat = async () => {
    setScreen('chat');
    const userPrompt = `A mother is concerned about her pregnancy/baby with these symptoms: ${selectedSymptoms.join(', ')}. Please provide reassuring, concise guidance.`;
    setTimeout(() => addMsg(`Hello, I am your MomiQ clinical AI companion. I understand you have questions regarding **${selectedSymptoms.join(', ')}**. How can I support you today?`, 'ai'), 200);
    setLoading(true);
    try {
      const response = await callOpenAI(userPrompt);
      addMsg(response, 'ai');
    } finally {
      setLoading(false);
    }
  };

  const sendMsg = async (text?: string) => {
    const t = (text || input).trim();
    if (!t || loading) return;
    addMsg(t, 'user');
    setInput('');
    setLoading(true);
    try {
      const context = `Symptoms: ${selectedSymptoms.join(', ')}. Maternal inquiry: ${t}. Provide concise clinical reassurance.`;
      const response = await callOpenAI(context);
      addMsg(response, 'ai');
    } finally {
      setLoading(false);
    }
  };

  const generateSummary = () => {
    setSummary({
      symptoms: selectedSymptoms.length ? selectedSymptoms : ['General Clinical Assessment'],
      homeCare: [
        'Rest in lateral left-side recumbent posture for enhanced placental perfusion',
        'Maintain hydration: 2.5L to 3L of water and electrolyte fluids daily',
        'Small, frequent nutrient-dense meals with balanced glycemic index',
      ],
      monitor: [
        'Fetal movement counts (minimum 10 kicks per 2 hours)',
        'Maternal temperature if fever is suspected (>100.4°F)',
        'Consistent blood pressure readings within 120/80 range',
      ],
      visitDoctor: [
        'Sudden, severe swelling in hands or face',
        'Decreased or absent fetal movements for >4 hours',
        'Persistent vaginal bleeding or amniotic fluid leakage',
      ],
    });
    setScreen('summary');
  };

  return (
    <div style={{ width: '100%', maxWidth: 840, margin: '0 auto' }}>
      {/* Header controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        {onBack && (
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Overview
          </Button>
        )}
        {screen !== 'home' && (
          <Button variant="secondary" onClick={() => setScreen('home')} style={{ fontSize: '0.82rem' }}>
            New Consultation Desk
          </Button>
        )}
      </div>

      {/* Screen 1: Consultation Desk Home */}
      {screen === 'home' && (
        <div>
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span className="sketch-badge sketch-badge-terracotta">
                <Stethoscope size={14} /> Spec 11 // 24/7 AI Obstetric Triage
              </span>
              <span className="sketch-handwriting" style={{ fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
                [Trained on Clinical Guidelines]
              </span>
            </div>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--sketch-ink)' }}>
              AI OB/GYN Consultation Desk
            </h1>
            <p className="sketch-note" style={{ fontSize: '1.05rem', color: 'var(--sketch-graphite)', margin: 0 }}>
              "Immediate, compassionate clinical answers regarding symptoms, baby milestones, and maternal reassurance."
            </p>
          </div>

          <div className="sketch-card" style={{ background: 'var(--sketch-paper)', padding: '28px', marginBottom: 24 }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 8px', color: 'var(--sketch-ink)' }}>
              Select Key Symptoms for Triage
            </h3>
            <p className="sketch-handwriting" style={{ fontSize: '0.95rem', color: 'var(--sketch-graphite)', marginBottom: 18 }}>
              // Tap all applicable observations before opening the dialogue
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginBottom: 24 }}>
              {quickSymptoms.map((s) => {
                const isSelected = selectedSymptoms.includes(s.name);
                return (
                  <button
                    key={s.name}
                    onClick={() => toggleSymptom(s.name)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '14px 12px',
                      borderRadius: 'var(--radius-sketch-sm)',
                      border: isSelected ? '2px solid var(--sketch-ink)' : '1.5px dashed var(--sketch-lead)',
                      background: isSelected ? s.wash : 'var(--sketch-paper)',
                      color: 'var(--sketch-ink)',
                      fontWeight: isSelected ? 700 : 500,
                      cursor: 'pointer',
                      boxShadow: isSelected ? '2.5px 2.5px 0 var(--sketch-ink)' : 'none',
                      transition: 'all 0.1s',
                    }}
                  >
                    <s.icon size={18} color="var(--sketch-terracotta)" />
                    <span style={{ fontSize: '0.88rem' }}>{s.name}</span>
                  </button>
                );
              })}
            </div>

            <Button
              onClick={startChat}
              disabled={selectedSymptoms.length === 0}
              style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
            >
              <MessageCircle size={18} /> Begin Consultation Dialogue ({selectedSymptoms.length} selected)
            </Button>
          </div>
        </div>
      )}

      {/* Screen 2: Active Chat */}
      {screen === 'chat' && (
        <div className="sketch-card" style={{ background: 'var(--sketch-paper)', padding: '20px', minHeight: 520, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, marginBottom: 16, borderBottom: '1.5px dashed var(--sketch-lead)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sketch-sm)', background: 'var(--sketch-terracotta-wash)', border: '1.5px solid var(--sketch-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={18} color="var(--sketch-terracotta)" />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>Dr. MomiQ Assistant</h3>
                <span className="sketch-handwriting" style={{ fontSize: '0.82rem', color: 'var(--sketch-lead)' }}>Clinical triage active</span>
              </div>
            </div>
            <Button variant="secondary" onClick={generateSummary} style={{ fontSize: '0.8rem', padding: '6px 12px' }}>
              Generate Care Slip
            </Button>
          </div>

          {/* Message List */}
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 14, padding: '10px 4px', maxHeight: 420 }}>
            {msgs.map((m) => {
              const isAi = m.sender === 'ai';
              return (
                <div
                  key={m.id}
                  style={{
                    alignSelf: isAi ? 'flex-start' : 'flex-end',
                    maxWidth: '82%',
                    background: isAi ? 'var(--sketch-paper-tint)' : 'var(--sketch-terracotta-wash)',
                    border: '1.5px solid var(--sketch-ink)',
                    borderRadius: 'var(--radius-sketch-sm)',
                    boxShadow: '2px 2px 0 var(--sketch-ink)',
                    padding: '12px 16px',
                  }}
                >
                  <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--sketch-ink)', lineHeight: 1.55 }}>
                    {m.text}
                  </p>
                  <span className="sketch-handwriting" style={{ display: 'block', fontSize: '0.75rem', color: 'var(--sketch-lead)', marginTop: 6, textAlign: isAi ? 'left' : 'right' }}>
                    {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              );
            })}
            {loading && (
              <div style={{ alignSelf: 'flex-start', background: 'var(--sketch-paper-tint)', border: '1.5px dashed var(--sketch-lead)', padding: '10px 16px', borderRadius: 'var(--radius-sketch-sm)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Loader size={16} className="animate-spin" color="var(--sketch-terracotta)" />
                <span className="sketch-handwriting" style={{ fontSize: '0.85rem', color: 'var(--sketch-graphite)' }}>
                  Drafting clinical response...
                </span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input bar */}
          <div style={{ display: 'flex', gap: 10, borderTop: '1.5px dashed var(--sketch-lead)', paddingTop: 14, marginTop: 10 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMsg()}
              placeholder="Ask a question about your symptoms or baby..."
              className="sketch-input"
            />
            <Button onClick={() => sendMsg()} disabled={loading} style={{ padding: '10px 18px' }}>
              <Send size={16} />
            </Button>
          </div>
        </div>
      )}

      {/* Screen 3: Clinical Care Slip Summary */}
      {screen === 'summary' && summary && (
        <div className="sketch-card sketch-crosshair" style={{ background: 'var(--sketch-paper)', padding: '32px' }}>
          <div style={{ textAlign: 'center', borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 16, marginBottom: 20 }}>
            <span className="sketch-badge sketch-badge-terracotta" style={{ marginBottom: 6 }}>
              SPECIMEN CARE SLIP // OFFICIAL NOTE
            </span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '4px 0', color: 'var(--sketch-ink)' }}>
              Consultation Clinical Brief
            </h2>
            <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.95rem', color: 'var(--sketch-graphite)' }}>
              Symptoms logged: {summary.symptoms.join(', ')}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 24 }}>
            <div style={{ background: 'var(--sketch-sage-wash)', border: '1.5px solid var(--sketch-ink)', padding: '16px', borderRadius: 'var(--radius-sketch-sm)' }}>
              <h4 style={{ margin: '0 0 8px', fontSize: '0.98rem', fontWeight: 700, color: 'var(--sketch-sage)' }}>
                ✓ Recommended Supportive Protocols
              </h4>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: '0.88rem', color: 'var(--sketch-ink)', lineHeight: 1.5 }}>
                {summary.homeCare.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'var(--sketch-blueprint-wash)', border: '1.5px solid var(--sketch-ink)', padding: '16px', borderRadius: 'var(--radius-sketch-sm)' }}>
              <h4 style={{ margin: '0 0 8px', fontSize: '0.98rem', fontWeight: 700, color: 'var(--sketch-blueprint)' }}>
                👁 Observations to Monitor Closely
              </h4>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: '0.88rem', color: 'var(--sketch-ink)', lineHeight: 1.5 }}>
                {summary.monitor.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'var(--sketch-rose-wash)', border: '1.5px solid var(--sketch-ink)', padding: '16px', borderRadius: 'var(--radius-sketch-sm)' }}>
              <h4 style={{ margin: '0 0 8px', fontSize: '0.98rem', fontWeight: 700, color: 'var(--sketch-rose)' }}>
                ⚠ When to Seek Immediate Medical Evaluation
              </h4>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: '0.88rem', color: 'var(--sketch-ink)', lineHeight: 1.5 }}>
                {summary.visitDoctor.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Button onClick={() => setScreen('chat')}>
              Resume Conversation
            </Button>
            <Button variant="secondary" onClick={() => window.print()}>
              Print Clinical Slip
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}