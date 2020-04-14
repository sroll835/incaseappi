import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesoresModule } from './profesores/profesores.module';
import { CursosModule } from './cursos/cursos.module';
import { ClasesModule } from './clases/clases.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsuariosModule, ProfesoresModule, CursosModule, ClasesModule],
})
export class AppModule {}
