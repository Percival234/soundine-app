import { cn } from '@/helpers/cn/cn';

type GridProps = React.HTMLAttributes<HTMLDivElement>;

export const Grid: React.FC<GridProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-2 @lg:grid-cols-3 @3xl:grid-cols-4 @5xl:grid-cols-5 gap-2 @2xl:gap-4',
        className
      )}
      {...props}
    />
  );
};
