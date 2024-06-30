import { Outlet } from 'react-router-dom';

import { AuthProvider } from '@/providers/AuthProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { ReduxProvider } from '@/providers/ReduxProvider';
import { ContextProvider } from '@/providers/ContextProvider';

export const App = () => {
  return (
    <ReduxProvider>
      <ContextProvider>
        <ThemeProvider>
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        </ThemeProvider>
      </ContextProvider>
    </ReduxProvider>
  );
};
