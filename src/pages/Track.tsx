import { useParams } from 'react-router-dom';

import { Card } from '@/components/UI/Card';
import { Error } from '@/components/UI/Error';
import { TitleMain } from '@/components/UI/Title';
import { Paragraph } from '@/components/UI/Paragraph';
import { PageLoading } from '@/components/UI/Loading';
import { TracksList } from '@/components/Tracks/TracksList';
import { SimilarTracks } from '@/components/Similar/SimilarTracks';

import { useGetTrackQuery } from '@/redux/endpoints/trackEndpoints';

export const Track = () => {
  const { id } = useParams();
  const { data: track, isLoading, error } = useGetTrackQuery(id || '');

  if (isLoading) return <PageLoading />;
  if (error) return <Error error={error} />;

  return (
    track && (
      <>
        <Card className="md:pb-10">
          <TitleMain>Rhythmic Journey: Musical Discovery</TitleMain>
          <Paragraph align="center">
            Immerse yourself in the atmosphere of our new song, where the notes cascade over you in
            waves of emotion.
          </Paragraph>
          <TracksList tracks={[track]} />
        </Card>
        <SimilarTracks tags={track.tags} id={track._id} />
      </>
    )
  );
};
