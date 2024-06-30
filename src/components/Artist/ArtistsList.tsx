import { AiOutlineTeam } from 'react-icons/ai';

import { ArtistType } from '@/types/artits';

import { Grid } from '@/components/UI/Grid';
import { Empty } from '@/components/UI/Empty';
import { ArtistCard } from '@/components/Artist/ArtistCard';

type ArtistsListProps = {
  artists: ArtistType[];
};

export const ArtistsList: React.FC<ArtistsListProps> = ({ artists }) => {
  return artists.length ? (
    <Grid>
      {artists.map((artist) => (
        <ArtistCard key={artist._id} artist={artist} />
      ))}
    </Grid>
  ) : (
    <Empty>
      <AiOutlineTeam size={60} />
      No artists
    </Empty>
  );
};
