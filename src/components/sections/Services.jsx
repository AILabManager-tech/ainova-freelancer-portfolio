import { motion } from 'framer-motion';
import { useSounds } from '../../utils/SoundManager';

const servicesData = [
  {
    id: 1,
    icon: '🤖',
    title: 'AI/ML Development',
    description: 'Développement de systèmes IA avancés: agents autonomes, LLM integration, ML pipelines. OpenAI, Anthropic, modèles locaux.',
    features: ['Agents IA autonomes', 'LLM Integration', 'ML Pipelines', 'NLP/Computer Vision'],
    price: 'À partir de $5K',
  },
  {
    id: 2,
    icon: '⚙️',
    title: 'DevOps & Automation',
    description: 'Infrastructure moderne: Docker, Kubernetes, CI/CD pipelines. Automatisation complète avec monitoring et alerting.',
    features: ['Docker/Kubernetes', 'CI/CD Pipelines', 'Monitoring (Prometheus)', 'Infrastructure as Code'],
    price: 'À partir de $3K',
  },
  {
    id: 3,
    icon: '🔄',
    title: 'n8n Workflow Automation',
    description: 'Workflows n8n sur mesure: intégrations API, automatisation business processes, data pipelines ETL.',
    features: ['Custom Workflows', 'API Integrations', 'Data Pipelines', 'Webhook Automation'],
    price: 'À partir de $2K',
  },
  {
    id: 4,
    icon: '🌐',
    title: 'Full-Stack Development',
    description: 'Applications web modernes: React 19, Next.js, FastAPI backend. Design responsive et performant.',
    features: ['React/Next.js', 'FastAPI/Python', 'PostgreSQL/MongoDB', 'Real-time Features'],
    price: 'À partir de $4K',
  },
  {
    id: 5,
    icon: '🔱',
    title: 'Custom Framework Development',
    description: 'Frameworks Python sur mesure: architecture modulaire, CLI tools, API REST, agents IA réutilisables.',
    features: ['Geargrinder Framework', 'AINOVA-OS System', 'Custom CLI Tools', 'Modular Architecture'],
    price: 'À partir de $8K',
  },
  {
    id: 6,
    icon: '📊',
    title: 'Data Engineering',
    description: 'Solutions data complètes: ETL pipelines, data warehousing, analytics dashboards, real-time processing.',
    features: ['ETL Pipelines', 'Data Warehousing', 'Grafana Dashboards', 'Real-time Analytics'],
    price: 'À partir de $4K',
  },
];

const Services = () => {
  const { playButtonClick } = useSounds();

  const handleServiceClick = (service) => {
    playButtonClick();
    // Could open modal with more details or scroll to contact
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-stark-black to-stark-black/80">
      {/* Background effects */}
      <div className="absolute inset-0 scanlines opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold neon-text mb-4 font-rajdhani">
            // SERVICES
          </h2>
          <p className="text-stark-cyan/60 text-xl font-fira">
            Solutions techniques de pointe // Expertise full-stack & IA
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => handleServiceClick(service)}
            >
              {/* Service Icon */}
              <div className="p-8 border-b border-stark-cyan/20">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-7xl mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-stark-cyan font-rajdhani group-hover:neon-text transition-all">
                  {service.title}
                </h3>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <p className="text-stark-cyan/80 font-fira mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-stark-cyan" />
                      <span className="text-sm text-stark-cyan/70 font-fira">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-stark-cyan/20">
                  <span className="text-stark-cyan/60 font-fira text-sm uppercase">Prix</span>
                  <span className="text-stark-cyan font-fira font-bold">{service.price}</span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleServiceClick(service)}
                  className="w-full mt-4 cyber-button py-2 text-sm"
                >
                  → DEMANDER UN DEVIS
                </button>
              </div>

              {/* Corner markers */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-stark-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-stark-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-stark-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-stark-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-stark-cyan/60 font-fira mb-4">
            Besoin d'un service personnalisé? Discutons de votre projet.
          </p>
          <a
            href="#contact"
            className="inline-block cyber-button px-8 py-3 text-lg font-bold"
            onClick={playButtonClick}
          >
            → CONTACTEZ-MOI
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
