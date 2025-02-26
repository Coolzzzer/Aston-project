import contentStyle from "./content.module.css";

export default function Content() {
    return (
        <main className={contentStyle.main}>
            <div className={contentStyle.main__movieFinder}>
                <h1 className={contentStyle.main__title}>
                    Movie Finder
                </h1>
                <p className={contentStyle.main__information}>
                    Cari film favoritmu berdasarkan judulnya...
                </p>
                <form className={contentStyle.main__form} action="#" method="GET">
                    <input className={contentStyle.main__searchField} type="search" name="search" placeholder="Search movie..." />
                    <button className={contentStyle.main__submit} type="submit">Search</button>
                </form>
                <p className={contentStyle.main__signature}>
                    contoh: Batman, Avengers, Home Alone
                </p>
            </div>
        </main>
    );
}