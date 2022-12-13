import { TestBed } from '@angular/core/testing';
import { AuthService } from '../services/auth/auth.service';
import {
  authServiceMock,
  authServiceMock2,
} from '../shared/testMocks/authServiceMock';

import { RolesGuard } from './roles.guard';

describe('RolesGuard', () => {
  let guard: RolesGuard;
  let authService = authServiceMock2;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: authService,
        },
      ],
    });
    guard = TestBed.inject(RolesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should return true due to being ADMIN', () => {
    authService.user = { name: '', role: 'ADMIN', lastName: '', email: '' };
    const res = guard.canActivate();
    expect(res).toBeTruthy();
  });
  it('should return false due to NOT being ADMIN', () => {
    authService.user = { name: '', role: 'USER', lastName: '', email: '' };
    const res = guard.canActivate();
    expect(res).toBe(false);
  });
});
