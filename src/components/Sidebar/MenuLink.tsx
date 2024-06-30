import { NavLinkProps } from 'react-router-dom';

import { NavLinkScroll } from '@/components/UI/Link';

export const MenuLink: React.FC<NavLinkProps> = (props) => {
  return (
    <li>
      <NavLinkScroll
        className={({ isActive }) =>
          `${
            isActive ? 'active ' : ''
          }flex gap-4 items-center py-2 pl-6 opacity-60 border-r-4 border-solid border-transparent text-lg whitespace-nowrap duration-200 hover:opacity-100 focus:opacity-100`
        }
        {...props}
      />
    </li>
  );
};
