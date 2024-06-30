import { ServerError } from '@/types/serverError';

export function isServerError(error: unknown): error is ServerError {
  return typeof error === 'object' && error != null && 'data' in error;
}
