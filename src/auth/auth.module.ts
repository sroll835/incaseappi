import { Usuario } from './../usuarios/usuario.entity';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuariosModule } from "../usuarios/usuarios.module";
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from './usuario/usuario.service';
import { AuthController } from './auth.controller';
@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    UsuariosModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, UsuarioService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
