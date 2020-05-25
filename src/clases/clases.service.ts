import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clase } from './clase.entity';

@Injectable()
export class ClasesService {
  constructor(
    @InjectRepository(Clase) private clasesRepository: Repository<Clase>,
  ) {}

  async createClase(clase: Clase) {
    this.clasesRepository.save(clase);
  }

  async getClases(): Promise<Clase[]> {
    return await this.clasesRepository.find();
  }

  async getClaseById(_id: number): Promise<Clase[]> {
    return await this.clasesRepository.find({
      select: ['id_clase','titulo','descripcion','area','duracion'],
      where: [{ id: _id }],
    });
  }

  async updateClase(clase: Clase) {
    this.clasesRepository.save(clase);
  }

  async deleteClase(clase: Clase) {
    this.clasesRepository.delete(clase);
  }
}
