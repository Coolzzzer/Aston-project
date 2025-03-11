import React, { useState } from 'react';
import {InputField }from '@components/inputField/inputField';
import {ResultField} from '@components/resultField/resultField';
import movieFinderStyles from "./movieFInder.module.css";
import { Movie } from '@utils/types/types';

export const MovieFinder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const fetchMovies = async (query: string) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=3e3e7f8f&s=${query}`);
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

  const handleSearch = () => {
    fetchMovies(searchTerm);
  };

  return (
    <div className={movieFinderStyles.container}>
      <InputField
				searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}/>
      <ResultField movies={movies}/>
    </div>
  );
};
