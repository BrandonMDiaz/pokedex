import { Router } from '@angular/router';

export const routerMock = jasmine.createSpyObj<Router>('Router', {
  navigate: undefined,
  navigateByUrl: undefined,
});
