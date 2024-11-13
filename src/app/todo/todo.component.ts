import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TodoComponent {
  todos: { id: number; task: string; done: boolean }[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.todos.push({
        id: Date.now(),
        task: this.newTask,
        done: false,
      });
      this.newTask = '';
    }
  }

  toggleDone(todo: { id: number; task: string; done: boolean }) {
    todo.done = !todo.done;
  }

  removeTask(todoId: number) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }

  deleteAllTasks() {
    this.todos = []
  }
}
