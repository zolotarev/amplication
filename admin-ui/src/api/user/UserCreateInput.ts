export type UserCreateInput = {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phone: string;
  roles: Array<string>;
  username: string;
};
