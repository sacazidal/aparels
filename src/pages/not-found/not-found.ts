import { UI_ROUTES } from './../../core/constants/ui-routes';
import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, UpperCasePipe, ButtonComponent],
  templateUrl: './not-found.html',
  styleUrl: './not-found.less',
})
export class NotFoundPage {
  UI_ROUTES = UI_ROUTES;
}
