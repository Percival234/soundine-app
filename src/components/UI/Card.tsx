import { cn } from '@/helpers/cn/cn';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'relative flex flex-col gap-3 md:gap-5 p-3 md:p-5 rounded-lg bg-zinc-100 dark:bg-zinc-900',
        className
      )}
      {...props}
    />
  );
};
