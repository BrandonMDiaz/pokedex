import { User } from './user';

export interface LoginResponse {
  ok: boolean;
  token: string;
  user: User;
}
