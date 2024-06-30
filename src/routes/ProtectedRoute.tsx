import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@/hooks/useAppSelector';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/user/sign-in', { replace: true });
    }
  }, [user, navigate]);

  return <>{user && children}</>;
};
