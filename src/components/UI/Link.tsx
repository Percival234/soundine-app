import { cva } from 'class-variance-authority';
import { NavLink, LinkProps, Link as L, NavLinkProps } from 'react-router-dom';

import { cn } from '@/helpers/cn/cn';
import { scrollToTop } from '@/helpers/scroll/scrollToTop';

type CustomLinkProps = LinkProps & {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'large' | 'icon';
};

const linkVariants = cva(
  'inline-flex justify-center items-center gap-2 rounded z-30 duration-100',
  {
    variants: {
      variant: {
        default: 'hover:text-main hover:underline',
        outline:
          'w-full font-medium whitespace-nowrap border border-solid border-white rounded-full hover:bg-white hover:text-zinc-800',
        ghost: 'hover:bg-gray-opacity hover:text-main',
      },
      size: {
        default: 'py-0.5',
        large: 'py-2.5 px-10',
        icon: 'p-2.5 text-xl sm:text-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const Link: React.FC<CustomLinkProps> = ({ variant, size, className, ...props }) => {
  return <LinkScroll className={cn(linkVariants({ variant, size, className }))} {...props} />;
};

export const NavLinkScroll: React.FC<NavLinkProps> = (props) => {
  return <NavLink {...props} onClick={scrollToTop} />;
};

export const LinkScroll: React.FC<LinkProps> = ({ onClick, ...props }) => {
  const handle = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }
    scrollToTop();
  };
  return <L {...props} onClick={handle} />;
};

export const LinkMore: React.FC<LinkProps> = ({ className, ...props }) => {
  return (
    <LinkScroll
      className={cn(
        'flex justify-center h-full items-center bg-gray-opacity rounded-lg py-3 duration-100 hover:text-main hover:opacity-80',
        className
      )}
      {...props}>
      Show all
    </LinkScroll>
  );
};
