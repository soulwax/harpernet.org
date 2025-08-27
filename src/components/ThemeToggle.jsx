// File: src/components/ThemeToggle.jsx

import { useTheme } from '../contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      class={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark() ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark() ? 'light' : 'dark'} theme`}
    >
      <div class={`${styles.toggleContainer} ${isDark() ? styles.dark : styles.light}`}>
        <div class={styles.toggleSlider}>
          <div class={styles.iconContainer}>
            <span class={`${styles.icon} ${styles.sunIcon}`}>☀️</span>
            <span class={`${styles.icon} ${styles.moonIcon}`}>🌙</span>
          </div>
        </div>
      </div>
      <span class={styles.toggleText}>{isDark() ? 'Dark' : 'Light'}</span>
    </button>
  );
};

export default ThemeToggle;
