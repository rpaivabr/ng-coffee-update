import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { map, Observable } from 'rxjs';
import { CartItem } from '../../models/cart';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<CartItem[]>;
  // products$ = this.cartItems$.pipe(map(items => items.map(item => item.product)));

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$;
  }

  removeItem(product: Product): void {
    this.cartService.removeItem(product);
  }
}
