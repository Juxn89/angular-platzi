import { RouterOutlet } from '@angular/router';
import { Component, inject, signal } from '@angular/core';

import { AuthService } from '@services/auth.service'
import { UsersService } from '@services/users.service'
import { FilesService } from '@services/files.service';
import { NavComponent } from './components/nav/nav.component'
import { ImageComponent } from '@components/image/image.component'
import { ProductsComponent } from '@components/products/products.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageComponent, ProductsComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private authService = inject(AuthService)
  private userService = inject(UsersService)
  private fileService = inject(FilesService)
  private token = ''

  title = 'my-store';
  fileUploadedURL: string | null = null
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

  createUser() {
    this.userService.create({ name: 'Sebas', email: 'sebas@mymail.com', password: '123456', avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867' })
    .subscribe(response => console.log(response))
  }

  login() {
    this.authService.login('sebas@mymail.com', '123456')
    .subscribe(response => this.token = response.access_token)
  }

  getProfile() {
    console.log(this.token)
    this.authService.getProfile()
    .subscribe(response => console.log(response))
  }

  downloadPDF() {
    this.fileService.getFile('myPdf.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
      .subscribe()
  }

  onUpload(event: Event) {
    const element = event.target as HTMLInputElement
    const file = element.files?.item(0)

    console.log('1.', file)
    if(file)
      this.fileService.uploadFile(file)
        .subscribe(response => {
          console.log(response)
          this.fileUploadedURL = response.location
        })
  }
}
