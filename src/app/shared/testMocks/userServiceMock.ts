import { UsersService } from 'src/app/services/users/users.service';

export const usersServiceMock = jasmine.createSpyObj<UsersService>(
  'UsersService',
  {
    getUsers: undefined,
    delete: undefined,
    createUser: undefined,
    editUser: undefined,
  }
);
