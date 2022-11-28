import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
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

  constructor(private pokemonService: PokemonService) {
    // this.pokemonService.getPokemons2(1);
    this.pokemonService.setPokemons(1);
  }

  ngOnInit(): void {
    console.log('pokemon component: OnInit');
    this.pokemones = this.pokemonService.pokemons;
  }

  displayInfo(pokemonId: number) {
    this.pokemonSelected = pokemonId === this.pokemonSelected ? -1 : pokemonId;
  }
}
