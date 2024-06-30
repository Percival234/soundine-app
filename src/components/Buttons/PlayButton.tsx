import { useCallback } from 'react';
import { IoMdPause } from 'react-icons/io';
import { AiFillCaretRight } from 'react-icons/ai';

import { TrackType } from '@/types/track';

import { Button } from '@/components/UI/Button';

import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';

type PlayButtonProps = {
  tracks: TrackType[];
  index: number;
};

export const PlayButton: React.FC<PlayButtonProps> = ({ tracks, index }) => {
  const playerTrack = useAppSelector((state) => state.player?.track);
  const isPlaying = useAppSelector((state) => state.player?.isPlaying);
  const { play, stop, setTracks } = useActions();

  const handlePlay = useCallback(() => {
    if (playerTrack?._id === tracks[index]?._id && isPlaying) {
      stop();
    } else {
      setTracks({ tracks, index });
      play();
    }
  }, [playerTrack, tracks, isPlaying, play, stop, index, setTracks]);

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isPlaying ? 'Stop playing a track' : 'Start playing a track'}
      onClick={handlePlay}>
      {playerTrack?._id === tracks[index]?._id && isPlaying ? <IoMdPause /> : <AiFillCaretRight />}
    </Button>
  );
};
