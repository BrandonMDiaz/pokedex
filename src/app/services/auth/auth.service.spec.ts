import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { activatedRouteMock } from 'src/app/shared/testMocks/activatedRouteMock';
import { authServiceMock } from 'src/app/shared/testMocks/authServiceMock';
import { errorServiceMock } from 'src/app/shared/testMocks/errorServiceMock';
import { localStorageMock } from 'src/app/shared/testMocks/localStorageMock';
import { routerMock } from 'src/app/shared/testMocks/routerMock';
import { usersServiceMock } from 'src/app/shared/testMocks/userServiceMock';
import { ErrorService } from '../error/error.service';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { UsersService } from '../users/users.service';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let fakeHttpClient = jasmine.createSpyObj<HttpClient>('http', {
    post: undefined,
  });
  let fakeUserService = usersServiceMock;
  let fakeLocalStorage = localStorageMock;
  let fakeRouter = routerMock;
  let fakeActivatedRoute = jasmine.createSpyObj<ActivatedRoute>('route', [
    'snapshot',
  ]);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: fakeHttpClient,
        },
        {
          provide: LocalStorageService,
          useValue: fakeLocalStorage,
        },
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
        {
          provide: ErrorService,
          useValue: jasmine.createSpyObj('errorService', errorServiceMock),
        },
        {
          provide: UsersService,
          useValue: fakeUserService,
        },
        {
          provide: Router,
          useValue: fakeRouter,
        },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call localstorage service to see if user is logged in', () => {
    service.isLoggedIn();
    expect(fakeLocalStorage.getToken).toHaveBeenCalled();
  });

  it('should call localstorage to delete token and then redirected', () => {
    service.logout();
    expect(fakeLocalStorage.delete).toHaveBeenCalled();
    expect(fakeRouter.navigateByUrl).toHaveBeenCalled();
  });

  it('should get boolean if user is ADMIN, in this case is not ADMIN', () => {
    const res = service['isAdmin']();
    expect(res).toBe(false);
  });

  it('should get boolean if user is ADMIN, in this case IT IS ADMIN', () => {
    service.user = {
      _id: '1',
      name: 'test',
      lastName: 'test',
      email: 'test@email.com',
      role: 'ADMIN',
    };
    const res = service['isAdmin']();
    expect(res).toBeTruthy();
  });
  // it('should login user by making a post request', () => {
  //   const email = 'brandon@email.com';
  //   const password = '1234567';
  //   service.login(email, password);
  //   expect(fakeHttpClient.post).toHaveBeenCalled();
  // });
  it('should register user by making a post request', () => {
    service.user = {
      _id: '1',
      name: 'test',
      lastName: 'test',
      email: 'test@email.com',
      role: 'ADMIN',
    };
    service.register(service.user);
    expect(fakeUserService.createUser).toHaveBeenCalled();
  });
});
