import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonFormat',
})
export class PokemonFormat implements PipeTransform {
  transform(value: any) {
    const types = this.getTypes(value['types'])
    const newPokemonObj = {
      id: value['id'],
      name: value['name'],
      types
    };
    return newPokemonObj;
  }

  getTypes(types: any[]) {
    const typeString = types.reduce((acc, el) => {
      if (acc === '') {
        return el.type.name;
      }
      return acc + ', ' + el.type.name;
    }, '');
    return [types[0].type.name, typeString];
  }
}
