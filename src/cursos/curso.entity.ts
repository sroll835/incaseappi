import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id_curso: number;

  @Column({ length: 50 })
  titulo: string;

  @Column({ length: 200 })
  descripcion: string;

  @Column({ length: 10 })
  duracion: string;

  @Column()
  numero_clases: number;
}
