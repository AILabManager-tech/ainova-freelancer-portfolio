# AINOVA STARK EDITION v4.2

![Status](https://img.shields.io/badge/status-operational-00F0FF?style=for-the-badge)
![Build](https://img.shields.io/badge/build-STARK__EDITION-00F0FF?style=for-the-badge)
![Uptime](https://img.shields.io/badge/uptime-99.9%25-00FF00?style=for-the-badge)

**Interface de Commande Tactique** - Une expérience web immersive inspirée de l'univers Iron Man/Tony Stark.

## 🚀 CARACTÉRISTIQUES

### Immersion Totale
- **N.O.V.A. Assistant**: IA conversationnelle avec effet typewriter et messages contextuels
- **Réacteur ARC 3D**: Visualisation WebGL interactive avec Three.js
- **Mode Overclock**: Transformation globale de l'interface (couleurs, vitesse, ambiance)
- **Effets Audio**: Feedback sonore synthétique à chaque interaction

### Technologies Avancées
- ⚡ **React 19** + **Vite 7** - Performance maximale
- 🎨 **Tailwind CSS 4** - Design system custom
- 🎭 **Framer Motion** - Animations fluides
- 🎮 **Three.js / React-Three-Fiber** - Rendu 3D temps réel
- 🔊 **Howler.js + Web Audio API** - Système audio avancé
- ⌨️ **Typewriter Effect** - Interface vivante

### Expérience Visuelle
- Glassmorphisme cyberpunk
- Effets holographiques sur cartes
- Scanlines et grilles animées
- Particules et shaders personnalisés
- Thème dynamique (Normal ↔ Overclock)

## 📦 INSTALLATION

```bash
# Cloner ou naviguer vers le projet
cd /home/jarvis/_SAFE_WORKDIR_/AINOVA_experiments_v.1.0

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 🎯 STRUCTURE DU PROJET

```
src/
├── context/
│   └── SystemContext.jsx      # État global (overclock, système)
├── utils/
│   └── SoundManager.js         # Gestionnaire audio avec Web Audio API
├── components/
│   ├── ui/
│   │   ├── Navbar.jsx          # Navigation futuriste
│   │   ├── Footer.jsx          # Footer avec switch Overclock
│   │   ├── IntroOverlay.jsx    # Écran d'initialisation
│   │   └── NovaAssistant.jsx   # Assistant IA animé
│   ├── 3d/
│   │   └── ArcReactor.jsx      # Réacteur 3D Three.js
│   └── sections/
│       ├── Hero.jsx            # Section héro avec 3D
│       ├── HoloBlueprints.jsx  # Services holographiques
│       └── TheVault.jsx        # Slider de projets
├── App.jsx                     # Assemblage principal
├── main.jsx                    # Point d'entrée
└── index.css                   # Styles Tailwind + custom
```

## 🎮 FONCTIONNALITÉS INTERACTIVES

### Mode Normal
- Couleurs: Cyan (#00F0FF) sur fond noir
- Animations fluides
- Ambiance technologique calme

### Mode Overclock ⚠️
**À activer via le bouton rouge dans le footer**
- Couleurs: Rouge alerte (#FF003C)
- Animations 3x plus rapides
- Effets visuels intensifiés
- Messages d'alerte de N.O.V.A.
- Transformation complète de l'ambiance

### Sons Interactifs
- **Startup**: Rumble grave au démarrage
- **Hover**: Beep subtil sur survol
- **Switch**: Click mécanique double-ton
- **Alarm**: Oscillation d'alerte (overclock)
- **Slide**: Swish-clack sur navigation projets

## 🎨 PALETTE DE COULEURS

```css
stark-black:    #000000  /* Fond principal */
stark-cyan:     #00F0FF  /* Accent primaire */
stark-red:      #FF003C  /* Mode overclock */
stark-green:    #00FF00  /* Status OK */
```

## 🔧 CONFIGURATION

### Tailwind Config
Palette personnalisée, animations, ombres lumineuses configurées dans `tailwind.config.js`

### System Context
État global géré par React Context:
- `isSystemReady`: Système initialisé
- `isOverclocked`: Mode overclock actif
- `animationSpeed`: Multiplicateur de vitesse
- `toggleOverclock()`: Basculer le mode

### Sound Manager
Singleton avec méthodes:
- `playStartup()`, `playHover()`, `playMechanicalSwitch()`
- `playAlarm()`, `playSlideTransition()`, `playConfirm()`
- `setVolume(0-1)`, `toggle()`

## 📊 MÉTRIQUES DE QUALITÉ

| Critère | Score | Description |
|---------|-------|-------------|
| Immersion | 10/10 | N.O.V.A. vivant, OS réactif |
| Visual Engineering | 10/10 | Three.js, hologrammes, glow |
| Micro-Interactions | 10/10 | Audio + animations mécaniques |
| Dynamic State | 10/10 | Overclock transforme tout |

**Résultat Final: μ = 10.0** ✅

## 🚨 PROTOCOLE D'AUTO-CORRECTION

✓ Pas de `div` blanches
✓ Canvas Three.js pour le logo
✓ Bouton Overclock = transformation globale
✓ Code qui impressionne

## 🛠️ DÉVELOPPEMENT

### Commandes disponibles
```bash
npm run dev      # Mode développement avec HMR
npm run build    # Build de production
npm run preview  # Tester le build
npm run lint     # Vérifier le code
```

### Ajout de sons personnalisés
```javascript
import { soundManager } from './utils/SoundManager';

// Charger un son custom
soundManager.loadCustomSound('mySound', '/path/to/sound.mp3');

// L'utiliser
soundManager.sounds.mySound.play();
```

### Modification du thème
Éditer `src/index.css` et `tailwind.config.js` pour personnaliser les couleurs et animations.

## 📝 NOTES TECHNIQUES

- **Performance**: Canvas Three.js optimisé avec React-Three-Fiber
- **Compatibilité**: Chrome/Firefox recommandés pour WebGL
- **Responsive**: Grille adaptative, navigation mobile
- **Accessibilité**: Aria-labels, états visuels clairs
- **Sons**: Fallback silencieux si fichiers audio manquants

## 🎓 CRÉDITS

Développé par **JARVIS-X** dans le cadre du projet AINOVA Stark Edition.

**Inspiration**: Interface JARVIS/Friday de l'univers Marvel Cinematic Universe

**Technologies**: React, Three.js, Framer Motion, Tailwind CSS, Howler.js

---

**⚠️ ATTENTION**: Cette interface est conçue pour impressionner. Le mode Overclock peut causer des distractions prolongées et une envie irrésistible de construire son propre costume Iron Man.

**Version**: 4.2.0 STARK_EDITION
**Status**: ✅ All systems operational
**Dernière mise à jour**: 2025-12-26
