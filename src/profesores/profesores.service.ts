import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './profesor.entity';

@Injectable()
export class ProfesoresService {
  constructor(
    @InjectRepository(Profesor) private usersRepository: Repository<Profesor>,
  ) {}

  async createUser(user: Profesor) {
    this.usersRepository.save(user);
  }

  async getUsers(user: Profesor): Promise<Profesor[]> {
    return await this.usersRepository.find();
  }

  async getUser(_id: number): Promise<Profesor[]> {
    return await this.usersRepository.find({
      select: ['nombre', 'apellido', 'correo', 'clave'],
      where: [{ id: _id }],
    });
  }

  async updateUser(user: Profesor) {
    this.usersRepository.save(user);
  }

  async deleteUser(user: Profesor) {
    this.usersRepository.delete(user);
  }
}
