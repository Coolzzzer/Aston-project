export type User = {
  name: string;
  email: string;
  password: string;
};

export type AuthState = {
  user?: User;
  loggedIn: boolean;
};

export type CardData = {
  imdbID: string;
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
};

export type PopuplState = {
  isOpen: boolean;
  cardData: CardData | null;
};

type StringObject = {
  [key: string]: string;
}

export type CardDataForPopup = {
  Title: string;
  Poster: string;
  Year: string;
  Genre: string;
  Director: string;
  Actors: string;
  Country: string;
  Ratings: StringObject[];
}
export type Film = {
  id: string;
  title: string;
};

export type FavoritesState = {
  favorites: Film[];
};

export type SearchHistoryEntry = {
  id: string;
  query: string;
  timestamp: string;
};

export type HistoryState = {
  history: SearchHistoryEntry[];
};
