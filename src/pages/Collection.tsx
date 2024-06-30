import { useParams } from 'react-router-dom';

import { Card } from '@/components/UI/Card';
import { Error } from '@/components/UI/Error';
import { TitleMain } from '@/components/UI/Title';
import { Paragraph } from '@/components/UI/Paragraph';
import { PageLoading } from '@/components/UI/Loading';
import { PlaylistList } from '@/components/Playlist/PlaylistList';

import { useGetCollectionQuery } from '@/redux/endpoints/collectionEndpoints';

export const Collection = () => {
  const { id } = useParams();
  const { data: collection, isLoading, error } = useGetCollectionQuery(id || '');

  if (isLoading) return <PageLoading />;
  if (error) return <Error error={error} />;

  return (
    collection && (
      <Card>
        <TitleMain>{collection?.name}</TitleMain>
        <Paragraph align="center">Listen and Enjoy</Paragraph>
        <PlaylistList playlists={collection?.playlists} />
      </Card>
    )
  );
};
