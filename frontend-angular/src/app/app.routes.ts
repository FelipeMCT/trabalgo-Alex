import { Routes } from '@angular/router';
import { PratoListComponent } from './components/prato-list/prato-list';
import { PratoFormComponent } from './components/prato-form/prato-form';

export const routes: Routes = [
  { path: '', redirectTo: '/pratos', pathMatch: 'full' },
  { path: 'pratos', component: PratoListComponent },
  { path: 'pratos/novo', component: PratoFormComponent },
  { path: 'pratos/editar/:id', component: PratoFormComponent }
];
