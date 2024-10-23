import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:3000/products').pipe(
      // delay(3000),
      // map(() => ([]))
    );
  }
}
