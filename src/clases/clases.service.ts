import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clase } from './clase.entity';

@Injectable()
export class ClasesService {
  constructor(
    @InjectRepository(Clase) private usersRepository: Repository<Clase>,
  ) {}

  async createUser(user: Clase) {
    this.usersRepository.save(user);
  }

  async getUsers(user: Clase): Promise<Clase[]> {
    return await this.usersRepository.find();
  }

  async getUser(_id: number): Promise<Clase[]> {
    return await this.usersRepository.find({
      select: ['titulo', 'duracion'],
      where: [{ id: _id }],
    });
  }

  async updateUser(user: Clase) {
    this.usersRepository.save(user);
  }

  async deleteUser(user: Clase) {
    this.usersRepository.delete(user);
  }
}
