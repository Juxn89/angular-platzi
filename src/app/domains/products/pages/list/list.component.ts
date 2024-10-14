import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../../products/components/product/product.component'
import { Product } from '../../../shared/components/counter/models/products.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([])
  cart = signal<Product[]>([])

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product #1',
        price: 10,
        image: 'https://picsum.photos/640/640?r=10',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product #2',
        price: 25,
        image: 'https://picsum.photos/640/640?r=20',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product #3',
        price: 10,
        image: 'https://picsum.photos/640/640?r=30',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product #4',
        price: 25,
        image: 'https://picsum.photos/640/640?r=40',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product #5',
        price: 10,
        image: 'https://picsum.photos/640/640?r=50',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product #6',
        price: 25,
        image: 'https://picsum.photos/640/640?r=60',
        creationAt: new Date().toISOString()
      },
    ]

    this.products.set(initProducts)
  }

  fromChild(product: Product) {
    // console.log('Were are in the parent')
    // console.log(event)

    this.cart.update(prevState => [...prevState, product])
  }
}
