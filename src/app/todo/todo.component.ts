import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

let _id = 0;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {

  userInput = new FormControl();
  todos: Array<Todo> = [];

  constructor() {
  }

  ngOnInit() {
  }

  onChange() {
    const {value} = this.userInput;
    if (value) {
      this.todos.push(new Todo(value));
      this.userInput.setValue('');
    }
  }

  toggleTodo(i) {
    this.todos[i].isCompleted = !this.todos[i].isCompleted;
  }
}

class Todo {
  id: number;
  content: String;
  isCompleted: boolean;

  constructor(content: String) {
    this.id = _id++;
    this.content = content;
    this.isCompleted = false;
  }
}
