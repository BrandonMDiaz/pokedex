import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonDetails } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemonDetails!: PokemonDetails;
  type: string = '';
  constructor() { }

  getTypes(types: any[]) {
    const typeString = types.reduce((acc, el) => {
      if (acc === '') {
        return el.type.name;
      }
      return acc + ', ' + el.type.name;
    }, '');
    return typeString;
  }

  ngOnInit(): void {
    console.log('pokemon-detail component: OnInit')
    this.type = this.pokemonDetails.types[0].type.name;
  }

}
