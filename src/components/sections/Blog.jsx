import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSounds } from '../../utils/SoundManager';

const blogArticles = [
  {
    id: 1,
    title: 'Geargrinder Framework: Building Scalable AI Systems',
    excerpt: 'Deep dive into the architecture of Geargrinder, a Python framework for autonomous AI agents. Learn about modular design, agent lifecycle management, and production deployment strategies.',
    category: 'AI/ML',
    date: '2024-12-15',
    readTime: '12 min',
    image: '🤖',
    tags: ['Python', 'AI', 'Framework', 'FastAPI'],
    link: '#',
  },
  {
    id: 2,
    title: 'n8n Automation: From Zero to Production',
    excerpt: 'Complete guide to building production-ready n8n workflows. Covers error handling, monitoring, webhooks, API integrations, and best practices for enterprise automation.',
    category: 'DevOps',
    date: '2024-12-10',
    readTime: '15 min',
    image: '🔄',
    tags: ['n8n', 'Automation', 'Workflows', 'Integration'],
    link: '#',
  },
  {
    id: 3,
    title: 'AINOVA-OS: Multi-Provider LLM Orchestration',
    excerpt: 'Building a unified system for managing multiple LLM providers with automatic fallback, load balancing, and cost optimization. Real-world case study with 6 providers.',
    category: 'AI/ML',
    date: '2024-12-05',
    readTime: '18 min',
    image: '🔱',
    tags: ['LLM', 'Orchestration', 'OpenAI', 'Anthropic'],
    link: '#',
  },
  {
    id: 4,
    title: 'Monitoring Stack: Prometheus + Grafana',
    excerpt: 'Setting up comprehensive monitoring for microservices. Custom metrics, alerting rules, dashboard design, and integration with PagerDuty for incident management.',
    category: 'DevOps',
    date: '2024-11-28',
    readTime: '20 min',
    image: '📊',
    tags: ['Prometheus', 'Grafana', 'Monitoring', 'Alerting'],
    link: '#',
  },
  {
    id: 5,
    title: 'React 19: Modern Full-Stack Development',
    excerpt: 'Exploring React 19 features with practical examples. Server components, streaming SSR, concurrent rendering, and integration with FastAPI backend.',
    category: 'Web Dev',
    date: '2024-11-20',
    readTime: '14 min',
    image: '⚛️',
    tags: ['React', 'Next.js', 'FastAPI', 'Full-Stack'],
    link: '#',
  },
  {
    id: 6,
    title: 'CI/CD Pipelines: GitHub Actions at Scale',
    excerpt: 'Advanced CI/CD strategies for large projects. Matrix builds, caching strategies, Docker layer optimization, and zero-downtime deployments with Kubernetes.',
    category: 'DevOps',
    date: '2024-11-12',
    readTime: '16 min',
    image: '🚀',
    tags: ['CI/CD', 'GitHub Actions', 'Docker', 'Kubernetes'],
    link: '#',
  },
];

const categories = ['Tous', 'AI/ML', 'DevOps', 'Web Dev'];

const Blog = () => {
  const { playButtonClick, playMechanicalSwitch } = useSounds();
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredArticles =
    selectedCategory === 'Tous'
      ? blogArticles
      : blogArticles.filter((article) => article.category === selectedCategory);

  const handleCategoryClick = (category) => {
    playMechanicalSwitch();
    setSelectedCategory(category);
  };

  const handleArticleClick = () => {
    playButtonClick();
  };

  return (
    <section id="blog" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-stark-black to-stark-black/80">
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
            // BLOG & ARTICLES
          </h2>
          <p className="text-stark-cyan/60 text-xl font-fira">
            Insights techniques & retours d'expérience // Knowledge sharing
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-2 rounded-lg border-2 transition-all font-fira font-bold ${
                selectedCategory === category
                  ? 'border-stark-cyan bg-stark-cyan/10 text-stark-cyan shadow-cyan-glow'
                  : 'border-stark-cyan/30 text-stark-cyan/60 hover:border-stark-cyan/60 hover:text-stark-cyan'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover rounded-lg overflow-hidden cursor-pointer group"
              onClick={handleArticleClick}
            >
              {/* Article Header */}
              <div className="p-6 border-b border-stark-cyan/20">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-5xl"
                  >
                    {article.image}
                  </motion.div>
                  <span className="px-3 py-1 text-xs font-fira border border-stark-cyan/30 text-stark-cyan/80 rounded bg-stark-cyan/5">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stark-cyan font-rajdhani mb-3 group-hover:neon-text transition-all">
                  {article.title}
                </h3>

                <p className="text-stark-cyan/70 font-fira text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Article Footer */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-fira text-stark-cyan/60 border border-stark-cyan/20 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-stark-cyan/60 font-fira">
                  <span>
                    {new Date(article.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span>📖 {article.readTime}</span>
                </div>

                {/* Read More Button */}
                <button className="w-full mt-4 cyber-button py-2 text-sm">
                  → LIRE L'ARTICLE
                </button>
              </div>

              {/* Corner markers */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-stark-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-stark-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-stark-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-stark-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-stark-cyan mb-4 font-rajdhani">
              // NEWSLETTER TECHNIQUE
            </h3>
            <p className="text-stark-cyan/60 font-fira mb-6">
              Recevez des insights techniques, tutoriels et retours d'expérience directement dans votre inbox. 1-2 emails par mois, zéro spam.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 bg-stark-black/50 border border-stark-cyan/30 rounded px-4 py-3 text-stark-cyan font-fira focus:outline-none focus:border-stark-cyan/60 transition-colors"
              />
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  playButtonClick();
                }}
                className="cyber-button px-8 py-3"
              >
                → S'ABONNER
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
