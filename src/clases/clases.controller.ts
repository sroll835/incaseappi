import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ClasesService } from './clases.service';
import { Clase } from './clase.entity';

@Controller('clases')
export class ClasesController {
  constructor(private service: ClasesService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post()
  create(@Body() user: Clase) {
    return this.service.createUser(user);
  }

  @Put()
  update(@Body() user: Clase) {
    return this.service.updateUser(user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }
}
