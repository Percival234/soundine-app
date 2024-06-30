import { cn } from '@/helpers/cn/cn';
import { cva } from 'class-variance-authority';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost' | 'gradient';
  size?: 'default' | 'small' | 'icon';
};

const buttonVariants = cva(
  'inline-flex gap-1 justify-center items-center rounded z-30 duration-200 disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-white bg-main hover:opacity-80',
        ghost: 'hover:bg-gray-opacity hover:text-main disabled:text-zinc-500',
        outline: 'text-main border border-solid border-main hover:bg-main hover:text-white',
        gradient: 'text-white bg-gradient-to-tr from-purple-800 to-main hover:opacity-80',
      },
      size: {
        default: 'py-2 px-3 lg:px-5 text-sm lg:text-base',
        small: 'text-sm lg:text-base',
        icon: 'min-w-11 h-11 text-xl sm:text-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const Button: React.FC<ButtonProps> = ({ variant, size, className, ...props }) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
};
