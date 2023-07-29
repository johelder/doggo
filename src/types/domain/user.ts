import { IDomainFeeder } from '.';

export interface IDomainUser {
  id: string;
  name: string | null;
  email: string | null;
  photo: string | null;
  favorites: IDomainFeeder[];
}
