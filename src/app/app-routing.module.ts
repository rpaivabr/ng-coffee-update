import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductsComponent } from './core/pages/products/products.component';
// import { CartComponent } from './core/pages/cart/cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: 'products', loadComponent: () => import('./features/products/products.component') },
  { path: 'cart', loadComponent: () => import('./features/cart/cart.component') },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }