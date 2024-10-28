import { Component } from '@angular/core';
import { ProductComponent } from '@components/product/product.component';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Product #1',
      image: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw12a66582/images/funko/upload/80686_Batman85th_Belltower_BattleBatman_POP_Front-HiRes.png?sw=800&sh=800',
      price: 100
    },
    {
      id: 1,
      name: 'Funko POP Movies: Watchmen Dr. Manhattan Figura de acción',
      image: 'https://m.media-amazon.com/images/I/61mxAkcQdoL.jpg',
      price: 35
    },
    {
      id: 1,
      name: 'Funko Pop! TV: La Oficina - Dwight Schrute',
      image: 'https://m.media-amazon.com/images/I/714L-AZpgiL._AC_UL320_.jpg',
      price: 100
    },
    {
      id: 1,
      name: 'Batman Funko POP: Película Dark Knight The Joker',
      image: 'https://m.media-amazon.com/images/I/51ccWyK1L2L._AC_SX569_.jpg',
      price: 100
    },
  ]
}
