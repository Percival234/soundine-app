import { AiOutlineEllipsis } from 'react-icons/ai';

type MoreButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MoreButton: React.FC<MoreButtonProps> = (props) => {
  return (
    <button
      aria-label="Load more content"
      type="button"
      className="group relative flex flex-col justify-center items-center w-40 h-8 @3xl:h-12 self-center rounded-md overflow-hidden duration-200 hover:text-main hover:bg-gray-opacity active:text-main disabled:hidden"
      {...props}>
      <div className="opacity-100 @3xl:opacity-0 @3xl:-translate-y-full group-hover:opacity-100 duration-200 @3xl:group-hover:translate-y-1/2">
        Load more
      </div>
      <AiOutlineEllipsis
        className="hidden @3xl:block -translate-y-1/2 duration-200 group-hover:translate-y-full group-hover:opacity-0"
        size={30}
      />
    </button>
  );
};
