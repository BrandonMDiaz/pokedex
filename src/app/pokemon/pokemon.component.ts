import { Component, OnInit } from '@angular/core';
import pokemonData from './pokemon.json';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  title = 'pokedex';
  pokemonSelected: number = -1;
  pokemones: any;

  constructor() {
    this.pokemones = pokemonData;
  }

  ngOnInit(): void {}
  displayInfo(pokemonId: number) {
    this.pokemonSelected = pokemonId === this.pokemonSelected ? -1 : pokemonId;
  }
}
