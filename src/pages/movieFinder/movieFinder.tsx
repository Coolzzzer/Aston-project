import React, { useState } from 'react';
import { InputField } from './components/inputField/inputField';
import { ResultField } from './components/resultField/resultField';
import { Filter } from './components/filter/filter';
import './components/inputField/inputField.css';
import './components/resultField/resultField.css';
import './movieFinder.css';

const API_URL = import.meta.env.VITE_OMDB_API_URL;

export const MovieFinder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterTerm, setFilterTerm] = useState<number | null>(null);
  const [movies, setMovies] = useState<any[]>([]);

  const fetchMovies = async (searchQuery: string, filterQuery: number | null) => {
    try {
      const url = filterQuery
        ? `${API_URL}${searchQuery}&y=${filterQuery}`
        : `${API_URL}${searchQuery}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleInputFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value ? parseInt(event.target.value, 10) : null;
    setFilterTerm(value);
  };

  const handleSearch = () => {
    fetchMovies(searchTerm, filterTerm);
  };

  return (
    <div>
      <InputField
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
        children={
          <Filter
            filterTerm={filterTerm}
            handleInputFilterChange={handleInputFilterChange}
          />
        }
      />
      <ResultField movies={movies} />
    </div>
  );
};
