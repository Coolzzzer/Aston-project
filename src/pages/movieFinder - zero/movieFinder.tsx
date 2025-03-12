import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InputField } from "@components/inputField-zero/inputField";
import { ResultField } from "@components/resultField/resultField";
import movieFinderStyles from "./movieFInder.module.css";
import { Movie } from "@utils/types/types";
import { addSearchEntry } from "@store/historySlice";

export const MovieFinder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const dispatch = useDispatch();

  const fetchMovies = async (query: string) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=3e3e7f8f&s=${query}`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    dispatch(addSearchEntry(searchTerm));
    fetchMovies(searchTerm);
  };

  return (
    <div className={movieFinderStyles.container}>
      <InputField
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
        setSearchTerm={setSearchTerm}
      />
      <ResultField movies={movies} />
    </div>
  );
};
