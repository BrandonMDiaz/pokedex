import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
  authServiceMock,
  authServiceMock2,
} from 'src/app/shared/testMocks/authServiceMock';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let fakeAuthService = authServiceMock2;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    fakeAuthService.login.calls.reset();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should NOT login because EMAIL is wrong', () => {
    component.loginForm.patchValue({
      email: 'this email.com',
      password: '1234567',
    });
    component.login();
    expect(fakeAuthService.login).not.toHaveBeenCalled();
  });
  it('should NOT login because PASSWORD is wrong', () => {
    component.loginForm.patchValue({
      email: 'this email.com',
      password: '',
    });
    component.login();
    expect(fakeAuthService.login).not.toHaveBeenCalled();
  });
  it('should login ', () => {
    component.loginForm.patchValue({
      email: 'this@email.com',
      password: '1234567',
    });
    component.login();
    expect(fakeAuthService.login).toHaveBeenCalled();
  });
});
