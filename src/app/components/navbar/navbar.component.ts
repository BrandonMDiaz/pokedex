import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAdmin: boolean = false;
  private adminSubscription: BehaviorSubject<boolean> | undefined;

  constructor(private authService: AuthService) {
    if (this.authService.isAdmin$ && this.adminSubscription === undefined) {
      this.adminSubscription = this.authService.isAdmin$;
      this.adminSubscription.subscribe((isAdmin) => {
        this.isAdmin = isAdmin;
      });
    }
  }
  ngOnDestroy() {
    if (this.adminSubscription) {
      console.log('uns');

      this.adminSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
