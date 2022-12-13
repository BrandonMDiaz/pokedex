import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import {
  pokemonServiceMock,
  pokemonServiceMock2,
} from 'src/app/shared/testMocks/pokemonServiceMock';
import { routerMock } from 'src/app/shared/testMocks/routerMock';

import { AddPokemonComponent } from './add-pokemon.component';

describe('AddPokemonComponent', () => {
  let component: AddPokemonComponent;
  let fixture: ComponentFixture<AddPokemonComponent>;
  let fakePokemonService = pokemonServiceMock2;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPokemonComponent],
      providers: [
        {
          provide: PokemonService,
          useValue: fakePokemonService,
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj('router', routerMock),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return types of form are differents', () => {
    component.pokemonForm.patchValue({ type: 'Fire' });
    const res = component.validateSelect();
    expect(res).toBeTruthy();
  });

  it('should return types of form are the same', () => {
    component.pokemonForm.patchValue({ type: 'Fire', type1: 'Fire' });
    const res = component.validateSelect();
    expect(res).toBe(false);
  });

  it('should return types of form are the same', () => {
    component.pokemonForm.patchValue({
      name: 'test',
      weight: 110,
      height: 100,
      base_experience: 100,
      type: 'Fire',
      type1: 'Water',
    });
    component.onSubmit();
    expect(fakePokemonService.addPokemon).toHaveBeenCalled();
  });
});
