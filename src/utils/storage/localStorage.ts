export const getLocalStorageItem = <T>(key: string): T | undefined => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.error(`Ошибка парсинга localStorage ключа "${key}":`, error);
    return undefined;
  }
};

export const setLocalStorageItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Ошибка инициализации localStorage ключа "${key}":`, error);
  }
};

export const removeLocalStorageItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Ошибка удаления localStorage ключа "${key}":`, error);
  }
};