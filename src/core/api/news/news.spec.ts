import { TestBed } from '@angular/core/testing';
import { NewsApi } from './news';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { SubscribeNews } from '../../../models';
import { API_ROUTE } from '../../constants';

describe('NewsApi', () => {
  let service: NewsApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
    });
    service = TestBed.inject(NewsApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('subscribeNews', () => {
    it('should return success true', () => {
      const mockPayload: SubscribeNews = {
        email: 'test@test.ru',
      };

      service.subscribeNews(mockPayload).subscribe((res) => {
        expect(res).toEqual(mockPayload);
      });

      const req = httpMock.expectOne(API_ROUTE.SUBSCRIBE);

      expect(req.request.method).toBe('POST');
      expect(req.request.url).toBe(API_ROUTE.SUBSCRIBE);
      expect(req.request.body).toEqual(mockPayload);

      req.flush(mockPayload);
    });
  });
});
