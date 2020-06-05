import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './curso.entity';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso) private cursoRepository: Repository<Curso>,
  ) {}

  async createCurso(user: Curso) {
    this.cursoRepository.save(user);
  }

  async getCursos(): Promise<Curso[]> {
    return await this.cursoRepository.find();
  }

  async getCursoById(_id: number): Promise<Curso[]> {
    return await this.cursoRepository.find({
      select: ['titulo', 'descripcion', 'duracion', 'numero_clases','image_curso'],
      where: [{ id: _id }],
    });
  }
  async getCursowithClasesById(id_curso:number) : Promise<Curso[]>{
    return await this.cursoRepository.createQueryBuilder("curso")
    .leftJoinAndSelect("curso.clases","clase")
    .where("curso.id_curso =:id",{ id: id_curso})
    .getMany();
  }
  async updateCurso(curso: Curso) {
    this.cursoRepository.save(curso);
  }

  async deleteCursor(curso: Curso) {
    this.cursoRepository.delete(curso);
  }
}
