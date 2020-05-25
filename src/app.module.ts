import { ClasesModule } from './clases/clases.module';
import { CursosModule } from './cursos/cursos.module';
import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot(), UsuariosModule, AuthModule,CursosModule,ClasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
