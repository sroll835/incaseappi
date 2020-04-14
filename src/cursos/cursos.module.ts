import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { Curso } from './curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  providers: [CursosService],
  controllers: [CursosController],
})
export class CursosModule {}
