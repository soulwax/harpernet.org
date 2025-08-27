// File: src/contexts/ThemeContext.jsx

import { createContext, createSignal, onCleanup, onMount, useContext } from 'solid-js';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = (props) => {
  // Get initial theme from localStorage or system preference
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light';

    const stored = localStorage.getItem('theme');
    if (stored && (stored === 'light' || stored === 'dark')) {
      return stored;
    }

    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = createSignal(getInitialTheme());

  // Apply theme to document with force
  const applyTheme = (newTheme) => {
    if (typeof window === 'undefined') return;

    // Remove any existing theme classes
    document.documentElement.classList.remove('light', 'dark');
    document.body.classList.remove('light', 'dark');

    // Set new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.className = newTheme;
    document.body.setAttribute('data-theme', newTheme);
    document.body.className = `${document.body.className} ${newTheme}`.trim();

    // Force CSS custom property update
    if (newTheme === 'dark') {
      document.documentElement.style.colorScheme = 'dark';
      document.body.style.backgroundColor = '#0a0a0a';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.style.colorScheme = 'light';
      document.body.style.backgroundColor = '#fafafa';
      document.body.style.color = '#222222';
    }

    localStorage.setItem('theme', newTheme);

    // Force repaint
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.display = '';
  };

  // Toggle between light and dark
  const toggleTheme = () => {
    const newTheme = theme() === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Set specific theme
  const setSpecificTheme = (newTheme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  let mediaQuery;

  // Apply theme on mount and when theme changes
  onMount(() => {
    // Apply initial theme immediately
    applyTheme(theme());

    // Listen for system theme changes
    if (window.matchMedia) {
      mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        if (!localStorage.getItem('theme')) {
          const systemTheme = e.matches ? 'dark' : 'light';
          setTheme(systemTheme);
          applyTheme(systemTheme);
        }
      };

      mediaQuery.addEventListener('change', handleChange);
    }

    // Force theme application after a short delay to ensure all components are mounted
    setTimeout(() => {
      applyTheme(theme());
    }, 100);
  });

  onCleanup(() => {
    if (mediaQuery) {
      mediaQuery.removeEventListener('change', handleChange);
    }
  });

  const value = {
    theme,
    toggleTheme,
    setTheme: setSpecificTheme,
    isDark: () => theme() === 'dark',
    isLight: () => theme() === 'light',
  };

  return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>;
};
