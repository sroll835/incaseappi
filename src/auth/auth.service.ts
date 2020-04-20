import { Usuario } from './../usuarios/usuario.entity';
import { Injectable } from '@nestjs/common';
import { UsuariosService } from "../usuarios/usuarios.service";
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from './usuario/usuario.service';
@Injectable()
export class AuthService {
    
    constructor( private readonly userService: UsuarioService,
      private readonly jwtService: JwtService) { 

     } 

     private async validate(userData: Usuario): Promise<Usuario> {
      return await this.userService.findByEmail(userData.correo);
  }

  public async login(user: Usuario): Promise< any | { status: number }>{
      return this.validate(user).then((userData)=>{
        if(!userData){
      
         return { status: 404, message: '[Not Found] Usuario no encontrado' };
       
        }
        if(userData.clave === user.clave){ 
          console.log("Claves coinciden");
         // console.log("Estoy aqui ")
          const payload = { nombre: userData.nombre, id_usuario: userData.id_usuario };
          let payload2 = `${userData.nombre}${userData.id_usuario}`;
         // console.log("Estoy aqui 2 ")
  
          const accessToken = this.jwtService.sign(payload);
          console.log("Estoy aqui 3")
  
          return {
             expires_in:5000,
             access_token: accessToken,
             user_id: payload2,
             status: 200, 
             message: "[Login] Login service sucessfully"
          };
  
         }
         else{  
           return { status: 401, message:"[Unauthorized] Usuario o contrasena incorrecta" };
          };
      
      });
  }

  public async register(user: Usuario): Promise<any>{
      return this.userService.create(user)
  } 
  async getProfile(id_usuario: number): Promise<Usuario> {
    return await this.userService.findById(id_usuario)
  }
}
