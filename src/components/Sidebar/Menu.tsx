import {
  AiOutlineSetting,
  AiOutlineHeart,
  AiOutlineCustomerService,
  AiOutlineAppstore,
  AiOutlineTrophy,
} from 'react-icons/ai';

import { MenuLink } from '@/components/Sidebar/MenuLink';
import { LogoutButton } from '@/components/Buttons/LogoutButton';

export const Menu = () => {
  return (
    <nav className="pb-10">
      <div className="grid gap-3 mb-6">
        <h3 className="text-lg uppercase pl-6">Menu</h3>
        <ul>
          <MenuLink to="/">
            <AiOutlineAppstore size={24} /> Home
          </MenuLink>
          <MenuLink to="/music">
            <AiOutlineCustomerService size={24} /> Music
          </MenuLink>
          <MenuLink to="/popular">
            <AiOutlineTrophy size={24} /> Most Popular
          </MenuLink>
          <MenuLink to="/favorites">
            <AiOutlineHeart size={24} /> Favorites
          </MenuLink>
        </ul>
      </div>
      <div className="grid gap-3">
        <h3 className="text-lg uppercase pl-6">General</h3>
        <ul>
          <MenuLink to="/settings">
            <AiOutlineSetting size={24} /> Settings
          </MenuLink>
          <LogoutButton />
        </ul>
      </div>
    </nav>
  );
};
