import { Card } from '@/components/UI/Card';
import { Error } from '@/components/UI/Error';
import { TitleMain } from '@/components/UI/Title';
import { Paragraph } from '@/components/UI/Paragraph';
import { PageLoading } from '@/components/UI/Loading';
import { TracksList } from '@/components/Tracks/TracksList';

import { useGetTracksByTagsQuery } from '@/redux/endpoints/trackEndpoints';

type SimilarTracksProps = {
  tags: string[];
  id: string;
};

export const SimilarTracks: React.FC<SimilarTracksProps> = ({ tags, id }) => {
  const { data, isLoading, error } = useGetTracksByTagsQuery({ tags, limit: 5, exclude: id });

  if (isLoading) return <PageLoading />;
  if (error) return <Error error={error} />;

  return (
    <Card>
      <TitleMain>In the Same Genre</TitleMain>
      <Paragraph align="center">{`This selection of tracks may also appeal to you`}</Paragraph>
      {data?.tracks && <TracksList tracks={data.tracks} />}
    </Card>
  );
};
