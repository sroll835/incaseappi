import { Usuario } from './../usuarios/usuario.entity';
import { Controller, Post, Body } from  '@nestjs/common';
import { AuthService } from  './auth.service';


@Controller('auth')
export  class  AuthController {
    constructor(private  readonly  authService:  AuthService) {}
    @Post('login')
    async login(@Body() user: Usuario): Promise<any> {
      return this.authService.login(user);
    }  

    @Post('register')
    async register(@Body() user: Usuario): Promise<any> {
      return this.authService.register(user);
    }  

}