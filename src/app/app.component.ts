import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComponent } from "./components/image/image.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-store';
  imgParent = signal<string>('https://www.w3schools.com/howto/img_avatar.png')

  onChangeValue(event: Event) {
    const input = event.target as HTMLInputElement
    const newValue = input.value
    this.imgParent.set(newValue)
  }

  onLoaded(img: string) {
    console.log('Log from father', img)
  }
}
