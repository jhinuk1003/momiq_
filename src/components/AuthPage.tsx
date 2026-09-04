import { useState, useEffect, useRef } from 'react';
import { auth, googleProvider } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { ArrowLeft, Sparkles, Heart } from 'lucide-react';
import { Button } from './ui/button';

interface AuthPageProps {
  defaultView?: 'login' | 'signup';
  onSuccess?: () => void;
  onBack?: () => void;
}

export function AuthPage({ defaultView = 'login', onSuccess, onBack }: AuthPageProps) {
  const [view, setView] = useState<'login' | 'signup'>(defaultView);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setView(defaultView);
    setError(null);
    setEmail('');
    setPassword('');
    setName('');
  }, [defaultView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (view === 'signup' && nameInputRef.current) {
        nameInputRef.current.focus();
      } else if (view === 'login' && emailInputRef.current) {
        emailInputRef.current.focus();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [view]);

  const handleEmailAuth = async () => {
    setError(null);
    if (!email || !password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (view === 'signup' && !name) {
      setError('Please enter your name.');
      return;
    }

    setLoading(true);
    try {
      if (view === 'login') {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        if (name) {
          await updateProfile(cred.user, { displayName: name });
        }
      }
      onSuccess?.();
    } catch (err: any) {
      console.error('Auth error:', err);
      let msg = 'Authentication failed. Please check credentials.';
      if (err.code === 'auth/user-not-found') msg = 'No maternal journal found with this email.';
      if (err.code === 'auth/wrong-password') msg = 'Incorrect password.';
      if (err.code === 'auth/email-already-in-use') msg = 'An account already exists with this email.';
      if (err.code === 'auth/weak-password') msg = 'Password should be at least 6 characters.';
      if (err.code === 'auth/invalid-email') msg = 'Please enter a valid email address.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      onSuccess?.();
    } catch (err: any) {
      console.error('Google Auth error:', err);
      setError('Google Sign-In was cancelled or failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--sketch-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 16px',
        position: 'relative',
      }}
    >
      {/* Back button */}
      {onBack && (
        <div style={{ position: 'absolute', top: 24, left: 24 }}>
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Landing Page
          </Button>
        </div>
      )}

      {/* Main Journal Card */}
      <div
        className="sketch-card sketch-crosshair"
        style={{
          width: '100%',
          maxWidth: 440,
          background: 'var(--sketch-paper)',
          padding: '36px 32px',
          boxShadow: '6px 7px 0px var(--sketch-ink)',
          position: 'relative',
        }}
      >
        <div className="sketch-tape" style={{ width: 110 }} />

        {/* Brand Stamp */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 'var(--radius-sketch-sm)',
              background: 'var(--sketch-terracotta-wash)',
              border: '1.8px solid var(--sketch-ink)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--sketch-terracotta)',
              marginBottom: 10,
              boxShadow: '2px 2px 0 var(--sketch-ink)',
            }}
          >
            <Heart size={24} />
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0 0 4px', color: 'var(--sketch-ink)' }}>
            Momi<span style={{ color: 'var(--sketch-terracotta)' }}>Q</span>
          </h1>
          <p className="sketch-handwriting" style={{ margin: 0, fontSize: '0.95rem', color: 'var(--sketch-lead)' }}>
            // Maternal Journal Entry Verification
          </p>
        </div>

        {/* Tab switch */}
        <div style={{ display: 'flex', gap: 6, padding: 4, background: 'var(--sketch-paper-tint)', border: '1.5px solid var(--sketch-ink)', borderRadius: 'var(--radius-sketch-sm)', marginBottom: 20 }}>
          <button
            type="button"
            onClick={() => setView('login')}
            style={{
              flex: 1,
              padding: '8px',
              border: view === 'login' ? '1.5px solid var(--sketch-ink)' : 'none',
              borderRadius: 'var(--radius-sketch-sm)',
              background: view === 'login' ? 'var(--sketch-paper)' : 'transparent',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              color: 'var(--sketch-ink)',
              boxShadow: view === 'login' ? '1.5px 1.5px 0 var(--sketch-ink)' : 'none',
            }}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => setView('signup')}
            style={{
              flex: 1,
              padding: '8px',
              border: view === 'signup' ? '1.5px solid var(--sketch-ink)' : 'none',
              borderRadius: 'var(--radius-sketch-sm)',
              background: view === 'signup' ? 'var(--sketch-paper)' : 'transparent',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              color: 'var(--sketch-ink)',
              boxShadow: view === 'signup' ? '1.5px 1.5px 0 var(--sketch-ink)' : 'none',
            }}
          >
            Create Journal
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div
            style={{
              padding: '10px 14px',
              background: 'var(--sketch-rose-wash)',
              border: '1.5px solid var(--sketch-rose)',
              borderRadius: 'var(--radius-sketch-sm)',
              color: 'var(--sketch-rose)',
              fontSize: '0.84rem',
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            {error}
          </div>
        )}

        {/* Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
          {view === 'signup' && (
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: 4 }}>
                Mother's Full Name
              </label>
              <input
                ref={nameInputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="sketch-input"
              />
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: 4 }}>
              Email Address
            </label>
            <input
              ref={emailInputRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mother@example.com"
              className="sketch-input"
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: 4 }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="sketch-input"
            />
          </div>

          <Button onClick={handleEmailAuth} disabled={loading} style={{ width: '100%', padding: '12px' }}>
            {loading ? 'Validating...' : view === 'login' ? 'Open Maternal Journal →' : 'Begin My Journal →'}
          </Button>
        </div>

        <div style={{ textAlign: 'center', margin: '14px 0', position: 'relative' }}>
          <div style={{ borderBottom: '1.5px dashed var(--sketch-lead-light)' }} />
          <span className="sketch-handwriting" style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', background: 'var(--sketch-paper)', padding: '0 8px', fontSize: '0.85rem', color: 'var(--sketch-lead)' }}>
            or access with
          </span>
        </div>

        <Button variant="secondary" onClick={handleGoogleAuth} disabled={loading} style={{ width: '100%', padding: '11px', gap: 10 }}>
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          Google Authentication
        </Button>
      </div>
    </div>
  );
}
