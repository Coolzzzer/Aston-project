import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import inputFieldStyles from "./inputField.module.css";

type InputFieldProps = {
  searchTerm: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  setSearchTerm: (term: string) => void;
};

export const InputField: React.FC<InputFieldProps> = ({
  searchTerm,
  handleInputChange,
  handleSearch,
  setSearchTerm,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.searchQuery) {
      setSearchTerm(location.state.searchQuery);
    }
  }, [location.state, setSearchTerm]);

  return (
    <div className={inputFieldStyles.inputField}>
      <div className={inputFieldStyles.content}>
        <div className={inputFieldStyles.title}>Movie Finder</div>
        <br />
        <div className={inputFieldStyles.slogan}>Поиск фильмов</div>
        <input
          className={inputFieldStyles.searchInput}
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Найти фильм..."
        />
        <button
          className={inputFieldStyles.searchButton}
          onClick={handleSearch}
        >
          Поиск
        </button>
        <div className={inputFieldStyles.example}>
          Пример: Batman, Avengers, Home Alone
        </div>
      </div>
    </div>
  );
};
