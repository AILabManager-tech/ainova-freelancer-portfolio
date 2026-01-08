import { createContext, useContext, useState, useEffect } from 'react';

const SystemContext = createContext();

export const useSystem = () => {
  const context = useContext(SystemContext);
  if (!context) {
    throw new Error('useSystem must be used within SystemProvider');
  }
  return context;
};

export const SystemProvider = ({ children }) => {
  const [isSystemReady, setIsSystemReady] = useState(false);
  const [isOverclocked, setIsOverclocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  // Toggle overclock mode
  const toggleOverclock = () => {
    setIsOverclocked(prev => !prev);
  };

  // Initialize system
  const initializeSystem = () => {
    setIsLoading(false);
    setIsSystemReady(true);
  };

  // Handle overclock mode changes
  useEffect(() => {
    if (isOverclocked) {
      // Speed up animations
      setAnimationSpeed(3);
      // Add overclock class to body
      document.body.classList.add('overclock-mode');
    } else {
      // Normal speed
      setAnimationSpeed(1);
      // Remove overclock class from body
      document.body.classList.remove('overclock-mode');
    }
  }, [isOverclocked]);

  const value = {
    isSystemReady,
    isOverclocked,
    isLoading,
    animationSpeed,
    toggleOverclock,
    initializeSystem,
  };

  return (
    <SystemContext.Provider value={value}>
      {children}
    </SystemContext.Provider>
  );
};
