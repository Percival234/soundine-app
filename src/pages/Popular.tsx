import { useState, useEffect } from 'react';

import { TrackType } from '@/types/track';
import { ArtistType } from '@/types/artits';
import { PlaylistType } from '@/types/playlist';

import { Card } from '@/components/UI/Card';
import { Error } from '@/components/UI/Error';
import { TitleMain } from '@/components/UI/Title';
import { PageLoading } from '@/components/UI/Loading';
import { Paragraph } from '@/components/UI/Paragraph';
import { TracksList } from '@/components/Tracks/TracksList';
import { MoreButton } from '@/components/Buttons/MoreButton';
import { ArtistsList } from '@/components/Artist/ArtistsList';
import { PlaylistList } from '@/components/Playlist/PlaylistList';

import { useGetPopularTracksQuery } from '@/redux/endpoints/trackEndpoints';
import { useGetPopularArtistsQuery } from '@/redux/endpoints/artistEndpoints';
import { useGetPopularPlaylistsQuery } from '@/redux/endpoints/playlistEndpoints';

export const Popular = () => {
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
  } = useGetPopularTracksQuery({ page: tracksPage, limit: 30 });

  const {
    data: playlists,
    isLoading: playlistsIsLoading,
    isFetching: playlistsIsFetching,
    error: playlistsError,
  } = useGetPopularPlaylistsQuery({ page: playlistsPage, limit: 10 });

  const {
    data: artists,
    isLoading: artistsIsLoading,
    isFetching: artistsIsFetching,
    error: artistsError,
  } = useGetPopularArtistsQuery({ page: artistsPage, limit: 15 });

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
      {tracks && (
        <Card>
          <TitleMain>Hold the Beat: All-Time Greatest Hits</TitleMain>
          <Paragraph align="center">
            From Killer Beats to Captivating Melodies, Collection of the Most Popular Tarcks.
            Explore the Atmosphere of Global Hits
          </Paragraph>
          <TracksList tracks={allTracks} />
          <MoreButton disabled={tracksIsFetching || !tracks.hasMore} onClick={handleTracksPage} />
        </Card>
      )}
      {playlists && (
        <Card>
          <TitleMain>Hit Repeat: Explore the Hottest Tracks in Top Playlists!</TitleMain>
          <Paragraph align="center">
            Welcome to our exclusive collection of top playlists, where each one is a unique journey
            into the world of music
          </Paragraph>
          <PlaylistList playlists={allPlaylists} />
          <MoreButton
            disabled={playlistsIsFetching || !playlists.hasMore}
            onClick={handlePlaylistsPage}
          />
        </Card>
      )}
      {artists && (
        <Card>
          <TitleMain>Top Talents: Explore the Best Artists</TitleMain>
          <Paragraph align="center">
            Dive into the world of musical legends who have left an indelible mark on the industry
          </Paragraph>
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
