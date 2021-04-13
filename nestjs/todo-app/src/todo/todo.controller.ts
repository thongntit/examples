import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  @Get(':id')
  async getTodoById(@Param() params: { id: string }) {
    return this.todoService.getTodoById(params.id);
  }
}
