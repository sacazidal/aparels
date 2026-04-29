import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BuilderType, Contact, SubscribeNews } from '../../../models';

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

  contactUs(): BuilderType<Contact> {
    return this._fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      message: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
}
