import React, { useState } from 'react';
import { InputField } from './components/inputField/inputField';
import { ResultField } from './components/resultField/resultField';
import { Filter } from './components/filter/filter';
import './components/inputField/inputFiels.css';
import './components/resultField/resultField.css';
import './movieFinder.css';

export const MovieFinder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterTerm, setFilterTerm] = useState<number | null>(null);
  const [movies, setMovies] = useState<any[]>([]);

  const fetchMovies = async (searchQuery: string, filterQuery: number | null) => {
    try {
      const url = filterQuery
        ? `https://www.omdbapi.com/?apikey=3e3e7f8f&s=${searchQuery}&y=${filterQuery}`
        : `https://www.omdbapi.com/?apikey=3e3e7f8f&s=${searchQuery}`;
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
				children={<Filter
					filterTerm={filterTerm}
					handleInputFilterChange={handleInputFilterChange}
				/>}
      ></InputField>

      <ResultField movies={movies} />
    </div>
  );
};
