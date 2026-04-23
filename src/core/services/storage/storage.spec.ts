import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage';

describe('StorageService', () => {
  let service: StorageService;

  const mockUser = {
    id: 'abc123',
    name: 'avs',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setItem', () => {
    it('should save string to localStorage', () => {
      service.setItem<string>('name', mockUser.name);
      expect(localStorage.getItem('name')).toBe(mockUser.name);
    });

    it('should save object as JSON string', () => {
      service.setItem<object>('user', mockUser);

      const stored = localStorage.getItem('user');
      expect(JSON.parse(stored!)).toEqual(mockUser);
    });
  });

  describe('getItem', () => {
    it('should return null when key does not exist', () => {
      const result = service.getItem('key');
      expect(result).toBeNull();
    });

    it('should return string', () => {
      localStorage.setItem('key', 'key');
      const result = service.getItem<string>('key');

      expect(result).toBe('key');
    });

    it('should return parsed JSON object', () => {
      localStorage.setItem('user', JSON.stringify(mockUser));

      const result = service.getItem<object>('user');
      expect(result).toEqual(mockUser);
    });
  });

  describe('removeItem', () => {
    it('should delete the data if there is any', () => {
      expect(localStorage.getItem('abc')).toBeNull();

      localStorage.setItem('abc', '123');
      const result = localStorage.getItem('abc');
      expect(result).toBe('123');

      service.removeItem('abc');
      expect(localStorage.getItem('abc')).toBeNull();
    });
  });
});
