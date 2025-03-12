import inputStyle from "./inputField.module.css";
import { useState } from "react";
import { fetchMovies } from "@store/getFetchMovies";
import { useDispatch, useSelector } from "react-redux";
import { saveMovies } from "@store/moviesSlice";



export const InputField = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
      };

    const handleSearch = () => {
        fetchMovies(searchTerm, addMovies);
    };

    const addMovies = (data) => {
        dispatch(saveMovies(data));
    }

    console.log(movies);

    return (
        <div className={inputStyle.inputField}>
            <div className={inputStyle.content}>
                <div className={inputStyle.title}>Movie Finder</div>
                <br /> 
                <input
                className={inputStyle.searchInput}
                value={searchTerm}
                onChange={handleInputChange} 
                placeholder="Найти фильм..."
                />
                <button className={inputStyle.searchButton} onClick={handleSearch}>Поиск</button>
                <div className={inputStyle.example}>Пример: Batman, Avengers, Home Alone</div>
            </div>
        </div>
    );
}