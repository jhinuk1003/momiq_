# MomiQ — Conceptual Sketchbook & Maternal Care Companion

<div align="center">

![MomiQ Banner](https://img.shields.io/badge/MomiQ-Maternal%20Care%20Companion-D97757?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-375A7F?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-5F7D5C?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.5-D49B53?style=for-the-badge&logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-12.13.0-C95A79?style=for-the-badge&logo=firebase)
![Status](https://img.shields.io/badge/Status-Production%20Ready-282521?style=for-the-badge)

<p align="center">
  <em>An artistic digital notebook and clinical compass accompanying expectant mothers through every trimester — harmonizing medical precision, empathetic AI triage, and architectural draftsmanship.</em>
</p>

[Explore Features](#-key-features) • [Academic Research](#-academic-research--empirical-pipeline) • [Design System](#-artistic-sketchbook-aesthetic) • [Getting Started](#-getting-started) • [Environment Setup](#-environment-variables)

---

</div>

## 📖 Overview

**MomiQ** (*Maternal Observation & Monitoring Intelligence Quotient*) reimagines pregnancy care by replacing intimidating, sterile clinical dashboards with a warm, thoughtful **conceptual sketchbook and architect's journal**. 

Pregnancy is one of life’s most profound transitions. MomiQ provides mothers, families, and clinicians with an all-in-one companion: tracking weekly embryonic milestones, continuous maternal vitals, and providing zero-anxiety 24/7 AI OB/GYN triage backed by published empirical machine-learning research.

---

## 🎨 Artistic Sketchbook Aesthetic

The user interface is designed using an architectural notebook and draftsmanship language:

- **Canvas & Paper Tones**: Warm natural paper backgrounds (`#FAF7F0`), lined margins, and subtle millimeter blueprint grids.
- **Linework**: Authentic pencil graphite and sepia pen strokes (`#282521`, `#4E483F`) with subtle hand-drawn border imperfections (`--radius-sketch-md`).
- **Watercolor Highlighter Washes**: Hand-tinted category washes:
  - 🎨 **Terracotta** (`#D97757`) — Maternal alerts & core milestones
  - 🌿 **Sage** (`#5F7D5C`) — Clinical validation & wellness
  - 📐 **Blueprint** (`#375A7F`) — Technical data & architecture
  - 🌾 **Ochre** (`#D49B53`) — Trimester progression & reminders
  - 🌸 **Rose** (`#C95A79`) — Infant development & vital telemetry
- **Expressive Typography**:
  - Headings: **Space Grotesk** & **Plus Jakarta Sans** for crisp, modern legibility.
  - Editorial Annotations: **Architects Daughter** & **Caveat** for organic handwritten drafting notes and clinical marginalia.
- **Physical Motifs**: Washi tape strips, blueprint crosshairs, ruled measurement ticks, and physical journal drop-shadows (`3px 3px 0px var(--sketch-ink)`).

---

## 🔬 Academic Research & Empirical Pipeline

MomiQ is powered by the research paper **"Maternal Observation & Monitoring Intelligence Quotient (MOMIQ)"**, authored by researchers at the **Department of Computer Science & Business Systems, Asansol Engineering College**:

### 👥 Authors & Faculty Advisor
- **Dr. Sheuli Chakraborty** — *Faculty Advisor & Head of Department, CSBS*
- **Riki Bauri** — *Lead ML Architecture & Neural Pipeline*
- **Jyoti Kumari** — *Clinical Telemetry & Predictive Analytics*
- **Srikrishna Chand** — *IoT Sensor Ingestion & Health Infrastructure*
- **Jhinuk Roy** — *Frontend UI/UX & Conversational AI Engineering*

### 🧠 Multi-Modal Machine Learning Architecture
The MOMIQ framework unites four complementary machine learning pillars:
1. **CNN Visual Feature Extraction**: Analyzes embryonic morphology, cellular cleavage dynamics (Day 3 & Day 5 development), and ultrasound scans.
2. **Support Vector Machines (SVM)**: Computes high-dimensional separating hyperplanes for real-time maternal state triage (*Normal* vs *Abnormal*).
3. **XGBoost Risk Forecasting**: Gradient-boosted decision trees aggregating non-linear maternal biomarkers (blood pressure, glucose, resting HR, gestational age, and sleep disruption).
4. **ANN RAG Clinical Triage**: Artificial Neural Network paired with Retrieval-Augmented Generation to deliver evidence-backed, contextual obstetrics guidance with zero hallucinations.

### 📊 Benchmark Metrics
| Metric | Benchmark Result | Clinical Significance |
| :--- | :---: | :--- |
| **Precision** | **78.67%** | Confident early flagging of acute maternal anomalies |
| **ROC AUC** | **0.80** | Robust discrimination across trimester health categories |
| **Categorization Accuracy** | **68.00%** | Comprehensive multi-factor risk categorization |
| **F1-Harmonic Score** | **0.5840** | High recall resilience across unbalanced real-world symptoms |
| **Alarm Reliability** | **0.0% Miss Rate** | Zero missed medication or critical triage notifications |

> 📄 **Download Paper**: A complete PDF manuscript is bundled and accessible in the Research section or at [`/momiq_research_paper.pdf`](public/momiq_research_paper.pdf).

---

## 📱 Mobile & Responsive Compatibility

MomiQ has been thoroughly engineered for seamless usage across all screen sizes:
- **Mobile First Fluid Grids**: Flexible CSS `minmax(min(100%, ...px), 1fr)` column layouts that never overflow narrow 320px–390px mobile viewports.
- **Off-Canvas Navigation Drawer**: On phones and tablets, the sidebar transforms into an intuitive drawer menu with touch-friendly backdrops and a sticky header bar.
- **Responsive Typography**: Viewport-based `clamp()` sizing prevents awkward headline wrapping.
- **Touch-Friendly Controls**: Generous tap targets (40px+ touch targets) on mobile browsers.
- **Scroll-Protected Modules**: Preformatted BibTeX entries, metrics tables, and charts include dedicated touch-scrolling wrappers.

---

## ✨ Key Features

### 1. 🤰 Pregnancy Tracker & Milestone Journal
- Week-by-week fetal anatomical sketches (Weeks 1 through 40).
- Crown-Rump Length (CRL), fetal weight estimations, and anatomical progress logs.
- Interactive **Fetal Kick Counter** with session resets.
- Real-time **Contraction Stopwatch** with interval timing.

### 2. 🩺 Comprehensive Health & Vitals Monitoring
- Daily tracking for Blood Pressure (systolic/diastolic), Blood Glucose, and Resting Heart Rate.
- Anomaly thresholds with visual color warnings.
- Symptom logger (nausea, fatigue, edema, mood, sleep).

### 3. 🤖 24/7 AI Doctor Consultation & Triage
- Empathetic conversational interface equipped with obstetric triage knowledge.
- Instant suggested prompts (*"Is mild cramping normal in Week 14?"*, *"Foods to avoid"*).
- Automatic high-risk escalation warning banners.

### 4. ⏰ Smart Reminders & Medication Alarms
- Scheduled alarms for prenatal vitamins (folic acid, iron, calcium).
- Ultrasound appointments, midwife consultations, and glucose tolerance tests.
- Zero-miss sound notifications and priority tags.

### 5. 🎵 Trimester-Tailored Acoustic Soundscapes
- Calming, scientifically curated audio frequencies designed to reduce maternal cortisol levels.
- Binaural alpha waves, lullaby melodies, ambient nature rain, and resting heartbeat rhythms.

### 6. 📚 Evidence-Based Expert Articles
- Curated clinical guides verified by obstetricians.
- Filter by category: Nutrition, Labor & Birth, Mental Wellness, Postpartum Recovery.

### 7. 🤝 Community Support Circles & Discussion Groups
- Safe peer support groups by due date month, first-time moms, and twins/multiples.
- Shared discussions, tips, and midwife moderated advice.

### 8. 🌸 Cycle Tracker & Vaccine Timeline
- Menstrual cycle and ovulation phase tracking for preconception planning.
- Complete maternal and newborn immunization schedules (TT, Tdap, Hepatitis B, Influenza).

### 9. 🔐 Authentication & Persistent Profiles
- Integrated **Firebase Authentication** supporting Email/Password, Google Sign-In, and instant **Guest Demo Mode**.
- Profile customization for pregnancy due date, blood type, and emergency contacts.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling & Design System** | Custom Hand-Drawn Sketch Design System (Vanilla CSS + Tailwind tokens) |
| **Animations & Transitions** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons & Illustrations** | [Lucide React](https://lucide.dev/) |
| **Data Visualization** | [Recharts](https://recharts.org/) |
| **Authentication & Backend** | [Firebase 12](https://firebase.google.com/) (Auth & Cloud Database) |
| **Routing** | [React Router DOM 7](https://reactrouter.com/) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** `v18.0.0` or higher
- **npm** `v9.0.0` or higher (or `yarn` / `pnpm`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/momiq-pregnancy-app.git
   cd "Momiq Pregnancy App Landing Page"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy the example environment configuration:
   ```bash
   cp .env.example .env
   ```
   Fill in your Firebase project configuration details (see below).

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory with your Firebase configuration:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

> 💡 *Note: The app includes a built-in **Guest Demo Mode** allowing full exploration of the dashboards even before configuring Firebase credentials.*

---

## 📁 Project Structure

```
├── public/
│   ├── momiq_research_paper.pdf    # Full published research paper
│   └── favicon.ico
├── src/
│   ├── assets/                     # Conceptual sketches and illustrations
│   │   ├── sketch-hero-mother.jpg
│   │   ├── sketch-doctor-care.jpg
│   │   └── sketch-baby-development.jpg
│   ├── components/
│   │   ├── ui/                     # Reusable design system primitives
│   │   ├── Header.tsx              # Sticky header & mobile navigation
│   │   ├── HeroSection.tsx         # Hero section with sketch artwork
│   │   ├── ResearchPaperSection.tsx# Interactive ML architecture & manuscript
│   │   ├── FeatureHighlight.tsx    # Core feature breakdowns
│   │   ├── ServicesSection.tsx     # Specialized care services
│   │   ├── PricingSection.tsx      # Subscription tiers & comparison
│   │   ├── AboutSection.tsx        # Manifesto & team background
│   │   ├── TestimonialsSection.tsx # Verified parent reviews
│   │   ├── CommunitySection.tsx    # Support circle preview
│   │   ├── FAQSection.tsx          # Accordion FAQ
│   │   ├── Footer.tsx              # Footer dispatch & links
│   │   ├── DashboardLayout.tsx     # Responsive dashboard shell & mobile topbar
│   │   ├── Sidebar.tsx             # Collapsible drawer sidebar
│   │   ├── MainDashboard.tsx       # Core maternal summary & vitals
│   │   ├── PregnancyTracker.tsx    # Fetal development & kick counter
│   │   ├── HealthMonitoring.tsx    # Blood pressure & glucose tracker
│   │   ├── AIDoctorChat.tsx        # Triage conversational AI
│   │   ├── SmartReminders.tsx      # Medication & appointment alarms
│   │   ├── PersonalizedMusic.tsx   # Prenatal soundscapes & audio player
│   │   ├── ExpertArticles.tsx      # Obstetrics medical library
│   │   ├── SupportGroupsDashboard.tsx# Peer discussion communities
│   │   ├── MenstrualCycleTracker.tsx# Ovulation & period predictor
│   │   └── VaccineTracker.tsx      # Immunization schedule
│   ├── firebase.ts                 # Firebase initialization & auth export
│   ├── index.css                   # Hand-drawn sketch design system & tokens
│   ├── App.tsx                     # Main router & application controller
│   └── main.tsx                    # Application entrypoint
├── .env.example                    # Template environment variables
├── .gitignore                      # Git ignore patterns
├── package.json                    # Project metadata and dependencies
├── tsconfig.json                   # TypeScript bundler compiler configuration
├── vite.config.ts                  # Vite build and path alias configuration
└── README.md                       # Documentation
```

---

## 📜 Citation

If you utilize the MOMIQ methodology or dataset findings in your research, please cite:

```bibtex
@article{momiq2024maternal,
  title={Maternal Observation & Monitoring Intelligence Quotient (MOMIQ)},
  author={Chakraborty, Sheuli and Bauri, Riki and Kumari, Jyoti and Chand, Srikrishna and Roy, Jhinuk},
  journal={Department of Computer Science and Business Systems, Asansol Engineering College},
  year={2024},
  keywords={MOMIQ, maternal monitoring, CNN, SVM, XGBoost, ANN, RAG, Explainable AI}
}
```

```text
Chakraborty, S., Bauri, R., Kumari, J., Chand, S., & Roy, J. (2024). Maternal Observation & Monitoring Intelligence Quotient (MOMIQ). Department of Computer Science & Business Systems, Asansol Engineering College.
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

<div align="center">
  <sub>Crafted with empathy for mothers and newborns everywhere. © 2026 MomiQ.</sub>
</div>