import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  PopupSubscribeComponent,
  OverheaderComponent,
  HeaderComponent,
  FooterComponent,
} from '../../components';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PopupSubscribeComponent,
    OverheaderComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.less',
})
export class App {}
