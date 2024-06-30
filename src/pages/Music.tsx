import { Card } from '@/components/UI/Card';
import { Error } from '@/components/UI/Error';
import { TitleMain } from '@/components/UI/Title';
import { Slider } from '@/components/Slider/Slider';
import { Paragraph } from '@/components/UI/Paragraph';
import { PageLoading } from '@/components/UI/Loading';

import { useGetCollectionQuery } from '@/redux/endpoints/collectionEndpoints';
import { useGetPopularArtistsQuery } from '@/redux/endpoints/artistEndpoints';

import { POP_COLLECTION_ID, ROCK_COLLECTION_ID, TAGS } from '@/constants/constants';

export const Music = () => {
  const {
    data: artists,
    isLoading: artistIsLoading,
    error: artistError,
  } = useGetPopularArtistsQuery({ limit: 10 });
  const {
    data: coll1,
    isLoading: coll1IsLoading,
    error: coll1Error,
  } = useGetCollectionQuery(ROCK_COLLECTION_ID);
  const {
    data: coll2,
    isLoading: coll2IsLoading,
    error: coll2Error,
  } = useGetCollectionQuery(POP_COLLECTION_ID);

  if (artistIsLoading || coll1IsLoading || coll2IsLoading) return <PageLoading />;
  if (artistError || coll1Error || coll2Error)
    return <Error error={artistError || coll1Error || coll2Error} />;

  return (
    <Card>
      <TitleMain>Music that Makes the World Brighter!</TitleMain>
      <Paragraph align="center">
        Explore a vast selection of musical tracks across different genres. Enjoy listening to your
        favorite songs and discover new musical experiences.
      </Paragraph>
      {coll1 && (
        <Slider
          to={`/music/collections/${coll1._id}`}
          type="playlist"
          data={coll1.playlists}
          title={coll1.name}
        />
      )}
      <Slider to="/music/tags" type="tag" data={TAGS.slice(0, 10)} title="Tags" />
      {artists && (
        <Slider to="/music/artists" type="artist" data={artists.artists} title="Artists" />
      )}
      {coll2 && (
        <Slider
          to={`/music/collections/${coll2._id}`}
          type="playlist"
          data={coll2.playlists}
          title={coll2.name}
        />
      )}
    </Card>
  );
};
