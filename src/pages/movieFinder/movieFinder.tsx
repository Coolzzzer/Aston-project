import movieFinderStyle from "./movieFInder.module.css";

export default function MovieFinder() {
    return (
        <div className={movieFinderStyle.movieFinder}>
            <h1 className={movieFinderStyle.title}>
                Movie Finder
            </h1>
            <p className={movieFinderStyle.information}>
                Cari film favoritmu berdasarkan judulnya...
            </p>
            <form className={movieFinderStyle.form} action="#" method="GET">
                <input className={movieFinderStyle.searchField} type="search" name="search" placeholder="Search movie..." />
                <button className={movieFinderStyle.submit} type="submit">Search</button>
            </form>
            <p className={movieFinderStyle.signature}>
                contoh: Batman, Avengers, Home Alone
            </p>
        </div>
    );
};