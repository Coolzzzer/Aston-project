export type User = {
  name: string;
  email: string;
  password: string;
};

export type Film = {
  id: string;
  title: string;
};

export type FavoritesState = {
  favorites: Film[];
};

export type AuthState = {
  user?: User;
};
