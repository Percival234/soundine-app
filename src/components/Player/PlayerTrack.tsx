import { memo } from 'react';

import { TrackType } from '@/types/track';

import { Link } from '@/components/UI/Link';
import { ArtistsRow } from '@/components/Artist/ArtistsRow';

type PlayerTrackProps = {
  track: TrackType;
};

export const PlayerTrack: React.FC<PlayerTrackProps> = memo(({ track }) => {
  const { _id, name, artists } = track;
  return (
    <div className="flex flex-col justify-center">
      <Link className="font-bold text-sm sm:text-base leading-none" to={`/music/tracks/${_id}`}>
        {name}
      </Link>
      <div className="text-xs md:text-sm max-w-[15em] truncate whitespace-nowrap">
        <ArtistsRow artists={artists} />
      </div>
    </div>
  );
});
