import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

type ButtonStyle = 'primary' | 'secondary';
type ButtonType = 'submit' | 'button';

@Component({
  selector: 'app-button',
  imports: [UpperCasePipe],
  templateUrl: './button.html',
  styleUrl: './button.less',
})
export class ButtonComponent {
  @Input() styleName: ButtonStyle = 'primary';
  @Input() type: ButtonType = 'submit';
  @Input() isLoading = false;
  @Input() text!: string;
  @Input() textLoading: string = 'loading...';
}
