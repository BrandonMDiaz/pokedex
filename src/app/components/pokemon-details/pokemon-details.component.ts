import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonDetails } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemonDetails: PokemonDetails = {
    name: '',
    weight: 0,
    height: 0,
    experience: 0,
    id: 0,
    sprites: { front_default: '' },
    types: [],
  };
  type: string = 'normal';
  constructor() {}

  getTypes(types: any[]): string {
    if (types.length > 0) {
      const typeString = types.reduce((acc, el) => {
        if (acc === '') {
          return el.type.name;
        }
        return acc + ', ' + el.type.name;
      }, '');
      return typeString;
    }
    return '';
  }

  ngOnInit(): void {
    console.log('pokemon-detail component: OnInit');
    if (this.pokemonDetails) {
      this.type = this.pokemonDetails.types[0].type.name;
    }
  }
}
