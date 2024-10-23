import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../core/models/product';
import { CardComponent } from '../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export default class CartComponent {
  private cartService = inject(CartService);

  cartItems = this.cartService.cartItems;

  removeItem(product: Product): void {
    this.cartService.removeItem(product);
  }
}
