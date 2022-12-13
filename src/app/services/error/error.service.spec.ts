import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { localStorageMock } from 'src/app/shared/testMocks/localStorageMock';
import { routerMock } from 'src/app/shared/testMocks/routerMock';
import { LocalStorageService } from '../localStorage/local-storage.service';

import { ErrorService } from './error.service';

describe('ErrorService', () => {
  let service: ErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LocalStorageService,
          useValue: jasmine.createSpyObj(
            'localStorageService',
            localStorageMock
          ),
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj('router', routerMock),
        },
      ],
    });
    service = TestBed.inject(ErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
