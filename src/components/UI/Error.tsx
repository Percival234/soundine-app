import { SerializedError } from '@reduxjs/toolkit';

import { ServerError } from '@/types/serverError';

import { cn } from '@/helpers/cn/cn';

type ErrorProps = React.HTMLAttributes<HTMLDivElement> & {
  error?: ServerError | SerializedError;
};

export const Error: React.FC<ErrorProps> = ({ error, className, ...props }) => {
  return (
    <div className={cn('py-10 text-center text-main', className)} {...props}>
      <h3 className="text-4xl @4xl:text-5xl mb-4">Error!</h3>
      <div className="text-lg @4xl:text-2xl">{JSON.stringify(error)}</div>
    </div>
  );
};

type ErrorMessageProps = React.HTMLAttributes<HTMLDivElement> & {
  error?: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, className }) => {
  return (
    <div className={cn('text-main text-sm font-bold min-h-[3em] max-w-xs mb-2', className)}>
      {error}
    </div>
  );
};
