import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {

  welcome = 'Hello from a variable'
  tasks = [
    'Install Angular CLI',
    'Create project',
    'Create component'
  ]
  private name = 'Zelda'
  nickName = signal('Zelda')
  disabled = true
  image = 'https://static.platzi.com/media/achievements/badge-js-bases-84800303-16e4-420d-a934-d02cc60f4727.png'

  person = {
    nickName: 'Zelda',
    disabled: true,
    image: 'https://static.platzi.com/media/achievements/badge-js-bases-84800303-16e4-420d-a934-d02cc60f4727.png'
  }

  clickHandler () {
    alert('Hi :)')
  }

  changeHandler(event: Event) {
    console.log(event)
    const input = event.target as HTMLInputElement
    const newvalue = input.value
    this.nickName.set(newvalue)
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement
    console.log(input.value)
  }
}
