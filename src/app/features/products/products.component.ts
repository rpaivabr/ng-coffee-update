import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../core/models/product';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly cartService = inject(CartService);

  products!: Product[];

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    })
  }

  addItem(product: Product): void {
    this.cartService.addItem(product);
  }
}
