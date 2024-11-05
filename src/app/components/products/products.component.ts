import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

import { TimeAgoPipe } from '@pipes/time-ago.pipe';
import { StoreService } from '@services/store.service';
import { ProductService } from '@services/product.service';
import { TruncateTextPipe } from '@pipes/truncate-text.pipe';
import { CreateProductDto, Product } from '@models/product.model';
import { ProductComponent } from '@components/product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, CommonModule, TimeAgoPipe, TruncateTextPipe ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProductsComponent implements OnInit {
  total = 0
  limit = 10
  offset = 0
  statusRequestDetail: 'loading' | 'success' | 'error' | 'init' = 'init'
  products = signal<Product[]>([])
  showProductDetail = false
  productChosen!: Product;

  today = new Date()
  date = new Date(2021, 1, 21)

  private storeService = inject(StoreService)
  private productService = inject(ProductService)

  ngOnInit() {
    this.productService.getProductsByPage(this.limit, this.offset)
      .subscribe(data => {
        this.products.set(data)
      })
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal()
  }

  toogleProductDetail() {
    this.showProductDetail = !this.showProductDetail
  }

  onShowDetail(productId: number) {
    this.statusRequestDetail = 'loading'

    this.productService.getProduct(productId)
      .subscribe(data => {
        this.productChosen = data
        this.toogleProductDetail()
        this.statusRequestDetail = 'success'
      }, error => {
        console.error(error)
        this.statusRequestDetail = 'error'
      })
  }

  createNewProduct() {
    const newProduct: CreateProductDto = {
      title: 'Boston Red Sox shirt',
      price: 100,
      images: [
        'https://i5.walmartimages.com/dfw/4ff9c6c9-4d5f/k2-_3745d95b-6bab-43b7-94d2-2273423ec4f5.v1.jpg',
        'https://i.etsystatic.com/14570320/r/il/6a1bde/5664625083/il_570xN.5664625083_hm1f.jpg',
        'https://images.footballfanatics.com/boston-red-sox/boston-red-sox-foundations-fashion-top-mens_ss4_p-13334779+u-1bpn270vo2e4r3aognxc+v-c1f164f002004af0a97d71ac69212cde.jpg?_hv=2&w=340'
      ],
      description: 'Boston Red Sox  shirt season 2024',
      categoryId: 2
    }

    this.productService.create(newProduct)
      .subscribe(data => {
        data.images = this.formatImages(data.images)
        this.products.update( (currentValues) => [data, ...currentValues] )
      })
  }

  updateProduct() {
    const id = this.productChosen.id;
    const changes = {
      title: 'Boston Red Sox Shirts season 2025'
    }

    this.productService.update(id, changes)
      .subscribe(data => {
        const productIndex = this.products().findIndex(item => item.id === id)
        this.products()[productIndex] = data
      })
  }

  deleteProduct() {
    const productId = this.productChosen.id
    this.productService.delete(productId)
      .subscribe(() => {
        const productIndex = this.products().findIndex(item => item.id === productId)
        this.products().slice(productIndex, 1)
        this.showProductDetail = false
      })
  }

  loadMore() {
    this.offset += this.limit
    this.productService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
      this.products.update((currentValues) => [...currentValues, ...data])
    })
  }

  readAndUpdate(id: number) {
    this.productService.getProduct(id)
    .pipe(
      switchMap( (product) => this.productService.update(product.id, { title: 'change'})),
      switchMap( (product) => this.productService.update(product.id, { title: 'change2'})),
      switchMap( (product) => this.productService.update(product.id, { title: 'change3'})),
    )
    .subscribe(data => {
      console.log(data)
    })

    this.productService.fetchReadAndUpdate(id, { title: 'Title updated' })
    .subscribe(response => {
      const read = response[0]
      const update = response[1]

      console.log({ read, update })
    })
  }

  private formatImages(images: string[]): string[] {
    if(images.length === 0)
      return []

    const completeImages = images.reduce( (prev, current) => prev += current, '').replaceAll('""', '","')
    return JSON.parse(completeImages)
  }
}
