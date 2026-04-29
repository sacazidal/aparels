import { TestBed } from '@angular/core/testing';
import { ContactApi } from './contact';
import { Contact } from '../../../models';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { API_ROUTE } from '../../constants';

describe('ContactApi', () => {
  let service: ContactApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
    });
    service = TestBed.inject(ContactApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('contactUs', () => {
    it('should return success true', () => {
      const mockPayload: Contact = {
        name: 'Test',
        email: 'test@test.ru',
        phone: '79999999999',
        message: 'test text',
      };

      service.contactUs(mockPayload).subscribe((res) => {
        expect(res).toEqual(mockPayload);
      });

      const req = httpMock.expectOne(API_ROUTE.CONTACT_US);

      expect(req.request.method).toBe('POST');
      expect(req.request.url).toBe(API_ROUTE.CONTACT_US);
      expect(req.request.body).toEqual(mockPayload);

      req.flush(mockPayload);
    });
  });
});
