import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../core/models/product';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() label = 'Add to cart';
  @Input({ required: true }) product!: Product;
  @Output() add = new EventEmitter<void>();
}
