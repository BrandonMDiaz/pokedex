import { of, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

export const authServiceMock = [
  'isLoggedIn',
  'logout',
  'isAdmin',
  'decodeToken',
  'login',
  'register',
];

export const authServiceMock2 = jasmine.createSpyObj<AuthService>(
  'AuthService',
  {
    user: { role: 'ADMIN' },
    isLoggedIn: undefined,
    logout: undefined,
    decodeToken: undefined,
    login: undefined,
    register: undefined,
  }
);
