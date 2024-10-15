import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../counter/models/products.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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
