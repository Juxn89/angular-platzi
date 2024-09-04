import { Component, signal } from '@angular/core';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, JsonPipe, NgIf, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    { id: crypto.randomUUID(), title: 'Install Angular CLI', completed: false },
    { id: crypto.randomUUID(), title: 'Create project', completed: false },
    { id: crypto.randomUUID(), title: 'Create components', completed: false },
    { id: crypto.randomUUID(), title: 'Create services', completed: false },
  ])

  newTaskControl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  })

  changeHandler() {
    if(this.newTaskControl.valid) {
      this.addTask(this.newTaskControl.value)
      this.newTaskControl.setValue('')
    }
  }

  private addTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    this.tasks.update( (tasks) => [...tasks, newTask])
  }

  deleteTask(index: number) {
    this.tasks.update( (tasks) => tasks.filter( (task, position) => position !== index ) )
  }

  updateTask(index: number) {
    this.tasks.update( (tasks) => {
      return tasks.map( (task, position) => {
        if(position === index) {
          return { ...task, completed: !task.completed }
        }
        return task
      })
    })
  }

  getNumberOfPenddingTasks() {
    return this.tasks().filter(task => !task.completed).length
  }
}
