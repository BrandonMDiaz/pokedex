import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth/auth.service';
import { authServiceMock2 } from 'src/app/shared/testMocks/authServiceMock';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let authServiceFake = authServiceMock2;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceFake,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('isLoggedIn was called', () => {
    component.isLoggedIn();
    expect(authServiceFake.isLoggedIn).toHaveBeenCalled();
  });
  it('logout was call', () => {
    component.logout();
    expect(authServiceFake.logout).toHaveBeenCalled();
  });
});
