import { Card } from '@/components/UI/Card';
import { Error } from '@/components/UI/Error';
import { TitleMain } from '@/components/UI/Title';
import { Paragraph } from '@/components/UI/Paragraph';
import { PageLoading } from '@/components/UI/Loading';
import { ArtistsList } from '@/components/Artist/ArtistsList';

import { useGetArtistsByTagsQuery } from '@/redux/endpoints/artistEndpoints';

type SimilarArtistsProps = {
  tags: string[];
  id: string;
};

export const SimilarArtists: React.FC<SimilarArtistsProps> = ({ tags, id }) => {
  const { data, isLoading, error } = useGetArtistsByTagsQuery({ tags, limit: 5, exclude: id });

  if (isLoading) return <PageLoading />;
  if (error) return <Error error={error} />;

  return (
    <Card>
      <TitleMain>In the Same Genre</TitleMain>
      <Paragraph align="center">{`This selection of artists may also appeal to you`}</Paragraph>
      {data?.artists && <ArtistsList artists={data.artists} />}
    </Card>
  );
};
