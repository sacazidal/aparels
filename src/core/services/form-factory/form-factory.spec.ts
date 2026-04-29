import { TestBed } from '@angular/core/testing';
import { FormFactoryService } from './form-factory';

describe('FormFactoryService', () => {
  let service: FormFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('subscribeNews', () => {
    it('should mark form as invalid when empty', () => {
      const form = service.subscribeNews();

      form.patchValue({
        email: 'test',
      });

      expect(form.valid).toBeFalsy();
    });

    it('should mark form as valid when all fileds are filled', () => {
      const form = service.subscribeNews();
      form.patchValue({
        email: 'test@test.ru',
      });

      expect(form.valid).toBeTruthy();
    });
  });

  describe('contactUs', () => {
    it('should mark form as invalid when empty or filled with incorrect data', () => {
      const form = service.contactUs();
      expect(form.valid).toBeFalsy();

      form.patchValue({
        email: 'test',
        name: 'Test',
        phone: '89999999999',
        message: 'test-text',
      });

      expect(form.valid).toBeFalsy();
    });

    it('should mark form as valid when all fileds are filled', () => {
      const form = service.contactUs();
      expect(form.valid).toBeFalsy();

      form.patchValue({
        email: 'test@test.ru',
        name: 'Test',
        phone: '89999999999',
        message: 'test-text',
      });

      expect(form.valid).toBeTruthy();
    });
  });
});
