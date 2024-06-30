import { useState } from 'react';

import { Modal } from '@/components/UI//Modal';
import { SearchForm } from '@/components/Search/SearchForm';
import { SearchResults } from '@/components/Search/SearchResults';

import { useAppContext } from '@/hooks/useAppContext';

export const Search = () => {
  const { searchVisibility, handleSearchVisibility } = useAppContext();
  const [searchValue, setSearchValue] = useState('');
  return (
    <Modal
      visibility={searchVisibility}
      handler={handleSearchVisibility}
      title="Search Result"
      className="w-full">
      <SearchForm setSearchValue={setSearchValue} />
      <SearchResults searchValue={searchValue} />
    </Modal>
  );
};
