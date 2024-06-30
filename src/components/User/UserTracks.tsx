import { TracksList } from '@/components/Tracks/TracksList';

import { useAppSelector } from '@/hooks/useAppSelector';

export const UserTracks = () => {
  const tracks = useAppSelector((state) => state.user?.user?.favorites?.tracks);
  return <TracksList sort tracks={tracks || []} />;
};
