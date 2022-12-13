import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { DialogComponent } from '../dialog/dialog.component';
import pokemonData from './pokemon.json';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit, OnDestroy {
  title = 'pokedex';
  pokemonSelected: number = -1;
  pokemones: Pokemon[] = [];
  isAdmin: boolean = false;
  private adminSubscription: BehaviorSubject<boolean> | undefined;
  constructor(
    private authService: AuthService,
    private pokemonService: PokemonService,
    public dialog: MatDialog
  ) {
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
  async ngOnInit(): Promise<void> {
    console.log('pokemon component: OnInit');
    this.pokemonService.getPokemons(1).subscribe((pokemon) => {
      this.pokemones = pokemon;
    });
  }

  displayInfo(pokemonId: number) {
    this.pokemonSelected = pokemonId === this.pokemonSelected ? -1 : pokemonId;
  }

  openDeleteDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { message: 'Are you sure you want to delete this pokemon?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deletePokemon(id);
      }
    });
  }
  deletePokemon(id: number) {
    this.pokemones = this.pokemones.filter((pokemon) => pokemon.id !== id);
    this.pokemonService.delete(id);
  }
}
