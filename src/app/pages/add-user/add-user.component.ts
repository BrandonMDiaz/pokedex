import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiUserPostReponse, User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private userService: UsersService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  private validRole(role: string) {
    return role === 'USER' || role === 'ADMIN';
  }
  async onSubmit() {
    if (this.userForm.valid && this.validRole(this.userForm.value.role)) {
      const res = (await this.userService.createUser(
        this.userForm.value as User
      )) as ApiUserPostReponse;
      if (res.ok) {
        this.userForm.markAsUntouched();
        this.userForm.markAsPristine();
        this.userForm.reset();
        this.openSnackBar('User created successfully', 'close');
      }
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
