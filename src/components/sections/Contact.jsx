import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSounds } from '../../utils/SoundManager';

const Contact = () => {
  const { playButtonClick } = useSounds();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playButtonClick();
    setStatus('sending');

    // Simulate email sending (in real app, use EmailJS or backend API)
    const mailtoLink = `mailto:ai.devlab.agents@gmail.com?subject=New Project Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0ABudget: ${formData.budget}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus('success');
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-stark-black/80 to-stark-black">
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
            // CONTACT
          </h2>
          <p className="text-stark-cyan/60 text-xl font-fira">
            Transformons votre vision en réalité // Mark Roy - AI & DevOps Specialist
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-stark-cyan mb-6 font-rajdhani">
                // INFORMATIONS DE CONTACT
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <div className="text-sm text-stark-cyan/60 font-fira uppercase">Email</div>
                    <a
                      href="mailto:ai.devlab.agents@gmail.com"
                      className="text-stark-cyan hover:text-stark-cyan/80 transition-colors font-fira"
                    >
                      ai.devlab.agents@gmail.com
                    </a>
                  </div>
                </div>

                {/* Name */}
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">👤</div>
                  <div>
                    <div className="text-sm text-stark-cyan/60 font-fira uppercase">Nom</div>
                    <div className="text-stark-cyan font-fira font-bold">Mark Roy</div>
                  </div>
                </div>

                {/* Specialization */}
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <div className="text-sm text-stark-cyan/60 font-fira uppercase">Spécialisation</div>
                    <div className="text-stark-cyan font-fira">
                      AI/ML Development, DevOps Automation, n8n Workflows
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🕒</div>
                  <div>
                    <div className="text-sm text-stark-cyan/60 font-fira uppercase">Disponibilité</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-stark-cyan font-fira">Accepte nouveaux projets</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-stark-cyan neon-text font-fira">30+</div>
                  <div className="text-xs text-stark-cyan/60 font-fira">Projets Complétés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stark-cyan neon-text font-fira">100%</div>
                  <div className="text-xs text-stark-cyan/60 font-fira">Satisfaction Client</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stark-cyan neon-text font-fira">24/7</div>
                  <div className="text-xs text-stark-cyan/60 font-fira">Support Disponible</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stark-cyan neon-text font-fira">5★</div>
                  <div className="text-xs text-stark-cyan/60 font-fira">Rating Moyen</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-lg space-y-6">
              <h3 className="text-2xl font-bold text-stark-cyan mb-6 font-rajdhani">
                // DÉMARRER UN PROJET
              </h3>

              {/* Name */}
              <div>
                <label className="block text-sm text-stark-cyan/60 font-fira uppercase mb-2">
                  Nom Complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-stark-black/50 border border-stark-cyan/30 rounded px-4 py-3 text-stark-cyan font-fira focus:outline-none focus:border-stark-cyan/60 transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-stark-cyan/60 font-fira uppercase mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-stark-black/50 border border-stark-cyan/30 rounded px-4 py-3 text-stark-cyan font-fira focus:outline-none focus:border-stark-cyan/60 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm text-stark-cyan/60 font-fira uppercase mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-stark-black/50 border border-stark-cyan/30 rounded px-4 py-3 text-stark-cyan font-fira focus:outline-none focus:border-stark-cyan/60 transition-colors"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm text-stark-cyan/60 font-fira uppercase mb-2">
                  Budget Estimé
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-stark-black/50 border border-stark-cyan/30 rounded px-4 py-3 text-stark-cyan font-fira focus:outline-none focus:border-stark-cyan/60 transition-colors"
                >
                  <option value="">Sélectionner un budget</option>
                  <option value="< $5K">{"< $5K"}</option>
                  <option value="$5K - $10K">$5K - $10K</option>
                  <option value="$10K - $25K">$10K - $25K</option>
                  <option value="$25K - $50K">$25K - $50K</option>
                  <option value="$50K+">$50K+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-stark-cyan/60 font-fira uppercase mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-stark-black/50 border border-stark-cyan/30 rounded px-4 py-3 text-stark-cyan font-fira focus:outline-none focus:border-stark-cyan/60 transition-colors resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full cyber-button py-4 text-lg font-bold font-fira disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' && '⚡ ENVOI EN COURS...'}
                {status === 'success' && '✓ MESSAGE ENVOYÉ!'}
                {status === 'idle' && '→ ENVOYER MESSAGE'}
                {status === 'error' && '✗ ERREUR - RÉESSAYER'}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-500 font-fira text-sm"
                >
                  ✓ Votre message a été envoyé avec succès!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
