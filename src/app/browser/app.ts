import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopupSubscribeComponent, OverheaderComponent } from '../../components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PopupSubscribeComponent, OverheaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.less',
})
export class App {}
