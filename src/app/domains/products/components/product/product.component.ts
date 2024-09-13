import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) imageURL: string = ''
  @Input() price: number = 0
  @Input({required: true}) title: string = ''

  @Output() addToCart = new EventEmitter()

  addToCartHandler() {
    console.log('Click form chield')
    this.addToCart.emit(`Hello!, it's a message from the child: ${this.title} `)
  }
}
