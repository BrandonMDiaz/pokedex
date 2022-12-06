import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss'],
})
export class AddPokemonComponent implements OnInit {
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
  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {}
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
