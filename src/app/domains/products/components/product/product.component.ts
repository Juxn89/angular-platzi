import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { Product } from '@shared/components/counter/models/products.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product
  cover = signal<string>('')

  @Output() addToCart = new EventEmitter()

  ngOnInit() {
    if(this.product.images !== undefined && this.product.images?.length > 0) {
      this.cover.set(this.product.images[0])
    }
  }

  addToCartHandler() {
    console.log('Click form chield')
    // this.addToCart.emit(`Hello!, it's a message from the child: ${this.product.title} `)
    this.addToCart.emit(this.product)
  }
}
