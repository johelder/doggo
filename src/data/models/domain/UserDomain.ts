export interface UserDomain {
  id: string;
  name: string | null;
  email: string | null;
  photo: string | null;
  favorites: string[];
}
