import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  task = signal<Task[]>([
    { id: crypto.randomUUID(), title: 'Install Angular CLI', completed: false },
    { id: crypto.randomUUID(), title: 'Create project', completed: false },
    { id: crypto.randomUUID(), title: 'Create components', completed: false },
    { id: crypto.randomUUID(), title: 'Create services', completed: false },
  ])

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement
    this.addTask(input.value)
  }

  private addTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    this.task.update( (tasks) => [...tasks, newTask])
  }

  deleteTask(index: number) {
    this.task.update( (tasks) => tasks.filter( (task, position) => position !== index ) )
  }
}
