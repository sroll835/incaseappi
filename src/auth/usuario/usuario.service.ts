import { Usuario } from './../../usuarios/usuario.entity';

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private userRepository: Repository<Usuario>,
  ) {}

  async findByEmail(correo: string): Promise<Usuario> {
    return await this.userRepository.findOne({
      where: {
        correo: correo,
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/camelcase
  async findById(id_usuario: number): Promise<Usuario> {
    return await this.userRepository.findOne({
      where: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        id_usuario: id_usuario,
      },
    });
  }

  async create(user: Usuario): Promise<Usuario> {
    return await this.userRepository.save(user);
  }
}
