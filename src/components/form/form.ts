import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, ButtonComponent, UpperCasePipe],
  templateUrl: './form.html',
  styleUrl: './form.less',
})
export class FormComponent {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() isLoading = false;

  @Output() submit = new EventEmitter();

  onSubmit(e: Event): void {
    e.stopPropagation();

    if (this.form.valid) {
      this.submit.emit(this.form.getRawValue());
    } else {
      this.form.markAllAsTouched();
    }
  }
}
