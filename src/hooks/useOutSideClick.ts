import { useState, useEffect, useRef, useCallback } from 'react';

export const useOutsideClick = <RefT extends HTMLElement>() => {
  const [visibility, setVisibility] = useState(false);
  const ref = useRef<RefT>(null);

  const handleVisibility = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setVisibility(!visibility);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setVisibility(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return { visibility, handleVisibility, ref };
};
