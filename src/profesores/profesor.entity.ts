import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id_prof: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  apellido: string;

  @Column({ length: 70 })
  correo: string;

  @Column({ length: 30 })
  clave: string;
}
