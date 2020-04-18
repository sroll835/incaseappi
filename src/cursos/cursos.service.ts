import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './curso.entity';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso) private usersRepository: Repository<Curso>,
  ) {}

  async createUser(user: Curso) {
    this.usersRepository.save(user);
  }

  async getUsers(user: Curso): Promise<Curso[]> {
    return await this.usersRepository.find();
  }

  async getUser(_id: number): Promise<Curso[]> {
    return await this.usersRepository.find({
      select: ['titulo', 'descripcion', 'duracion', 'numero_clases'],
      where: [{ id: _id }],
    });
  }

  async updateUser(user: Curso) {
    this.usersRepository.save(user);
  }

  async deleteUser(user: Curso) {
    this.usersRepository.delete(user);
  }
}
