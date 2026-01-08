import { motion } from 'framer-motion';
import { useSystem } from '../../context/SystemContext';
import { useSounds } from '../../utils/SoundManager';

const OverclockSwitch = () => {
  const { isOverclocked, toggleOverclock } = useSystem();
  const { playAlarm, playMechanicalSwitch } = useSounds();

  const handleToggle = () => {
    if (!isOverclocked) {
      playAlarm();
    } else {
      playMechanicalSwitch();
    }
    toggleOverclock();
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6 glass rounded-lg">
      <div className="text-center">
        <h3 className="text-sm font-fira text-stark-cyan/60 uppercase tracking-wider mb-1">
          ⚠️ DANGER ZONE ⚠️
        </h3>
        <p className="text-xs text-stark-cyan/40 font-fira">
          Ne pas toucher sauf si vous êtes Tony Stark
        </p>
      </div>

      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-32 h-16 rounded-lg border-2 transition-all duration-300 ${
          isOverclocked
            ? 'border-stark-red bg-stark-red/20 shadow-red-glow'
            : 'border-stark-cyan/50 bg-stark-cyan/5 hover:border-stark-red hover:shadow-red-glow'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-bold font-rajdhani text-lg ${
            isOverclocked ? 'text-stark-red' : 'text-stark-cyan/60'
          }`}>
            {isOverclocked ? 'ARRÊTER' : 'ACTIVER'}
          </span>
        </div>

        {/* Animated warning stripes when active */}
        {isOverclocked && (
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-30"
            style={{
              background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #FF003C 10px, #FF003C 20px)',
            }}
          />
        )}
      </motion.button>

      {/* Status display */}
      <div className={`text-center font-fira text-xs ${
        isOverclocked ? 'text-stark-red animate-pulse' : 'text-stark-cyan/60'
      }`}>
        {isOverclocked ? (
          <>
            <div className="font-bold">OVERCLOCK ACTIF</div>
            <div className="text-stark-red/80">Température: 487°C</div>
            <div className="text-stark-red/80">Puissance: 340%</div>
          </>
        ) : (
          <>
            <div>Système: Normal</div>
            <div className="text-stark-cyan/40">Température: 37°C</div>
          </>
        )}
      </div>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 bg-gradient-to-t from-stark-black to-transparent">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Left - Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-stark-cyan shadow-cyan-glow flex items-center justify-center">
                <span className="text-stark-black font-bold text-2xl font-rajdhani">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stark-cyan font-rajdhani">AINOVA</h3>
                <p className="text-xs text-stark-cyan/60 font-fira">STARK EDITION</p>
              </div>
            </div>
            <p className="text-stark-cyan/60 text-sm font-fira leading-relaxed">
              Interface de commande tactique pour entreprises visionnaires.
              Propulsé par la technologie du futur.
            </p>
          </div>

          {/* Center - Overclock Switch */}
          <div className="flex justify-center">
            <OverclockSwitch />
          </div>

          {/* Right - Links */}
          <div className="space-y-4">
            <h4 className="text-stark-cyan font-rajdhani font-bold text-lg uppercase">
              Connexions
            </h4>
            <div className="space-y-2">
              {[
                { label: 'GitHub', href: '#' },
                { label: 'LinkedIn', href: '#' },
                { label: 'Twitter', href: '#' },
                { label: 'Discord', href: '#' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-stark-cyan/60 hover:text-stark-cyan transition-colors text-sm font-fira"
                >
                  → {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-stark-cyan/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-stark-cyan/40 text-sm font-fira">
              © {currentYear} AINOVA SYSTEMS. Tous droits réservés.
            </div>

            <div className="flex items-center space-x-4 text-xs font-fira text-stark-cyan/40">
              <span>Version 4.2.0</span>
              <span>•</span>
              <span>Build: STARK_EDITION</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-stark-cyan/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-stark-cyan/20" />
    </footer>
  );
};

export default Footer;
