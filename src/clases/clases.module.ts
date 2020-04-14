import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClasesService } from './clases.service';
import { ClasesController } from './clases.controller';
import { Clase } from './clase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clase])],
  providers: [ClasesService],
  controllers: [ClasesController],
})
export class ClasesModule {}
