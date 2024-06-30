import { AiOutlineSearch } from 'react-icons/ai';

import { Button } from '@/components/UI/Button';

import { useAppContext } from '@/hooks/useAppContext';

export const SearchButton = () => {
  const { handleSearchVisibility } = useAppContext();
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Open search popup"
      onClick={handleSearchVisibility}>
      <AiOutlineSearch />
    </Button>
  );
};
