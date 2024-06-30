import React from 'react';

import { Link } from '@/components/UI/Link';

type ArtistRowProps = {
  artists: string[];
};

export const ArtistsRow: React.FC<ArtistRowProps> = ({ artists }) => {
  return (
    <div className="inline">
      {artists.map((artist, index) => (
        <React.Fragment key={index}>
          <Link to={`/music/artists/${artist}`}>{artist}</Link>
          {index < artists.length - 1 && ', '}
        </React.Fragment>
      ))}
    </div>
  );
};
