import React from 'react';
import './inputFiels.css';

type InputFieldProps = {
  searchTerm: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
};

export const InputField: React.FC<InputFieldProps> = ({ searchTerm, handleInputChange, handleSearch }) => {
  return (
    <div className="inputField">
      <div className="content">
        <div className="title">Movie Finder</div>
        <br />
        <div className="slogan">Поиск фильмов</div>
        <input
          className="searchInput"
          value={searchTerm}
          onChange={handleInputChange} 
          placeholder="Найти фильм..."
        />
        <button className="searchButton" onClick={handleSearch}>
          Поиск
        </button>
        <div className="example">Пример: Batman, Avengers, Home Alone</div>
      </div>
    </div>
  );
};
