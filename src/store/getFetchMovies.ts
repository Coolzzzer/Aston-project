import { URLs } from "@utils/constants/constants";
const apiKey = `3e3e7f8f`;


export const fetchMovies = async (query: string, setMovies) => {
  try {
    const response = await fetch(`${URLs.GET_CARD_DATA}${apiKey}&s=${query}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
};