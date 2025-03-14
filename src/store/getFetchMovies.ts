import { URLs } from "@utils/constants/constants";
import { Movie } from "@utils/types/types";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const fetchMovies = async (
  query: string,
  filter: number | null, 
  setMovies: (data: Movie[]) => void
): Promise<void> => {
  try {
    const filterParam = filter ? `&y=${filter}` : ""; 
    const url = `${URLs.GET_CARD_DATA}${API_KEY}&s=${encodeURIComponent(query)}${filterParam}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (data.Search && Array.isArray(data.Search)) {
      setMovies(data.Search.slice(0, 5));
    } else {
      setMovies([]);
    }
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    setMovies([]); 
  }
};