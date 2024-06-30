import { useLocation } from 'react-router-dom';
import { AiOutlineCopy } from 'react-icons/ai';

import { Modal } from '@/components/UI/Modal';
import { Button } from '@/components/UI/Button';
import { Paragraph } from '@/components/UI/Paragraph';

import { useAppContext } from '@/hooks/useAppContext';

export const ShareModal = () => {
  const { pathname } = useLocation();
  const { shareVisibility, handleShare, shareLink } = useAppContext();

  const addToClipboard = () =>
    navigator.clipboard.writeText(`${location.origin}${shareLink || pathname}`);

  const handleShareModal = () => handleShare('');

  return (
    <Modal visibility={shareVisibility} handler={handleShareModal} title="Share" cancel>
      <Paragraph>Copy the link and share it with friends!</Paragraph>
      <div className="flex border border-solid border-gray-opacity rounded-lg bg-gray-opacity">
        <input
          id="share"
          className="px-3 text-base overflow-auto"
          disabled
          type="text"
          onChange={() => {}}
          value={`${location.origin}${shareLink || pathname}`}
        />
        <Button variant="ghost" size="icon" onClick={addToClipboard}>
          <AiOutlineCopy />
        </Button>
      </div>
    </Modal>
  );
};
