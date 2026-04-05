import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./pages/transactions/transactions').then(m => m.Transactions)
  }
];