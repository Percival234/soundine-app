import { New } from '@/components/New/New';
import { Social } from '@/components/Social/Social';
import { UserCard } from '@/components/User/UserCard';
import { TopCard } from '@/components/TopCard/TopCard';
import { RandomTrack } from '@/components/Tracks/RandomTrack';
import { PlaylistBanner } from '@/components/Playlist/PlaylistBanner';

export const Home = () => {
  return (
    <>
      <PlaylistBanner />
      <div className="flex gap-2 @xl:gap-3 flex-col @5xl:flex-row">
        <div className="flex flex-col flex-1 gap-2 @xl:gap-3">
          <RandomTrack />
          <div className="flex flex-1 gap-2 @xl:gap-3">
            <UserCard />
            <Social />
          </div>
        </div>
        <TopCard />
      </div>
      <New />
    </>
  );
};
