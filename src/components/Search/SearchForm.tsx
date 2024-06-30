import { Form } from 'react-router-dom';
import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

import { Button } from '@/components/UI/Button';

import { useDebounce } from '@/hooks/useDebounce';

type SearchFormProps = {
  setSearchValue: (a: string) => void;
};

export const SearchForm: React.FC<SearchFormProps> = ({ setSearchValue }) => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 1000);
  const searchRef = useRef<HTMLInputElement>(null);

  const clear = () => setValue('');

  const handleValue = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value.toLowerCase());

  useEffect(() => searchRef?.current?.focus(), []);

  useEffect(() => {
    setSearchValue(debouncedValue);
  }, [debouncedValue, setSearchValue]);

  return (
    <Form id="search" className="flex rounded-lg bg-white dark:bg-zinc-900">
      <div className="relative flex flex-1 items-center">
        <div className="p-2.5">
          <AiOutlineSearch size={25} />
        </div>
        <input
          id="search-input"
          type="text"
          className="py-1 pl-2"
          placeholder="Search"
          value={value}
          onChange={handleValue}
          ref={searchRef}
        />
        {!!value && (
          <Button size="icon" variant="ghost" onClick={clear}>
            <AiOutlineClose />
          </Button>
        )}
      </div>
    </Form>
  );
};
