import { Howl } from 'howler';

class SoundManager {
  constructor() {
    this.sounds = {};
    this.enabled = true;
    this.volume = 0.3;

    // Initialize placeholder sounds (silent fallbacks)
    this.initSounds();
  }

  initSounds() {
    // Create silent audio data URLs as placeholders
    const silentAudio = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';

    // System startup sound (low frequency rumble)
    this.sounds.startup = new Howl({
      src: [silentAudio],
      volume: this.volume * 1.5,
      html5: true,
    });

    // Hover sound (subtle beep)
    this.sounds.hover = new Howl({
      src: [silentAudio],
      volume: this.volume * 0.5,
      html5: true,
    });

    // Mechanical switch sound
    this.sounds.mechanicalSwitch = new Howl({
      src: [silentAudio],
      volume: this.volume * 0.8,
      html5: true,
    });

    // Alarm/warning sound
    this.sounds.alarm = new Howl({
      src: [silentAudio],
      volume: this.volume * 1.2,
      html5: true,
    });

    // Slide transition sound (swish-clack)
    this.sounds.slideTransition = new Howl({
      src: [silentAudio],
      volume: this.volume * 0.7,
      html5: true,
    });

    // Success/confirmation sound
    this.sounds.confirm = new Howl({
      src: [silentAudio],
      volume: this.volume * 0.6,
      html5: true,
    });

    // Ambient background hum
    this.sounds.ambient = new Howl({
      src: [silentAudio],
      volume: this.volume * 0.2,
      loop: true,
      html5: true,
    });
  }

  // Generate a synthetic beep sound using Web Audio API
  generateBeep(frequency = 800, duration = 0.1, volume = 0.3) {
    if (!this.enabled) return;

    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch (error) {
      console.warn('Web Audio API not supported:', error);
    }
  }

  playStartup() {
    if (!this.enabled) return;
    // Play a low rumble effect
    this.generateBeep(120, 1.5, 0.4);
    setTimeout(() => this.generateBeep(180, 0.8, 0.3), 500);
  }

  playHover() {
    if (!this.enabled) return;
    // Subtle high-pitched beep
    this.generateBeep(1200, 0.05, 0.15);
  }

  playMechanicalSwitch() {
    if (!this.enabled) return;
    // Two-tone click
    this.generateBeep(400, 0.03, 0.25);
    setTimeout(() => this.generateBeep(600, 0.03, 0.2), 30);
  }

  playAlarm() {
    if (!this.enabled) return;
    // Oscillating alarm
    this.generateBeep(800, 0.2, 0.35);
    setTimeout(() => this.generateBeep(1000, 0.2, 0.35), 200);
    setTimeout(() => this.generateBeep(800, 0.2, 0.35), 400);
  }

  playSlideTransition() {
    if (!this.enabled) return;
    // Swish-clack sound
    this.generateBeep(300, 0.15, 0.25);
    setTimeout(() => this.generateBeep(200, 0.1, 0.2), 100);
  }

  playConfirm() {
    if (!this.enabled) return;
    // Rising confirmation tone
    this.generateBeep(600, 0.1, 0.2);
    setTimeout(() => this.generateBeep(800, 0.1, 0.2), 80);
  }

  playAmbient() {
    if (!this.enabled) return;
    // Start ambient background
    if (this.sounds.ambient && !this.sounds.ambient.playing()) {
      this.sounds.ambient.play();
    }
  }

  stopAmbient() {
    if (this.sounds.ambient && this.sounds.ambient.playing()) {
      this.sounds.ambient.stop();
    }
  }

  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    Object.values(this.sounds).forEach(sound => {
      if (sound) sound.volume(this.volume);
    });
  }

  toggle() {
    this.enabled = !this.enabled;
    if (!this.enabled) {
      this.stopAll();
    }
    return this.enabled;
  }

  stopAll() {
    Object.values(this.sounds).forEach(sound => {
      if (sound && sound.playing()) sound.stop();
    });
  }

  // Load custom sound (for future use when actual audio files are available)
  loadCustomSound(name, src) {
    this.sounds[name] = new Howl({
      src: [src],
      volume: this.volume,
      html5: true,
    });
  }
}

// Export singleton instance
export const soundManager = new SoundManager();

// Export hook for React components
export const useSounds = () => {
  return {
    playStartup: () => soundManager.playStartup(),
    playHover: () => soundManager.playHover(),
    playMechanicalSwitch: () => soundManager.playMechanicalSwitch(),
    playAlarm: () => soundManager.playAlarm(),
    playSlideTransition: () => soundManager.playSlideTransition(),
    playConfirm: () => soundManager.playConfirm(),
    playAmbient: () => soundManager.playAmbient(),
    stopAmbient: () => soundManager.stopAmbient(),
    setVolume: (volume) => soundManager.setVolume(volume),
    toggle: () => soundManager.toggle(),
  };
};
