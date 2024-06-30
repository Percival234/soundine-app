import { AiOutlineUnorderedList } from 'react-icons/ai';

import { Button } from '@/components/UI/Button';

import { useAppContext } from '@/hooks/useAppContext';

export const MenuButton = () => {
  const { handleMenuVisibility, menuVisibility } = useAppContext();
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={menuVisibility ? 'Close sidebar menu' : 'Open sidebar menu'}
      onClick={handleMenuVisibility}>
      <AiOutlineUnorderedList />
    </Button>
  );
};
