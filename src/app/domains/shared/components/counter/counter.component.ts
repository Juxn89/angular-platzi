import { Component, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0
  @Input({ required: true }) message: string = ''

  private readonly numberOfRepets: number = 30

  counter = signal<number>(0)
  counterRef: number | undefined = undefined;

  constructor() {
    // No async
    // Before render
    // Run Once
    console.log('1. Constructor')
    console.log('-'.repeat(this.numberOfRepets))
  }

  ngOnChanges(changes: SimpleChanges) {
    // Before and during render
    // Async
    console.log('2. ngOnChange -> before and during render')
    console.log(changes)

    const duration = changes['duration']
    if(duration && duration.currentValue !== duration.previousValue) this.doSomething

    console.log('-'.repeat(this.numberOfRepets))
  }

  ngOnInit() {
    // Afeter render
    // Run once
    // Async, then, subs
    console.log('3. ngOnInit')
    console.log('duration -> ', this.duration)
    console.log('message -> ', this.message)
    console.log('-'.repeat(this.numberOfRepets))

    // this.counterRef = window.setInterval(() => {
    //   console.log('Run interval')
    //   this.counter.update( prevState => prevState + 1 )
    // }, 1000);
  }

  ngAfterViewInit() {
    // After render
    // Childrens are already printed
    console.log('4. ngAfterViewInit')
    console.log('-'.repeat(this.numberOfRepets))
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy')
    console.log('-'.repeat(this.numberOfRepets))
    // window.clearInterval(this.counterRef)
  }

  doSomething() {
    console.log('Change duration')
  }
}