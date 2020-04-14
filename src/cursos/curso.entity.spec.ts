import { Curso } from './curso.entity';

describe('Curso', () => {
  it('should be defined', () => {
    expect(new Curso()).toBeDefined();
  });
});
