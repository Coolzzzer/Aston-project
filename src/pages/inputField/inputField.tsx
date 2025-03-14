import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "@store/getFetchMovies";
import { saveMovies } from "@store/moviesSlice";
import { addSearchEntry } from "@store/historySlice";
import { Movie } from "@utils/types/types";
import inputStyle from "./inputField.module.css";
import { useLocation } from "react-router-dom";
import { Filter } from "@components/filter/filter";
import { ENT_KEY } from "@utils/constants/constants";

export const InputField: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [noResults, setNoResults] = useState<boolean>(false);
  const [filterTerm, setFilterTerm] = useState<number | null>(null);
  const dispatch = useDispatch();

  const location = useLocation();

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.state && location.state.searchQuery) {
      setSearchTerm(location.state.searchQuery);
    }
  }, [location.state]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchTerm(event.target.value);
    setNoResults(false);
  };

  const handleMoviesFetched = (data: Movie[]): void => {
    dispatch(saveMovies(data));
    setNoResults(data.length === 0);

    if (data.length > 0 && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = (): void => {
    if (!searchTerm.trim()) return;
    dispatch(addSearchEntry(searchTerm));
    fetchMovies(searchTerm, filterTerm, handleMoviesFetched);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ENT_KEY) {
      handleSearch();
    }
  };
  const handleInputFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value ? parseInt(event.target.value, 10) : null;
    setFilterTerm(value);
  };

  return (
    <div className={inputStyle.inputField}>
      <div className={inputStyle.content}>
        <div className={inputStyle.title}>Movie Finder</div>
        <br />
        <div className={inputStyle.searchContainer}>
          <input
            className={inputStyle.searchInput}
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Найти фильм..."
          />
          <button className={inputStyle.searchButton} onClick={handleSearch}>
            Поиск
          </button>
        </div>
        <Filter handleInputFilterChange={handleInputFilterChange} />
        {noResults && (
          <div className={inputStyle.noResults}>
            По вашему запросу ничего не найдено.
          </div>
        )}

        <div className={inputStyle.example}>
          Пример: Batman, Avengers, Home Alone
        </div>
      </div>
      <div ref={resultRef} />
    </div>
  );
};
