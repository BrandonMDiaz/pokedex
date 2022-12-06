export interface Error {
  message: string;
  ok: boolean;
}

export interface ErrorResponse {
  error: Error;
  message: string;
  name: string;
  ok: boolean;
  status: number;
  statusText: string;
  url: string;
}
