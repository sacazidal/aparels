import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscribeNews } from '../../../models';
import { API_ROUTE } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class NewsApi {
  private _http = inject(HttpClient);

  subscribeNews(payload: SubscribeNews): Observable<{ success: boolean }> {
    return this._http.post<{ success: boolean }>(API_ROUTE.SUBSCRIBE, payload);
  }
}
