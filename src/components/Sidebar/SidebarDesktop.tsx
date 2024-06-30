import { Menu } from '@/components/Sidebar/Menu';
import { Advertising } from '@/components/Sidebar/Advertising';

import { useAppContext } from '@/hooks/useAppContext';

export const SidebarDesktop = () => {
  const { menuVisibility } = useAppContext();

  return (
    <div className="hidden lg:block relative">
      <div
        className={`${
          menuVisibility ? 'w-72' : 'w-0'
        } sticky top-0 overflow-scroll overflow-x-hidden pt-0 h-screen border-gray-opacity border-solid border-r-2 z-50 bg-zinc-50 duration-500 transition-[width] dark:bg-zinc-900`}>
        <Advertising />
        <Menu />
      </div>
    </div>
  );
};
