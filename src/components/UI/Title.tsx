import { cn } from '@/helpers/cn/cn';

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  hash?: boolean;
};

export const Title: React.FC<TitleProps> = ({ children, hash, className, ...props }) => {
  return (
    <h3
      className={cn('text-xl @5xl:text-3xl flex gap-0.5', className, {
        ['duration-200 hover:text-main active:text-main']: hash,
      })}
      {...props}>
      {hash && <span>#</span>}
      {children}
    </h3>
  );
};

export const TitleMain: React.FC<TitleProps> = ({ className, ...props }) => {
  return (
    <h2
      className={cn(
        'text-xl @2xl:text-3xl @5xl:text-5xl @5xl:leading-snug @2xl:pt-5 text-center text-transparent bg-gradient-to-tr from-purple-600 to-main bg-clip-text',
        className
      )}
      {...props}
    />
  );
};
