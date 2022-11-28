import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonHeight'
})
export class PokemonHeightPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} meters`;
  }

}
