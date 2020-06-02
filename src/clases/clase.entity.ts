import { Curso } from './../cursos/curso.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Clase {
  @PrimaryGeneratedColumn()
  id_clase: number;

  @Column({ length: 50 })
  titulo: string;

  @Column({ length: 200 })
  descripcion: string;

  @Column({ length: 50 })
  area: string;

  @Column({ length: 10 })
  duracion: string;
  
  @ManyToOne(type=> Curso, curso => curso.clases)
  curso : Curso;

}
