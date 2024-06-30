import { cn } from '@/helpers/cn/cn';
import { cva } from 'class-variance-authority';

type LogoProps = React.HTMLAttributes<HTMLHeadingElement> & {
  size?: 'large' | 'medium' | 'small';
};

const logoVariants = cva('text-center font-bold', {
  variants: {
    size: {
      large: 'text-4xl ',
      medium: 'text-2xl',
      small: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'large',
  },
});

export const Logo: React.FC<LogoProps> = ({ size, className, ...props }) => {
  return (
    <h2 className={cn(logoVariants({ size, className }))} {...props}>
      Soundine
    </h2>
  );
};
