// Cartoon Web Audio Sound Synthesizer (Zero asset dependencies, instant response)

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

// Initialize or get audio context safely on user gesture
function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  } catch {
    return null;
  }
}

export function isSoundEnabled(): boolean {
  if (typeof window === 'undefined') return true;
  const stored = localStorage.getItem('omega_sound_fx_enabled');
  if (stored !== null) return stored === 'true';
  return soundEnabled;
}

export function setSoundEnabled(enabled: boolean): void {
  soundEnabled = enabled;
  if (typeof window !== 'undefined') {
    localStorage.setItem('omega_sound_fx_enabled', String(enabled));
  }
}

export function toggleSound(): boolean {
  const next = !isSoundEnabled();
  setSoundEnabled(next);
  if (next) playPopSound();
  return next;
}

// 1. Playful Bouncy Bubble Pop (buttons, cards, chips)
export function playPopSound(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(840, now + 0.08);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  } catch {
    // Graceful fallback
  }
}

// 2. Playful Mascot "Boing" Spring (clicking the mascot)
export function playBoingSound(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(460, now + 0.12);
    osc.frequency.linearRampToValueAtTime(320, now + 0.22);
    osc.frequency.linearRampToValueAtTime(600, now + 0.3);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  } catch {
    // Graceful fallback
  }
}

// 3. Cheerful Success Chime (correct answer, completed exercise)
export function playSuccessChime(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const now = ctx.currentTime + idx * 0.07;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.28);
    });
  } catch {
    // Graceful fallback
  }
}

// 4. Milestone / Level-Up Fanfare (trophy unlocked, mock exam submitted)
export function playFanfare(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    // Triumphant melody notes: G4, C5, E5, G5
    const melody = [
      { f: 392.00, t: 0.0, d: 0.12 },
      { f: 523.25, t: 0.12, d: 0.12 },
      { f: 659.25, t: 0.24, d: 0.12 },
      { f: 783.99, t: 0.36, d: 0.4 }
    ];

    melody.forEach((note) => {
      const startTime = ctx.currentTime + note.t;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, startTime);

      gain.gain.setValueAtTime(0.18, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + note.d);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + note.d);
    });
  } catch {
    // Graceful fallback
  }
}
