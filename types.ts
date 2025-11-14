export type User = {
  id: number;
  username: string;
  email: string | null;
};

export type Order = {
  id: number;
  user_id: number;
  total: number;
  status: string;
};
