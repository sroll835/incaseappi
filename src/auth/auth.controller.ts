import { Usuario } from './../usuarios/usuario.entity';
import { Controller, Post, Body, Get, Param, UseGuards } from  '@nestjs/common';
import { AuthService } from  './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';


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

  @UseGuards(JwtAuthGuard)
  @Get(':id')
   getProfile(@Param() params) {
   console.log(params.id);
    return this.authService.getProfile(params.id);
  }

}