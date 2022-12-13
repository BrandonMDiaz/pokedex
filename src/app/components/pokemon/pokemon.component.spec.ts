import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import {
  authServiceMock,
  authServiceMock2,
} from 'src/app/shared/testMocks/authServiceMock';
import {
  pokemonServiceMock,
  pokemonServiceMock2,
} from 'src/app/shared/testMocks/pokemonServiceMock';
import { DialogComponent } from '../dialog/dialog.component';
import { BehaviorSubject, of } from 'rxjs';

import { PokemonComponent } from './pokemon.component';

const pokemonesMock = [
  { id: 1, name: 'Squirtle' },
  { id: 2, name: 'Charmander' },
];
describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let authServiceFake = authServiceMock2;
  let pokemonServiceFake = pokemonServiceMock2;
  let dialogFake = jasmine.createSpyObj<MatDialog>('dialog', {
    open: undefined,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonComponent, DialogComponent],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceFake,
        },
        {
          provide: PokemonService,
          useValue: pokemonServiceFake,
        },
        {
          provide: MatDialog,
          useValue: dialogFake,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.pokemones = pokemonesMock;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('display correct pokemon', () => {
    component.displayInfo(1);

    expect(component.pokemonSelected).toBe(1);
  });

  it('should delete pokemon', () => {
    component.deletePokemon(1);

    expect(component.pokemones.length).toBe(1);
  });
});
