import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { LocalStorageService } from '../services/localStorage/local-storage.service';
import { authServiceMock } from '../shared/testMocks/authServiceMock';
import { localStorageMock } from '../shared/testMocks/localStorageMock';
import { routerMock } from '../shared/testMocks/routerMock';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let fakeLocalStorage = localStorageMock;
  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: '/cookies' };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LocalStorageService,
          useValue: fakeLocalStorage,
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj('router', routerMock),
        },
      ],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should allow to see route', () => {
    fakeLocalStorage.get = jasmine.createSpy().and.returnValue('null');
    const res = guard.canActivate(routeMock, routeStateMock);
    expect(res).toBeTruthy();
  });
  it('should not allow to display route', () => {
    fakeLocalStorage.get = jasmine.createSpy().and.returnValue(null);
    const res = guard.canActivate(routeMock, routeStateMock);
    expect(res).toBe(false);
  });
});
