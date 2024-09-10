import { Component, computed, signal } from '@angular/core';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../models/task.model';
import { Filter } from '../../models/filter.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, JsonPipe, NgIf, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Filters = Filter

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

  filter = signal<Filter>(Filter.All)
  taskFiltered = computed(() => {
    const filter = this.filter()
    const task = this.tasks()

    if(filter === Filter.Pending)
      return task.filter(t => !t.completed)

    if(filter === Filter.Completed)
      return task.filter(t => t.completed)

    return task
  })

  changeFilter(filter: Filter) {
    this.filter.set(filter)
  }

  changeHandler() {
    if(!this.newTaskControl.valid)
      return

    if(this.newTaskControl.value.trim() === '')
      return

    this.addTask(this.newTaskControl.value)
    this.newTaskControl.setValue('')
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

  updateTaskEditingMode(index: number) {
    this.tasks.update( (tasks) => {
      return tasks.map( (task, position) => {
        if(position === index) {
          return { ...task, editing: true }
        }
        return {
          ...task,
          editing: false
        }
      })
    })
  }

  updateTaskText(index: number, event: Event) {
    const input = event.target as HTMLInputElement
    this.tasks.update( (tasks) => {
      return tasks.map( (task, position) => {
        if(position === index) {
          return {
            ...task,
            editing: false,
            title: input.value
          }
        }
        return task
      })
    })
  }
}
