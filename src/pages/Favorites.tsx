import { Outlet } from 'react-router-dom';

import { Card } from '@/components/UI/Card';
import { TitleMain } from '@/components/UI/Title';
import { UserInfo } from '@/components/User/UserInfo';
import { UserTabs } from '@/components/User/UserTabs';

export const Favorites = () => {
  return (
    <Card>
      <TitleMain>Sounds of My Soul: Favorite Musical Discoveries</TitleMain>
      <UserInfo />
      <UserTabs />
      <Outlet />
    </Card>
  );
};
