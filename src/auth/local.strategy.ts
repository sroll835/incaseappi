import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(correo: string, clave: string): Promise<any> {
    console.log("Aqui");
    const user = await this.authService.validateUser(correo, clave);
    if (!user) {
    
      throw new UnauthorizedException();
    }
    return user;
  }
}