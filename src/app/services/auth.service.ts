import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { LoginResponse } from '../models/login';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private path = `${environment.loginUrl}api/auth`;
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  errorHandler(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
  isLoggedIn(){
    return this.localStorage.getToken();
  }
  logout(){
    this.localStorage.delete(environment.jwtKey);
    this.router.navigateByUrl('/login');
  }
  login(email: string, password: string) {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.http
      .post(this.path, { email, password })
      .pipe(catchError(this.errorHandler))
      .subscribe((res: any): void => {
        this.localStorage.add(environment.jwtKey, res.token);
        this.router.navigateByUrl(returnUrl);
      });
  }
}
