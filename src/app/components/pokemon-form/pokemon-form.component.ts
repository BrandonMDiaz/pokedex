import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { Subscription } from 'rxjs';
import { Pokemon, PokemonDetails } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss'],
})
export class PokemonFormComponent implements OnInit {
  @Input() edit: boolean = false;
  private routeSub: Subscription | undefined;
  public pokemon: PokemonDetails | undefined;
  pokemonTypes = [
    'Normal',
    'Fire',
    'Water',
    'Grass',
    'Electric',
    'Ice',
    'Fighting',
    'Poison',
    'Ground',
    'Flying',
    'Psychic',
    'Bug',
    'Rock',
    'Ghost',
    'Dark',
    'Dragon',
    'Steel',
    'Fairy',
  ];
  sameType: boolean = false;
  pokemonForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    weight: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    height: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    type: new FormControl('', [Validators.required]),
    type1: new FormControl('', [Validators.required]),
    base_experience: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // if (this.edit) {
    //   this.routeSub = this.route.params.subscribe((params) => {
    //     this.pokemon = this.pokemonService.pokemons.find(
    //       (el) => el.id === params['id']
    //     );
    //     if (this.pokemon != undefined) {
    //       const { name, weight, height, types, base_experience } = this.pokemon;
    //       this.pokemonForm.patchValue({
    //         name,
    //         weight,
    //         height,
    //         type: types[0].name,
    //         type1: types[1].name ? types[1].name : '',
    //         base_experience,
    //       });
    //     }
    //   });
    // }
  }
  async onSubmit() {
    if (this.pokemonForm.valid && this.validateSelect()) {
      const { name, weight, height, base_experience, type, type1 } =
        this.pokemonForm.value;
      const pokemon = {
        name,
        weight,
        height,
        base_experience,
        types: [
          { slot: '1', type: { name: type } },
          { slot: '2', type: { name: type1 } },
        ],
      };
      if (type1 && type1 !== 'none') {
        pokemon.types.push({ slot: '2', type: { name: type1 } });
      }
      const res = await this.pokemonService.addPokemon(pokemon);
      if (res?.ok) {
        this.router.navigateByUrl('pokemones');
      }
    }
  }
  validateSelect(): boolean {
    if (this.pokemonForm.value.type === this.pokemonForm.value.type1) {
      this.sameType = true;
    } else {
      this.sameType = false;
    }
    return !this.sameType;
  }
}
