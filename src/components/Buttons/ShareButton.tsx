import { AiOutlineShareAlt } from 'react-icons/ai';

import { Button } from '@/components/UI/Button';

import { useAppContext } from '@/hooks/useAppContext';

type ShareButtonProps = {
  link?: string;
};

export const ShareButton: React.FC<ShareButtonProps> = ({ link }) => {
  const { handleShare } = useAppContext();
  const handleShareModal = () => handleShare(link || '');
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Open a popup to get the share link"
      onClick={handleShareModal}>
      <AiOutlineShareAlt />
    </Button>
  );
};
