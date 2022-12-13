import { PokemonWeightPipe } from './pokemon-weight.pipe';

describe('PokemonWeightPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonWeightPipe();
    expect(pipe).toBeTruthy();
  });
  it('add Kg to the string', () => {
    const pipe = new PokemonWeightPipe();
    expect(pipe.transform('123')).toBe('123 Kg');
  });
});
