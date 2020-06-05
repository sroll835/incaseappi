import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private service: UsuariosService) {}

  @Get()
  Getusers() {
    return this.service.getUsers();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Get('/cursos/:id')
  getcursosbyUserId(@Param() params) {
    return this.service.getCursosByUserId(params.id);
  }

  @Post()
  create(@Body() user: Usuario) {
    return this.service.createUser(user);
  }

  @Put()
  update(@Body() user: Usuario) {
    return this.service.updateUser(user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }
}
