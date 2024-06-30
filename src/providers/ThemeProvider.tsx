import { useState, useEffect } from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme] = useState(
    localStorage.theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.theme = theme;
  }, [theme]);
  return <>{children}</>;
};
