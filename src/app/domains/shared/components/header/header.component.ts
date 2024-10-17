import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLinkWithHref, RouterModule } from '@angular/router';

import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // @Input({ required: true }) cart: Product[] = []
  // total = signal(0)

  private cartService = inject(CartService)
  cart = this.cartService.cart;
  total = this.cartService.total;

  // ngOnChanges(changes: SimpleChanges) {
  //   const cart = changes['cart']

  //   if(cart) {
  //     this.total.set(this.getTotal())
  //   }
  // }

  showHideSideMenu = signal<boolean>(true)
  toogleShowSideMenu() {
    this.showHideSideMenu.update(prevState => !prevState)
  }

  // getTotal() {
  //   return this.cart.reduce((total, product) => total + product.price, 0)
  // }
}
