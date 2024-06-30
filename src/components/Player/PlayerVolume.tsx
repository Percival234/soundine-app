import { memo, useEffect, useState } from 'react';
import { IoMdVolumeHigh, IoMdVolumeOff } from 'react-icons/io';

import { Button } from '@/components/UI/Button';

type PlayerVolumeProps = {
  audioRef: React.RefObject<HTMLAudioElement>;
};

type PlayerVolumeStyleProps = React.CSSProperties & {
  '--min': number;
  '--max': number;
  '--value': number;
};

export const PlayerVolume: React.FC<PlayerVolumeProps> = memo(({ audioRef }) => {
  const [volume, setVolume] = useState<number>(parseFloat(localStorage.getItem('volume') || '0.5'));

  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) =>
    setVolume(event.currentTarget.valueAsNumber);
  const mute = () =>
    setVolume((prevVolume) => (prevVolume ? 0 : parseFloat(localStorage.getItem('volume') || '0')));

  useEffect(() => {
    if (audioRef?.current) {
      audioRef.current.volume = volume;
    }
    if (volume) {
      localStorage.setItem('volume', volume.toString());
    }
  }, [volume, audioRef]);

  const style: PlayerVolumeStyleProps = { '--value': +volume, '--min': 0, '--max': 1 };

  return (
    <div className="hidden md:flex gap-1 items-center">
      <Button size="icon" variant="ghost" className="p-1.5" onClick={mute}>
        {volume ? <IoMdVolumeHigh size={20} /> : <IoMdVolumeOff size={20} />}
      </Button>
      <input
        style={style}
        min={0}
        step={0.1}
        max={1}
        type="range"
        onChange={handleVolume}
        value={volume}
        className="volume-slider slider-progress accent-main w-24"
      />
    </div>
  );
});
