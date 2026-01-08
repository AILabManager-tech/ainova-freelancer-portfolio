import { motion } from 'framer-motion';
import { useSounds } from '../../utils/SoundManager';

const DownloadCV = ({ variant = 'button' }) => {
  const { playButtonClick } = useSounds();

  const handleDownload = () => {
    playButtonClick();

    // Create a dynamic CV/Portfolio content
    const cvContent = `
═══════════════════════════════════════════════════════════════════
                    MARK ROY - PORTFOLIO TECHNIQUE
                  AI/ML Developer & DevOps Specialist
═══════════════════════════════════════════════════════════════════

📧 CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email:          ai.devlab.agents@gmail.com
Portfolio:      AINOVA Stark Edition
Disponibilité:  Accepte nouveaux projets

🎯 RÉSUMÉ PROFESSIONNEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Développeur Full-Stack spécialisé en IA/ML et DevOps avec 30+ projets
complétés. Expert en automatisation n8n, frameworks Python custom, et
architectures cloud scalables. Passion pour créer des solutions techniques
élégantes et performantes.

💼 COMPÉTENCES TECHNIQUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AI/ML Development
├─ LLM Integration (OpenAI, Anthropic, Local Models)
├─ Agents IA Autonomes (Geargrinder Framework)
├─ NLP & Computer Vision
└─ ML Pipelines & Training

Backend Development
├─ Python 3.12, FastAPI, Pydantic
├─ Node.js, Express
├─ PostgreSQL, MongoDB, Redis
└─ REST APIs, GraphQL, Webhooks

Frontend Development
├─ React 19, Next.js
├─ Three.js (3D Visualization)
├─ Framer Motion (Animations)
└─ Tailwind CSS, Responsive Design

DevOps & Automation
├─ Docker, Kubernetes
├─ CI/CD (GitHub Actions, GitLab CI)
├─ n8n Workflows (20+ production workflows)
├─ Prometheus, Grafana
└─ Infrastructure as Code

Frameworks & Tools
├─ Geargrinder Framework (Custom Python)
├─ AINOVA-OS (LLM Orchestration)
├─ SOIC Methodology (Analysis Framework)
└─ Custom CLI Tools (Click, Typer)

🚀 PROJETS MAJEURS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. GEARGRINDER FRAMEWORK
   Python 3.12 | FastAPI | Agents IA

   Framework modulaire pour systèmes IA autonomes. Architecture propre
   avec BaseAgent abstrait, registry dynamique, lifecycle management.
   10+ agents déployés en production.

2. AINOVA-OS SYSTEM
   Python | Redis | Prometheus | Docker

   Système d'orchestration unifié pour 6 providers LLM. Load balancing,
   fallback automatique, monitoring temps réel. Production-ready à 95%.

3. N8N WORKFLOW AUTOMATION
   n8n | Webhooks | API Integrations

   20 workflows production: Twitter automation, ETL pipelines, email
   campaigns, CI/CD, e-commerce processing. 40h/semaine économisées.

4. FULL-STACK PLATFORMS
   React 19 | FastAPI | PostgreSQL

   Applications web modernes avec 3D visualizations (Three.js), real-time
   features (WebSocket), monitoring complet. Architecture scalable.

5. DATA ENGINEERING PIPELINES
   Python | Elasticsearch | Grafana

   Pipelines ETL traitant 100GB+/jour. Transformation, validation,
   enrichissement données. Dashboards analytics temps réel.

6. CONSEILLER PLACEMENT (FINTECH)
   React | Python | ML Models

   Application FinTech: analyse portefeuille, recommandations IA,
   simulation scénarios. 1K+ portfolios gérés, 92% accuracy.

🎓 MÉTHODOLOGIES & PRATIQUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Test-Driven Development (TDD)
✓ CI/CD Automation
✓ Clean Code & SOLID Principles
✓ Agile/Scrum
✓ Documentation Technique
✓ Code Review & Mentoring
✓ Security Best Practices

📊 STATISTIQUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Projets Complétés:        30+
Workflows n8n:            20 (production)
Satisfaction Client:      100%
Rating Moyen:             5★
Temps de Réponse:         <24h
Support:                  24/7

💬 TÉMOIGNAGES CLIENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Mark a transformé notre infrastructure DevOps. Les workflows n8n qu'il
a créés nous ont fait économiser 40 heures par semaine."
- Sarah Chen, CTO @ TechFlow Inc.

"Le framework Geargrinder est incroyable. Architecture propre, modulaire
et performante. Notre système d'agents IA fonctionne parfaitement."
- Michael Rodriguez, Founder @ NeuralVision

"Communication excellente, délais respectés, qualité au rendez-vous.
Les pipelines ETL traitent 100GB+ quotidiennement sans problème."
- Emma Thompson, Product Manager @ DataCorp

💰 TARIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AI/ML Development:        À partir de $5K
DevOps & Automation:      À partir de $3K
n8n Workflows:            À partir de $2K
Full-Stack Development:   À partir de $4K
Custom Framework:         À partir de $8K
Data Engineering:         À partir de $4K

Consultation Gratuite:    30 min (première fois)
Consultation Standard:    $150/h
Workshop Approfondi:      $250/90min

📅 DISPONIBILITÉ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status: ✅ ACCEPTE NOUVEAUX PROJETS
Délai: 1-2 semaines pour démarrage
Horaires: Flexible, fuseaux horaires adaptables

🔗 CONTACT & RÉSERVATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pour discuter de votre projet ou réserver une consultation:

📧 Email: ai.devlab.agents@gmail.com
🌐 Portfolio: AINOVA Stark Edition
💬 Réponse garantie sous 24h

═══════════════════════════════════════════════════════════════════
          © 2024 Mark Roy - All Rights Reserved
      Generated with AINOVA Stark Edition Portfolio
═══════════════════════════════════════════════════════════════════
    `.trim();

    // Create and download file
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mark_Roy_Portfolio_2024.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (variant === 'button') {
    return (
      <button
        onClick={handleDownload}
        className="cyber-button px-6 py-3 font-bold text-sm"
      >
        📄 TÉLÉCHARGER CV
      </button>
    );
  }

  if (variant === 'section') {
    return (
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-stark-black/80 to-stark-black">
        <div className="absolute inset-0 scanlines opacity-30" />
        <div className="absolute inset-0 cyber-grid opacity-10" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-lg text-center"
          >
            <div className="text-6xl mb-6">📄</div>
            <h2 className="text-4xl font-bold text-stark-cyan neon-text mb-4 font-rajdhani">
              // TÉLÉCHARGER PORTFOLIO
            </h2>
            <p className="text-stark-cyan/60 font-fira text-lg mb-8">
              Accédez à mon portfolio complet avec projets détaillés, compétences techniques, et informations de contact.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass-hover p-4 rounded-lg">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-sm text-stark-cyan/60 font-fira">30+ Projets</div>
              </div>
              <div className="glass-hover p-4 rounded-lg">
                <div className="text-3xl mb-2">⚙️</div>
                <div className="text-sm text-stark-cyan/60 font-fira">50+ Technologies</div>
              </div>
              <div className="glass-hover p-4 rounded-lg">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-sm text-stark-cyan/60 font-fira">5★ Rating</div>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="cyber-button px-10 py-4 text-xl font-bold"
            >
              → TÉLÉCHARGER MAINTENANT
            </button>

            <p className="text-stark-cyan/40 font-fira text-xs mt-6">
              Format: TXT • Taille: ~5KB • Dernière mise à jour: Décembre 2024
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  // Floating button variant
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onClick={handleDownload}
      className="fixed bottom-24 left-8 z-40 glass p-4 rounded-full border border-stark-cyan/30 hover:border-stark-cyan hover:shadow-cyan-glow transition-all group"
      title="Télécharger Portfolio"
    >
      <div className="text-3xl">📄</div>
      <div className="absolute left-full ml-3 bg-stark-black/90 border border-stark-cyan/30 rounded px-3 py-1 text-xs text-stark-cyan font-fira whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Télécharger CV
      </div>
    </motion.button>
  );
};

export default DownloadCV;
