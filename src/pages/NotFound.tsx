import { Link } from '@/components/UI/Link';

import { useAppSelector } from '@/hooks/useAppSelector';

export const NotFound = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  const path = isAuth ? '/' : '/user/sign-in';

  return (
    <div className="flex flex-col justify-center items-center min-h-full min-w-full text-main dark:bg-zinc-900">
      <div className="flex flex-col gap-2 items-center p-10 md:p-16">
        <h1 className="text-6xl md:text-[10em] leading-none">404</h1>
        <h2 className="text-3xl md:text-[4em] mb-8">Page Not Found</h2>
        <Link to={path}>Return to home page</Link>
      </div>
    </div>
  );
};
