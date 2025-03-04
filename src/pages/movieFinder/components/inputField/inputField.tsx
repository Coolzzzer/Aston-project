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
        <div className="slogan">Cari film favoritmu berdasarkan judulnya...</div>
        <input
          className="searchInput"
          value={searchTerm}
          onChange={handleInputChange} 
          placeholder="Search movie..."
        />
        <button className="searchButton" onClick={handleSearch}>
          Search
        </button>
        <div className="example">contoh: Batman, Avengers, Home Alone</div>
      </div>
    </div>
  );
};
