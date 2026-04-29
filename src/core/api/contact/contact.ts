import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_ROUTE } from '../../constants';
import { Contact } from '../../../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactApi {
  private _http = inject(HttpClient);

  contactUs(payload: Contact): Observable<{ success: boolean }> {
    return this._http.post<{ success: boolean }>(API_ROUTE.CONTACT_US, payload);
  }
}
