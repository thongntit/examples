import { TodoService } from './todo/todo.service';
import { TodoController } from './todo/todo.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [TodoController, AppController],
  providers: [TodoService, AppService],
})
export class AppModule {}
