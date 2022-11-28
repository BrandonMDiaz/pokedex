import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonWeight'
})
export class PokemonWeightPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} Kg`;

  }

}
