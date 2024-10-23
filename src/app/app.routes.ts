import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: 'products', loadComponent: () => import('./features/products/products.component') },
  { path: 'cart', loadComponent: () => import('./features/cart/cart.component') },
];