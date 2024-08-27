import { Component } from '@angular/core';

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
}
