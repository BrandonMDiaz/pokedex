import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

export const localStorageMock = jasmine.createSpyObj<LocalStorageService>(
  'localStorageService',
  {
    getToken: undefined,
    delete: undefined,
    get: 'null',
    add: undefined,
  }
);
