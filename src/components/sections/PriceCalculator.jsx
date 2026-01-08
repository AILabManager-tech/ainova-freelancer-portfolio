import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSounds } from '../../utils/SoundManager';

const projectTypes = [
  { id: 'ai_ml', name: 'AI/ML Development', basePrice: 5000, icon: '🤖' },
  { id: 'devops', name: 'DevOps & Automation', basePrice: 3000, icon: '⚙️' },
  { id: 'n8n', name: 'n8n Workflows', basePrice: 2000, icon: '🔄' },
  { id: 'fullstack', name: 'Full-Stack Development', basePrice: 4000, icon: '🌐' },
  { id: 'framework', name: 'Custom Framework', basePrice: 8000, icon: '🔱' },
  { id: 'data', name: 'Data Engineering', basePrice: 4000, icon: '📊' },
];

const complexityLevels = [
  { id: 'simple', name: 'Simple', multiplier: 1, description: 'Projet basique, fonctionnalités standard' },
  { id: 'medium', name: 'Moyen', multiplier: 1.5, description: 'Complexité moyenne, intégrations multiples' },
  { id: 'complex', name: 'Complexe', multiplier: 2.5, description: 'Haute complexité, architecture avancée' },
];

const features = [
  { id: 'testing', name: 'Tests Automatisés', price: 1000, icon: '✓' },
  { id: 'ci_cd', name: 'CI/CD Pipeline', price: 1500, icon: '🚀' },
  { id: 'monitoring', name: 'Monitoring & Alerting', price: 1200, icon: '📊' },
  { id: 'documentation', name: 'Documentation Complète', price: 800, icon: '📚' },
  { id: 'training', name: 'Formation & Support', price: 2000, icon: '🎓' },
  { id: 'maintenance', name: 'Maintenance 3 mois', price: 1500, icon: '🔧' },
];

const PriceCalculator = () => {
  const { playButtonClick, playMechanicalSwitch } = useSounds();
  const [selectedType, setSelectedType] = useState(null);
  const [complexity, setComplexity] = useState('medium');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [timeline, setTimeline] = useState(4); // weeks

  const handleTypeSelect = (type) => {
    playButtonClick();
    setSelectedType(type);
  };

  const handleComplexityChange = (level) => {
    playMechanicalSwitch();
    setComplexity(level);
  };

  const toggleFeature = (featureId) => {
    playMechanicalSwitch();
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const calculatePrice = () => {
    if (!selectedType) return 0;

    const basePrice = selectedType.basePrice;
    const complexityMultiplier = complexityLevels.find((c) => c.id === complexity)?.multiplier || 1;
    const featuresPrice = selectedFeatures.reduce((sum, featureId) => {
      const feature = features.find((f) => f.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);

    const timelineMultiplier = timeline < 2 ? 1.3 : timeline < 4 ? 1.1 : 1;

    return Math.round(basePrice * complexityMultiplier * timelineMultiplier + featuresPrice);
  };

  const estimatedPrice = calculatePrice();

  return (
    <section id="pricing" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-stark-black to-stark-black/80">
      {/* Background effects */}
      <div className="absolute inset-0 scanlines opacity-30" />
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold neon-text mb-4 font-rajdhani">
            // CALCULATEUR DE PRIX
          </h2>
          <p className="text-stark-cyan/60 text-xl font-fira">
            Estimez le coût de votre projet // Transparent et personnalisé
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Configuration */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Project Type */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-stark-cyan mb-6 font-rajdhani">
                // ÉTAPE 1: Type de Projet
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleTypeSelect(type)}
                    className={`p-6 rounded-lg border-2 transition-all ${
                      selectedType?.id === type.id
                        ? 'border-stark-cyan bg-stark-cyan/10 shadow-cyan-glow'
                        : 'border-stark-cyan/30 hover:border-stark-cyan/60'
                    }`}
                  >
                    <div className="text-4xl mb-3">{type.icon}</div>
                    <div className="text-sm font-bold text-stark-cyan font-fira mb-2">
                      {type.name}
                    </div>
                    <div className="text-xs text-stark-cyan/60 font-fira">
                      À partir de ${type.basePrice.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 2: Complexity */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-stark-cyan mb-6 font-rajdhani">
                // ÉTAPE 2: Complexité
              </h3>
              <div className="space-y-4">
                {complexityLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => handleComplexityChange(level.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      complexity === level.id
                        ? 'border-stark-cyan bg-stark-cyan/10'
                        : 'border-stark-cyan/30 hover:border-stark-cyan/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-stark-cyan font-fira mb-1">
                          {level.name}
                        </div>
                        <div className="text-sm text-stark-cyan/60 font-fira">
                          {level.description}
                        </div>
                      </div>
                      <div className="text-lg font-bold text-stark-cyan font-fira">
                        x{level.multiplier}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 3: Features */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-stark-cyan mb-6 font-rajdhani">
                // ÉTAPE 3: Fonctionnalités Additionnelles
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedFeatures.includes(feature.id)
                        ? 'border-stark-cyan bg-stark-cyan/10'
                        : 'border-stark-cyan/30 hover:border-stark-cyan/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{feature.icon}</span>
                        <div className="text-sm font-bold text-stark-cyan font-fira">
                          {feature.name}
                        </div>
                      </div>
                      <div className="text-sm text-stark-cyan/60 font-fira">
                        +${feature.price.toLocaleString()}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 4: Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-stark-cyan mb-6 font-rajdhani">
                // ÉTAPE 4: Délai Souhaité
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-stark-cyan font-fira">Délai: {timeline} semaines</span>
                  <span className="text-stark-cyan/60 font-fira text-sm">
                    {timeline < 2 ? '(Rush +30%)' : timeline < 4 ? '(Express +10%)' : '(Standard)'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={timeline}
                  onChange={(e) => {
                    playMechanicalSwitch();
                    setTimeline(Number(e.target.value));
                  }}
                  className="w-full h-2 bg-stark-cyan/20 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #00d9ff ${(timeline / 12) * 100}%, rgba(0, 217, 255, 0.2) ${(timeline / 12) * 100}%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-stark-cyan/60 font-fira">
                  <span>1 sem</span>
                  <span>3 mois</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-lg sticky top-24"
            >
              <h3 className="text-2xl font-bold text-stark-cyan mb-6 font-rajdhani">
                // ESTIMATION
              </h3>

              <div className="space-y-6">
                {/* Project Type */}
                <div className="pb-4 border-b border-stark-cyan/20">
                  <div className="text-xs text-stark-cyan/60 font-fira uppercase mb-2">
                    Type de Projet
                  </div>
                  <div className="text-stark-cyan font-fira">
                    {selectedType ? (
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{selectedType.icon}</span>
                        <span>{selectedType.name}</span>
                      </div>
                    ) : (
                      <span className="text-stark-cyan/40">Non sélectionné</span>
                    )}
                  </div>
                </div>

                {/* Complexity */}
                <div className="pb-4 border-b border-stark-cyan/20">
                  <div className="text-xs text-stark-cyan/60 font-fira uppercase mb-2">
                    Complexité
                  </div>
                  <div className="text-stark-cyan font-fira capitalize">
                    {complexityLevels.find((c) => c.id === complexity)?.name}
                  </div>
                </div>

                {/* Features */}
                {selectedFeatures.length > 0 && (
                  <div className="pb-4 border-b border-stark-cyan/20">
                    <div className="text-xs text-stark-cyan/60 font-fira uppercase mb-2">
                      Fonctionnalités ({selectedFeatures.length})
                    </div>
                    <div className="space-y-1">
                      {selectedFeatures.map((featureId) => {
                        const feature = features.find((f) => f.id === featureId);
                        return (
                          <div key={featureId} className="text-sm text-stark-cyan/80 font-fira flex items-center space-x-2">
                            <span>{feature.icon}</span>
                            <span>{feature.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Timeline */}
                <div className="pb-4 border-b border-stark-cyan/20">
                  <div className="text-xs text-stark-cyan/60 font-fira uppercase mb-2">
                    Délai
                  </div>
                  <div className="text-stark-cyan font-fira">
                    {timeline} semaines
                  </div>
                </div>

                {/* Total Price */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={estimatedPrice}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="pt-4"
                  >
                    <div className="text-xs text-stark-cyan/60 font-fira uppercase mb-2">
                      Prix Estimé
                    </div>
                    <div className="text-5xl font-bold text-stark-cyan neon-text font-fira">
                      ${estimatedPrice.toLocaleString()}
                    </div>
                    <div className="text-xs text-stark-cyan/60 font-fira mt-2">
                      * Estimation indicative
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={playButtonClick}
                  className="w-full cyber-button py-3 text-center block mt-6"
                >
                  → DEMANDER UN DEVIS
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
