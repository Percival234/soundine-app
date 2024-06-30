import { AiOutlinePlaySquare } from 'react-icons/ai';

import { PlaylistType } from '@/types/playlist';

import { Grid } from '@/components/UI/Grid';
import { Empty } from '@/components/UI/Empty';
import { PlaylistCard } from '@/components/Playlist/PlaylistCard';

type PlaylistListProps = {
  playlists: PlaylistType[];
};

export const PlaylistList: React.FC<PlaylistListProps> = ({ playlists }) => {
  return playlists.length > 0 ? (
    <Grid>
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist._id} playlist={playlist} />
      ))}
    </Grid>
  ) : (
    <Empty>
      <AiOutlinePlaySquare size={60} />
      No playlists
    </Empty>
  );
};
