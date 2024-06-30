import { Title } from '@/components/UI/Title';
import { TotalCounts } from '@/components/Total/TotalCounts';

import { useAppSelector } from '@/hooks/useAppSelector';

export const UserInfo = () => {
  const user = useAppSelector((state) => state.user?.user);
  return (
    <div className="flex gap-5 flex-col items-center">
      <Title>{user?.name}</Title>
      <TotalCounts
        tracks={user?.favorites?.tracks}
        playlists={user?.favorites?.playlists}
        artists={user?.favorites?.artists}
      />
    </div>
  );
};
