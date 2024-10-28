import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComponent } from "./components/image/image.component";
import { ProductComponent } from "./components/product/product.component";
import { Product } from '@models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-store';
  imgParent = signal<string>('https://www.w3schools.com/howto/img_avatar.png')
  products: Product[] = [
    {
      id: 1,
      name: 'Product #1',
      image: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw12a66582/images/funko/upload/80686_Batman85th_Belltower_BattleBatman_POP_Front-HiRes.png?sw=800&sh=800',
      price: 100
    }
  ]

  onChangeValue(event: Event) {
    const input = event.target as HTMLInputElement
    const newValue = input.value
    this.imgParent.set(newValue)
  }

  onLoaded(img: string) {
    console.log('Log from father', img)
  }
}
