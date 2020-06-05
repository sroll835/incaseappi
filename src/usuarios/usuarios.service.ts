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

  async getUsers(): Promise<Usuario[]> {
    return await this.usersRepository.find();
  }

  // eslint-disable-next-line @typescript-eslint/camelcase
  async getUser(id_usuario: string): Promise<Usuario[]> {
    return await this.usersRepository.find({
      select: ['nombre', 'apellido', 'correo', 'imagen', 'clave'],
      // eslint-disable-next-line @typescript-eslint/camelcase
      where: [{ id_usuario: id_usuario }],
    });
  }

  // eslint-disable-next-line @typescript-eslint/camelcase
  async getCursosByUserId(id_usuario: string): Promise<Usuario[]> {
    return await this.usersRepository
      .createQueryBuilder('usuario')
      .leftJoinAndSelect('usuario.cursos', 'curso')
      // eslint-disable-next-line @typescript-eslint/camelcase
      .where('usuario.id_usuario = :id', { id: id_usuario })
      .getMany();
  }

  async updateUser(user: Usuario) {
    this.usersRepository.update(user.id_usuario, user);
  }

  async deleteUser(user: Usuario) {
    this.usersRepository.delete(user);
  }
}
