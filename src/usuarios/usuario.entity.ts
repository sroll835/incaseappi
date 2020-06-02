import { Curso } from './../cursos/curso.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  apellido: string;

  @Column({ length: 70 })
  correo: string;

  @Column({ length: 30 })
  clave: string;
  
  @ManyToMany(type => Curso, curso => curso.usuarios,{eager:true})
  @JoinTable()
  cursos: Curso[];
}
