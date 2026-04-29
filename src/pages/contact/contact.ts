import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { InputComponent, FormComponent } from '../../components';
import { BuilderType, Contact } from '../../models';
import { FormFactoryService } from '../../core/services';
import { ContactApi } from '../../core/api/contact/contact';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [FormComponent, InputComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.less',
})
export class ContactPage implements OnInit {
  contactUsForm!: BuilderType<Contact>;

  isLoading = signal(false);

  private _formFactoryService = inject(FormFactoryService);
  private _contactApi = inject(ContactApi);
  private _destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.contactUsForm = this._formFactoryService.contactUs();
  }

  onSubmit(payload: Contact): void {
    this.isLoading.set(true);

    this._contactApi
      .contactUs(payload)
      .pipe(
        finalize(() => this.isLoading.set(false)),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe();
  }
}
