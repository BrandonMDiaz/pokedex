import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import pokemonData from './pokemon.json';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  title = 'pokedex';
  pokemonSelected: number = -1;
  pokemones: Pokemon[] = [];
  isAdmin: boolean = false;
  constructor(
    private authService: AuthService,
    private pokemonService: PokemonService
  ) {
    this.isAdmin = authService.isAdmin();
  }

  async ngOnInit(): Promise<void> {
    console.log('pokemon component: OnInit');
    this.pokemones = await this.pokemonService.getPokemons(1);
  }

  displayInfo(pokemonId: number) {
    this.pokemonSelected = pokemonId === this.pokemonSelected ? -1 : pokemonId;
  }
  delete() {}
}
