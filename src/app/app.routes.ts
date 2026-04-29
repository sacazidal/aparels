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
  {
    path: UI_ROUTES.CONTACT,
    loadComponent: () => import('../pages').then((m) => m.ContactPage),
  },
  {
    path: UI_ROUTES.NOT_FOUND,
    loadComponent: () => import('../pages').then((m) => m.NotFoundPage),
  },
];
