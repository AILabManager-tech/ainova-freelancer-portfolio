import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSounds } from '../../utils/SoundManager';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO @ TechFlow Inc.',
    company: 'TechFlow Inc.',
    avatar: '👩‍💼',
    rating: 5,
    text: "Mark a transformé notre infrastructure DevOps. Les workflows n8n qu'il a créés nous ont fait économiser 40 heures par semaine. Expertise exceptionnelle en automatisation.",
    project: 'DevOps Automation Pipeline',
    date: 'Décembre 2024',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Founder @ AI Startup',
    company: 'NeuralVision',
    avatar: '👨‍💻',
    rating: 5,
    text: "Le framework Geargrinder développé par Mark est incroyable. Architecture propre, modulaire et performante. Notre système d'agents IA fonctionne parfaitement.",
    project: 'Custom AI Framework',
    date: 'Novembre 2024',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Product Manager',
    company: 'DataCorp',
    avatar: '👩‍🔬',
    rating: 5,
    text: "Communication excellente, délais respectés, qualité au rendez-vous. Les pipelines ETL créés traitent 100GB+ de données quotidiennement sans problème.",
    project: 'Data Engineering Pipeline',
    date: 'Octobre 2024',
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'CEO',
    company: 'E-commerce Plus',
    avatar: '👨‍💼',
    rating: 5,
    text: "Mark a automatisé tout notre processus e-commerce avec n8n. De la commande au shipping, tout est fluide. ROI atteint en 2 mois. Hautement recommandé!",
    project: 'E-commerce Automation',
    date: 'Septembre 2024',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Head of Engineering',
    company: 'FinTech Solutions',
    avatar: '👩‍💼',
    rating: 5,
    text: "L'application de conseiller placements financiers développée par Mark est impressionnante. IA précise, interface élégante, backend robuste. Dépassé nos attentes.",
    project: 'FinTech Application',
    date: 'Août 2024',
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'DevOps Lead',
    company: 'CloudScale',
    avatar: '👨‍💻',
    rating: 5,
    text: "Stack complet: FastAPI backend, React frontend, monitoring Prometheus/Grafana. Architecture production-ready dès le jour 1. Travail professionnel exemplaire.",
    project: 'Full-Stack Platform',
    date: 'Juillet 2024',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { playSlideTransition } = useSounds();

  const handlePrevious = () => {
    playSlideTransition();
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    playSlideTransition();
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-stark-black/80 to-stark-black">
      {/* Background effects */}
      <div className="absolute inset-0 scanlines opacity-30" />
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold neon-text mb-4 font-rajdhani">
            // TÉMOIGNAGES
          </h2>
          <p className="text-stark-cyan/60 text-xl font-fira">
            Ce que disent mes clients // Satisfaction garantie
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative min-h-[500px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="glass p-12 rounded-lg w-full max-w-4xl mx-auto relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="cyber-grid h-full" />
              </div>

              <div className="relative z-10">
                {/* Avatar & Client Info */}
                <div className="flex items-start space-x-6 mb-8">
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
                    className="text-7xl"
                  >
                    {currentTestimonial.avatar}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-stark-cyan font-rajdhani mb-2">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-stark-cyan/60 font-fira text-lg mb-3">
                      {currentTestimonial.role}
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className="text-stark-cyan/60 font-fira text-sm">
                        {currentTestimonial.company}
                      </span>
                      <span className="text-stark-cyan/40 font-fira text-sm">
                        // {currentTestimonial.date}
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-2xl text-stark-cyan"
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-8">
                  <div className="text-6xl text-stark-cyan/20 mb-4">"</div>
                  <p className="text-xl text-stark-cyan/90 font-fira leading-relaxed italic pl-8">
                    {currentTestimonial.text}
                  </p>
                </div>

                {/* Project Tag */}
                <div className="glass-hover inline-block px-6 py-3 rounded border border-stark-cyan/30">
                  <span className="text-xs text-stark-cyan/60 font-fira uppercase mr-2">
                    Projet:
                  </span>
                  <span className="text-stark-cyan font-fira font-bold">
                    {currentTestimonial.project}
                  </span>
                </div>
              </div>

              {/* Corner markers */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-stark-cyan" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-stark-cyan" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-stark-cyan" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-stark-cyan" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 cyber-button p-4 text-2xl hidden lg:block"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 cyber-button p-4 text-2xl hidden lg:block"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center space-x-4 mt-12">
          <button
            onClick={handlePrevious}
            className="cyber-button p-3 lg:hidden"
            aria-label="Previous"
          >
            ←
          </button>

          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                playSlideTransition();
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 h-3 bg-stark-cyan shadow-cyan-glow'
                  : 'w-3 h-3 bg-stark-cyan/30 hover:bg-stark-cyan/50'
              } rounded-full`}
              aria-label={`Go to testimonial ${index + 1}`}
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

        {/* Counter */}
        <div className="text-center mt-8 font-fira text-stark-cyan/60">
          <span className="text-stark-cyan text-2xl font-bold">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          {' / '}
          <span>{String(testimonialsData.length).padStart(2, '0')}</span>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="glass p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-stark-cyan neon-text font-fira">6</div>
            <div className="text-xs text-stark-cyan/60 font-fira mt-2">Clients Satisfaits</div>
          </div>
          <div className="glass p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-stark-cyan neon-text font-fira">5★</div>
            <div className="text-xs text-stark-cyan/60 font-fira mt-2">Rating Moyen</div>
          </div>
          <div className="glass p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-stark-cyan neon-text font-fira">100%</div>
            <div className="text-xs text-stark-cyan/60 font-fira mt-2">Projets Réussis</div>
          </div>
          <div className="glass p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-stark-cyan neon-text font-fira">24h</div>
            <div className="text-xs text-stark-cyan/60 font-fira mt-2">Temps Réponse</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
