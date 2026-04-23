import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.html',
  styleUrl: './input.less',
})
export class InputComponent {
  @Input() control!: FormControl;
  @Input() type: 'email' | 'text' = 'text';
  @Input() placeholder: string = '';
}
