import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSounds } from '../../utils/SoundManager';

const services = [
  {
    id: 1,
    title: 'AUTOMATISATION',
    subtitle: 'Workflow Intelligence',
    description: 'Systèmes autonomes de nouvelle génération. Laissez les machines faire ce qu\'elles font le mieux : travailler pendant que vous profitez du café.',
    icon: '⚡',
    stats: {
      efficiency: '300%',
      uptime: '99.9%',
      savings: '60h/mois',
    },
    color: 'cyan',
  },
  {
    id: 2,
    title: 'WEB ENGINEERING',
    subtitle: 'Interface Mastery',
    description: 'Applications web qui ne se contentent pas de fonctionner - elles impressionnent. Performance, esthétique, expérience utilisateur sans compromis.',
    icon: '🌐',
    stats: {
      speed: '<200ms',
      score: '98/100',
      devices: '∞',
    },
    color: 'cyan',
  },
  {
    id: 3,
    title: 'IA & ML',
    subtitle: 'Cognitive Systems',
    description: 'Intelligence artificielle qui comprend votre business. Du traitement du langage naturel aux prédictions stratégiques.',
    icon: '🧠',
    stats: {
      accuracy: '96.2%',
      processing: '1M/sec',
      learning: 'Continu',
    },
    color: 'cyan',
  },
  {
    id: 4,
    title: 'CLOUD ARCHITECTURE',
    subtitle: 'Infrastructure Excellence',
    description: 'Infrastructures cloud évolutives et résilientes. Déploiements automatisés, monitoring en temps réel, zero-downtime.',
    icon: '☁️',
    stats: {
      uptime: '99.99%',
      scale: 'Auto',
      recovery: '<5min',
    },
    color: 'cyan',
  },
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { playHover, playConfirm } = useSounds();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleClick = () => {
    playConfirm();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="group relative cursor-pointer"
    >
      <motion.div
        animate={{
          rotateX: mousePosition.y * 0.5,
          rotateY: mousePosition.x * 0.5,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="holo-card p-6 h-full min-h-[320px] relative"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-stark-cyan opacity-50" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-stark-cyan opacity-50" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-stark-cyan opacity-50" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-stark-cyan opacity-50" />

        {/* Icon */}
        <motion.div
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.6 }}
          className="text-6xl mb-4"
        >
          {service.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-stark-cyan mb-1 font-rajdhani tracking-wider">
          {service.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-stark-cyan/60 mb-4 font-fira uppercase tracking-widest">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="text-stark-cyan/80 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          className="grid grid-cols-3 gap-2 mt-auto pt-4 border-t border-stark-cyan/20"
        >
          {Object.entries(service.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-stark-cyan font-bold text-lg font-fira">
                {value}
              </div>
              <div className="text-stark-cyan/50 text-xs uppercase font-fira">
                {key}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Hover glow effect */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          className="absolute inset-0 bg-gradient-to-br from-stark-cyan/20 via-transparent to-stark-cyan/10 rounded-lg pointer-events-none"
        />

        {/* Scan line effect */}
        {isHovered && (
          <motion.div
            initial={{ top: 0 }}
            animate={{ top: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-stark-cyan/50 to-transparent pointer-events-none"
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const HoloBlueprints = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold neon-text mb-4 font-rajdhani">
            // HOLOGRAPHIC BLUEPRINTS
          </h2>
          <p className="text-stark-cyan/60 text-xl font-fira">
            Services de pointe pour entreprises visionnaires
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="cyber-button text-lg px-10 py-4">
            CONSULTER LES SPECS COMPLÈTES
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HoloBlueprints;
