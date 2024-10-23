import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CartItem } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  // totalCartItems$ = this.cartItems$.pipe(map(items => items.reduce((sum, item) => sum + item.amount, 0)))
  private readonly cartItemsSignal = signal<CartItem[]>([]);
  cartItems = this.cartItemsSignal.asReadonly();
  totalCartitems = computed(() => this.cartItems().reduce((sum, item) => sum + item.amount, 0))

  addItem(product: Product): void {
    const items = this.cartItemsSignal();
    const itemIndex = items.findIndex(item => item.product.name === product.name);
    if (itemIndex < 0) {
      items.push({ product, amount: 1 });
    } else {
      items[itemIndex].amount += 1;
    }

    this.cartItemsSignal.set([...items]);
  }

  removeItem(product: Product): void {
    const items = this.cartItemsSignal();
    const itemIndex = items.findIndex(item => item.product.name === product.name);
    if (items[itemIndex].amount > 1) {
      items[itemIndex].amount -= 1;
    } else {
      items.splice(itemIndex, 1);
    }

    this.cartItemsSignal.set([...items]);
  }
}
