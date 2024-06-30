import { PlaylistList } from '@/components/Playlist/PlaylistList';

import { useAppSelector } from '@/hooks/useAppSelector';

export const UserPlaylists = () => {
  const playlists = useAppSelector((state) => state.user?.user?.favorites?.playlists);
  return <PlaylistList playlists={playlists || []} />;
};
