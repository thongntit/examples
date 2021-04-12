import { Body, Controller, Get, Post } from '@nestjs/common';
import { Todo } from 'src/todo/interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  async getAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    this.todoService.create(createTodoDto);
  }
}
