import { useParams } from 'react-router-dom';

import { Card } from '@/components/UI/Card';
import { Error } from '@/components/UI/Error';
import { TitleMain } from '@/components/UI/Title';
import { PageLoading } from '@/components/UI/Loading';
import { TracksList } from '@/components/Tracks/TracksList';
import { ArtistInfo } from '@/components/Artist/ArtistInfo';
import { SimilarArtists } from '@/components/Similar/SimilarArtists';

import { useGetArtistQuery } from '@/redux/endpoints/artistEndpoints';

export const Artist = () => {
  const { name } = useParams();
  const { data: artist, isLoading, error } = useGetArtistQuery(name || '');

  if (isLoading) return <PageLoading />;
  if (error) return <Error error={error} />;

  return (
    artist && (
      <>
        <Card>
          <TitleMain>Journey to Musical Infinity with {name}</TitleMain>
          <ArtistInfo artist={artist} />
          <TracksList sort tracks={artist.tracks} />
        </Card>
        <SimilarArtists tags={artist.tags} id={artist._id} />
      </>
    )
  );
};
