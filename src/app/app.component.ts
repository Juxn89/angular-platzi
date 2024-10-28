import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ImageComponent } from "@components/image/image.component";
import { ProductsComponent } from "@components/products/products.component";
import { NavComponent } from "./components/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageComponent, ProductsComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-store';
  showImageComponent = false
  imgParent = signal<string>('https://www.w3schools.com/howto/img_avatar.png')

  onChangeValue(event: Event) {
    const input = event.target as HTMLInputElement
    const newValue = input.value
    this.imgParent.set(newValue)
  }

  onLoaded(img: string) {
    console.log('Log from father', img)
  }

  toogleImge() {
    this.showImageComponent = !this.showImageComponent
  }
}
