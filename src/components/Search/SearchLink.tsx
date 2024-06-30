import { LinkProps } from 'react-router-dom';

import { LinkScroll } from '@/components/UI/Link';

import { useAppContext } from '@/hooks/useAppContext';

import { cn } from '@/helpers/cn/cn';

export const SearchLink: React.FC<LinkProps> = ({ className, ...props }) => {
  const { handleSearchVisibility } = useAppContext();
  return (
    <LinkScroll
      onClick={handleSearchVisibility}
      className={cn(
        'flex bg-gray-opacity rounded-lg overflow-hidden duration-200 hover:text-main active:text-main',
        className
      )}
      {...props}
    />
  );
};
