import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '@shared/components/counter/models/products.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product

  @Output() addToCart = new EventEmitter()

  addToCartHandler() {
    console.log('Click form chield')
    // this.addToCart.emit(`Hello!, it's a message from the child: ${this.product.title} `)
    this.addToCart.emit(this.product)
  }
}
