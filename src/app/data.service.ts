import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private todos = new BehaviorSubject<any>(['My first ToDo item', 'My second ToDo item', 'My third ToDo item']);
  todo = this.todos.asObservable();

  constructor() { }

  changeTodo(todo) {
    this.todos.next(todo);
  }
}
