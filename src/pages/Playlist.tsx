import { useParams } from 'react-router-dom';

import { Card } from '@/components/UI/Card';
import { Error } from '@/components/UI/Error';
import { TitleMain } from '@/components/UI/Title';
import { PageLoading } from '@/components/UI/Loading';
import { TracksList } from '@/components/Tracks/TracksList';
import { PlaylistInfo } from '@/components/Playlist/PlaylistInfo';
import { SimilarPLaylists } from '@/components/Similar/SimilarPlaylists';

import { useGetPlaylistQuery } from '@/redux/endpoints/playlistEndpoints';

export const Playlist = () => {
  const { id } = useParams();
  const { data: playlist, isLoading, error } = useGetPlaylistQuery(id || '');

  if (isLoading) return <PageLoading />;
  if (error) return <Error error={error} />;

  return (
    playlist && (
      <>
        <Card>
          <TitleMain>A Playlist That Will Conquer Your Emotions</TitleMain>
          <PlaylistInfo playlist={playlist} />
          <TracksList tracks={playlist.tracks} sort />
        </Card>
        <SimilarPLaylists tags={playlist.tags} id={playlist._id} />
      </>
    )
  );
};
