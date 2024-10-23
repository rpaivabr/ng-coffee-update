import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    HeaderComponent,
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
    CommonModule,
    ButtonComponent,
    CardComponent,
    HeaderComponent
  ],
  providers: [
    
  ]
})
export class SharedModule { }