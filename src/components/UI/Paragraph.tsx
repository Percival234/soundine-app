import { cn } from '@/helpers/cn/cn';
import { cva } from 'class-variance-authority';

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
  size?: 'large' | 'medium' | 'small';
  align?: 'left' | 'center' | 'right';
};

const paragraphVariants = cva('opacity-80', {
  variants: {
    size: {
      large: '',
      medium: 'text-sm md:text-base',
      small: '',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    size: 'medium',
    align: 'left',
  },
});

export const Paragraph: React.FC<ParagraphProps> = ({ size, align, className, ...props }) => {
  return <p className={cn(paragraphVariants({ size, align, className }))} {...props} />;
};
