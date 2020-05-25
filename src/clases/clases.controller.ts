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

  @Get()
  getall() {
    return this.service.getClases();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getClaseById(params.id);
  }

  @Post()
  create(@Body() clase: Clase) {
    return this.service.createClase(clase);
  }

  @Put()
  update(@Body() clase: Clase) {
    return this.service.updateClase(clase);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteClase(params.id);
  }
}
