import { Component } from '@angular/core';

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [];
  newTask: string = '';

  addTodo() {
    if (this.newTask.trim()) {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        task: this.newTask.trim(),
        completed: false,
      };
      this.todos.push(newTodo);
      this.newTask = '';
    }
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
