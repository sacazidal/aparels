import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROUTE } from '../../constants';
import { Earrings } from '../../../models';

@Injectable({
  providedIn: 'root',
})
export class EarringsApi {
  private _http = inject(HttpClient);

  searchPositions(text: string): Observable<Earrings[]> {
    const params = new HttpParams().set('query', text);
    return this._http.get<Earrings[]>(API_ROUTE.EARRINGS, { params });
  }
}
