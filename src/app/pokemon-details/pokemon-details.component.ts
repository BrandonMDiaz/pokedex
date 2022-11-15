import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemonDetails: any;
  type: string = '';
  constructor() { }

  ngOnInit(): void {
    console.log('pokemon-detail component: OnInit')
    this.type = this.pokemonDetails.types[0]
  }

}
