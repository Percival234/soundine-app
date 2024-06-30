import { AiOutlineSortAscending } from 'react-icons/ai';

import { TrackType } from '@/types/track';

import { Button } from '@/components/UI/Button';
import { SubMenuItem } from '@/components/SubMenu/SubMenuItem';

import { useActions } from '@/hooks/useActions';
import { useOutsideClick } from '@/hooks/useOutSideClick';

type ListSubMenuProps = {
  setSortedTracks: (a: TrackType[]) => void;
  tracks: TrackType[];
};

export const ListSubMenu: React.FC<ListSubMenuProps> = ({ setSortedTracks, tracks }) => {
  const { visibility, handleVisibility, ref } = useOutsideClick<HTMLDivElement>();
  const { setTracks } = useActions();

  const sortBy = (compareFn: (a: TrackType, b: TrackType) => number) => {
    const sortedTracks = [...tracks];
    sortedTracks.sort(compareFn);
    setSortedTracks(sortedTracks);
    setTracks({ tracks: sortedTracks, index: 0 });
  };

  const sortByPopularity = () => sortBy((a: TrackType, b: TrackType) => b.followers - a.followers);
  const sortByAlphabet = () => sortBy((a: TrackType, b: TrackType) => a.name.localeCompare(b.name));
  const sortByDuration = () => sortBy((a: TrackType, b: TrackType) => b.duration - a.duration);
  const sortByDate = () =>
    sortBy(
      (a: TrackType, b: TrackType) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );
  const sortRandomly = () => sortBy(() => Math.random() - 0.5);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Сhange tracks order"
        className="p-2.5"
        onClick={handleVisibility}>
        <AiOutlineSortAscending />
      </Button>
      {visibility && (
        <div
          ref={ref}
          className="grid absolute right-12 top-5 rounded-md border border-solid border-gray-opacity overflow-hidden bg-white dark:bg-zinc-800 z-50">
          <SubMenuItem onClick={sortByPopularity}>By popularity</SubMenuItem>
          <SubMenuItem onClick={sortByAlphabet}>By alphabet</SubMenuItem>
          <SubMenuItem onClick={sortByDuration}>By duration</SubMenuItem>
          <SubMenuItem onClick={sortByDate}>By release date</SubMenuItem>
          <SubMenuItem onClick={sortRandomly}>Random order</SubMenuItem>
        </div>
      )}
    </>
  );
};
