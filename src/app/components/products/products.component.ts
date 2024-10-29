import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { Product } from '@models/product.model';
import { TimeAgoPipe } from '@pipes/time-ago.pipe';
import { StoreService } from '@services/store.service';
import { ProductService } from '@services/product.service';
import { ProductComponent } from '@components/product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, CommonModule, TimeAgoPipe ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  total = 0
  products: Product[] = []
  today = new Date()
  date = new Date(2021, 1, 21)

  private storeService = inject(StoreService)
  private productService = inject(ProductService)

  ngOnInit() {
    this.productService.getAllProducts()
      .subscribe(data => {
        this.products = data
      })
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal()
  }
}
