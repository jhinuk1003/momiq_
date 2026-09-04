import { useState } from 'react';
import { Music, Play, Pause, Baby, Moon, Smile, Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

type MoodType = 'sleep' | 'calm' | 'play';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  mood: MoodType;
  spotifyId?: string;
}

interface Playlist {
  id: number;
  name: string;
  emoji: string;
  trackCount: number;
  duration: string;
  mood: MoodType;
  tracks: Track[];
  spotifyPlaylistId?: string;
}

interface PersonalizedMusicProps {
  onBack?: () => void;
}

const playlists: Playlist[] = [
  {
    id: 1,
    name: 'Sweet Dreams Lullabies',
    emoji: '🌙',
    trackCount: 5,
    duration: '25 min',
    mood: 'sleep',
    spotifyPlaylistId: '37i9dQZF1DX3Ogo9pFvBkY',
    tracks: [
      { id: 101, title: 'Twinkle Twinkle Little Star', artist: 'Baby Music Box', duration: '3:45', mood: 'sleep', spotifyId: '6rqhFgbbKwnb9MLmUQDhG6' },
      { id: 102, title: 'Brahms Lullaby', artist: 'Classical for Babies', duration: '4:20', mood: 'sleep' },
      { id: 103, title: 'Rock-a-bye Baby', artist: 'Gentle Melodies', duration: '3:15', mood: 'sleep' },
      { id: 104, title: 'Moonlight Sonata', artist: 'Piano Lullabies', duration: '5:30', mood: 'sleep' },
    ],
  },
  {
    id: 2,
    name: 'Womb Calm & Ocean Waves',
    emoji: '🌊',
    trackCount: 4,
    duration: '18 min',
    mood: 'calm',
    spotifyPlaylistId: '37i9dQZF1DX4WYpdgoIcn6',
    tracks: [
      { id: 201, title: 'Maternal Heartbeat & Ocean', artist: 'Nature Rhythms', duration: '5:00', mood: 'calm' },
      { id: 202, title: 'Soft Harp Harmony', artist: 'Peaceful Strings', duration: '4:30', mood: 'calm' },
      { id: 203, title: 'Gentle Rain on Canvas', artist: 'Relaxing Frequencies', duration: '4:45', mood: 'calm' },
    ],
  },
  {
    id: 3,
    name: 'Playtime & Awakening Melody',
    emoji: '🎈',
    trackCount: 4,
    duration: '16 min',
    mood: 'play',
    spotifyPlaylistId: '37i9dQZF1DX1s9knjP51Oa',
    tracks: [
      { id: 301, title: 'The Wheels on the Bus', artist: 'Kids Folk', duration: '3:30', mood: 'play' },
      { id: 302, title: 'Joyful Glockenspiel', artist: 'Fun Time Music', duration: '3:45', mood: 'play' },
      { id: 303, title: 'Animal Parade', artist: 'Morning Play', duration: '4:00', mood: 'play' },
    ],
  },
];

const moods = [
  { value: 'sleep' as MoodType, label: 'Sleep & Lullaby', icon: Moon, wash: 'var(--sketch-lavender-wash)' },
  { value: 'calm' as MoodType, label: 'Calm & Heartbeat', icon: Smile, wash: 'var(--sketch-blueprint-wash)' },
  { value: 'play' as MoodType, label: 'Awakening & Play', icon: Sparkles, wash: 'var(--sketch-ochre-wash)' },
];

function SpotifyEmbed({ playlistId, trackId }: { playlistId?: string; trackId?: string }) {
  const embedId = trackId ? `track/${trackId}` : `playlist/${playlistId}`;
  const url = `https://open.spotify.com/embed/${embedId}?utm_source=generator&theme=0`;
  return (
    <div
      style={{
        border: '1.8px solid var(--sketch-ink)',
        borderRadius: 'var(--radius-sketch-sm)',
        boxShadow: '3px 3px 0 var(--sketch-ink)',
        overflow: 'hidden',
        marginBottom: 20,
        background: '#000',
      }}
    >
      <iframe
        src={url}
        width="100%"
        height={152}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Player"
        style={{ display: 'block' }}
      />
    </div>
  );
}

export function PersonalizedMusic({ onBack }: PersonalizedMusicProps) {
  const [screen, setScreen] = useState<'setup' | 'dashboard'>('dashboard');
  const [babyName, setBabyName] = useState('Little One');
  const [ageMonths, setAgeMonths] = useState(6);
  const [selectedMood, setSelectedMood] = useState<MoodType>('sleep');
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(playlists[0]);
  const [activeEmbed, setActiveEmbed] = useState<{ playlistId?: string; trackId?: string }>({
    playlistId: playlists[0].spotifyPlaylistId,
  });

  const filteredPlaylists = playlists.filter((p) => p.mood === selectedMood);

  return (
    <div style={{ width: '100%', maxWidth: 860, margin: '0 auto' }}>
      {/* Header controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        {onBack && (
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Overview
          </Button>
        )}
        <Button variant="secondary" size="sm" onClick={() => setScreen(screen === 'setup' ? 'dashboard' : 'setup')}>
          {screen === 'setup' ? 'View Soundscapes' : 'Tune Baby Profile'}
        </Button>
      </div>

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span className="sketch-badge sketch-badge-terracotta">
            <Music size={13} /> Spec 14 // Prenatal & Infant Acoustic Therapy
          </span>
          <span className="sketch-handwriting" style={{ fontSize: '0.9rem', color: 'var(--sketch-lead)' }}>
            [Spotify Integration Active]
          </span>
        </div>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--sketch-ink)' }}>
          Maternal Soundscapes & Lullabies
        </h1>
        <p className="sketch-note" style={{ fontSize: '1.05rem', color: 'var(--sketch-graphite)', margin: 0 }}>
          "Calibrated frequencies to lower maternal cortisol, foster auditory bonding, and gently induce deep infant slumber."
        </p>
      </div>

      {/* Setup Form (if active) */}
      {screen === 'setup' ? (
        <div className="sketch-card" style={{ background: 'var(--sketch-paper)', padding: '28px', marginBottom: 24 }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 16px', borderBottom: '1.5px dashed var(--sketch-lead)', paddingBottom: 8 }}>
            Tune Acoustic Profiles for {babyName}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 6 }}>
                Baby or Bump Name
              </label>
              <input
                value={babyName}
                onChange={(e) => setBabyName(e.target.value)}
                placeholder="e.g. Leo or Peanut"
                className="sketch-input"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 6 }}>
                Gestational or Infant Age: {ageMonths} Months
              </label>
              <input
                type="range"
                min={0}
                max={36}
                value={ageMonths}
                onChange={(e) => setAgeMonths(+e.target.value)}
                style={{ width: '100%', accentColor: 'var(--sketch-terracotta)', cursor: 'pointer' }}
              />
            </div>

            <Button onClick={() => setScreen('dashboard')} style={{ marginTop: 10 }}>
              Save Acoustic Preferences →
            </Button>
          </div>
        </div>
      ) : (
        <>
          {/* Active Spotify Player */}
          {activeEmbed && (
            <SpotifyEmbed playlistId={activeEmbed.playlistId} trackId={activeEmbed.trackId} />
          )}

          {/* Mood Filter Buttons */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 20, overflowX: 'auto', paddingBottom: 6 }}>
            {moods.map((m) => {
              const isSelected = selectedMood === m.value;
              return (
                <button
                  key={m.value}
                  onClick={() => setSelectedMood(m.value)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 18px',
                    borderRadius: 'var(--radius-sketch-sm)',
                    border: isSelected ? '1.8px solid var(--sketch-ink)' : '1.5px dashed var(--sketch-lead)',
                    background: isSelected ? m.wash : 'var(--sketch-paper)',
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '2px 2px 0 var(--sketch-ink)' : 'none',
                    transition: 'all 0.1s',
                  }}
                >
                  <m.icon size={16} color="var(--sketch-terracotta)" />
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>

          {/* Curated Soundscape Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {filteredPlaylists.map((p) => (
              <div
                key={p.id}
                className="sketch-card"
                style={{
                  background: 'var(--sketch-paper)',
                  padding: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ fontSize: '2rem' }}>{p.emoji}</span>
                    <span className="sketch-badge" style={{ fontSize: '0.7rem' }}>
                      {p.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--sketch-ink)' }}>
                    {p.name}
                  </h3>
                  <p className="sketch-handwriting" style={{ margin: '0 0 16px', fontSize: '0.88rem', color: 'var(--sketch-lead)' }}>
                    // {p.trackCount} Acoustic tracks compiled
                  </p>
                </div>

                <Button
                  onClick={() => {
                    setSelectedPlaylist(p);
                    setActiveEmbed({ playlistId: p.spotifyPlaylistId });
                  }}
                  style={{ width: '100%', padding: '10px' }}
                >
                  <Play size={15} /> Play Soundscape
                </Button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}