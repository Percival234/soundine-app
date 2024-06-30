import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { TrackType } from '@/types/track';
import { ArtistType } from '@/types/artits';
import { PlaylistType } from '@/types/playlist';

import { Card } from '@/components/UI/Card';
import { Error } from '@/components/UI/Error';
import { TitleMain } from '@/components/UI/Title';
import { PageLoading } from '@/components/UI/Loading';
import { TracksList } from '@/components/Tracks/TracksList';
import { MoreButton } from '@/components/Buttons/MoreButton';
import { ArtistsList } from '@/components/Artist/ArtistsList';
import { PlaylistList } from '@/components/Playlist/PlaylistList';

import { useGetTracksByTagsQuery } from '@/redux/endpoints/trackEndpoints';
import { useGetArtistsByTagsQuery } from '@/redux/endpoints/artistEndpoints';
import { useGetPlaylistsByTagsQuery } from '@/redux/endpoints/playlistEndpoints';

export const Tag = () => {
  const { tag } = useParams();
  const [tracksPage, setTracksPage] = useState(1);
  const [playlistsPage, setPlaylistsPage] = useState(1);
  const [artistsPage, setArtistsPage] = useState(1);
  const [allTracks, setAllTracks] = useState<TrackType[]>([]);
  const [allPlaylists, setAllPlaylists] = useState<PlaylistType[]>([]);
  const [allArtists, setAllArtists] = useState<ArtistType[]>([]);

  const {
    data: tracks,
    isLoading: tracksIsLoading,
    isFetching: tracksIsFetching,
    error: tracksError,
  } = useGetTracksByTagsQuery({ tags: [tag || ''], limit: 10, page: tracksPage });

  const {
    data: playlists,
    isLoading: playlistsIsLoading,
    isFetching: playlistsIsFetching,
    error: playlistsError,
  } = useGetPlaylistsByTagsQuery({ tags: [tag || ''], limit: 5, page: playlistsPage });

  const {
    data: artists,
    isLoading: artistsIsLoading,
    isFetching: artistsIsFetching,
    error: artistsError,
  } = useGetArtistsByTagsQuery({ tags: [tag || ''], limit: 5, page: artistsPage });

  const handleTracksPage = () => setTracksPage((prevPage: number) => prevPage + 1);
  const handleArtistsPage = () => setArtistsPage((prevPage: number) => prevPage + 1);
  const handlePlaylistsPage = () => setPlaylistsPage((prevPage: number) => prevPage + 1);

  useEffect(() => {
    setAllTracks((prev) => (tracks?.tracks ? prev.concat(tracks?.tracks) : []));
  }, [tracks]);

  useEffect(() => {
    setAllPlaylists((prev) => (playlists?.playlists ? prev.concat(playlists?.playlists) : []));
  }, [playlists]);

  useEffect(() => {
    setAllArtists((prev) => (artists?.artists ? prev.concat(artists?.artists) : []));
  }, [artists]);

  if (tracksIsLoading || artistsIsLoading || playlistsIsLoading) return <PageLoading />;
  if (tracksError || artistsError || playlistsError)
    return <Error error={tracksError || artistsError || playlistsError} />;

  return (
    <>
      {allTracks.length > 0 && tracks && (
        <Card>
          <TitleMain>{tag!.toUpperCase()} - Tracks</TitleMain>
          <TracksList tracks={allTracks} />
          <MoreButton disabled={tracksIsFetching || !tracks.hasMore} onClick={handleTracksPage} />
        </Card>
      )}
      {allPlaylists.length > 0 && playlists && (
        <Card>
          <TitleMain>{tag!.toUpperCase()} - Playlists</TitleMain>
          <PlaylistList playlists={allPlaylists} />
          <MoreButton
            disabled={playlistsIsFetching || !playlists.hasMore}
            onClick={handlePlaylistsPage}
          />
        </Card>
      )}
      {allArtists.length > 0 && artists && (
        <Card>
          <TitleMain>{tag!.toUpperCase()} - Artists</TitleMain>
          <ArtistsList artists={allArtists} />
          <MoreButton
            disabled={artistsIsFetching || !artists.hasMore}
            onClick={handleArtistsPage}
          />
        </Card>
      )}
    </>
  );
};
