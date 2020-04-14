import { Test, TestingModule } from '@nestjs/testing';
import { ProfesoresController } from './profesores.controller';

describe('Profesores Controller', () => {
  let controller: ProfesoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfesoresController],
    }).compile();

    controller = module.get<ProfesoresController>(ProfesoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
