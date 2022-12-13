import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { routerMock } from 'src/app/shared/testMocks/routerMock';
import { usersServiceMock } from 'src/app/shared/testMocks/userServiceMock';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let fakeUserService = usersServiceMock;
  let fakeDialog = jasmine.createSpyObj('dialog', ['open']);
  let fakeRouter = jasmine.createSpyObj('router', { navigateByUrl: undefined });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [
        {
          provide: MatDialog,
          useValue: fakeDialog,
        },
        {
          provide: UsersService,
          useValue: fakeUserService,
        },
        {
          provide: Router,
          useValue: fakeRouter,
        },
        {
          provide: Title,
          useValue: jasmine.createSpyObj('Title', ['setTitle']),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete user', () => {
    component.deleteUser('1');
    expect(usersServiceMock.delete).toHaveBeenCalled();
  });

  it('should redirect to page when edit clicked', () => {
    component.edit('1');
    expect(fakeRouter.navigateByUrl).toHaveBeenCalled();
  });
});
