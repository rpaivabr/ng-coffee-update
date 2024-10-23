import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  totalCartItems$!: Observable<number>;

  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.totalCartItems$ = this.cartService.totalCartItems$;
  }

  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }
}
