import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopupSubscribeComponent } from '../../components/popup-subscribe/popup-subscribe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PopupSubscribeComponent],
  templateUrl: './app.html',
  styleUrl: './app.less',
})
export class App {}
