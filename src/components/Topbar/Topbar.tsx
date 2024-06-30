import { MenuButton } from '@/components/Buttons/MenuButton';
import { ThemeButton } from '@/components/Buttons/ThemeButton';
import { SearchButton } from '@/components/Buttons/SearchButton';

export const Topbar = () => {
  return (
    <div className="absolute bottom-0 right-0 w-full min-h-full">
      <div className="sticky top-0 flex justify-between items-center w-full gap-1 p-1 border-b-2 border-solid border-gray-opacity bg-zinc-50 z-[300] dark:bg-zinc-900">
        <div className="flex gap-1">
          <MenuButton />
          <SearchButton />
        </div>
        <ThemeButton />
      </div>
    </div>
  );
};
