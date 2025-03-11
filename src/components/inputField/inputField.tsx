import React from 'react';
import inputFieldStyles from "./inputFiels.module.css"

type InputFieldProps = {
  searchTerm: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
};

export const InputField: React.FC<InputFieldProps> = ({ searchTerm, handleInputChange, handleSearch }) => {
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
        <button className={inputFieldStyles.searchButton} onClick={handleSearch}>
          Поиск
        </button>
        <div className={inputFieldStyles.example}>Пример: Batman, Avengers, Home Alone</div>
      </div>
    </div>
  );
};
