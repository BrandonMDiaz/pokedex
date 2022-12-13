export class HttpClientMock {}
export const httpClientMock = jasmine.createSpyObj('http', [
  'post',
  'get',
  'delete',
  'put',
]);
