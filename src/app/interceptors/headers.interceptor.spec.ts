import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from '../services/localStorage/local-storage.service';
import { localStorageMock } from '../shared/testMocks/localStorageMock';
import { Observable } from 'rxjs';

import { HeadersInterceptor } from './headers.interceptor';

describe('HeadersInterceptor', () => {
  const requestMock = new HttpRequest('GET', '/test');
  const next: HttpHandler = {
    handle: (request: HttpRequest<unknown>) => {
      return new Observable((subscriber) => {
        subscriber.complete();
      });
    },
  };
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        HeadersInterceptor,
        {
          provide: LocalStorageService,
          useValue: jasmine.createSpyObj('localStorage', localStorageMock),
        },
      ],
    })
  );

  it('should be created', () => {
    const interceptor: HeadersInterceptor = TestBed.inject(HeadersInterceptor);
    expect(interceptor).toBeTruthy();
  });
  // it('should add x-token', () => {
  //   const interceptor: HeadersInterceptor = TestBed.inject(HeadersInterceptor);
  //   interceptor.intercept(requestMock, next as any).subscribe((res) => {});
  // });
});
