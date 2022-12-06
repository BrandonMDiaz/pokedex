import { User as UserType } from 'src/app/models/user';
export class User implements UserType {
  constructor(
    public _id: string = '',
    public name: string = '',
    public lastName: string = '',
    public email: string = '',
    public password: string = '',
    public role: string = 'USER'
  ) {}
}
