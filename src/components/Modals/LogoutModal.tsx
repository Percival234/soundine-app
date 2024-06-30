import { useNavigate } from 'react-router-dom';

import { Modal } from '@/components/UI/Modal';
import { Paragraph } from '@/components/UI/Paragraph';

import { useActions } from '@/hooks/useActions';

import { useAppContext } from '@/hooks/useAppContext';

export const LogoutModal = () => {
  const { logOut, stop, setTracks } = useActions();
  const { logOutVisibility, handleLogOutVisibility } = useAppContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    stop();
    setTracks({ index: 0, tracks: [] });
    handleLogOutVisibility();
    logOut();
    navigate('/user/sign-in');
  };

  return (
    <Modal
      visibility={logOutVisibility}
      handler={handleLogOutVisibility}
      title="Log Out"
      accept={handleLogOut}
      cancel>
      <Paragraph>Do you really want to log out?</Paragraph>
    </Modal>
  );
};
