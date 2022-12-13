import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, firstValueFrom, Observable, throwError } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { LoginResponse } from '../../models/login';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ErrorService } from '../error/error.service';
import { ErrorResponse } from 'src/app/models/errors';
import jwt_decode from 'jwt-decode';
import { of, map } from 'rxjs';
import { UsersService } from '../users/users.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: User | undefined;
  private path = `${environment.appUrl}api/auth`;
  public isAdmin$ = new BehaviorSubject(false);
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private errorHandler: ErrorService,
    private userService: UsersService
  ) {
    if (this.isLoggedIn()) {
      this.user = this.decodeToken(this.localStorage.getToken() ?? '');
      this.isAdmin$.next(this.isAdmin());
    }
  }

  isLoggedIn() {
    return !!this.localStorage.getToken();
  }

  logout() {
    this.localStorage.delete(environment.jwtKey);
    this.router.navigateByUrl('/login');
  }

  private isAdmin() {
    return this.user?.role === 'ADMIN';
  }

  decodeToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  async login(email: string, password: string) {
    const returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || 'pokemons';
    try {
      const response = (await firstValueFrom(
        this.http.post(this.path, { email, password })
      )) as LoginResponse;
      this.localStorage.add(environment.jwtKey, response.token);
      this.user = response.user;
      this.isAdmin$.next(this.isAdmin());
      this.router.navigateByUrl(returnUrl);
    } catch (err) {
      this.isAdmin$.next(false);
      console.log(err);
      this.errorHandler.handleError(err as ErrorResponse);
    }
  }

  async register(user: User) {
    try {
      const response = await this.userService.createUser(user);
      this.localStorage.add(environment.jwtKey, response.token);
      this.user = { ...user, password: '' };
      this.isAdmin$.next(this.isAdmin());
      this.router.navigateByUrl('pokemons');
    } catch (err) {
      this.errorHandler.handleError(err as ErrorResponse);
    }
  }
}
