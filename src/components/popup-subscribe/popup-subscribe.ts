import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { FormFactoryService, StorageService } from '../../core/services';
import { tap, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { STORAGE_KEY } from '../../core/constants';
import { ButtonComponent } from '../button/button';
import { ReactiveFormsModule } from '@angular/forms';
import { BuilderType, SubscribeNews } from '../../models';
import { NewsApi } from '../../core/api';
import { InputComponent } from '../input/input';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-popup-subscribe',
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
    UpperCasePipe,
  ],
  templateUrl: './popup-subscribe.html',
  styleUrl: './popup-subscribe.less',
})
export class PopupSubscribeComponent implements OnInit {
  form!: BuilderType<SubscribeNews>;
  isVisible = signal<boolean>(false);
  isLoading = signal<boolean>(false);

  private _storageService = inject(StorageService);
  private _formFactoryService = inject(FormFactoryService);
  private _newsApi = inject(NewsApi);
  private _destroyRef = inject(DestroyRef);

  readonly storageKey: string = STORAGE_KEY.POPUP_SUBSCRIBE;
  readonly storageValue: string = 'closed';
  readonly delayMs: number = 10_000;

  ngOnInit(): void {
    this.form = this._formFactoryService.subscribeNews();
    this.initVisibility();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const payload = this.form.getRawValue();

      this._newsApi
        .subscribeNews(payload)
        .pipe(
          takeUntilDestroyed(this._destroyRef),
          tap(() => this.isVisible.set(false)),
        )
        .subscribe();
    } else {
      this.form.markAllAsTouched();
    }
  }

  dismiss(): void {
    this.isVisible.set(false);
    this._storageService.setItem<string>(this.storageKey, this.storageValue);

    document.body.style.overflow = '';
  }

  initVisibility(): void {
    const storedPopup = this._storageService.getItem<string>(this.storageKey);
    if (storedPopup) return;

    timer(this.delayMs)
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        tap(() => {
          this.isVisible.set(true);
          document.body.style.overflow = 'hidden';
        }),
      )
      .subscribe();
  }
}
