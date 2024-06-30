export function isErrorMessage(error: Error): boolean {
  return (
    typeof error === 'object' && error !== null && 'data' in error && typeof error.data === 'object'
  );
}
