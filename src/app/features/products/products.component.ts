import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    })
  }

  addItem(product: Product): void {
    this.cartService.addItem(product);
  }
}
