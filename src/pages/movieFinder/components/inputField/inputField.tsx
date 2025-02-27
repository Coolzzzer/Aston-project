import React from 'react';
import './inputFiels.css';

interface InputFieldProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className='inputField'>
      <div className="content">
        <div className="title">Movie Finder</div>
        <br />
        <div className="slogan">Cari film favoritmu berdasarkan judulnya...</div>
        <input
          className="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchButton" onClick={handleSearch}>Search</button>
        <div className="example">contoh: Batman, Avengers, Home Alone</div>
      </div>
    </div>
  );
}

export default InputField;


