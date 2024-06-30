import { useState, useEffect } from 'react';

import { TrackType } from '@/types/track';
import { PlaylistType } from '@/types/playlist';

import { Card } from '@/components/UI/Card';
import { Error } from '@/components/UI/Error';
import { TitleMain } from '@/components/UI/Title';
import { PageLoading } from '@/components/UI/Loading';
import { Paragraph } from '@/components/UI/Paragraph';
import { TracksList } from '@/components/Tracks/TracksList';
import { MoreButton } from '@/components/Buttons/MoreButton';
import { PlaylistList } from '@/components/Playlist/PlaylistList';

import { useGetNewTracksQuery } from '@/redux/endpoints/trackEndpoints';
import { useGetNewPlaylistsQuery } from '@/redux/endpoints/playlistEndpoints';

export const New = () => {
  const [tracksPage, setTracksPage] = useState(1);
  const [playlistsPage, setPlaylistsPage] = useState(1);
  const [allTracks, setAllTracks] = useState<TrackType[]>([]);
  const [allPlaylists, setAllPlaylists] = useState<PlaylistType[]>([]);

  const {
    data: tracks,
    isLoading: tracksIsLoading,
    isFetching: tracksIsFetching,
    error: tracksError,
  } = useGetNewTracksQuery({ page: tracksPage, limit: 20 });

  const {
    data: playlists,
    isLoading: playlistsIsLoading,
    isFetching: playlistsIsFetching,
    error: playlistsError,
  } = useGetNewPlaylistsQuery({ page: playlistsPage, limit: 10 });

  const handleTracksPage = () => setTracksPage((prevPage: number) => prevPage + 1);
  const handlePlaylistsPage = () => setPlaylistsPage((prevPage: number) => prevPage + 1);

  useEffect(() => {
    setAllTracks((prev) => (tracks?.tracks ? prev.concat(tracks?.tracks) : []));
  }, [tracks]);

  useEffect(() => {
    setAllPlaylists((prev) => (playlists?.playlists ? prev.concat(playlists?.playlists) : []));
  }, [playlists]);

  if (tracksIsLoading || playlistsIsLoading) return <PageLoading />;
  if (tracksError || playlistsError) return <Error error={tracksError || playlistsError} />;

  return (
    <>
      {tracks && (
        <Card>
          <TitleMain>Add Rhythm to Your Life: New Tracks Every Week</TitleMain>
          <Paragraph align="center">
            A selection of new tracks that will set the mood for the entire day
          </Paragraph>
          <TracksList tracks={allTracks} />
          <MoreButton disabled={tracksIsFetching || !tracks.hasMore} onClick={handleTracksPage} />
        </Card>
      )}
      {playlists && (
        <Card>
          <TitleMain>Music Trends: Latest Playlists</TitleMain>
          <Paragraph align="center">
            Stay in trend with the latest hits and emerging artists. We continuously update our
            playlists to keep you always engaged and entertained
          </Paragraph>
          <PlaylistList playlists={allPlaylists} />
          <MoreButton
            disabled={playlistsIsFetching || !playlists.hasMore}
            onClick={handlePlaylistsPage}
          />
        </Card>
      )}
    </>
  );
};
