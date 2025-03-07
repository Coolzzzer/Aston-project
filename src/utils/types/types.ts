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
  id: number;
  title: string;
  description: string;
};

export type PopuplState = {
  isOpen: boolean;
  cardData: CardData | null;
};