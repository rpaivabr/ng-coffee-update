import { Component, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';

import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router);
  private cartService = inject(CartService);
  totalCartItems = this.cartService.totalCartitems;

  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }
}
