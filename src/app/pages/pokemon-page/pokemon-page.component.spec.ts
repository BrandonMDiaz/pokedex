import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { authServiceMock2 } from 'src/app/shared/testMocks/authServiceMock';
import { routerMock } from 'src/app/shared/testMocks/routerMock';

import { PokemonPageComponent } from './pokemon-page.component';

describe('PokemonPageComponent', () => {
  let component: PokemonPageComponent;
  let fixture: ComponentFixture<PokemonPageComponent>;
  let authServiceFake = authServiceMock2;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonPageComponent],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceFake,
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj('router', routerMock),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
