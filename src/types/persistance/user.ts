import { IPersistanceFeeder } from '.';

export interface IPersistanceUser {
  id: string;
  name: string | null;
  email: string | null;
  photo: string | null;
  favorites: IPersistanceFeeder[];
}
