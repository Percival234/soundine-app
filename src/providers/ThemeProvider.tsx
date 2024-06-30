import { useEffect } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useLocalStorage('theme');

  useEffect(() => {
    document.documentElement.className = theme || 'light';
    localStorage.theme = theme;
  }, [theme]);
  return <>{children}</>;
};
