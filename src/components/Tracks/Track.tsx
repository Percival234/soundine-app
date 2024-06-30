import { TrackType } from '@/types/track';

import { Link } from '@/components/UI/Link';
import { ArtistsRow } from '@/components/Artist/ArtistsRow';
import { PlayButton } from '@/components/Buttons/PlayButton';
import { LikeButton } from '@/components/Buttons/LikeButton';
import { ShareButton } from '@/components/Buttons/ShareButton';

import { useAppSelector } from '@/hooks/useAppSelector';

import { cn } from '@/helpers/cn/cn';
import { formatTime } from '@/helpers/formaters/formatTime';
import { formatDate } from '@/helpers/formaters/formatDate';

type TrackProps = {
  track: TrackType;
  index: number;
  tracks: TrackType[];
  variant?: 'default' | 'small';
};

export const LittleTrack: React.FC<TrackProps> = ({
  track: { _id, name, artists },
  index,
  tracks,
}) => {
  const track = useAppSelector((state) => state.player.track);

  return (
    <div
      className={cn(
        'relative flex items-center gap-1.5 p-1 rounded-md duration-100 dark:hover:bg-gray-opacity hover:bg-zinc-50 hover:shadow-md',
        _id === track?._id ? 'bg-zinc-50 dark:bg-gray-opacity' : ''
      )}>
      <PlayButton tracks={tracks} index={index} />
      <div className="flex flex-col flex-1 whitespace-nowrap">
        <div className="inline">
          <Link className="inline-block" to={`/music/tracks/${_id}`}>
            {name}
          </Link>
        </div>
        <div className="text-xs truncate w-[100px] @sm:w-[180px]">
          By <ArtistsRow artists={artists} />
        </div>
      </div>
      <div className="flex">
        <LikeButton id={_id} type="tracks" />
      </div>
    </div>
  );
};

export const Track: React.FC<TrackProps> = ({
  track: { _id, name, artists, duration, releaseDate },
  index,
  tracks,
}) => {
  const track = useAppSelector((state) => state.player.track);

  return (
    <div
      className={cn(
        'relative flex items-center gap-1 @2xl:gap-5 p-1 @2xl:p-1.5 rounded-lg duration-100 dark:hover:bg-gray-opacity hover:bg-zinc-50 hover:shadow-md',
        _id === track?._id ? 'bg-zinc-50 dark:bg-gray-opacity' : ''
      )}>
      <PlayButton tracks={tracks} index={index} />
      <div className="flex-1 text-sm @2xl:text-base truncate w-[150px] @2xl:w-auto">
        <Link to={`/music/tracks/${_id}`} className="font-medium @2xl:font-normal">
          {name}
        </Link>
        <div className="@2xl:hidden">
          <ArtistsRow artists={artists} />
        </div>
      </div>
      <div className="text-base flex-1 truncate hidden @2xl:block">
        <ArtistsRow artists={artists} />
      </div>
      <div className="opacity-80 text-sm text-center hidden @4xl:flex">
        <div className="w-32">{formatDate(releaseDate)}</div>
        <div className="w-16">{formatTime(duration)}</div>
      </div>
      <div className="flex">
        <LikeButton id={_id} type="tracks" />
        <ShareButton link={`/music/tracks/${_id}`} />
      </div>
    </div>
  );
};
