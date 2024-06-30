import { Card } from '@/components/UI/Card';
import { Error } from '@/components/UI/Error';
import { TitleMain } from '@/components/UI/Title';
import { Paragraph } from '@/components/UI/Paragraph';
import { PageLoading } from '@/components/UI/Loading';
import { PlaylistList } from '@/components/Playlist/PlaylistList';

import { useGetPlaylistsByTagsQuery } from '@/redux/endpoints/playlistEndpoints';

type SimilarPlaylistProps = {
  tags: string[];
  id: string;
};

export const SimilarPLaylists: React.FC<SimilarPlaylistProps> = ({ tags, id }) => {
  const { data, isLoading, error } = useGetPlaylistsByTagsQuery({ tags, limit: 5, exclude: id });

  if (isLoading) return <PageLoading />;
  if (error) return <Error error={error} />;

  return (
    <Card>
      <TitleMain>In the Same Genre</TitleMain>
      <Paragraph align="center">{`This selection of playlists may also appeal to you`}</Paragraph>
      {data?.playlists && <PlaylistList playlists={data.playlists} />}
    </Card>
  );
};
