import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input() img = 'Initial value'
  @Output() loaded = new EventEmitter<string>()

  img2 = ''
  @Input() set changeImg2(newImg2: string) {
    this.img2 = newImg2
    console.log('Change img2')
  }

  counter = 0
  counterFunction: number | undefined

  constructor() {
    console.log('1. Construnctor')
    /*
      - Before render
      - No execute async tasks
      - Runs once time
    */
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges')
    /*
      - Before render
      - Update changes in inputs
      - Runs many times
    */
   console.log('Changes -->', changes)
  }

  ngOnInit() {
    console.log('3. ngOnInit')
    /*
      - Before render
      - Can execute async tasks
      - Runs once time
    */

    // this.counterFunction = window.setInterval(() => {
    //   this.counter += 1
    //   console.log(this.counter)
    // }, 1000);
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
    if(typeof window !== 'undefined') {
      console.log('--->', window)
      window.clearInterval(this.counterFunction)
    }
  }



  imgError() {
    this.img = 'https://img.freepik.com/premium-vector/vector-flat-illustration-avatar-user-profile-person-icon-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-1395.jpg?semt=ais_hybrid'
  }

  imgLoaded() {
    console.log('From child', this.img)
    this.loaded.emit(this.img)
  }
}
