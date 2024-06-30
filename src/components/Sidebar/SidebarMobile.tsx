import { useEffect } from 'react';

import { Menu } from '@/components/Sidebar/Menu';
import { Advertising } from '@/components/Sidebar/Advertising';

import { useAppContext } from '@/hooks/useAppContext';

export const SidebarMobile = () => {
  const { menuVisibility, handleMenuVisibility } = useAppContext();

  useEffect(() => {
    function blockScroll() {
      if (window.innerWidth < 1024) {
        document.body.style.overflow = menuVisibility ? 'auto' : 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }

    blockScroll();

    window.addEventListener('resize', blockScroll);
    return () => window.removeEventListener('resize', blockScroll);
  }, [menuVisibility]);

  return (
    <div onClick={handleMenuVisibility} className="fixed lg:hidden z-[200]">
      <div
        className={`${
          menuVisibility ? 'bg-[#00000000] pointer-events-none' : 'bg-[#00000080]'
        }  z-[100] fixed top-0 right-0 left-0 -bottom-20 duration-200`}></div>
      <div
        className={`${
          menuVisibility ? '-translate-x-full' : 'translate-x-0'
        } fixed top-0 overflow-scroll overflow-x-hidden h-screen pt-10 z-[200] bg-zinc-50 duration-500 transition-transform dark:bg-zinc-900`}>
        <Advertising />
        <Menu />
      </div>
    </div>
  );
};
