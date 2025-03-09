export type User = {
  name: string;
  email: string;
  password: string;
};

export type AuthState = {
  user?: User;
  loggedIn: boolean;
};

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
