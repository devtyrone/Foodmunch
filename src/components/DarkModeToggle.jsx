/**
 * DarkModeToggle.jsx
 * Small button component to toggle Tailwind's `dark` class on <html>.
 * Persists theme preference in localStorage and respects system preference.
 */
import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Load saved theme or use system preference
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setIsDark(initial === 'dark');
    if (initial === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle between light and dark themes and persist choice
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <span className="text-sm">
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  );
}

export default DarkModeToggle;
