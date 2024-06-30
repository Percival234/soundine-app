import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@/hooks/useAppSelector';

export const Auth = () => {
  const navigate = useNavigate();
  const { user, isAuth } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user && isAuth) navigate('/');
  }, [navigate, user, isAuth]);

  return (
    <div className="flex justify-center items-center px-2 dark:bg-zinc-900 min-h-screen min-w-80 bg-white text-zinc-800 max-w-screen dark:text-white selection:bg-main selection:text-white isolate">
      <div className="md:grid md:grid-cols-2 overflow-hidden w-full sm:w-[500px] md:w-[900px] shadow-lg p-1.5 rounded-md bg-gradient-to-tr from-purple-800 to-main">
        <Outlet />
      </div>
    </div>
  );
};
