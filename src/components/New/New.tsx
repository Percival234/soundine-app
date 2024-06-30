import { Card } from '@/components/UI/Card';
import { Title } from '@/components/UI/Title';
import { Error } from '@/components/UI/Error';
import { PageLoading } from '@/components/UI/Loading';
import { LittleTrack } from '@/components/Tracks/Track';
import { LinkMore, LinkScroll } from '@/components/UI/Link';
import { PlaylistCard } from '@/components/Playlist/PlaylistCard';

import { useGetNewTracksQuery } from '@/redux/endpoints/trackEndpoints';
import { useGetNewPlaylistsQuery } from '@/redux/endpoints/playlistEndpoints';

export const New = () => {
  const {
    data: playlistsData,
    isLoading: playlistsIsLoading,
    error: playlistsError,
  } = useGetNewPlaylistsQuery({ limit: 5 });

  const {
    data: tracksData,
    isLoading: tracksIsLoading,
    error: tracksError,
  } = useGetNewTracksQuery({ limit: 15 });

  if (playlistsIsLoading || tracksIsLoading) return <PageLoading />;
  if (playlistsError || tracksError) return <Error error={playlistsError || tracksError} />;

  return (
    <div className="flex flex-col @5xl:flex-row gap-2 @xl:gap-5">
      {playlistsData && (
        <Card>
          <LinkScroll to="/music/new" className="self-center">
            <Title hash>New Playlists</Title>
          </LinkScroll>
          <div className="grid grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-2 @7xl:grid-cols-3 gap-2 @lg:gap-4">
            {playlistsData.playlists.map((playlist) => (
              <PlaylistCard key={playlist._id} playlist={playlist} />
            ))}
            <LinkMore to="/music/new" />
          </div>
        </Card>
      )}
      {tracksData && (
        <Card className="flex-1">
          <LinkScroll to="/music/new" className="self-center">
            <Title hash>New Tracks</Title>
          </LinkScroll>
          <div className="relative flex-1 rounded-lg overflow-y-auto overflow-x-hidden min-h-[250px]">
            <div className="absolute flex flex-col gap-1 w-full">
              {tracksData.tracks.map((track, index) => (
                <LittleTrack
                  tracks={tracksData.tracks}
                  index={index}
                  key={track._id}
                  track={track}
                />
              ))}
              <div className="sticky bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-zinc-100 dark:from-zinc-900 to-transparent z-40"></div>
            </div>
          </div>
          <LinkMore className="h-auto" to="/music/new" />
        </Card>
      )}
    </div>
  );
};
