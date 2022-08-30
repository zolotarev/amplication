export type User = {
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
