import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    HeaderComponent
  ],
  providers: [
    provideHttpClient(),
  ]
})
export class CoreModule { }