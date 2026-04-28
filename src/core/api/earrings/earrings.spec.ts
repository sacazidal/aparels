import { TestBed } from '@angular/core/testing';
import { EarringsApi } from './earrings';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { API_ROUTE } from '../../constants';

describe('EarringsApi', () => {
  let service: EarringsApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
    });
    service = TestBed.inject(EarringsApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('searchPositions', () => {
    it('should return array earrings by input', () => {
      const param = 'test';

      service.searchPositions(param).subscribe((res) => {
        expect(res).toEqual({ id: 'wfjq123-12312asd' });
      });

      const req = httpMock.expectOne(
        (request) => request.url === API_ROUTE.EARRINGS,
      );

      expect(req.request.method).toBe('GET');
      expect(req.request.params.get('query')).toBe(param);

      req.flush({ id: 'wfjq123-12312asd' });
    });
  });
});
