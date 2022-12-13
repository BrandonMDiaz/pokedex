import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { activatedRouteMock } from 'src/app/shared/testMocks/activatedRouteMock';
import { routerMock } from 'src/app/shared/testMocks/routerMock';
import { usersServiceMock } from 'src/app/shared/testMocks/userServiceMock';

import { EditUserComponent } from './edit-user.component';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  let fakeUserService = usersServiceMock;
  let fakeActivatedRoute = activatedRouteMock;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },

        {
          provide: UsersService,
          useValue: fakeUserService,
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj('router', routerMock),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    fakeUserService.editUser.calls.reset();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit the user', () => {
    component.user = {
      name: 'brandon',
      lastName: 'f',
      email: 'this@email.com',
      role: 'USER',
    };
    component.userForm.patchValue({
      name: 'brandon',
      lastName: 'flores',
      email: 'this@email.com',
      role: 'USER',
    });
    component.register();
    expect(fakeUserService.editUser).toHaveBeenCalled();
  });
  it('should NOT edit the user', () => {
    component.userForm.patchValue({
      name: '',
      lastName: 'f',
      email: 'this@email.com',
      role: 'USER',
    });
    component.register();

    expect(fakeUserService.editUser).not.toHaveBeenCalled();
  });
});
