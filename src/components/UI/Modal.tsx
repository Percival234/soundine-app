import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Title } from '@/components/UI/Title';
import { Button } from '@/components/UI/Button';

import { cn } from '@/helpers/cn/cn';

type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  visibility: boolean;
  handler: () => void;
  title?: string;
  cancel?: boolean;
  accept?: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  visibility,
  handler,
  title,
  cancel,
  accept,
  className,
}) => {
  const handleModalVisibility = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) handler();
  };

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && visibility) {
        handler();
      }
    },
    [handler, visibility]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [visibility, handleKeyPress]);

  useEffect(() => {
    if (visibility) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [visibility]);

  return (
    visibility &&
    createPortal(
      <div
        onClick={handleModalVisibility}
        className="fixed top-0 left-0 bottom-0 right-0 bg-[#00000080] overflow-y-auto flex lg:justify-center items-baseline px-2 py-16 lg:py-28">
        <div
          className={cn(
            'animate-bounceIn -translate-y-full relative opacity-0 flex flex-col gap-4 mx-auto max-w-2xl rounded-lg p-5 bg-zinc-100 dark:bg-zinc-800 dark:text-white',
            className
          )}>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1.5 right-1.5"
            onClick={handleModalVisibility}>
            <AiOutlineClose className="pointer-events-none" />
          </Button>
          <Title className="mx-auto">{title}</Title>
          {children}
          <div className="flex gap-2 justify-between items-center">
            {cancel && (
              <Button variant="outline" onClick={handleModalVisibility}>
                Cancel
              </Button>
            )}
            {accept && <Button onClick={accept}>Accept</Button>}
          </div>
        </div>
      </div>,
      document.getElementById('modal')!
    )
  );
};
