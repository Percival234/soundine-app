export const useLocalStorage = (name: string) => {
  const item = localStorage.getItem(name);
  return item;
};
