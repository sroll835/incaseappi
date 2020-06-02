import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  Res,
} from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './curso.entity';

@Controller('cursos')
export class CursosController {
  constructor(private service: CursosService) {}

  @Get()
  getall(){
   return this.service.getCursos();
  }
  
  @Get(':id')
  get(@Param() params) {
    return this.service.getCursoById(params.id);
  }

  
  @Get('imagen/:fileId')
  async serveImageCurso(@Param('fileId') fileId, @Res() res): Promise<any> {
    console.log("Wtf");
    res.sendFile(fileId, { root: 'storage' });
  }

  @Post()
  create(@Body() curso: Curso) {
    return this.service.createCurso(curso);
  }

  @Put()
  update(@Body() curso: Curso) {
    return this.service.updateCurso(curso);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteCursor(params.id);
  }


}
