import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {

  welcome = 'Hello from a variable'

  tasks = signal([
    'Install Angular CLI',
    'Create project',
    'Create component'
  ])

  private name = 'Zelda'
  nickName = signal('Zelda')
  disabled = true
  image = 'https://static.platzi.com/media/achievements/badge-js-bases-84800303-16e4-420d-a934-d02cc60f4727.png'

  person = signal({
    nickName: 'Zelda',
    disabled: true,
    image: 'https://static.platzi.com/media/achievements/badge-js-bases-84800303-16e4-420d-a934-d02cc60f4727.png'
  })

  colorControl = new FormControl()
  widthControl = new FormControl(50, {
    nonNullable: true
  })
  nameControl = new FormControl('Zelda', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  })

  constructor() {
    this.colorControl.valueChanges.subscribe(value => { console.log(value) })
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

  changePersonName(event: Event) {
    const input = event.target as HTMLInputElement
    const newValaue = input.value

    this.person.update(prevState => {
      return {
        ...prevState,
        nickName: newValaue
      }
    })
  }
}
