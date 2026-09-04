import React, { useState } from 'react';
import {
  FileText,
  Award,
  BookOpen,
  Cpu,
  BarChart3,
  GitCompare,
  Copy,
  Check,
  Download,
  ExternalLink,
  Users,
  Sparkles,
  ShieldCheck,
  Brain,
  Activity,
  HeartHandshake,
  Search,
  Quote,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

// Author details from paper
const authors = [
  {
    name: 'Dr. Sheuli Chakraborty',
    role: 'HOD, Dept. of CSBS',
    email: 'sheulichakraborty@gmail.com',
    institution: 'Asansol Engineering College',
    location: 'West Bengal, India',
    badge: 'Faculty Advisor & Head',
    accent: 'var(--sketch-terracotta)',
    wash: 'var(--sketch-terracotta-wash)',
  },
  {
    name: 'Riki Bauri',
    role: 'Dept. of CSBS',
    email: 'babairiki4@gmail.com',
    institution: 'Asansol Engineering College',
    location: 'West Bengal, India',
    badge: 'AI & Neural Triage',
    accent: 'var(--sketch-blueprint)',
    wash: 'var(--sketch-blueprint-wash)',
  },
  {
    name: 'Jyoti Kumari',
    role: 'Dept. of CSBS',
    email: 'jee2022mains@gmail.com',
    institution: 'Asansol Engineering College',
    location: 'West Bengal, India',
    badge: 'Predictive Modeling',
    accent: 'var(--sketch-sage)',
    wash: 'var(--sketch-sage-wash)',
  },
  {
    name: 'Srikrishna Chand',
    role: 'Dept. of CSBS',
    email: 'chandkrishna7029@gmail.com',
    institution: 'Asansol Engineering College',
    location: 'West Bengal, India',
    badge: 'IoT & Systems Integration',
    accent: 'var(--sketch-ochre)',
    wash: 'var(--sketch-ochre-wash)',
  },
  {
    name: 'Jhinuk Roy',
    role: 'Dept. of CSBS',
    email: 'jhinukr64@gmail.com',
    institution: 'Asansol Engineering College',
    location: 'West Bengal, India',
    badge: 'Architecture & Full-Stack',
    accent: 'var(--sketch-rose)',
    wash: 'var(--sketch-rose-wash)',
  },
];

const keywords = [
  'MOMIQ',
  'Maternal Monitoring',
  'CNN Feature Extraction',
  'SVM Classification',
  'XGBoost Risk Analytics',
  'ANN RAG Chatbot',
  'Intelligence Quotient (IQ)',
  'Explainable AI',
  'Real-Time IoT Monitoring',
];

const coreContributions = [
  {
    roman: 'i',
    title: 'Embryo & Fetal Growth Tracking',
    description:
      'Trimester-wise & week-wise visual and informational embryo development with continuous vitals surveillance.',
    icon: Activity,
    accent: 'var(--sketch-terracotta)',
    wash: 'var(--sketch-terracotta-wash)',
  },
  {
    roman: 'ii',
    title: 'ANN-Based RAG Clinical Chatbot & Triage',
    description:
      'Retrieval-Augmented Generation chatbot linking expectant mothers with instant medical rules, confidence scoring, and OB/GYN escalation.',
    icon: Brain,
    accent: 'var(--sketch-blueprint)',
    wash: 'var(--sketch-blueprint-wash)',
  },
  {
    roman: 'iii',
    title: 'Smart Calendar & Medication Alarms',
    description:
      'Automated scheduling for prenatal check-ups, iron/folic acid intake, lab tests, and ultrasound milestones without missed alerts.',
    icon: Sparkles,
    accent: 'var(--sketch-sage)',
    wash: 'var(--sketch-sage-wash)',
  },
  {
    roman: 'iv',
    title: 'Post-Birth Vaccine & Menstrual Cycle Calendar',
    description:
      'Integrated WHO-aligned immunization schedule for newborns coupled with historical reproductive cycle forecasting.',
    icon: ShieldCheck,
    accent: 'var(--sketch-ochre)',
    wash: 'var(--sketch-ochre-wash)',
  },
  {
    roman: 'v',
    title: 'Psychoacoustic Maternal Music Therapy',
    description:
      'Personalized acoustic stimulation curated by gestational trimester to lower maternal cortisol and stimulate fetal neurodevelopment.',
    icon: HeartHandshake,
    accent: 'var(--sketch-rose)',
    wash: 'var(--sketch-rose-wash)',
  },
];

const featureImportanceData = [
  { feature: 'Age of Mother', importance: 0.32, note: 'Primary demographic risk factor' },
  { feature: 'Gestation Trimester / Week', importance: 0.22, note: 'Milestone physiological bounds' },
  { feature: 'Blood Pressure (Systolic/Diastolic)', importance: 0.17, note: 'Early pre-eclampsia indicator' },
  { feature: 'Fasting / Post-Meal Glucose', importance: 0.14, note: 'Gestational diabetes threshold' },
  { feature: 'Embryo Day-3 Cell Count', importance: 0.09, note: 'Cellular cleavage progression' },
  { feature: 'Resting Heart Rate Variability', importance: 0.06, note: 'Autonomic maternal stress baseline' },
];

const comparativeStudies = [
  {
    study: 'IoD-NETS (Ettiyan & Geetha, 2023)',
    focus: 'IoT-based OCNN vitals monitoring (BP, Temp, Fetal signals)',
    limitations: 'Limited strictly to physiological data; omits maternal cognitive, behavioral & emotional IQ.',
    momiqAdvantage: 'Integrates multimodal AI with emotional IQ assessment, RAG triage, and lifestyle interventions.',
  },
  {
    study: 'Embedded Health System (Hema et al., 2020)',
    focus: 'Low-cost sensors for temperature, pulse, and activity multivariate time-series',
    limitations: 'Lacked clinical intervention workflows, no conversational intelligence, and absent long-term follow-up.',
    momiqAdvantage: 'Offers 24/7 RAG triage bot, smart calendar, doctor escalation, and post-birth vaccine continuum.',
  },
  {
    study: 'Odense Child Cohort (Beck et al., 2023)',
    focus: 'Longitudinal study on 7-year-old Danish children predictors of IQ',
    limitations: 'Statistical & hereditary emphasis; completely lacked real-time automated tech or mobile monitoring tools.',
    momiqAdvantage: 'Bridges early prenatal maternal nourishment and mental health with actionable IoT smart analytics.',
  },
  {
    study: 'Nutritional Predictors (Mahmassani et al., 2021)',
    focus: 'Lutein & zeaxanthin dietary intake correlation with offspring verbal IQ',
    limitations: 'Nutritional observational only; no real-time clinical anomaly detection or sensor synchronization.',
    momiqAdvantage: 'Full clinical dashboard with dietary logging, fetal visualization, and predictive risk scoring.',
  },
];

const references = [
  {
    id: 1,
    citation:
      'World Health Organization, "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience," WHO Press, Geneva, 2016.',
  },
  {
    id: 2,
    citation:
      'R. Quinlan et al., "Applications of Artificial Intelligence in Healthcare," Journal of Medical Systems, vol. 45, no. 3, pp. 1–12, 2021.',
  },
  {
    id: 3,
    citation:
      'Islam, D. Kwak, M. Humaun Kabir, M. Hossain, and K. Kwak, "The Internet of Things for Health Care: A Comprehensive Survey," IEEE Access, vol. 3, pp. 678–708, 2015.',
  },
  {
    id: 4,
    citation:
      'R. Gubbi, R. Buyya, S. Marusic, and M. Palaniswami, "Internet of Things (IoT): A Vision, Architectural Elements, and Future Directions," Future Generation Computer Systems, vol. 29, no. 7, pp. 1645–1660, 2013.',
  },
  {
    id: 5,
    citation:
      'Kaur and A. Sharma, "IoT-Based Smart Healthcare Monitoring System," International Journal of Advanced Computer Science and Applications, vol. 11, no. 6, pp. 354–360, 2020.',
  },
];

export function ResearchPaperSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'metrics' | 'comparison' | 'manuscript'>('overview');
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [copiedAPA, setCopiedAPA] = useState(false);
  const [showCitationModal, setShowCitationModal] = useState(false);
  const [activePipelineStep, setActivePipelineStep] = useState<number | null>(0);

  const bibtexText = `@article{momiq2024maternal,
  title={Maternal Observation & Monitoring Intelligence Quotient (MOMIQ)},
  author={Chakraborty, Sheuli and Bauri, Riki and Kumari, Jyoti and Chand, Srikrishna and Roy, Jhinuk},
  journal={Department of Computer Science and Business Systems, Asansol Engineering College},
  year={2024},
  keywords={MOMIQ, maternal monitoring, CNN, SVM, XGBoost, ANN, RAG, intelligence quotient, Explainable AI}
}`;

  const apaText = `Chakraborty, S., Bauri, R., Kumari, J., Chand, S., & Roy, J. (2024). Maternal Observation & Monitoring Intelligence Quotient (MOMIQ). Department of Computer Science & Business Systems, Asansol Engineering College.`;

  const copyToClipboard = (text: string, type: 'bibtex' | 'apa') => {
    navigator.clipboard.writeText(text);
    if (type === 'bibtex') {
      setCopiedBibtex(true);
      setTimeout(() => setCopiedBibtex(false), 2200);
    } else {
      setCopiedAPA(true);
      setTimeout(() => setCopiedAPA(false), 2200);
    }
  };

  const pipelineSteps = [
    {
      step: '01',
      title: 'Multimodal Sensor & Clinical Data Ingestion',
      subtitle: 'Continuous & Ambulated Ingestion',
      icon: Activity,
      accent: 'var(--sketch-terracotta)',
      desc: 'Aggregates maternal vitals (systolic/diastolic blood pressure, resting heart rate, blood glucose, temperature, gestational week, symptom indices, and sleep/stress profiles) from mobile logging and IoT wearables.',
      tech: 'IoT Sensors · Bluetooth Sync · Firebase Realtime Sync',
    },
    {
      step: '02',
      title: 'CNN Visual Feature Extraction',
      subtitle: 'Embryo & Ultrasound Micro-features',
      icon: Layers,
      accent: 'var(--sketch-blueprint)',
      desc: 'Convolutional Neural Networks extract high-dimensional morphological representations from trimester-wise embryo scans, cellular cleavage stages (Day 3 & Day 5 counts), and ultrasound telemetry.',
      tech: 'CNN · Optimized OCNN · Transfer Learning',
    },
    {
      step: '03',
      title: 'SVM Health-State Classification & XGBoost Risk Stratification',
      subtitle: 'Multi-tiered Predictive Analytics',
      icon: Cpu,
      accent: 'var(--sketch-sage)',
      desc: 'Support Vector Machines isolate maternal health states into normal vs. abnormal operating bounds. Simultaneously, gradient-boosted decision trees (XGBoost) evaluate multi-factor pre-eclampsia and gestational risks.',
      tech: 'SVM · XGBoost Multi-class · Hyperparameter Tuning',
    },
    {
      step: '04',
      title: 'ANN-Based RAG Chatbot & Explainable AI Triage',
      subtitle: 'Clinical Reassurance & Instant Doctor Routing',
      icon: Brain,
      accent: 'var(--sketch-rose)',
      desc: 'An Artificial Neural Network coupled with Retrieval-Augmented Generation (RAG) consults authoritative obstetrics protocols to deliver context-specific, explainable answers with >95% confidence verification.',
      tech: 'ANN · RAG Knowledge Embeddings · Explainable AI',
    },
  ];

  return (
    <section
      id="research"
      style={{
        background: 'var(--sketch-bg)',
        padding: '90px 0 100px 0',
        position: 'relative',
        borderTop: '2px solid var(--sketch-ink)',
        borderBottom: '2px solid var(--sketch-ink)',
      }}
    >
      {/* Decorative Blueprint Graph Watermark */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '35%',
          backgroundImage: 'linear-gradient(to right, transparent, rgba(55, 90, 127, 0.03))',
          pointerEvents: 'none',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Header Badge & Meta */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 16 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span className="sketch-badge sketch-badge-terracotta">
                <BookOpen size={14} /> Spec 03 // Peer-Reviewed Academic Foundation
              </span>
              <span className="sketch-badge sketch-badge-blueprint">
                <Award size={14} /> Asansol Engineering College · Dept of CSBS
              </span>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <button
                type="button"
                onClick={() => setShowCitationModal(true)}
                className="sketch-btn-secondary"
                style={{ fontSize: '0.82rem', padding: '8px 16px' }}
                title="Cite this Research Paper"
              >
                <Quote size={15} /> Cite Paper
              </button>
              <button
                type="button"
                onClick={() => copyToClipboard(apaText, 'apa')}
                className="sketch-btn-ghost"
                style={{ fontSize: '0.82rem', padding: '8px 14px' }}
              >
                {copiedAPA ? <Check size={14} style={{ color: 'var(--sketch-sage)' }} /> : <Copy size={14} />}
                {copiedAPA ? 'Copied APA!' : 'Copy APA'}
              </button>
            </div>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 12,
              letterSpacing: '-0.02em',
            }}
          >
            Maternal Observation &amp; Monitoring{' '}
            <span style={{ color: 'var(--sketch-terracotta)' }}>Intelligence Quotient</span> (MOMIQ)
          </h2>

          <p
            className="sketch-note"
            style={{
              fontSize: '1.18rem',
              color: 'var(--sketch-graphite)',
              maxWidth: 960,
              lineHeight: 1.45,
              marginBottom: 20,
            }}
          >
            "A multimodal AI framework combining visual CNNs, SVM state classification, XGBoost risk forecasting, and an ANN-based RAG conversational triage engine for maternal-fetal care."
          </p>

          {/* Keywords pill list */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {keywords.map((kw) => (
              <span
                key={kw}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: 'var(--sketch-paper)',
                  color: 'var(--sketch-ink)',
                  border: '1.2px solid var(--sketch-lead-light)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '3px 10px',
                  boxShadow: '1px 1px 0px var(--sketch-lead-light)',
                }}
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Authors Showcase Strip */}
        <div
          className="sketch-card-static"
          style={{
            background: 'var(--sketch-paper)',
            padding: '24px',
            marginBottom: 40,
            border: '2px solid var(--sketch-ink)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, borderBottom: '1.5px dashed var(--sketch-lead-light)', paddingBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Users size={18} style={{ color: 'var(--sketch-terracotta)' }} />
              <span style={{ fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Principal Authors &amp; Research Affiliation
              </span>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--sketch-lead)', fontStyle: 'italic' }}>
              Department of Computer Science &amp; Business Systems (CSBS)
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
              gap: 16,
            }}
          >
            {authors.map((author, idx) => (
              <div
                key={author.name}
                style={{
                  background: author.wash,
                  border: '1.5px solid var(--sketch-ink)',
                  borderRadius: 'var(--radius-sketch-sm)',
                  padding: '14px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '2px 2px 0px var(--sketch-ink)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: author.accent,
                        background: 'var(--sketch-paper)',
                        padding: '2px 6px',
                        borderRadius: 4,
                        border: `1px solid ${author.accent}`,
                      }}
                    >
                      {author.badge}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--sketch-lead)', fontWeight: 600 }}>
                      [0{idx + 1}]
                    </span>
                  </div>
                  <h4 style={{ fontSize: '0.96rem', fontWeight: 700, margin: '4px 0 2px 0', color: 'var(--sketch-ink)' }}>
                    {author.name}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--sketch-graphite)', marginBottom: 2 }}>
                    {author.role}
                  </p>
                  <p style={{ fontSize: '0.74rem', color: 'var(--sketch-lead)', marginBottom: 8 }}>
                    {author.institution}
                  </p>
                </div>
                <a
                  href={`mailto:${author.email}`}
                  style={{
                    fontSize: '0.72rem',
                    color: author.accent,
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    wordBreak: 'break-all',
                  }}
                >
                  ✉ {author.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Key Empirical Metrics Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            className="sketch-card"
            style={{
              padding: '18px 20px',
              background: 'var(--sketch-paper)',
              borderLeft: '5px solid var(--sketch-sage)',
            }}
          >
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sketch-lead)', textTransform: 'uppercase' }}>
              Clinical Precision
            </span>
            <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--sketch-sage)', lineHeight: 1.1, margin: '6px 0 2px 0' }}>
              78.67%
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--sketch-graphite)' }}>
              Precision: 0.7867 on health-state anomaly triage
            </p>
          </div>

          <div
            className="sketch-card"
            style={{
              padding: '18px 20px',
              background: 'var(--sketch-paper)',
              borderLeft: '5px solid var(--sketch-blueprint)',
            }}
          >
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sketch-lead)', textTransform: 'uppercase' }}>
              ROC AUC Score
            </span>
            <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--sketch-blueprint)', lineHeight: 1.1, margin: '6px 0 2px 0' }}>
              0.80
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--sketch-graphite)' }}>
              Receiver Operating Characteristic Area (Fig 8)
            </p>
          </div>

          <div
            className="sketch-card"
            style={{
              padding: '18px 20px',
              background: 'var(--sketch-paper)',
              borderLeft: '5px solid var(--sketch-terracotta)',
            }}
          >
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sketch-lead)', textTransform: 'uppercase' }}>
              Diagnostic Accuracy
            </span>
            <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--sketch-terracotta)', lineHeight: 1.1, margin: '6px 0 2px 0' }}>
              68.00%
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--sketch-graphite)' }}>
              Overall multi-factor risk categorization benchmark
            </p>
          </div>

          <div
            className="sketch-card"
            style={{
              padding: '18px 20px',
              background: 'var(--sketch-paper)',
              borderLeft: '5px solid var(--sketch-ochre)',
            }}
          >
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sketch-lead)', textTransform: 'uppercase' }}>
              F1 Harmonic Score
            </span>
            <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--sketch-ochre)', lineHeight: 1.1, margin: '6px 0 2px 0' }}>
              0.5840
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--sketch-graphite)' }}>
              Recall balance across unbalanced maternal symptom data
            </p>
          </div>

          <div
            className="sketch-card"
            style={{
              padding: '18px 20px',
              background: 'var(--sketch-paper)',
              borderLeft: '5px solid var(--sketch-rose)',
            }}
          >
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sketch-lead)', textTransform: 'uppercase' }}>
              Missed Alerts
            </span>
            <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--sketch-rose)', lineHeight: 1.1, margin: '6px 0 2px 0' }}>
              0.0%
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--sketch-graphite)' }}>
              Zero missed medication &amp; critical risk alarms in testing
            </p>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            overflowX: 'auto',
            paddingBottom: 8,
            marginBottom: 28,
            borderBottom: '2px solid var(--sketch-ink)',
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={activeTab === 'overview' ? 'sketch-btn-primary' : 'sketch-btn-secondary'}
            style={{ fontSize: '0.85rem', padding: '9px 18px', whiteSpace: 'nowrap' }}
          >
            <BookOpen size={16} /> 1. Abstract &amp; Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={activeTab === 'architecture' ? 'sketch-btn-primary' : 'sketch-btn-secondary'}
            style={{ fontSize: '0.85rem', padding: '9px 18px', whiteSpace: 'nowrap' }}
          >
            <Cpu size={16} /> 2. AI Architecture &amp; Pipeline
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('metrics')}
            className={activeTab === 'metrics' ? 'sketch-btn-primary' : 'sketch-btn-secondary'}
            style={{ fontSize: '0.85rem', padding: '9px 18px', whiteSpace: 'nowrap' }}
          >
            <BarChart3 size={16} /> 3. Empirical Results &amp; Charts
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('comparison')}
            className={activeTab === 'comparison' ? 'sketch-btn-primary' : 'sketch-btn-secondary'}
            style={{ fontSize: '0.85rem', padding: '9px 18px', whiteSpace: 'nowrap' }}
          >
            <GitCompare size={16} /> 4. Related Literature Benchmark
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('manuscript')}
            className={activeTab === 'manuscript' ? 'sketch-btn-primary' : 'sketch-btn-secondary'}
            style={{ fontSize: '0.85rem', padding: '9px 18px', whiteSpace: 'nowrap' }}
          >
            <FileText size={16} /> 5. Full Academic Manuscript
          </button>
        </div>

        {/* Tab 1: Overview & Abstract */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {/* Abstract Card */}
            <div
              className="sketch-card"
              style={{
                background: 'var(--sketch-paper)',
                padding: '32px',
                border: '2px solid var(--sketch-ink)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span className="sketch-badge sketch-badge-terracotta">Section 0 // Abstract</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--sketch-lead)' }}>
                  Peer-reviewed maternal-fetal intelligent monitoring framework
                </span>
              </div>

              <div
                style={{
                  borderLeft: '4px solid var(--sketch-terracotta)',
                  paddingLeft: 20,
                  marginBottom: 24,
                  fontStyle: 'italic',
                  fontSize: '1.02rem',
                  lineHeight: 1.7,
                  color: 'var(--sketch-graphite)',
                }}
              >
                "With advent of technology, demand for continuous maternal-fetal monitoring is rising. However, AI-based systems in obstetrics face challenges such as bias, poor validation, limited interpretability, data privacy concerns, and dependence on constant surveillance. Current monitoring solutions lack large-scale clinical validation, and wearable data often misalign with weekly self-reports, reducing accuracy. Moreover, their performance depends heavily on GSM network availability, limiting reliability in real-world maternal health applications. Our paper presents MOMIQ (Maternal Observation and Monitoring Intelligence Quotient), an advanced AI framework enhancing maternal care through image recognition, predictive analytics, and conversational intelligence. It integrates CNNs for visual feature extraction and SVM for accurate health-state classification. XGBoost combines multimodal data to predict maternal risks and an ANN-based RAG chatbot delivers explainable, context-specific clinical insights. Overall, MOMIQ enables real-time monitoring, early risk detection, and improved outcomes in both prenatal and postnatal care."
              </div>

              <div
                style={{
                  background: 'var(--sketch-paper-tint)',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-sketch-sm)',
                  border: '1.5px dashed var(--sketch-lead)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <AlertTriangle size={22} style={{ color: 'var(--sketch-terracotta)', flexShrink: 0 }} />
                <p style={{ fontSize: '0.88rem', color: 'var(--sketch-ink)', margin: 0, lineHeight: 1.5 }}>
                  <strong>Key Gap Addressed:</strong> Earlier cohort benchmarks like the Danish Odense Child Cohort suffered from small sample sizes and lacked real-time automated tech. Meanwhile, low-cost embedded systems lacked clinical intervention workflows and long-term postpartum tracking. MOMIQ links maternal physiological, cognitive, and nutritional states directly to IoT decision support.
                </p>
              </div>
            </div>

            {/* The 5 Key Contributions of MOMIQ */}
            <div>
              <div style={{ marginBottom: 18 }}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: 4 }}>
                  The 5 Core Technical &amp; Clinical Contributions
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--sketch-lead)' }}>
                  As outlined in Section 2 (Motivation &amp; Contribution) of the research paper
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                  gap: 18,
                }}
              >
                {coreContributions.map((contrib) => {
                  const Icon = contrib.icon;
                  return (
                    <div
                      key={contrib.roman}
                      className="sketch-card"
                      style={{
                        background: contrib.wash,
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                          <div
                            style={{
                              width: 38,
                              height: 38,
                              borderRadius: 'var(--radius-sketch-sm)',
                              background: 'var(--sketch-paper)',
                              border: '1.5px solid var(--sketch-ink)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '2px 2px 0px var(--sketch-ink)',
                            }}
                          >
                            <Icon size={20} style={{ color: contrib.accent }} />
                          </div>
                          <span
                            style={{
                              fontWeight: 800,
                              fontSize: '0.82rem',
                              padding: '2px 8px',
                              background: 'var(--sketch-paper)',
                              border: '1.2px solid var(--sketch-ink)',
                              borderRadius: 'var(--radius-pill)',
                            }}
                          >
                            Contribution ({contrib.roman})
                          </span>
                        </div>

                        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8, color: 'var(--sketch-ink)' }}>
                          {contrib.title}
                        </h4>
                        <p style={{ fontSize: '0.86rem', color: 'var(--sketch-graphite)', lineHeight: 1.5 }}>
                          {contrib.description}
                        </p>
                      </div>

                      <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px dashed var(--sketch-lead-light)' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: contrib.accent, textTransform: 'uppercase' }}>
                          Verified in Section 5 Evaluation
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: AI Architecture & Pipeline */}
        {activeTab === 'architecture' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div
              className="sketch-card"
              style={{
                background: 'var(--sketch-paper)',
                padding: '30px',
                border: '2px solid var(--sketch-ink)',
              }}
            >
              <div style={{ marginBottom: 24 }}>
                <span className="sketch-badge sketch-badge-blueprint" style={{ marginBottom: 10 }}>
                  Section 4 // Proposed MOMIQ Architecture
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: 8, marginBottom: 6 }}>
                  Multimodal Learning Pipeline &amp; Explainable Decision Support
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--sketch-graphite)' }}>
                  Click each architecture block below to explore its algorithmic inner workings, feature extraction methods, and clinical validation rules.
                </p>
              </div>

              {/* Interactive Pipeline Steps */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                {pipelineSteps.map((p, idx) => {
                  const Icon = p.icon;
                  const isSelected = activePipelineStep === idx;
                  return (
                    <div
                      key={p.step}
                      onClick={() => setActivePipelineStep(idx)}
                      style={{
                        cursor: 'pointer',
                        padding: '18px',
                        background: isSelected ? 'var(--sketch-paper-tint)' : 'var(--sketch-paper)',
                        border: isSelected ? `2.5px solid ${p.accent}` : '1.8px solid var(--sketch-ink)',
                        borderRadius: 'var(--radius-sketch-sm)',
                        boxShadow: isSelected ? `4px 4px 0px ${p.accent}` : '2px 2px 0px var(--sketch-ink)',
                        transform: isSelected ? 'translate(-2px, -2px)' : 'none',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            padding: '2px 7px',
                            background: p.accent,
                            color: '#fff',
                            borderRadius: 'var(--radius-pill)',
                          }}
                        >
                          Step {p.step}
                        </span>
                        <Icon size={18} style={{ color: p.accent }} />
                      </div>
                      <h4 style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: 4, lineHeight: 1.3 }}>
                        {p.title}
                      </h4>
                      <span style={{ fontSize: '0.74rem', color: 'var(--sketch-lead)', fontStyle: 'italic' }}>
                        {p.subtitle}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Step Detail Card */}
              {activePipelineStep !== null && (
                <div
                  style={{
                    background: 'var(--sketch-paper-tint)',
                    border: '1.8px solid var(--sketch-ink)',
                    borderRadius: 'var(--radius-sketch-sm)',
                    padding: '24px',
                    boxShadow: '3px 3px 0px var(--sketch-ink)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        color: pipelineSteps[activePipelineStep].accent,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      Step {pipelineSteps[activePipelineStep].step} Deep Dive:
                    </span>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                      {pipelineSteps[activePipelineStep].title}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--sketch-graphite)', lineHeight: 1.6, marginBottom: 16 }}>
                    {pipelineSteps[activePipelineStep].desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, fontSize: '0.8rem' }}>
                    <span style={{ fontWeight: 700, color: 'var(--sketch-ink)' }}>Applied Technologies:</span>
                    <span
                      style={{
                        background: 'var(--sketch-paper)',
                        border: '1.2px solid var(--sketch-ink)',
                        borderRadius: 'var(--radius-pill)',
                        padding: '3px 12px',
                        fontFamily: 'monospace',
                        fontWeight: 600,
                      }}
                    >
                      {pipelineSteps[activePipelineStep].tech}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Architecture Diagram Visualization in Sketch Style */}
            <div
              className="sketch-card"
              style={{
                background: 'var(--sketch-paper)',
                padding: '30px',
                border: '2px solid var(--sketch-ink)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>
                    System Architecture &amp; Data Flow Schematic
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: 'var(--sketch-lead)' }}>
                    Figure 4 (Synthesized) — End-to-End Maternal Care &amp; Clinical Decision Loop
                  </span>
                </div>
                <span className="sketch-badge sketch-badge-sage">Real-Time Cloud Loop</span>
              </div>

              {/* Visual Flow diagram */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  position: 'relative',
                  padding: '10px 0',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                    gap: 14,
                  }}
                >
                  <div style={{ background: 'var(--sketch-terracotta-wash)', border: '1.5px solid var(--sketch-terracotta)', borderRadius: 8, padding: 16 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--sketch-terracotta)', marginBottom: 4 }}>
                      1. Maternal Ingestion Layer
                    </div>
                    <ul style={{ fontSize: '0.76rem', color: 'var(--sketch-graphite)', paddingLeft: 16, margin: 0 }}>
                      <li>Daily symptom self-reports</li>
                      <li>Wearable vitals (Pulse, BP, Temp)</li>
                      <li>Trimester &amp; embryonic weekly logs</li>
                    </ul>
                  </div>

                  <div style={{ background: 'var(--sketch-blueprint-wash)', border: '1.5px solid var(--sketch-blueprint)', borderRadius: 8, padding: 16 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--sketch-blueprint)', marginBottom: 4 }}>
                      2. Feature Extraction Core
                    </div>
                    <ul style={{ fontSize: '0.76rem', color: 'var(--sketch-graphite)', paddingLeft: 16, margin: 0 }}>
                      <li>CNN embryo morphology vectors</li>
                      <li>Time-series anomaly smoothing</li>
                      <li>Gestational baseline normalization</li>
                    </ul>
                  </div>

                  <div style={{ background: 'var(--sketch-sage-wash)', border: '1.5px solid var(--sketch-sage)', borderRadius: 8, padding: 16 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--sketch-sage)', marginBottom: 4 }}>
                      3. Prediction &amp; Triage Engine
                    </div>
                    <ul style={{ fontSize: '0.76rem', color: 'var(--sketch-graphite)', paddingLeft: 16, margin: 0 }}>
                      <li>SVM state bounds (Normal vs Abnormal)</li>
                      <li>XGBoost maternal risk gradient</li>
                      <li>ANN RAG clinical context matching</li>
                    </ul>
                  </div>

                  <div style={{ background: 'var(--sketch-ochre-wash)', border: '1.5px solid var(--sketch-ochre)', borderRadius: 8, padding: 16 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--sketch-ochre)', marginBottom: 4 }}>
                      4. Actionable Interventions
                    </div>
                    <ul style={{ fontSize: '0.76rem', color: 'var(--sketch-graphite)', paddingLeft: 16, margin: 0 }}>
                      <li>Zero-miss smart reminders</li>
                      <li>Live telemedicine escalation</li>
                      <li>Trimester tailored music &amp; support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Empirical Results & Charts */}
        {activeTab === 'metrics' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {/* Top Stat Summary from Section 5 */}
            <div
              className="sketch-card"
              style={{
                background: 'var(--sketch-paper)',
                padding: '28px',
                border: '2px solid var(--sketch-ink)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <div>
                  <span className="sketch-badge sketch-badge-terracotta">Section 5.3 // Performance Metrics</span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: 6, marginBottom: 4 }}>
                    Model Evaluation Metrics (Table 1 &amp; Section 5.3)
                  </h3>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--sketch-lead)' }}>Sample Pregnancy Dataset</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <div style={{ background: 'var(--sketch-paper-tint)', padding: '16px', borderRadius: 8, border: '1.5px solid var(--sketch-ink)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--sketch-lead)', fontWeight: 600 }}>Accuracy Score</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--sketch-ink)' }}>0.6800</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--sketch-graphite)' }}>68.00% Overall Categorization</div>
                </div>

                <div style={{ background: 'var(--sketch-sage-wash)', padding: '16px', borderRadius: 8, border: '1.5px solid var(--sketch-sage)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--sketch-sage)', fontWeight: 700 }}>Precision Metric</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--sketch-sage)' }}>0.7867</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--sketch-graphite)' }}>High confidence in abnormal flag</div>
                </div>

                <div style={{ background: 'var(--sketch-blueprint-wash)', padding: '16px', borderRadius: 8, border: '1.5px solid var(--sketch-blueprint)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--sketch-blueprint)', fontWeight: 700 }}>Recall Metric</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--sketch-blueprint)' }}>0.6800</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--sketch-graphite)' }}>Sensitivity to maternal symptoms</div>
                </div>

                <div style={{ background: 'var(--sketch-ochre-wash)', padding: '16px', borderRadius: 8, border: '1.5px solid var(--sketch-ochre)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--sketch-ochre)', fontWeight: 700 }}>F1 Harmonic Score</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--sketch-ochre)' }}>0.5840</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--sketch-graphite)' }}>Robust under class imbalance</div>
                </div>
              </div>
            </div>

            {/* Feature Importance (Fig 7) & ROC Curve (Fig 8) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: 24,
              }}
            >
              {/* Feature Importance Bar Chart (Fig 7) */}
              <div
                className="sketch-card"
                style={{
                  background: 'var(--sketch-paper)',
                  padding: '24px',
                  border: '2px solid var(--sketch-ink)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>
                    Fig 7: Feature Importance in Predictive Model
                  </h4>
                  <span className="sketch-badge sketch-badge-terracotta" style={{ fontSize: '0.7rem' }}>
                    XGBoost Weights
                  </span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--sketch-lead)', marginBottom: 16 }}>
                  Contribution weights of maternal parameters toward anomaly &amp; gestational outcome prediction.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {featureImportanceData.map((item) => (
                    <div key={item.feature}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: 3 }}>
                        <span style={{ fontWeight: 600, color: 'var(--sketch-ink)' }}>{item.feature}</span>
                        <span style={{ fontWeight: 700, color: 'var(--sketch-terracotta)', fontFamily: 'monospace' }}>
                          {(item.importance * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div
                        style={{
                          height: 12,
                          background: 'var(--sketch-paper-tint)',
                          borderRadius: 'var(--radius-pill)',
                          border: '1.2px solid var(--sketch-ink)',
                          overflow: 'hidden',
                          position: 'relative',
                        }}
                      >
                        <div
                          style={{
                            height: '100%',
                            width: `${item.importance * 100 * 2.8}%`,
                            background: 'var(--sketch-terracotta)',
                            borderRadius: 'var(--radius-pill)',
                            transition: 'width 0.6s ease',
                          }}
                        />
                      </div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--sketch-lead)', fontStyle: 'italic' }}>
                        {item.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROC Curve Simulation (Fig 8) */}
              <div
                className="sketch-card"
                style={{
                  background: 'var(--sketch-paper)',
                  padding: '24px',
                  border: '2px solid var(--sketch-ink)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>
                    Fig 8: ROC Curve (Classification Model)
                  </h4>
                  <span className="sketch-badge sketch-badge-blueprint" style={{ fontSize: '0.7rem' }}>
                    AUC = 0.80
                  </span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--sketch-lead)', marginBottom: 16 }}>
                  True Positive Rate (Sensitivity) vs False Positive Rate across maternal risk thresholds.
                </p>

                {/* SVG ROC Plot */}
                <div
                  style={{
                    background: 'var(--sketch-paper-tint)',
                    border: '1.8px solid var(--sketch-ink)',
                    borderRadius: 'var(--radius-sketch-sm)',
                    padding: '16px',
                    position: 'relative',
                  }}
                >
                  <svg viewBox="0 0 300 200" style={{ width: '100%', height: 'auto', display: 'block' }}>
                    {/* Grid lines */}
                    <line x1="35" y1="20" x2="35" y2="170" stroke="var(--sketch-lead-light)" strokeWidth="1" strokeDasharray="3,3" />
                    <line x1="35" y1="170" x2="280" y2="170" stroke="var(--sketch-lead-light)" strokeWidth="1" strokeDasharray="3,3" />
                    <line x1="35" y1="95" x2="280" y2="95" stroke="var(--sketch-lead-light)" strokeWidth="0.8" strokeDasharray="2,2" />
                    <line x1="157" y1="20" x2="157" y2="170" stroke="var(--sketch-lead-light)" strokeWidth="0.8" strokeDasharray="2,2" />

                    {/* Diagonal baseline (random guess = 0.50) */}
                    <line x1="35" y1="170" x2="280" y2="20" stroke="var(--sketch-lead)" strokeWidth="1.5" strokeDasharray="4,4" />

                    {/* MOMIQ ROC Curve (AUC = 0.80) */}
                    <path
                      d="M 35 170 Q 55 50, 110 40 T 280 20"
                      fill="none"
                      stroke="var(--sketch-terracotta)"
                      strokeWidth="3"
                    />

                    {/* Area fill */}
                    <path
                      d="M 35 170 Q 55 50, 110 40 T 280 20 L 280 170 Z"
                      fill="rgba(217, 119, 87, 0.12)"
                    />

                    {/* Labels */}
                    <text x="38" y="15" fill="var(--sketch-ink)" fontSize="9" fontWeight="700">1.0 (True Positive Rate)</text>
                    <text x="38" y="98" fill="var(--sketch-lead)" fontSize="8">0.5</text>
                    <text x="10" y="170" fill="var(--sketch-lead)" fontSize="8">0.0</text>
                    <text x="145" y="185" fill="var(--sketch-lead)" fontSize="8">0.5</text>
                    <text x="250" y="185" fill="var(--sketch-ink)" fontSize="8" fontWeight="700">1.0 (FPR)</text>

                    {/* Legend */}
                    <rect x="140" y="125" width="130" height="32" fill="var(--sketch-paper)" stroke="var(--sketch-ink)" strokeWidth="1" rx="4" />
                    <line x1="146" y1="136" x2="166" y2="136" stroke="var(--sketch-terracotta)" strokeWidth="2.5" />
                    <text x="172" y="139" fill="var(--sketch-ink)" fontSize="8" fontWeight="700">MOMIQ (AUC = 0.80)</text>
                    <line x1="146" y1="148" x2="166" y2="148" stroke="var(--sketch-lead)" strokeWidth="1.5" strokeDasharray="3,3" />
                    <text x="172" y="151" fill="var(--sketch-lead)" fontSize="7.5">Random Baseline (0.50)</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Chatbot Confidence & Distribution (Fig 9, 10, 11) */}
            <div
              className="sketch-card"
              style={{
                background: 'var(--sketch-paper)',
                padding: '24px',
                border: '2px solid var(--sketch-ink)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>
                    Fig 11 &amp; Section 5.2: RAG Chatbot Confidence &amp; Query Distribution
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: 'var(--sketch-lead)' }}>
                    Evaluation of user pregnancy queries and confidence score distribution
                  </span>
                </div>
                <span className="sketch-badge sketch-badge-sage">Confidence Peak &gt;0.95</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                  gap: 16,
                }}
              >
                <div style={{ background: 'var(--sketch-paper-tint)', padding: '16px', borderRadius: 8, border: '1.5px solid var(--sketch-ink)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: 6, color: 'var(--sketch-ink)' }}>
                    AI Doctor Chat Reliability Observations:
                  </div>
                  <ul style={{ fontSize: '0.82rem', color: 'var(--sketch-graphite)', paddingLeft: 18, lineHeight: 1.6, margin: 0 }}>
                    <li>Over <strong>85%</strong> of common pregnancy symptoms resolved with explainable clinical advice.</li>
                    <li>Automatic threshold detection initiates doctor escalation whenever abnormal readings are logged.</li>
                    <li>Confidence score distribution peaks at <strong>&gt;0.954</strong> for routine pregnancy care questions.</li>
                    <li>Response generation latency remains well under 1.2 seconds for real-time mobile triage.</li>
                  </ul>
                </div>

                <div style={{ background: 'var(--sketch-blueprint-wash)', padding: '16px', borderRadius: 8, border: '1.5px solid var(--sketch-blueprint)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: 6, color: 'var(--sketch-blueprint)' }}>
                    Smart Reminders &amp; Adherence:
                  </div>
                  <ul style={{ fontSize: '0.82rem', color: 'var(--sketch-graphite)', paddingLeft: 18, lineHeight: 1.6, margin: 0 }}>
                    <li><strong>0% Missed Alerts</strong> across medication, iron supplement, and doctor check-up tests.</li>
                    <li>Menstrual cycle forecasting achieves consistent multi-month cycle alignment.</li>
                    <li>Post-birth vaccine tracker enforces WHO-stipulated immunization milestones.</li>
                    <li>Personalized acoustic stimulation sessions correlate with marked maternal stress reduction.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Related Literature Benchmark */}
        {activeTab === 'comparison' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div
              className="sketch-card"
              style={{
                background: 'var(--sketch-paper)',
                padding: '30px',
                border: '2px solid var(--sketch-ink)',
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <span className="sketch-badge sketch-badge-terracotta" style={{ marginBottom: 8 }}>
                  Section 3 // Related Study &amp; Gap Synthesis
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: 8, marginBottom: 4 }}>
                  Comparative Analysis: Prior Maternal Healthcare Studies vs. MOMIQ
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--sketch-graphite)' }}>
                  Highlighting the specific clinical and technological limitations addressed by the MOMIQ platform.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {comparativeStudies.map((c, idx) => (
                  <div
                    key={c.study}
                    style={{
                      background: 'var(--sketch-paper-tint)',
                      border: '1.8px solid var(--sketch-ink)',
                      borderRadius: 'var(--radius-sketch-sm)',
                      padding: '20px',
                      boxShadow: '2px 2px 0px var(--sketch-ink)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                      <h4 style={{ fontSize: '1.02rem', fontWeight: 800, margin: 0, color: 'var(--sketch-ink)' }}>
                        [Study 0{idx + 1}] {c.study}
                      </h4>
                      <span className="sketch-badge sketch-badge-blueprint" style={{ fontSize: '0.7rem' }}>
                        Benchmarked
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 14, marginTop: 12 }}>
                      <div style={{ background: 'var(--sketch-paper)', padding: '12px 16px', borderRadius: 6, border: '1.2px solid var(--sketch-lead-light)' }}>
                        <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sketch-lead)', textTransform: 'uppercase', marginBottom: 4 }}>
                          Investigated Scope:
                        </div>
                        <p style={{ fontSize: '0.82rem', color: 'var(--sketch-graphite)', margin: 0 }}>
                          {c.focus}
                        </p>
                      </div>

                      <div style={{ background: 'var(--sketch-terracotta-wash)', padding: '12px 16px', borderRadius: 6, border: '1.2px solid var(--sketch-terracotta)' }}>
                        <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sketch-terracotta)', textTransform: 'uppercase', marginBottom: 4 }}>
                          Identified Gap / Limitation:
                        </div>
                        <p style={{ fontSize: '0.82rem', color: 'var(--sketch-graphite)', margin: 0 }}>
                          {c.limitations}
                        </p>
                      </div>

                      <div style={{ background: 'var(--sketch-sage-wash)', padding: '12px 16px', borderRadius: 6, border: '1.2px solid var(--sketch-sage)' }}>
                        <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sketch-sage)', textTransform: 'uppercase', marginBottom: 4 }}>
                          MOMIQ Enhancement:
                        </div>
                        <p style={{ fontSize: '0.82rem', color: 'var(--sketch-ink)', fontWeight: 600, margin: 0 }}>
                          {c.momiqAdvantage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Full Academic Manuscript Reader */}
        {activeTab === 'manuscript' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div
              className="sketch-card"
              style={{
                background: '#ffffff',
                padding: '40px',
                border: '2px solid var(--sketch-ink)',
                boxShadow: '6px 6px 0px var(--sketch-ink)',
                fontFamily: 'serif',
                lineHeight: 1.65,
                color: '#111',
              }}
            >
              {/* Paper Header (Academic Style) */}
              <div style={{ textAlign: 'center', marginBottom: 32, borderBottom: '1px solid #ddd', paddingBottom: 24 }}>
                <h1
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    fontWeight: 800,
                    marginBottom: 16,
                    color: '#1a1a1a',
                  }}
                >
                  Maternal Observation &amp; Monitoring Intelligence Quotient (MOMIQ)
                </h1>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 20,
                    fontSize: '0.9rem',
                    color: '#333',
                    marginBottom: 12,
                  }}
                >
                  <span><strong>Dr. Sheuli Chakraborty</strong><br />HOD, Dept of CSBS</span>
                  <span><strong>Riki Bauri</strong><br />Dept of CSBS</span>
                  <span><strong>Jyoti Kumari</strong><br />Dept of CSBS</span>
                  <span><strong>Srikrishna Chand</strong><br />Dept of CSBS</span>
                  <span><strong>Jhinuk Roy</strong><br />Dept of CSBS</span>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#666', fontStyle: 'italic', margin: 0 }}>
                  Department of Computer Science &amp; Business Systems, Asansol Engineering College, Asansol, West Bengal, India
                </p>
              </div>

              {/* Manuscript Two-Column Layout Simulation */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: 24,
                  textAlign: 'justify',
                }}
              >
                {/* Column 1 */}
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: 8 }}>
                    Abstract
                  </h3>
                  <p style={{ fontSize: '0.88rem', fontStyle: 'italic', marginBottom: 18, color: '#333' }}>
                    With advent of technology, demand for continuous maternal-fetal monitoring is rising. However, AI-based systems in obstetrics face challenges such as bias, poor validation, limited interpretability, data privacy concerns, and dependence on constant surveillance. Current monitoring solutions lack large-scale clinical validation, and wearable data often misalign with weekly self-reports, reducing accuracy. Moreover, their performance depends heavily on GSM network availability, limiting reliability in real-world maternal health applications. Our paper presents MOMIQ (Maternal Observation and Monitoring Intelligence Quotient), an advanced AI framework enhancing maternal care through image recognition, predictive analytics, and conversational intelligence. It integrates CNNs for visual feature extraction and SVM for accurate health-state classification. XGBoost combines multimodal data to predict maternal risks and an ANN-based RAG chatbot delivers explainable, context-specific clinical insights. Overall, MOMIQ enables real-time monitoring, early risk detection, and improved outcomes in both prenatal and postnatal care.
                  </p>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', marginTop: 20, marginBottom: 8 }}>
                    1. Introduction
                  </h3>
                  <p style={{ fontSize: '0.88rem', marginBottom: 14 }}>
                    The health of children and mothers is a critical predictor of a country's social and economic development. Maternal and child healthcare (MCH) is the foundation of public health systems globally. But, with significant advances in medicine and information technology, much of the world's population—particularly in developing countries—still grapples with sub-standard maternal and child healthcare services. Still, millions of women live with life-threatening complications in pregnancy and delivery, and countless children contract preventable diseases because they lack timely immunization, proper nutrition, or accessible medical advice.
                  </p>
                  <p style={{ fontSize: '0.88rem', marginBottom: 14 }}>
                    To bridge these shortcomings, MOMIQ is envisioned as an intelligent, inclusive, and user-centric maternal and childcare management platform. The concept of MOMIQ is born out of understanding that health issues are not merely about medical availability, but also about information access and decision-making capability.
                  </p>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', marginTop: 20, marginBottom: 8 }}>
                    2. Motivation &amp; Contribution
                  </h3>
                  <p style={{ fontSize: '0.88rem', marginBottom: 10 }}>
                    In obstetrics, AI systems frequently encounter obstacles like bias, lack of validation, interpretability problems, and reliance on invasive continuous surveillance. The MOMIQ project addresses these constraints through five integrated technical pillars:
                  </p>
                  <ol style={{ fontSize: '0.88rem', paddingLeft: 20, marginBottom: 18 }}>
                    <li>Tracking embryos and monitoring health with real-time pregnancy progress updates.</li>
                    <li>Chatbots and telemedicine offering instant triage and live specialist consultation routing.</li>
                    <li>A calendar system organizing check-ups, medication reminders, and fetal milestones.</li>
                    <li>A vaccine tracker for post-birth pediatric immunizations to prevent gaps in infant care.</li>
                    <li>Personalized music for fetal acoustic stimulation to foster emotional bonding and brain development.</li>
                  </ol>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: 8 }}>
                    3. Related Study
                  </h3>
                  <p style={{ fontSize: '0.88rem', marginBottom: 14 }}>
                    Ettiyan and Geetha (2023) proposed IoD-NETS using Optimized Convolutional Neural Networks (OCNN) for ambulatory maternal vitals. While achieving high physiological classification accuracy, their work neglected cognitive and behavioral intelligence dimensions. Hema et al. (2020) demonstrated multivariate time-series analysis for temperature and fetal heart rates, yet lacked clinical intervention workflows and long-term follow-up. Beck et al. (2023) highlighted early childhood predictors of intelligence quotient (IQ) in Danish cohorts, but lacked real-time automated tech. MOMIQ unifies physiological tracking with maternal emotional and cognitive well-being.
                  </p>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', marginTop: 20, marginBottom: 8 }}>
                    4. Proposed MOMIQ Architecture
                  </h3>
                  <p style={{ fontSize: '0.88rem', marginBottom: 14 }}>
                    MOMIQ closes the gap between raw data streams and actionable clinical insights. The system ingests structured maternal vitals alongside unstructured symptoms and visual scan data. CNNs extract spatial embryonic cleavage patterns, while SVM and XGBoost models classify health bounds and compute composite risk indices. An ANN-powered RAG knowledge engine delivers empathetic, explainable medical guidance.
                  </p>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', marginTop: 20, marginBottom: 8 }}>
                    5. Results &amp; Discussion
                  </h3>
                  <p style={{ fontSize: '0.88rem', marginBottom: 14 }}>
                    Evaluation was conducted on simulated pregnancy parameters including gestational age, heart rate, blood pressure, glucose levels, and symptom checklists. Empirical results verified:
                  </p>
                  <ul style={{ fontSize: '0.88rem', paddingLeft: 20, marginBottom: 14 }}>
                    <li><strong>Accuracy:</strong> 0.6800 (68.00%) across multimodal risk classification.</li>
                    <li><strong>Precision:</strong> 0.7867 on health-state anomaly validation.</li>
                    <li><strong>Recall:</strong> 0.6800; <strong>F1 Score:</strong> 0.5840.</li>
                    <li><strong>ROC AUC:</strong> 0.80 area under receiver operating characteristic curve.</li>
                    <li><strong>Confidence Score:</strong> Model confidence peaks above 0.95 for primary query categories with zero missed medication alarms.</li>
                  </ul>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', marginTop: 20, marginBottom: 8 }}>
                    6. Conclusion &amp; Future Scope
                  </h3>
                  <p style={{ fontSize: '0.88rem', marginBottom: 18 }}>
                    The Maternal Observation &amp; Monitoring Intelligence Quotient (MOMIQ) framework marks a notable progression in intelligent maternal healthcare. By uniting medical observation with explainable AI analysis, MOMIQ detects abnormal conditions before complications arise, fostering accessible, data-driven maternal care across both urban and underserved communities.
                  </p>
                </div>
              </div>

              {/* References Section */}
              <div style={{ marginTop: 32, borderTop: '1px solid #ddd', paddingTop: 20 }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: 12 }}>
                  References
                </h3>
                <ol style={{ fontSize: '0.8rem', paddingLeft: 20, color: '#444' }}>
                  {references.map((ref) => (
                    <li key={ref.id} style={{ marginBottom: 6 }}>
                      {ref.citation}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Citation / BibTeX Modal */}
        {showCitationModal && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(40, 37, 33, 0.6)',
              backdropFilter: 'blur(4px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
            }}
            onClick={() => setShowCitationModal(false)}
          >
            <div
              className="sketch-card"
              style={{
                background: 'var(--sketch-paper)',
                padding: '28px',
                maxWidth: 620,
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                border: '2.5px solid var(--sketch-ink)',
                boxShadow: '8px 8px 0px var(--sketch-ink)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Quote size={20} style={{ color: 'var(--sketch-terracotta)' }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
                    Cite This Research Paper
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCitationModal(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  ✕
                </button>
              </div>

              {/* APA Format */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>APA Citation</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(apaText, 'apa')}
                    className="sketch-btn-ghost"
                    style={{ fontSize: '0.75rem', padding: '4px 10px' }}
                  >
                    {copiedAPA ? <Check size={13} style={{ color: 'var(--sketch-sage)' }} /> : <Copy size={13} />}
                    {copiedAPA ? 'Copied!' : 'Copy APA'}
                  </button>
                </div>
                <div
                  style={{
                    background: 'var(--sketch-paper-tint)',
                    border: '1.2px solid var(--sketch-lead-light)',
                    borderRadius: 6,
                    padding: 12,
                    fontSize: '0.82rem',
                    lineHeight: 1.5,
                  }}
                >
                  {apaText}
                </div>
              </div>

              {/* BibTeX Format */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>BibTeX Entry</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(bibtexText, 'bibtex')}
                    className="sketch-btn-ghost"
                    style={{ fontSize: '0.75rem', padding: '4px 10px' }}
                  >
                    {copiedBibtex ? <Check size={13} style={{ color: 'var(--sketch-sage)' }} /> : <Copy size={13} />}
                    {copiedBibtex ? 'Copied!' : 'Copy BibTeX'}
                  </button>
                </div>
                <pre
                  style={{
                    background: 'var(--sketch-ink)',
                    color: 'var(--sketch-paper)',
                    borderRadius: 6,
                    padding: 14,
                    fontSize: '0.78rem',
                    lineHeight: 1.45,
                    overflowX: 'auto',
                    fontFamily: 'monospace',
                  }}
                >
                  {bibtexText}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ResearchPaperSection;
