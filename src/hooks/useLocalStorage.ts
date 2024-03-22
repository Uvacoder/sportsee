export const useLocalStorage = () => {
  const setItem = (
    key: string,
    value: string | number | object | boolean | null | undefined | []
  ) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key: string) => {
    const value = localStorage.getItem(key);
    return value;
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
  };

  return { setItem, getItem, removeItem };
};
