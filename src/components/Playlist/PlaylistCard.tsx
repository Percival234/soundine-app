import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { PlaylistType } from '@/types/playlist';

import { Image } from '@/components/UI/Image';
import { LinkScroll } from '@/components/UI/Link';
import { LikeButton } from '@/components/Buttons/LikeButton';
import { TotalCounts } from '@/components/Total/TotalCounts';

import { scrollToTop } from '@/helpers/scroll/scrollToTop';

import { SERVER_URL } from '@/constants/constants';

type PlaylistCardProps = {
  playlist: PlaylistType;
};

export const PlaylistCard: React.FC<PlaylistCardProps> = ({
  playlist: { _id, name, image, tracks, followers },
}) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const navigateTo = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === cardRef.current) {
      navigate(`/music/playlists/${_id}`);
      scrollToTop();
    }
  };

  return (
    <div
      onClick={navigateTo}
      className="group text-white cursor-pointer aspect-square overflow-hidden relative rounded-lg min-w-[130px] bg-gray-opacity isolate duration-300">
      <Image
        src={`${SERVER_URL}/static/images/playlists/${image}`}
        alt={name}
        className="brightness-[0.90]"
      />
      <div ref={cardRef} className="flex flex-col justify-between h-full p-1.5">
        <div className="flex justify-between items-start gap-1">
          <LinkScroll
            to={`/music/playlists/${_id}`}
            className="font-medium md:font-bold text-sm md:text-lg inline-block">
            {name}
          </LinkScroll>
          <LikeButton
            id={_id}
            type="playlists"
            className="p-1.5 rounded-full aspect-square bg-white opacity-80 hover:bg-white hover:opacity-60"
          />
        </div>
        <TotalCounts tracks={tracks} followers={followers} />
      </div>
    </div>
  );
};
