import { motion } from 'framer-motion';
import ArcReactor from '../3d/ArcReactor';
import { useSystem } from '../../context/SystemContext';

const Hero = () => {
  const { isOverclocked } = useSystem();

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block"
          >
            <span className="px-4 py-2 border border-stark-cyan/30 text-stark-cyan/80 text-sm font-fira uppercase tracking-widest">
              Interface de Commande Tactique
            </span>
          </motion.div>

          {/* Main headline */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-7xl lg:text-8xl font-bold font-rajdhani leading-none"
            >
              <span className="neon-text block">AINOVA</span>
              <span className={`block ${
                isOverclocked ? 'text-stark-red' : 'text-stark-cyan/80'
              }`}>
                SYSTEMS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-stark-cyan/60 text-xl mt-6 font-fira leading-relaxed max-w-xl"
            >
              Technologie de pointe pour entreprises qui ne se contentent pas de suivre le futur
              <span className="text-stark-cyan"> — elles le construisent.</span>
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <button className="cyber-button text-base px-8 py-3">
              INITIALISER MISSION
            </button>
            <button className="cyber-button text-base px-8 py-3 bg-stark-cyan/10">
              EXPLORER ARSENAL
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-stark-cyan/20"
          >
            {[
              { label: 'Projets', value: '127+' },
              { label: 'Clients', value: '89' },
              { label: 'Uptime', value: '99.9%' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-stark-cyan font-fira neon-text">
                  {stat.value}
                </div>
                <div className="text-sm text-stark-cyan/60 font-fira uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - 3D Arc Reactor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <ArcReactor />

          {/* Floating tech labels */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-10 -left-10 glass px-4 py-2 rounded"
          >
            <span className="text-xs font-fira text-stark-cyan">
              REACTOR v4.2
            </span>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute bottom-20 -right-10 glass px-4 py-2 rounded"
          >
            <span className="text-xs font-fira text-stark-cyan">
              {isOverclocked ? 'OVERCLOCKED' : 'STABLE'}
            </span>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute top-1/2 -right-10 glass px-4 py-2 rounded"
          >
            <span className="text-xs font-fira text-stark-cyan">
              3D ENGINE
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-xs text-stark-cyan/60 font-fira mb-2">
            SCROLL
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-stark-cyan to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
