import { Usuario } from 'src/usuarios/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { Clase } from 'src/clases/clase.entity';

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

  @OneToMany(type => Clase, clase => clase.curso, {eager:true})
  clases: Clase[];

  @ManyToMany(type => Usuario, usuario => usuario.cursos)
    usuarios: Usuario[];

}
