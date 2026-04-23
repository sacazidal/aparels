import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setItem<T>(key: string, item: T): void {
    try {
      const value = typeof item === 'string' ? item : JSON.stringify(item);
      localStorage.setItem(key, value);
    } catch (error) {
      console.error(`Не удалось сохранить ${key} в localStorage: ${error}`);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(key);
      if (!value) return null;

      try {
        return JSON.parse(value);
      } catch {
        return value as T;
      }
    } catch (error) {
      console.error(`Не удалось достать данные по ключу ${key}: ${error}`);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Не удалось удалить данные по ключу ${key}: ${error}`);
    }
  }
}
