import { cn } from '@/helpers/cn/cn';

type ImageContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const ImageContainer: React.FC<ImageContainerProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'bg-gray-opacity relative rounded-lg w-[200px] @5xl:w-[270px] aspect-square overflow-hidden isolate',
        className
      )}
      {...props}
    />
  );
};

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const Image: React.FC<ImageProps> = ({ className, ...props }) => {
  return (
    <img
      className={cn(
        'object-cover object-center w-full h-full absolute bottom-0 left-0 -z-10 duration-200 group-hover:scale-105',
        className
      )}
      {...props}
    />
  );
};
