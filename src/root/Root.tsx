import { Outlet } from 'react-router-dom';

import { Topbar } from '@/components/Topbar/Topbar';
import { Player } from '@/components/Player/Player';
import { Search } from '@/components/Search/Search';
import { ShareModal } from '@/components/Modals/ShareModal';
import { LogoutModal } from '@/components/Modals/LogoutModal';
import { DeleteModal } from '@/components/Modals/DeleteModal';
import { SidebarMobile } from '@/components/Sidebar/SidebarMobile';
import { SidebarDesktop } from '@/components/Sidebar/SidebarDesktop';

export const Root = () => {
  return (
    <div className="min-h-screen min-w-80 flex bg-white text-zinc-800 max-w-screen dark:bg-zinc-800 dark:text-white selection:bg-main selection:text-white isolate">
      <main className="flex flex-1">
        <SidebarMobile />
        <SidebarDesktop />
        <div className="flex flex-col gap-10 flex-1 relative">
          <Topbar />
          <div className="@container h-full">
            <div className="flex flex-col gap-2 @xl:gap-5 pt-16 pb-5 @5xl:pt-20 max-w-7xl mx-auto px-1.5 h-full">
              <Outlet />
            </div>
          </div>
          <Player />
        </div>
        <DeleteModal />
        <LogoutModal />
        <ShareModal />
        <Search />
      </main>
    </div>
  );
};
