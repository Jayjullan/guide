import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Signal } from './signal/signal';
import { Forms } from './forms/forms';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signal', component: Signal },
  { path: 'forms', component: Forms },
];
