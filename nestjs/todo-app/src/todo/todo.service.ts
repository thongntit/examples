import { Injectable } from '@nestjs/common';
import { Todo } from 'src/todo/interfaces/todo.interface';

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [];
  create(todo: Todo) {
    this.todos.push(todo);
  }
  findAll(): Todo[] {
    return this.todos;
  }
  getTodoById(id: Todo['id']) {
    return this.todos.find((todo) => todo.id === id);
  }
}
