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
@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    UsuariosModule,
    PassportModule,
    JwtModule.register({
      secretOrPrivateKey:'secret12356789',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, UsuarioService],
  exports: [AuthService],
})
export class AuthModule {}
