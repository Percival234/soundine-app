import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Image } from '@/components/UI/Image';
import { Title } from '@/components/UI/Title';
import { Error } from '@/components/UI/Error';
import { Paragraph } from '@/components/UI/Paragraph';
import { PageLoading } from '@/components/UI/Loading';
import { LikeButton } from '@/components/Buttons/LikeButton';
import { TotalCounts } from '@/components/Total/TotalCounts';

import { useGetPlaylistQuery } from '@/redux/endpoints/playlistEndpoints';

import { BANNER, SOUNDINE_MAIN_PLAYLIST_ID } from '@/constants/constants';

export const PlaylistBanner = () => {
  const navigate = useNavigate();
  const bannerRef = useRef(null);

  const { data: playlist, isLoading, error } = useGetPlaylistQuery(SOUNDINE_MAIN_PLAYLIST_ID);

  const navigateTo = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === bannerRef.current) navigate(`/music/playlists/${playlist?._id}`);
  };

  if (isLoading) return <PageLoading />;
  if (error) return <Error error={error} />;

  return (
    playlist && (
      <div
        onClick={navigateTo}
        className="flex flex-col justify-between min-h-[13rem] @xl:min-h-[20rem] @5xl:min-h-[25rem] p-2 @xl:p-5 group flex-1 relative rounded-md overflow-hidden text-white cursor-pointer"
        ref={bannerRef}>
        <Image src={BANNER} alt={playlist?.name} />
        <div>
          <div className="flex items-start justify-between gap-1 @5xl:mb-3">
            <Title className="max-w-lg">Melodic Mastery: Collection of the Greatest Tracks</Title>
            <LikeButton
              id={playlist._id}
              type="playlists"
              className="rounded-full bg-white opacity-80 hover:bg-white hover:opacity-60"
            />
          </div>
          <Paragraph align="left" className="max-w-sm hidden @md:block">
            We have gathered the best songs of all time, in our opinion, to share them with you!
          </Paragraph>
        </div>
        <TotalCounts followers={playlist?.followers} tracks={playlist?.tracks} />
      </div>
    )
  );
};
