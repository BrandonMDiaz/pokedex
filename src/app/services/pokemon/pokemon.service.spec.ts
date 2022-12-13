import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { errorServiceMock } from 'src/app/shared/testMocks/errorServiceMock';
import { httpClientMock } from 'src/app/shared/testMocks/httpClientMock';
import { localStorageMock } from 'src/app/shared/testMocks/localStorageMock';
import { ErrorService } from '../error/error.service';
import { LocalStorageService } from '../localStorage/local-storage.service';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('http', httpClientMock),
        },
        {
          provide: LocalStorageService,
          useValue: jasmine.createSpyObj(
            'localStorageService',
            localStorageMock
          ),
        },
        {
          provide: ErrorService,
          useValue: jasmine.createSpyObj('errorService', errorServiceMock),
        },
      ],
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
