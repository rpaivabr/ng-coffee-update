import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CartItem } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  totalCartItems$ = this.cartItems$.pipe(map(items => items.reduce((sum, item) => sum + item.amount, 0)))

  addItem(product: Product): void {
    const items = this.cartItemsSubject.value;
    const itemIndex = items.findIndex(item => item.product.name === product.name);
    if (itemIndex < 0) {
      items.push({ product, amount: 1 });
    } else {
      items[itemIndex].amount += 1;
    }

    this.cartItemsSubject.next([...items]);
    console.log(this.cartItemsSubject.value)
  }

  removeItem(product: Product): void {
    const items = this.cartItemsSubject.value;
    const itemIndex = items.findIndex(item => item.product.name === product.name);
    if (items[itemIndex].amount > 1) {
      items[itemIndex].amount -= 1;
    } else {
      items.splice(itemIndex, 1);
    }

    this.cartItemsSubject.next([...items]);
  }
}
