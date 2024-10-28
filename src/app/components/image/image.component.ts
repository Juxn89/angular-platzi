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

  constructor() {
    console.log('1. Construnctor')
    /*
      - Before render
      - No execute async tasks
      - Runs once time
    */
  }

  ngOnChanges() {
    console.log('2. ngOnChanges')
    /*
      - Before render
      - Update changes in inputs
      - Runs many times
    */
  }

  ngOnInit() {
    console.log('3. ngOnInit')
    /*
      - Before render
      - Can execute async tasks
      - Runs once time
    */
  }

  ngAfterViewInit() {
    console.log('4. ngAfterViewInit')
    /*
      - Afeter render
      - Handle children
    */
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy')
    /*
      - Runs when the component is deleted
    */
  }

  imgError() {
    this.img = 'https://img.freepik.com/premium-vector/vector-flat-illustration-avatar-user-profile-person-icon-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-1395.jpg?semt=ais_hybrid'
  }

  imgLoaded() {
    console.log('From child', this.img)
    this.loaded.emit(this.img)
  }
}
