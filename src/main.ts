import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/browser/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
