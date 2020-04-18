import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Controller,Request, Get ,Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}
  
  
  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login(@Request() req) {
    console.log("Login" + req.user);
    return this.authService.login(req.user);
  }
  @Get()
  getHello(): string {
    console.log("HOLA")
    return this.appService.getHello();
  }

}
