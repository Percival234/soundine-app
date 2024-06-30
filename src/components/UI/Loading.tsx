import { createPortal } from 'react-dom';

export const PageLoading = () => {
  return createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 py-10 flex items-center justify-center bg-white dark:bg-zinc-800 z-50">
      <div className="flex items-center gap-2 h-[40px]">
        <div className="animate-[scale_1s_infinite] w-3 h-3 rounded-full bg-main"></div>
        <div className="animate-[scale_1s_0.1s_infinite] w-3 h-3 rounded-full bg-main"></div>
        <div className="animate-[scale_1s_0.2s_infinite] w-3 h-3 rounded-full bg-main"></div>
      </div>
    </div>,
    document.getElementById('loading')!
  );
};
