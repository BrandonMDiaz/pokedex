import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users/users.service';
import { usersServiceMock } from 'src/app/shared/testMocks/userServiceMock';

import { AddUserComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  let fakeUserService = usersServiceMock;
  let fakeSnackBar = jasmine.createSpyObj('_snackBar', ['open']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUserComponent],
      providers: [
        {
          provide: UsersService,
          useValue: fakeUserService,
        },
        {
          provide: MatSnackBar,
          useValue: fakeSnackBar,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fakeUserService.createUser.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open snackbar ', () => {
    component.openSnackBar('test', 'test2');
    expect(fakeSnackBar.open).toHaveBeenCalled();
  });

  it('should submit user', () => {
    component.userForm.patchValue({
      name: 'brandon',
      lastName: 'f',
      email: 'this@email.com',
      role: 'USER',
      password: '123432',
    });
    component.onSubmit();
    expect(fakeUserService.createUser).toHaveBeenCalled();
  });

  it('should NOT submit user because ROLE is incorrect', () => {
    component.userForm.patchValue({
      name: 'brandon',
      lastName: 'f',
      email: 'this@email.com',
      role: 'notuser',
      password: '123432',
    });
    component.onSubmit();
    expect(fakeUserService.createUser).not.toHaveBeenCalled();
  });
  it('should NOT submit user because EMAIL is incorrect', () => {
    component.userForm.patchValue({
      name: 'brandon',
      lastName: 'f',
      email: 'thisemail.com',
      role: 'USER',
      password: '123432',
    });
    component.onSubmit();
    expect(fakeUserService.createUser).not.toHaveBeenCalled();
  });
  it('should NOT submit user because NAME is incorrect', () => {
    component.userForm.patchValue({
      name: '',
      lastName: 'f',
      email: 'this@email.com',
      role: 'USER',
      password: '123432',
    });
    component.onSubmit();
    expect(fakeUserService.createUser).not.toHaveBeenCalled();
  });
  it('should NOT submit user because PASSWORD is incorrect', () => {
    component.userForm.patchValue({
      name: 'NAME',
      lastName: 'f',
      email: 'thisemail.com',
      role: 'USER',
      password: '',
    });
    component.onSubmit();
    expect(fakeUserService.createUser).not.toHaveBeenCalled();
  });
  it('should NOT submit user because LASTNAME is incorrect', () => {
    component.userForm.patchValue({
      name: 'NAME',
      lastName: '',
      email: 'thisemail.com',
      role: 'USER',
      password: '1235443',
    });
    component.onSubmit();
    expect(fakeUserService.createUser).not.toHaveBeenCalled();
  });
});
