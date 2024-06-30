import { useEffect } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useLocalStorage('theme') || 'light';

  useEffect(() => {
    localStorage.theme = theme;
    document.documentElement.className = theme;
  }, [theme]);

  return <>{children}</>;
};
