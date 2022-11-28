import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonFormat',
})
export class PokemonFormat implements PipeTransform {
  transform(value: any) {
    return '';
  }


}
