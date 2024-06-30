import React from 'react';

import { TrackType } from '@/types/track';
import { ArtistType } from '@/types/artits';
import { PlaylistType } from '@/types/playlist';

import { formatNumber } from '@/helpers/formaters/formatNumber';

type TotalCountsProps = {
  tracks?: string[] | TrackType[];
  artists?: string[] | ArtistType[];
  playlists?: string[] | PlaylistType[];
  followers?: number;
};

export const TotalCounts: React.FC<TotalCountsProps> = ({
  tracks,
  followers,
  playlists,
  artists,
}) => {
  return (
    <div className="flex items-center gap-1 text-xs md:text-sm opacity-80 whitespace-nowrap">
      {[
        tracks && <div>{formatNumber(tracks.length)} Traсks</div>,
        followers !== undefined && <div>{formatNumber(followers)} Followers</div>,
        playlists && <div>{formatNumber(playlists.length)} Playlists</div>,
        artists && <div>{formatNumber(artists.length)} Artists</div>,
      ]
        .filter(Boolean)
        .map((element, index, array) => (
          <React.Fragment key={index}>
            {element}
            {index < array.length - 1 && '~'}
          </React.Fragment>
        ))}
    </div>
  );
};
