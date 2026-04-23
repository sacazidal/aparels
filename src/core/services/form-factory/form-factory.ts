import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BuilderType, SubscribeNews } from '../../../models';

@Injectable({
  providedIn: 'root',
})
export class FormFactoryService {
  private _fb = inject(FormBuilder);

  subscribeNews(): BuilderType<SubscribeNews> {
    return this._fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
