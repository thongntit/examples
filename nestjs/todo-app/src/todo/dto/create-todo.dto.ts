import { IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;
}
