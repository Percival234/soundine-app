import { useCallback, useEffect, useRef, useState } from 'react';

import { PlayerTrack } from '@/components/Player/PlayerTrack';
import { PlayerActions } from '@/components/Player/PlayerActions';
import { PlayerProgress } from '@/components/Player/PlayerProgress';
import { PlayerControlls } from '@/components/Player/PlayerControlls';

import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';

import { SERVER_URL } from '@/constants/constants';

export const Player = () => {
  const { isPlaying, track } = useAppSelector((state) => state.player);
  const { play, stop, next, prev } = useActions();
  const [currentProgress, setCurrentProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const onEnded = () => {
    next();
    play();
  };

  const onDurationChange = (event: React.ChangeEvent<HTMLAudioElement>) =>
    setDuration(event.currentTarget.duration);

  const onProgress = (event: React.ChangeEvent<HTMLAudioElement>) => {
    const audio = event.currentTarget;
    const { duration, buffered, currentTime } = audio;
    if (duration) {
      for (let i = 0; i < buffered.length; i++) {
        if (buffered.start(buffered.length - 1 - i) < currentTime) {
          const bufferedLength = buffered.end(buffered.length - 1 - i);
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  const onTimeUpdate = (event: React.ChangeEvent<HTMLAudioElement>) => {
    setCurrentProgress(event.currentTarget.currentTime);
    onProgress(event);
  };

  const handleDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event?.currentTarget?.valueAsNumber;
    if (audioRef?.current) {
      audioRef.current.currentTime = value;
    }
    setCurrentProgress(value);
  };

  const stopPlayer = useCallback(() => stop(), [stop]);
  const setPrevTrack = useCallback(() => prev(), [prev]);
  const setNextPlayer = useCallback(() => next(), [next]);

  useEffect(() => {
    if (navigator?.mediaSession) {
      navigator.mediaSession.setActionHandler('pause', stopPlayer);
      navigator.mediaSession.setActionHandler('previoustrack', setPrevTrack);
      navigator.mediaSession.setActionHandler('nexttrack', setNextPlayer);
      return () => {
        navigator.mediaSession.setActionHandler('pause', null);
        navigator.mediaSession.setActionHandler('previoustrack', null);
        navigator.mediaSession.setActionHandler('nexttrack', null);
      };
    }
  }, [stopPlayer, setPrevTrack, setNextPlayer]);

  useEffect(() => {
    isPlaying ? audioRef?.current?.play() : audioRef?.current?.pause();
  }, [isPlaying, track]);

  return (
    track && (
      <div className="animate-bounceIn translate-y-full opacity-0 sticky bottom-0 right-0 flex flex-col w-full z-[100] h-[4.5em] ms:h-[5em] bg-zinc-100 dark:bg-zinc-900">
        <PlayerProgress
          duration={duration}
          currentProgress={currentProgress}
          buffered={buffered}
          onChange={handleDuration}
        />
        <div className="flex items-center justify-between flex-row-reverse sm:flex-row flex-1 px-5 md:px-12 pt-2">
          <PlayerControlls />
          <audio
            onPause={() => stop()}
            onPlay={() => play()}
            onEnded={onEnded}
            preload="metadata"
            src={`${SERVER_URL}/static/music/${track.src}`}
            ref={audioRef}
            className="hidden"
            onDurationChange={onDurationChange}
            onTimeUpdate={onTimeUpdate}
            onProgress={onProgress}
          />
          <PlayerTrack track={track} />
          <PlayerActions id={track._id} audioRef={audioRef} />
        </div>
      </div>
    )
  );
};
