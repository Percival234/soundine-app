import { memo } from 'react';

import { LikeButton } from '@/components/Buttons/LikeButton';
import { ShareButton } from '@/components/Buttons/ShareButton';
import { PlayerVolume } from '@/components/Player/PlayerVolume';

type PlayerActionsProps = {
  id: string;
  audioRef: React.RefObject<HTMLAudioElement>;
};

export const PlayerActions: React.FC<PlayerActionsProps> = memo(({ audioRef, id }) => {
  return (
    <div className="hidden sm:flex gap-2 md:gap-5">
      <PlayerVolume audioRef={audioRef} />
      <div className="flex gap-2">
        <LikeButton type="tracks" id={id} />
        <ShareButton link={`/music/tracks/${id}`} />
      </div>
    </div>
  );
});
