import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSounds } from '../../utils/SoundManager';
import { projectsData as projects } from '../../data/projectsData';

const ProjectCard = ({ project, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="glass p-8 rounded-lg w-full max-w-4xl mx-auto relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="cyber-grid h-full" />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8">
        {/* Left side - Icon and basic info */}
        <div className="flex flex-col justify-between">
          {/* Large project icon */}
          <div>
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-9xl mb-6 filter drop-shadow-2xl"
            >
              {project.image}
            </motion.div>

            <div className="space-y-2">
              <div className="text-xs text-stark-cyan/60 font-fira uppercase tracking-widest">
                {project.category} // {project.year}
              </div>
              <h3 className="text-4xl font-bold text-stark-cyan font-rajdhani glitch">
                {project.name}
              </h3>
              <p className="text-stark-cyan/80 leading-relaxed mt-4">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-6">
            <div className="text-xs text-stark-cyan/60 font-fira uppercase mb-2">
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-fira border border-stark-cyan/30 text-stark-cyan/80 rounded bg-stark-cyan/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Stats */}
        <div className="space-y-4">
          <div className="text-sm text-stark-cyan/60 font-fira uppercase tracking-wider mb-4">
            // Performance Metrics
          </div>

          {Object.entries(project.stats).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-hover p-4 rounded border border-stark-cyan/20"
            >
              <div className="flex justify-between items-center">
                <span className="text-stark-cyan/60 uppercase text-sm font-fira">
                  {key.replace(/_/g, ' ')}
                </span>
                <span className="text-2xl font-bold text-stark-cyan font-fira neon-text">
                  {value}
                </span>
              </div>

              {/* Animated bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-stark-cyan/50 to-stark-cyan/20 mt-2 rounded-full"
              />
            </motion.div>
          ))}

          {/* Status indicator */}
          <div className="flex items-center space-x-2 mt-6 text-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-stark-cyan/60 font-fira">
              STATUS: OPERATIONAL
            </span>
          </div>
        </div>
      </div>

      {/* Corner markers */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-stark-cyan" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-stark-cyan" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-stark-cyan" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-stark-cyan" />
    </motion.div>
  );
};

const TheVault = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { playSlideTransition, playMechanicalSwitch } = useSounds();

  const handlePrevious = () => {
    playSlideTransition();
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    playSlideTransition();
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      playMechanicalSwitch();
      setCurrentIndex(index);
    }
  };

  return (
    <section id="vault" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-stark-black to-stark-black/80">
      {/* Scanlines effect */}
      <div className="absolute inset-0 scanlines opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold neon-text mb-4 font-rajdhani">
            // THE VAULT
          </h2>
          <p className="text-stark-cyan/60 text-xl font-fira">
            Arsenal de projets classifiés // Niveau de sécurité : Maximum
          </p>
        </motion.div>

        {/* Project display */}
        <div className="relative min-h-[600px] flex items-center">
          <AnimatePresence mode="wait">
            <ProjectCard
              key={currentIndex}
              project={projects[currentIndex]}
              isActive={true}
            />
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 cyber-button p-4 text-2xl hidden lg:block"
            aria-label="Previous project"
          >
            ←
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 cyber-button p-4 text-2xl hidden lg:block"
            aria-label="Next project"
          >
            →
          </button>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center items-center space-x-4 mt-12">
          <button
            onClick={handlePrevious}
            className="cyber-button p-3 lg:hidden"
            aria-label="Previous"
          >
            ←
          </button>

          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 h-3 bg-stark-cyan shadow-cyan-glow'
                  : 'w-3 h-3 bg-stark-cyan/30 hover:bg-stark-cyan/50'
              } rounded-full`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}

          <button
            onClick={handleNext}
            className="cyber-button p-3 lg:hidden"
            aria-label="Next"
          >
            →
          </button>
        </div>

        {/* Project counter */}
        <div className="text-center mt-8 font-fira text-stark-cyan/60">
          <span className="text-stark-cyan text-2xl font-bold">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          {' '}/{' '}
          <span>{String(projects.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
};

export default TheVault;
