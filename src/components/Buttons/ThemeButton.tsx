import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

import { Button } from '@/components/UI/Button';

export const ThemeButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(() => (theme === 'light' ? 'dark' : 'light'));

  return (
    <Button variant="ghost" size="icon" aria-label="Change theme" onClick={toggleTheme}>
      {theme === 'dark' ? <FiMoon /> : <FiSun />}
    </Button>
  );
};
