import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartItem } from '../../core/models/cart';
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
export default class CartComponent implements OnInit {
  cartItems$!: Observable<CartItem[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$;
  }

  removeItem(product: Product): void {
    this.cartService.removeItem(product);
  }
}
