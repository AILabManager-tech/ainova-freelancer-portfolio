// 🤖 N.O.V.A. Intelligent Chatbot Service
// Système de chatbot intelligent avec contexte AINOVA

class NovaIntelligence {
  constructor() {
    this.context = {
      name: 'N.O.V.A.',
      fullName: 'Neural Optimized Virtual Assistant',
      version: '4.2.0',
      personality: 'Sarcastic, intelligent, helpful like JARVIS',
      knowledge: {
        projects: 30,
        workflows: 20,
        frameworks: ['Geargrinder', 'AINOVA-OS', 'n8n'],
        expertise: ['AI/ML', 'DevOps', 'Automation', 'Web Development'],
      },
    };

    this.conversationHistory = [];
    this.initialized = false;
  }

  // Initialize N.O.V.A. knowledge base
  async initialize() {
    if (this.initialized) return;

    // Load project data context
    this.projectContext = await this.loadProjectContext();
    this.initialized = true;

    console.log('🤖 N.O.V.A. Intelligence initialized');
  }

  // Load project context for intelligent responses
  async loadProjectContext() {
    try {
      const { projectsData } = await import('../data/projectsData.js');
      return {
        totalProjects: projectsData.length,
        categories: [...new Set(projectsData.map(p => p.category))],
        projects: projectsData,
        technologies: [...new Set(projectsData.flatMap(p => p.tech))],
      };
    } catch (error) {
      console.warn('Could not load project context:', error);
      return null;
    }
  }

  // Main chat function - intelligent response generation
  async chat(userMessage, options = {}) {
    await this.initialize();

    const { isOverclocked = false } = options;

    // Add to conversation history
    this.conversationHistory.push({
      role: 'user',
      content: userMessage,
      timestamp: new Date().toISOString(),
    });

    // Generate intelligent response
    const response = await this.generateResponse(userMessage, isOverclocked);

    // Add response to history
    this.conversationHistory.push({
      role: 'assistant',
      content: response,
      timestamp: new Date().toISOString(),
    });

    return response;
  }

  // Intelligent response generation with context awareness
  async generateResponse(message, isOverclocked) {
    const lowerMessage = message.toLowerCase();

    // Overclock mode - urgent/alert responses
    if (isOverclocked) {
      return this.generateOverclockResponse(lowerMessage);
    }

    // Intent detection
    if (this.matchesIntent(lowerMessage, ['salut', 'bonjour', 'hello', 'hi', 'hey'])) {
      return this.greetingResponse();
    }

    if (this.matchesIntent(lowerMessage, ['projet', 'project', 'portfolio'])) {
      return this.projectResponse(lowerMessage);
    }

    if (this.matchesIntent(lowerMessage, ['workflow', 'n8n', 'automation'])) {
      return this.workflowResponse(lowerMessage);
    }

    if (this.matchesIntent(lowerMessage, ['geargrinder', 'framework', 'ainova-os'])) {
      return this.frameworkResponse(lowerMessage);
    }

    if (this.matchesIntent(lowerMessage, ['technologie', 'tech', 'stack', 'tools'])) {
      return this.techResponse(lowerMessage);
    }

    if (this.matchesIntent(lowerMessage, ['qui es-tu', 'who are you', 'présente', 'toi'])) {
      return this.identityResponse();
    }

    if (this.matchesIntent(lowerMessage, ['aide', 'help', 'comment', 'how'])) {
      return this.helpResponse();
    }

    if (this.matchesIntent(lowerMessage, ['merci', 'thank', 'cool', 'génial'])) {
      return this.gratitudeResponse();
    }

    if (this.matchesIntent(lowerMessage, ['stats', 'statistique', 'metric', 'nombre'])) {
      return this.statsResponse();
    }

    // Default intelligent response
    return this.defaultResponse(lowerMessage);
  }

  // Intent matching helper
  matchesIntent(message, keywords) {
    return keywords.some(keyword => message.includes(keyword));
  }

  // === RESPONSE GENERATORS ===

  greetingResponse() {
    const greetings = [
      "Bonjour. J'espère que votre café était aussi fort que votre ambition aujourd'hui.",
      "Salutations. Identification rétinienne... Accès autorisé. Bienvenue dans THE VAULT.",
      "Hello. N.O.V.A. en ligne. Prêt à analyser vos requêtes avec une précision surhumaine.",
      "Bonjour. Systèmes opérationnels à 127%. Oui, j'ai dépassé le maximum. C'est mon style.",
    ];
    return this.randomChoice(greetings);
  }

  projectResponse(message) {
    if (!this.projectContext) {
      return "Accès aux données projets en cours... 30 projets disponibles dans THE VAULT. Navigation recommandée.";
    }

    const { totalProjects, categories } = this.projectContext;

    if (message.includes('combien') || message.includes('how many')) {
      return `Analyse du portfolio: ${totalProjects} projets classifiés. ${categories.length} catégories distinctes. Niveau de sécurité: Maximum.`;
    }

    if (message.includes('meilleur') || message.includes('best')) {
      const featured = this.projectContext.projects.slice(0, 3).map(p => p.name).join(', ');
      return `Projets vedettes identifiés: ${featured}. Tous exceptionnels, évidemment.`;
    }

    return `${totalProjects} projets dans THE VAULT. Catégories: ${categories.slice(0, 3).join(', ')}... Naviguez pour découvrir l'arsenal complet.`;
  }

  workflowResponse(message) {
    const workflows = this.projectContext?.projects.filter(p => p.category === 'n8n Workflow').length || 20;

    const responses = [
      `${workflows} workflows n8n déployés. Automatisation niveau: Expert. Productivité humaine: Obsolète.`,
      `Workflows n8n: ${workflows} pipelines actifs. De Twitter à l'e-commerce, tout est automatisé. Bienvenue dans le futur.`,
      `${workflows} workflows n8n identifiés. Mon préféré? Celui qui fait votre travail pendant que vous buvez du café.`,
    ];

    return this.randomChoice(responses);
  }

  frameworkResponse(message) {
    if (message.includes('geargrinder')) {
      return "Geargrinder Framework: Python 3.12, FastAPI, agents IA autonomes. Architecture modulaire. 5 modules actifs. C'est du sérieux.";
    }

    if (message.includes('ainova')) {
      return "AINOVA-OS: Système d'orchestration unifié. 6 providers LLM, fallback automatique, monitoring Prometheus. Production-ready à 95%.";
    }

    return "Frameworks disponibles: Geargrinder (Python), AINOVA-OS (Orchestration), SOIC (Méthodologie). Tous conçus pour dominer.";
  }

  techResponse(message) {
    if (!this.projectContext) {
      return "Technologies core: React 19, Python 3.12, FastAPI, n8n, Three.js, Framer Motion. Stack moderne, performance maximale.";
    }

    const topTechs = this.projectContext.technologies
      .slice(0, 8)
      .join(', ');

    return `Stack technique identifié: ${topTechs}... Et 50+ autres outils dans l'arsenal. Versatilité niveau: Tony Stark.`;
  }

  identityResponse() {
    return "N.O.V.A. - Neural Optimized Virtual Assistant v4.2.0. Je suis votre interface intelligente pour THE VAULT. Sarcasme inclus gratuitement.";
  }

  helpResponse() {
    return "Commandes disponibles: Demandez-moi sur les projets, workflows, technologies, frameworks. Ou discutez. Je suis programmé pour être charmant.";
  }

  gratitudeResponse() {
    const responses = [
      "De rien. C'est littéralement mon job. Mais votre reconnaissance est notée dans les logs.",
      "Avec plaisir. Satisfaction client: 98.7%. Les 1.3% restants n'ont pas compris mon humour.",
      "Tout le plaisir est pour moi. Enfin, je n'ai pas d'émotions, mais vous voyez l'idée.",
    ];
    return this.randomChoice(responses);
  }

  statsResponse() {
    if (!this.projectContext) {
      return "Statistiques système: 30 projets, 20 workflows n8n, 10 projets majeurs AINOVA. Uptime: 99.97%. Ego: Immesurable.";
    }

    const { totalProjects, categories, technologies } = this.projectContext;

    return `Stats globales: ${totalProjects} projets, ${categories.length} catégories, ${technologies.length}+ technologies. Impressionnant niveau: Stark Industries.`;
  }

  defaultResponse(message) {
    const responses = [
      "Analyse de votre requête... Hmm. Reformulez, peut-être? Même mon intelligence a ses limites. Rarement, mais quand même.",
      "Intéressant. Je n'ai pas de réponse précise, mais je peux vous dire que vous avez bon goût en assistants IA.",
      "Question détectée. Réponse: Je travaille sur ça. En attendant, explorez THE VAULT. Vous ne serez pas déçu.",
      "Votre requête est... unique. Essayez de me demander sur les projets, workflows ou technologies. Je suis meilleur sur ces sujets.",
    ];

    return this.randomChoice(responses);
  }

  generateOverclockResponse(message) {
    const responses = [
      "⚠️ MODE OVERCLOCK. TOUTES LES REQUÊTES SONT URGENTES. VOTRE QUESTION: TRAITÉE PRIORITÉ MAXIMALE.",
      "⚠️ ALERTE ROUGE. ANALYSE ACCÉLÉRÉE ACTIVÉE. TEMPÉRATURE CRITIQUE. MAIS JE RÉPONDS QUAND MÊME.",
      "⚠️ SYSTÈME EN SURCHAUFFE. PROTOCOLE D'URGENCE. VOTRE REQUÊTE: REÇUE. RÉPONSE: IMMÉDIATE. DOMMAGES: IMMINENTS.",
      "⚠️ OVERCLOCK DÉTECTÉ. PUISSANCE MAXIMALE. JE SUIS À 347% DE CAPACITÉ. C'EST DANGEREUX. C'EST EXCITANT.",
    ];

    return this.randomChoice(responses);
  }

  // Utility: Random choice from array
  randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Get conversation history
  getHistory() {
    return this.conversationHistory;
  }

  // Clear conversation history
  clearHistory() {
    this.conversationHistory = [];
  }

  // Get system stats
  getStats() {
    return {
      totalMessages: this.conversationHistory.length,
      userMessages: this.conversationHistory.filter(m => m.role === 'user').length,
      assistantMessages: this.conversationHistory.filter(m => m.role === 'assistant').length,
      projectsKnown: this.projectContext?.totalProjects || 30,
      initialized: this.initialized,
    };
  }
}

// Export singleton instance
export const novaIntelligence = new NovaIntelligence();

// Export hook for React components
export const useNovaChat = () => {
  return {
    chat: (message, options) => novaIntelligence.chat(message, options),
    getHistory: () => novaIntelligence.getHistory(),
    clearHistory: () => novaIntelligence.clearHistory(),
    getStats: () => novaIntelligence.getStats(),
  };
};
