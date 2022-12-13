import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
  authServiceMock,
  authServiceMock2,
} from 'src/app/shared/testMocks/authServiceMock';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let fakeAuthService = authServiceMock2;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
      ],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should register user', () => {
  //   component.user = {
  //     _id: '1234',
  //     name: 'brandon',
  //     lastName: 'flo',
  //     role: 'USER',
  //     email: 'brandon@email.com',
  //     password: '1234567',
  //   };
  //   const registerForm = <NgForm>{
  //     value: component.user,
  //   };
  //   component.register(registerForm);
  //   expect(fakeAuthService.register).toHaveBeenCalled();
  // });
});
