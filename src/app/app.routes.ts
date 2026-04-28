import { Routes } from '@angular/router';
import { UI_ROUTES } from '../core/constants';

export const routes: Routes = [
  {
    path: UI_ROUTES.DEFAULT,
    redirectTo: UI_ROUTES.HOME,
    pathMatch: 'full',
  },
  {
    path: UI_ROUTES.HOME,
    loadComponent: () => import('../pages').then((m) => m.HomePage),
  },
];
