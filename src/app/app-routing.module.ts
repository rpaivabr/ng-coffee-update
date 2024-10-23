import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductsComponent } from './core/pages/products/products.component';
// import { CartComponent } from './core/pages/cart/cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }