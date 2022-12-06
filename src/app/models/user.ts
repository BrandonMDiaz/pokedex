import { Response } from './api';

export interface User {
  _id?: string;
  name: string;
  lastName: string;
  role: string;
  email: string;
  password?: string;
}

export interface ApiUserPostReponse {
  message: string;
  ok: boolean;
  token: string;
}

export interface ApiUserResponse extends Response {
  users: User[];
}
