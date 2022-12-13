import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users/users.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit, OnDestroy {
  private routeSub: Subscription | undefined;
  user: User | undefined;
  formChanged = false;
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
  });

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.user = this.usersService.users.find((el) => el._id === params['id']);
      if (this.user !== undefined) {
        const { name, lastName, email, role } = this.user!;
        this.userForm.patchValue({
          name,
          lastName,
          email,
          role,
        });
      }
    });
    this.routeSub.unsubscribe();
  }

  ngOnDestroy() {
    if (this.routeSub) {
      console.log('uns');

      this.routeSub.unsubscribe();
    }
  }

  async register() {
    if (this.userForm.valid && this.hasChange()) {
      const user = { ...this.user, ...this.userForm.value };
      const response = await this.usersService.editUser(user);
      if (response.ok) {
        this.router.navigateByUrl('users');
      }
    }
    if (!this.hasChange()) {
      this.formChanged = true;
    }
  }

  hasChange(): boolean {
    return (
      this.user?.name !== this.userForm.value.name ||
      this.user?.lastName !== this.userForm.value.lastName ||
      this.user?.email !== this.userForm.value.email ||
      this.user?.role !== this.userForm.value.role
    );
  }
}
