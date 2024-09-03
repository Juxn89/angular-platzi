import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  task = signal([
    'Install Angular CLI',
    'Create project',
    'Create components',
    'Create services'
  ])

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement
    const newTask = input.value
    this.task.update( (tasks) => [...tasks, newTask])
  }

  deleteTask(index: number) {
    this.task.update( (tasks) => tasks.filter( (task, position) => position !== index ) )
  }
}
