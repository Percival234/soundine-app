import { memo } from 'react';
import { IoMdPause } from 'react-icons/io';
import { AiFillCaretRight, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';

import { Button } from '@/components/UI/Button';

import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';

export const PlayerControlls = memo(() => {
  const { isPlaying, track, index, tracks } = useAppSelector((state) => state.player);
  const { play, stop, next, prev } = useActions();

  const handlePlay = () => (isPlaying ? stop() : play());

  return (
    <div className="flex gap-1 items-center">
      <Button variant="ghost" size="icon" onClick={() => prev()} disabled={!index || !track}>
        <AiOutlineStepBackward />
      </Button>
      <Button variant="ghost" size="icon" disabled={!track} onClick={handlePlay}>
        {isPlaying ? <IoMdPause size={25} /> : <AiFillCaretRight size={25} />}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => next()}
        disabled={index >= tracks.length - 1 || !track}>
        <AiOutlineStepForward />
      </Button>
    </div>
  );
});
