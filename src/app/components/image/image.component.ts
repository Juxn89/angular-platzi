import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  @Input() img: string = 'Initial value'
  @Output() loaded = new EventEmitter<string>()

  imgError() {
    this.img = 'https://img.freepik.com/premium-vector/vector-flat-illustration-avatar-user-profile-person-icon-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-1395.jpg?semt=ais_hybrid'
  }

  imgLoaded() {
    console.log('From child', this.img)
    this.loaded.emit(this.img)
  }
}
