import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

import { ProductComponent } from '@product/components/product/product.component'

import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { HeaderComponent } from '@shared/components/header/header.component';
import { Product } from '@shared/components/counter/models/products.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([])

  private cartService = inject(CartService)
  private productService = inject(ProductService)

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product #1',
        price: 10,
        image: ['https://picsum.photos/640/640?r=10'],
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product #2',
        price: 25,
        image: ['https://picsum.photos/640/640?r=20'],
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product #3',
        price: 10,
        image: ['https://picsum.photos/640/640?r=30'],
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product #4',
        price: 25,
        image: ['https://picsum.photos/640/640?r=40'],
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product #5',
        price: 10,
        image: ['https://picsum.photos/640/640?r=50'],
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product #6',
        price: 25,
        image: ['https://picsum.photos/640/640?r=60'],
        creationAt: new Date().toISOString()
      },
    ]

    this.products.set(initProducts)
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe({
        next: (products) => {
          this.products.set(products)
        },
        error: () => { }
      })
  }

  fromChild(product: Product) {
    // console.log('Were are in the parent')
    // console.log(event)

    this.cartService.addToCart(product)
  }
}
