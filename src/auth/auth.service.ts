import { Injectable } from '@nestjs/common';
import { UsuariosService } from "../usuarios/usuarios.service";
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    
    constructor(private userService : UsuariosService,private jwtService: JwtService) { 

     } 

     async validateUser(correo:string, clave:string) : Promise<any> { 
         const user = await this.userService.getUser(correo);
         console.log("userget" + user)
         if(user && user[0].clave === clave) { 
             const  { clave, ...result } = user[0];
             return result;
         } 
         return null;
     } 
     async login(user: any) {
        const payload = { correo: user.correo, id: user.id_usuario };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
