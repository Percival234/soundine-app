import { ArtistsList } from '@/components/Artist/ArtistsList';

import { useAppSelector } from '@/hooks/useAppSelector';

export const UserArtists = () => {
  const artists = useAppSelector((state) => state.user?.user?.favorites?.artists);
  return <ArtistsList artists={artists || []} />;
};
