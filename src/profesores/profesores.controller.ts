import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { Profesor } from './profesor.entity';

@Controller('profesores')
export class ProfesoresController {
  constructor(private service: ProfesoresService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post()
  create(@Body() user: Profesor) {
    return this.service.createUser(user);
  }

  @Put()
  update(@Body() user: Profesor) {
    return this.service.updateUser(user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }
}
