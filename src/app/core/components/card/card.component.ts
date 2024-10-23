import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() label = 'Add to cart';
  @Input({ required: true }) product!: Product;
  @Output() add = new EventEmitter<void>();
}
