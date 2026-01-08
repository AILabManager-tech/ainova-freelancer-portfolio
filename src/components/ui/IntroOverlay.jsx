import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSystem } from '../../context/SystemContext';
import { useSounds } from '../../utils/SoundManager';

const IntroOverlay = () => {
  const { isLoading, initializeSystem } = useSystem();
  const { playStartup, playAmbient } = useSounds();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALISATION...');

  const loadingSteps = [
    { progress: 20, text: 'Vérification des systèmes de sécurité...' },
    { progress: 40, text: 'Chargement des modules quantiques...' },
    { progress: 60, text: 'Synchronisation du réacteur ARC...' },
    { progress: 80, text: 'Calibrage des interfaces holographiques...' },
    { progress: 100, text: 'SYSTÈMES PRÊTS' },
  ];

  useEffect(() => {
    if (!isLoading) return;

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingProgress(loadingSteps[currentStep].progress);
        setLoadingText(loadingSteps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [isLoading]);

  const handleInitialize = () => {
    playStartup();
    setTimeout(() => {
      playAmbient();
      initializeSystem();
    }, 1500);
  };

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-[100] bg-stark-black flex items-center justify-center"
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 cyber-grid opacity-20 animate-pulse" />

        {/* Scanlines */}
        <div className="absolute inset-0 scanlines opacity-50" />

        {/* Main content */}
        <div className="relative z-10 max-w-2xl w-full px-8 space-y-12">
          {/* Logo/Title */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="text-center space-y-4"
          >
            {/* Animated logo */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-32 h-32 mx-auto rounded-full bg-stark-cyan shadow-cyan-glow flex items-center justify-center mb-8"
            >
              <span className="text-stark-black font-bold text-6xl font-rajdhani">
                A
              </span>
            </motion.div>

            <h1 className="text-8xl font-bold neon-text font-rajdhani glitch">
              AINOVA
            </h1>
            <p className="text-xl text-stark-cyan/60 font-fira uppercase tracking-[0.3em]">
              Stark Edition v4.2
            </p>
          </motion.div>

          {/* Loading progress */}
          {loadingProgress < 100 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              {/* Progress bar */}
              <div className="relative h-2 bg-stark-cyan/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-stark-cyan via-stark-cyan/80 to-stark-cyan shadow-cyan-glow"
                />

                {/* Scanning line effect */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-1/4"
                />
              </div>

              {/* Loading text */}
              <div className="flex justify-between items-center">
                <motion.p
                  key={loadingText}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-stark-cyan/80 font-fira text-sm"
                >
                  {loadingText}
                </motion.p>
                <span className="text-stark-cyan font-fira font-bold">
                  {loadingProgress}%
                </span>
              </div>

              {/* Status indicators */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {['REACTOR', 'SYSTEMS', 'NETWORK'].map((system, index) => (
                  <motion.div
                    key={system}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="glass p-3 text-center"
                  >
                    <div className={`w-2 h-2 mx-auto mb-2 rounded-full ${
                      loadingProgress > (index + 1) * 25
                        ? 'bg-green-500 animate-pulse'
                        : 'bg-stark-cyan/30'
                    }`} />
                    <span className="text-xs font-fira text-stark-cyan/60">
                      {system}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            // Ready state - Show initialize button
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl text-stark-cyan font-fira font-bold"
              >
                ✓ TOUS LES SYSTÈMES OPÉRATIONNELS
              </motion.div>

              <motion.button
                onClick={handleInitialize}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 240, 255, 0.5)',
                    '0 0 40px rgba(0, 240, 255, 0.8)',
                    '0 0 20px rgba(0, 240, 255, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="cyber-button text-2xl px-16 py-6 mx-auto"
              >
                INITIALISER LE SYSTÈME
              </motion.button>

              <p className="text-stark-cyan/40 text-sm font-fira">
                Cliquez pour démarrer l'interface de commande tactique
              </p>
            </motion.div>
          )}

          {/* Warning text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-xs text-stark-cyan/40 font-fira"
          >
            <p>⚠️ ATTENTION: Interface à haute intensité visuelle</p>
            <p className="mt-1">Pour de meilleures performances, utilisez Chrome ou Firefox</p>
          </motion.div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-stark-cyan/30 animate-pulse" />
        <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-stark-cyan/30 animate-pulse" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-stark-cyan/30 animate-pulse" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-stark-cyan/30 animate-pulse" />
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroOverlay;
