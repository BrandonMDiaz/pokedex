import { PokemonHeightPipe } from './pokemon-height.pipe';

describe('PokemonHeightPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonHeightPipe();
    expect(pipe).toBeTruthy();
  });
  it('add meters to the string', () => {
    const pipe = new PokemonHeightPipe();
    expect(pipe.transform('123')).toBe('123 meters');
  });
});
