import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeatureHighlight } from "./components/FeatureHighlight";
import { PricingSection } from "./components/PricingSection";
import { TeamSection } from "./components/TeamSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CommunitySection } from "./components/CommunitySection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ResearchPaperSection } from "./components/ResearchPaperSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { PregnancyTracker } from "./components/PregnancyTracker";
import { BabyDevelopment } from "./components/BabyDevelopment";
import { HealthMonitoring } from "./components/HealthMonitoring";
import { SmartReminders } from "./components/SmartReminders";
import { AIDoctorChat } from "./components/AIDoctorChat";
import { ExpertArticles } from "./components/ExpertArticles";
import { PersonalizedMusic } from "./components/PersonalizedMusic";
import { SupportGroupsDashboard } from "./components/SupportGroupsDashboard";
import { MenstrualCycleTracker } from "./components/MenstrualCycleTracker";
import { AuthPage } from "./components/AuthPage";
import { MainDashboard } from "./components/MainDashboard";
import { SmartCalendar } from "./components/SmartCalendar";
import { ProfileScreen } from "./components/ProfileScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { FloatingAIButton } from "./components/FloatingAIButton";
import { EmergencyButton } from "./components/EmergencyButton";
import { SmoothScroll } from "./components/SmoothScroll";
import { Reveal } from "./components/ui/Reveal";
import { DashboardLayout } from "./components/DashboardLayout";

// ─── Auth Context ────────────────────────────────────────────────────────────

interface AuthState {
  user: User | null;
  isGuest: boolean;
  loading: boolean;
}

// ─── Inner App (has access to router hooks) ──────────────────────────────────

function AppInner() {
  const navigate = useNavigate();
  const location = useLocation();

  const [auth_state, setAuthState] = useState<AuthState>({
    user: null,
    isGuest: false,
    loading: true,
  });

  const { user, isGuest, loading } = auth_state;
  const isLoggedIn = !!user || isGuest;
  const userName = user?.displayName || user?.email?.split("@")[0] || (isGuest ? "Guest" : "User");
  const userEmail = user?.email || "";

  // Firebase auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAuthState((prev) => ({
        ...prev,
        user: currentUser,
        loading: false,
      }));
      // If user just logged in and is on auth or home page, go to dashboard
      if (currentUser) {
        const path = location.pathname;
        if (path === "/" || path === "/auth" || path === "/login") {
          navigate("/dashboard", { replace: true });
        }
      }
    });
    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenAuth = (view: "login" | "signup") => {
    navigate(`/auth?mode=${view}`);
  };

  const handleGuestLogin = () => {
    setAuthState((prev) => ({ ...prev, isGuest: true }));
    navigate("/dashboard");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error("Sign out error:", e);
    }
    setAuthState({ user: null, isGuest: false, loading: false });
    navigate("/", { replace: true });
    window.scrollTo(0, 0);
  };

  const handleDashboardNavigation = (destination: string) => {
    const routeMap: Record<string, string> = {
      dashboard: "/dashboard",
      calendar: "/dashboard/calendar",
      baby: "/dashboard/baby",
      health: "/dashboard/health",
      aiDoctorChat: "/dashboard/ai-doctor",
      smartReminders: "/dashboard/reminders",
      supportGroups: "/dashboard/support-groups",
      expertArticles: "/dashboard/articles",
      personalizedMusic: "/dashboard/music",
      menstrualCycle: "/dashboard/menstrual-cycle",
      settings: "/dashboard/settings",
      profile: "/dashboard/profile",
      terms: "/terms",
      tracker: "/dashboard/tracker",
    };
    const route = routeMap[destination];
    if (route) navigate(route);
  };

  const handleAuthSuccess = () => {
    // onAuthStateChanged handles navigation
  };

  // Loading state while Firebase checks auth
  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--sketch-bg)",
        fontFamily: "var(--font-heading)",
        fontSize: "1.2rem",
        color: "var(--sketch-lead)",
      }}>
        <span className="sketch-handwriting" style={{ fontSize: "1.4rem" }}>
          // Loading maternal journal...
        </span>
      </div>
    );
  }

  // Dashboard layout wrapper
  const DashboardShell = ({ children }: { children: React.ReactNode }) => (
    <DashboardLayout
      currentView={location.pathname.split("/")[2] || "dashboard"}
      onNavigate={handleDashboardNavigation}
      onLogout={handleLogout}
      userName={userName}
    >
      <div className="page-transition">{children}</div>
    </DashboardLayout>
  );

  return (
    <Routes>
      {/* ── Landing Page ── */}
      <Route
        path="/"
        element={
          <SmoothScroll>
            <div className="min-h-screen">
              <Header
                onOpenAuth={handleOpenAuth}
                onGuestLogin={handleGuestLogin}
                showAuthButtons={true}
              />
              <main>
                <section id="home">
                  <Reveal width="100%">
                    <HeroSection
                      onOpenTracker={() => navigate("/dashboard/tracker")}
                      onGetStarted={() => handleOpenAuth("signup")}
                    />
                  </Reveal>
                </section>
                <section id="features">
                  <Reveal width="100%">
                    <FeatureHighlight />
                  </Reveal>
                </section>
                <section id="research">
                  <Reveal width="100%">
                    <ResearchPaperSection />
                  </Reveal>
                </section>
                <section id="pricing">
                  <Reveal width="100%"><PricingSection /></Reveal>
                </section>
                <Reveal width="100%"><TeamSection /></Reveal>
                <Reveal width="100%"><TestimonialsSection /></Reveal>
                <section id="community">
                  <Reveal width="100%"><CommunitySection /></Reveal>
                </section>
                <section id="services">
                  <Reveal width="100%">
                    <ServicesSection
                      onOpenTracker={() => navigate("/dashboard/tracker")}
                      onOpenBabyDevelopment={() => navigate("/dashboard/baby")}
                      onOpenHealthMonitoring={() => navigate("/dashboard/health")}
                      onOpenSmartReminders={() => navigate("/dashboard/reminders")}
                      onOpenAIDoctorChat={() => navigate("/dashboard/ai-doctor")}
                      onOpenExpertArticles={() => navigate("/dashboard/articles")}
                      onOpenPersonalizedMusic={() => navigate("/dashboard/music")}
                      onOpenSupportGroups={() => navigate("/dashboard/support-groups")}
                      onOpenMenstrualCycle={() => navigate("/dashboard/menstrual-cycle")}
                    />
                  </Reveal>
                </section>
                <section id="about">
                  <Reveal width="100%"><AboutSection /></Reveal>
                </section>
                <section id="faq">
                  <Reveal width="100%"><FAQSection /></Reveal>
                </section>
              </main>
              <Footer onNavigateTerms={() => navigate("/terms")} />
              <FloatingAIButton onClick={() => navigate("/dashboard/ai-doctor")} />
              <EmergencyButton />
            </div>
          </SmoothScroll>
        }
      />

      {/* ── Auth Page ── */}
      <Route
        path="/auth"
        element={
          user ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <AuthPage
              defaultView={
                new URLSearchParams(location.search).get("mode") === "signup"
                  ? "signup"
                  : "login"
              }
              onSuccess={handleAuthSuccess}
              onBack={() => navigate("/")}
            />
          )
        }
      />

      {/* ── Dashboard Routes ── */}
      <Route
        path="/dashboard"
        element={
          <DashboardShell>
            <MainDashboard onNavigate={handleDashboardNavigation} userName={userName} />
          </DashboardShell>
        }
      />
      <Route
        path="/dashboard/calendar"
        element={
          <DashboardShell>
            <SmartCalendar onBack={() => navigate("/dashboard")} />
          </DashboardShell>
        }
      />
      <Route
        path="/dashboard/health"
        element={
          <DashboardShell>
            <HealthMonitoring onBack={() => navigate("/dashboard")} />
          </DashboardShell>
        }
      />
      <Route
        path="/dashboard/baby"
        element={
          <DashboardShell>
            <BabyDevelopment onBack={() => navigate("/dashboard")} />
          </DashboardShell>
        }
      />
      <Route
        path="/dashboard/tracker"
        element={
          <DashboardShell>
            <PregnancyTracker onBack={() => navigate("/dashboard")} />
          </DashboardShell>
        }
      />
      <Route
        path="/dashboard/ai-doctor"
        element={
          <DashboardShell>
            <AIDoctorChat onBack={() => navigate("/dashboard")} />
          </DashboardShell>
        }
      />
      <Route
        path="/dashboard/reminders"
        element={
          <DashboardShell>
            <SmartReminders onBack={() => navigate("/dashboard")} />
          </DashboardShell>
        }
      />
      <Route
        path="/dashboard/support-groups"
        element={
          <DashboardShell>
            <SupportGroupsDashboard onBack={() => navigate("/dashboard")} />
          </DashboardShell>
        }
      />
      <Route
        path="/dashboard/articles"
        element={
          <DashboardShell>
            <ExpertArticles onBack={() => navigate("/dashboard")} />
          </DashboardShell>
        }
      />
      <Route
        path="/dashboard/music"
        element={
          <DashboardShell>
            <PersonalizedMusic onBack={() => navigate("/dashboard")} />
          </DashboardShell>
        }
      />
      <Route
        path="/dashboard/menstrual-cycle"
        element={
          <DashboardShell>
            <MenstrualCycleTracker onBack={() => navigate("/dashboard")} />
          </DashboardShell>
        }
      />
      <Route
        path="/dashboard/profile"
        element={
          <DashboardShell>
            <ProfileScreen userName={userName} userEmail={userEmail} />
          </DashboardShell>
        }
      />
      <Route
        path="/dashboard/settings"
        element={
          <DashboardShell>
            <SettingsScreen onBack={() => navigate("/dashboard")} userName={userName} userEmail={userEmail} />
          </DashboardShell>
        }
      />

      {/* ── Terms ── */}
      <Route
        path="/terms"
        element={<TermsAndConditions onBack={() => navigate(-1 as never)} />}
      />

      {/* ── Catch-all ── */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

// ─── Root Export ──────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}