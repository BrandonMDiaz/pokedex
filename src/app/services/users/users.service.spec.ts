import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { User } from 'src/app/models/user';
import { errorServiceMock } from 'src/app/shared/testMocks/errorServiceMock';
import { httpClientMock } from 'src/app/shared/testMocks/httpClientMock';
import { ErrorService } from '../error/error.service';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let fakeHttpClient = httpClientMock;
  const user: User = {
    _id: '123',
    name: 'a',
    lastName: 'b',
    email: 'test@email.com',
    password: '123455',
    role: 'USER',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: fakeHttpClient,
        },
        {
          provide: ErrorService,
          useValue: jasmine.createSpyObj('errorHandler', errorServiceMock),
        },
      ],
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users', () => {
    service.getUsers(1);
    expect(fakeHttpClient.get).toHaveBeenCalled();
  });
  it('should delete user', () => {
    service.delete('1');
    expect(fakeHttpClient.delete).toHaveBeenCalled();
  });
  it('should create User', () => {
    service.createUser(user);
    expect(fakeHttpClient.post).toHaveBeenCalled();
  });
  it('should EDIT User', () => {
    service.editUser(user);
    expect(fakeHttpClient.put).toHaveBeenCalled();
  });
});
