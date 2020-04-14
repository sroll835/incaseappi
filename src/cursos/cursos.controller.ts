import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './curso.entity';

@Controller('cursos')
export class CursosController {
  constructor(private service: CursosService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post()
  create(@Body() user: Curso) {
    return this.service.createUser(user);
  }

  @Put()
  update(@Body() user: Curso) {
    return this.service.updateUser(user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }
}
