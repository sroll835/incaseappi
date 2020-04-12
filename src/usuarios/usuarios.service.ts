import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usersRepository: Repository<Usuario>,
  ) {}

  async createUser(user: Usuario) {
    this.usersRepository.save(user);
  }

  async getUsers(user: Usuario): Promise<Usuario[]> {
    return await this.usersRepository.find();
  }

  async getUser(_id: number): Promise<Usuario[]> {
    return await this.usersRepository.find({
      select: ['nombre', 'apellido', 'correo', 'clave'],
      where: [{ id: _id }],
    });
  }

  async updateUser(user: Usuario) {
    this.usersRepository.save(user);
  }

  async deleteUser(user: Usuario) {
    this.usersRepository.delete(user);
  }
}
