import { formatTime } from '@/helpers/formaters/formatTime';

type PlayerProgressProps = {
  duration: number;
  buffered: number;
  currentProgress: number;
  onChange: (a: React.ChangeEvent<HTMLInputElement>) => void;
};

type PlayerProgressStyleProps = React.CSSProperties & {
  '--max': number;
  '--value': number;
};

export const PlayerProgress: React.FC<PlayerProgressProps> = ({
  duration,
  currentProgress,
  buffered,
  onChange,
}) => {
  const style: PlayerProgressStyleProps = {
    '--max': duration,
    '--value': currentProgress,
  };

  return (
    <div className="relative">
      <div className="absolute -top-4 h-10 w-full overflow-hidden py-4">
        <input
          style={style}
          className="slider-progress absolute z-20 cursor-pointer"
          type="range"
          min={0}
          max={duration}
          value={currentProgress}
          onChange={onChange}
        />
      </div>
      <div
        style={{ width: `${(buffered / duration) * 100}%` }}
        className="block absolute top-0 h-2 z-10 left-0 right-0 bg-gray-opacity"></div>
      <div className="absolute top-2 left-2 text-xs sm:text-sm">{formatTime(currentProgress)}</div>
      <div className="absolute top-2 right-2 text-xs sm:text-sm">{formatTime(duration)}</div>
    </div>
  );
};
