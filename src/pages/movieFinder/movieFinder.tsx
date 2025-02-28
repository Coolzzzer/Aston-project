import React, { useState } from 'react';
import {InputField }from './components/inputField/inputField';
import {ResultField} from './components/resultField/resultField';
import './components/inputField/inputFiels.css';
import './components/resultField/resultField.css';
import './movieFinder.css'

export const MovieFinder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [movies, setMovies] = useState<any[]>([]);

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement> | null) => {
    if (event) {
      setSearchTerm(event.target.value); // Обновляем поле ввода
    } else {
      fetchMovies(searchTerm); // Выполняем поиск, если событие отсутствует (нажатие кнопки)
    }
  };

  return (
    <div>
      <InputField searchTerm={searchTerm} handleSearch={handleSearch} />
      <ResultField movies={movies} />
    </div>
  );
};
