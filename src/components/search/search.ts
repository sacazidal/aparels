import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { EarringsApi } from '../../core/api';
import { Earrings } from '../../models';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule, RouterLink, TitleCasePipe],
  templateUrl: './search.html',
  styleUrl: './search.less',
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl<string>('');
  isLoading = signal(false);
  results = signal<Earrings[]>([]);

  private _earringsApi = inject(EarringsApi);
  private _destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this._search();
  }

  private _search() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter(
          (value): value is string => value !== null && value.trim().length > 0,
        ),
        tap(() => {
          this.isLoading.set(true);
        }),
        switchMap((query) =>
          this._earringsApi.searchPositions(query).pipe(
            catchError(() => {
              this.isLoading.set(false);
              return of([]);
            }),
            finalize(() => this.isLoading.set(false)),
          ),
        ),
        tap((res: Earrings[]) => this.results.set(res)),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe();
  }
}
