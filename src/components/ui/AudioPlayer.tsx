import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const startAmbientSynth = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master Gain for smooth fade-in
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.5);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Filter to give a soft, cinematic, muffled luxury hum
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(180, ctx.currentTime);
      filter.connect(masterGain);

      // Warm deep root note (55 Hz - A1)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(55, ctx.currentTime);
      osc1.connect(filter);
      osc1.start();

      // Subtle 5th harmony (82.4 Hz - E2)
      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(82.4, ctx.currentTime);
      const gain2 = ctx.createGain();
      gain2.gain.value = 0.5;
      osc2.connect(gain2);
      gain2.connect(filter);
      osc2.start();

      // Subtle breathing LFO
      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(0.2, ctx.currentTime);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(30, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();
    } catch (err) {
      console.warn("Ambient sound initialization failed:", err);
    }
  };

  const stopAmbientSynth = () => {
    try {
      if (gainNodeRef.current && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        const gain = gainNodeRef.current;
        gain.gain.setValueAtTime(Math.max(gain.gain.value, 0.0001), ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
        setTimeout(() => {
          if (ctx.state !== 'closed') {
            ctx.suspend().catch(() => {});
          }
        }, 850);
      }
    } catch {
      // Ignore cleanup error
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAmbientSynth();
    } else {
      startAmbientSynth();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={togglePlay} 
      className="flex items-center gap-3 group focus:outline-none cursor-pointer"
      aria-label={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
    >
      <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 group-hover:text-gold transition-colors duration-300 hidden sm:block">
        {isPlaying ? 'Sound On' : 'Sound Off'}
      </span>
      <div className="flex items-end gap-[3px] h-4 w-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-[2px] bg-gold origin-bottom"
            animate={{ height: isPlaying ? ["20%", "100%", "20%"] : "20%" }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </button>
  );
}
