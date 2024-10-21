import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';

import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Product } from '@shared/components/counter/models/products.model';
import { Category } from '@shared/components/counter/models/category.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { ProductComponent } from '@product/components/product/product.component'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([])
  categories = signal<Category[]>([])

  private cartService = inject(CartService)
  private productService = inject(ProductService)
  private categoryService = inject(CategoryService)

  @Input() category_id?: string;

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
    this.getCategories()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProducts()
  }

  fromChild(product: Product) {
    // console.log('Were are in the parent')
    // console.log(event)

    this.cartService.addToCart(product)
  }

  private getProducts() {
    this.productService.getProducts(this.category_id)
      .subscribe({
        next: (products) => {
          this.products.set(products)
        },
        error: () => { }
      })
  }

  private getCategories() {
    this.categoryService.getAll()
    .subscribe({
      next: (category) => {
        this.categories.set(category)
      },
      error: () => { }
    })
  }
}
