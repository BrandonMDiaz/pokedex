import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss'],
})
export class PokemonPageComponent implements OnInit, OnDestroy {
  public isAdmin: boolean = false;
  private adminSubscription: BehaviorSubject<boolean> | undefined;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
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
  agregar() {
    this.router.navigateByUrl('pokemones/add');
  }
}
