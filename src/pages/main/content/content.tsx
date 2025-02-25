import "./content.css";

export default function Content() {
    return (
        <main className="main">
            <div className="main__movie-finder">
                <h1 className="main__title">
                    Movie Finder
                </h1>
                <p className="main__information">
                    Cari film favoritmu berdasarkan judulnya...
                </p>
                <form className="main__form" action="#" method="GET">
                    <input className="main__search-field" type="search" name="search" placeholder="Search movie..." />
                    <button className="main__submit" type="submit">Search</button>
                </form>
                <p className="main__signature">
                    contoh: Batman, Avengers, Home Alone
                </p>
            </div>
        </main>
    );
}