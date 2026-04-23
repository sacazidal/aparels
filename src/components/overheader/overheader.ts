import { Component, inject, OnInit, signal } from '@angular/core';
import { StorageService } from '../../core/services';
import { STORAGE_KEY } from '../../core/constants';
import dayjs from 'dayjs';

@Component({
  selector: 'app-overheader',
  imports: [],
  templateUrl: './overheader.html',
  styleUrl: './overheader.less',
})
export class OverheaderComponent implements OnInit {
  private _storageService = inject(StorageService);

  readonly storageKey: string = STORAGE_KEY.OVERHEADER;

  isVisible = signal<boolean>(true);

  ngOnInit(): void {
    this.checkVisibillity();
  }

  checkVisibillity(): void {
    const storedDateStr = this._storageService.getItem<string>(this.storageKey);
    if (!storedDateStr) return;

    const today = dayjs().toDate();
    const dismissedUntil = dayjs(storedDateStr);

    if (dismissedUntil.isAfter(today)) {
      this.isVisible.set(false);
    }
  }

  dismiss(): void {
    this.isVisible.set(false);

    const nextShowDate = dayjs().add(1, 'day').toISOString();
    this._storageService.setItem<string>(this.storageKey, nextShowDate);
  }
}
