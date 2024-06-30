import { Modal } from '@/components/UI/Modal';
import { Paragraph } from '@/components/UI/Paragraph';

import { useActions } from '@/hooks/useActions';

import { useAppContext } from '@/hooks/useAppContext';

import { useDeleteUserMutation } from '@/redux/endpoints/userEndpoints';

export const DeleteModal = () => {
  const { logOut } = useActions();
  const [deleteUser] = useDeleteUserMutation();
  const { deleteUserVisibility, handleDeleteUserVisibility } = useAppContext();

  const handleDeleteUser = () => {
    deleteUser();
    logOut();
  };

  return (
    <Modal
      visibility={deleteUserVisibility}
      handler={handleDeleteUserVisibility}
      title="Delete account"
      accept={handleDeleteUser}
      cancel>
      <Paragraph>
        Do you confirm the account deletion?
        <br /> All data will be cleared!
      </Paragraph>
    </Modal>
  );
};
