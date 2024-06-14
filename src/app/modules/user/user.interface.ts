export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: number;
  role: 'user' | 'admin';
  address: string;
};
