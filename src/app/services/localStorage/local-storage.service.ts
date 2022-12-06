import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getToken() {
    return localStorage.getItem(environment.jwtKey);
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }
  add(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
