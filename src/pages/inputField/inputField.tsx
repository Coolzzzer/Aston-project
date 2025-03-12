import React, { useState } from "react";
import inputStyle from "./inputField.module.css";
import { fetchMovies } from "@store/getFetchMovies";
import { useDispatch } from "react-redux";
import { saveMovies } from "@store/moviesSlice";
import { Movie } from "@utils/types/types";
import { addSearchEntry } from "@store/historySlice";

export const InputField: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useDispatch();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchTerm(event.target.value);
  };

  const handleMoviesFetched = (data: Movie[]): void => {
    dispatch(saveMovies(data));
  };

  const handleSearch = (): void => {
    dispatch(addSearchEntry(searchTerm));
    fetchMovies(searchTerm, handleMoviesFetched);
  };

  return (
    <div className={inputStyle.inputField}>
      <div className={inputStyle.content}>
        <div className={inputStyle.title}>Movie Finder</div>
        <br />
        <input
          className={inputStyle.searchInput}
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Найти фильм..."
        />
        <button className={inputStyle.searchButton} onClick={handleSearch}>
          Поиск
        </button>
        <div className={inputStyle.example}>
          Пример: Batman, Avengers, Home Alone
        </div>
      </div>
    </div>
  );
};
