import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean = false;
  constructor(private authService: AuthService) {
    console.log(this.authService.isAdmin());
    this.isAdmin = this.authService.isAdmin();
  }

  ngOnInit(): void {
    console.log(this.authService.isAdmin());
    this.isAdmin = this.authService.isAdmin();
    console.log(this.authService.isAdmin());
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
