import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private httpClient = inject(HttpClient);

  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:3000/products').pipe(
      delay(3000),
      // map(() => ([]))
    );
  }
}
