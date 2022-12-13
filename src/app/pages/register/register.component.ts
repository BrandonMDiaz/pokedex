import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/shared/clases/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user = new User();
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  register(form: NgForm) {
    if (form.valid) {
      const user = {
        name: form.value.name,
        lastName: form.value.lastName,
        role: 'USER',
        email: form.value.email,
        password: form.value.password,
      };
      this.authService.register(user);
    }
  }
}
