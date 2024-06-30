import { useState } from 'react';

import { Error } from '@/components/UI/Error';
import { Card } from '@/components/UI/Card';
import { TitleMain } from '@/components/UI/Title';
import { PageLoading } from '@/components/UI/Loading';
import { Paragraph } from '@/components/UI/Paragraph';
import { MoreButton } from '@/components/Buttons/MoreButton';
import { ArtistsList } from '@/components/Artist/ArtistsList';

import { useGetPopularArtistsQuery } from '@/redux/endpoints/artistEndpoints';

export const Artists = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error } = useGetPopularArtistsQuery({
    page,
    limit: 30,
  });

  const handlePage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isLoading) return <PageLoading />;
  if (error) return <Error error={error} />;

  return (
    data && (
      <Card>
        <TitleMain>Listen to the Best: List for Music Lovers</TitleMain>
        <Paragraph align="center">
          They bring us new hits, a good mood, and unforgettable emotions
        </Paragraph>
        <ArtistsList artists={data.artists} />
        <MoreButton disabled={isFetching || !data.hasMore} onClick={handlePage} />
      </Card>
    )
  );
};
