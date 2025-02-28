import React from 'react';
import './inputFiels.css';

type InputFieldProps = {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement> | null) => void;
};

export const InputField: React.FC<InputFieldProps> = ({ searchTerm, handleSearch }) => {
  return (
    <div className="inputField">
      <div className="content">
        <div className="title">Movie Finder</div>
        <br />
        <div className="slogan">Cari film favoritmu berdasarkan judulnya...</div>
        <input
          className="searchInput"
          value={searchTerm}
          onChange={(e) => handleSearch(e)} // Передаем событие в handleSearch
          placeholder="Search movie..."
        />
        <button className="searchButton" onClick={() => handleSearch(null)}>
          Search
        </button>
        <div className="example">contoh: Batman, Avengers, Home Alone</div>
      </div>
    </div>
  );
};
