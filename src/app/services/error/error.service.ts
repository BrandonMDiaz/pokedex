import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorResponse } from 'src/app/models/errors';
import { environment } from 'src/environments/environment.prod';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  public redirectToLogin() {
    this.localStorage.delete(environment.jwtKey);
    this.router.navigateByUrl('/login');
  }
  public handleError({ error }: ErrorResponse) {
    if (error.message === 'Invalid token.') {
      this.redirectToLogin();
    } else {
      throw new Error('Something went wrong, try again');
    }
  }
}
