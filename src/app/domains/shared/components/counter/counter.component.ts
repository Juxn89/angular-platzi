import { Component, Input, SimpleChange } from '@angular/core';

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

  constructor() {
    // No async
    // Before render
    console.log('1. Constructor')
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChange) {
    // Before and during render
    console.log('2. ngOnChange -> before and during render')
    console.log(changes)
    console.log('-'.repeat(10))
  }
}
