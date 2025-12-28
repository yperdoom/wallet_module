import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../../src/infrastructure/adapters/web/user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();
    controller = module.get<UserController>(UserController);
  });

  it('deve criar um usuário', () => {
    const data = { nome: 'João' };
    expect(controller.create(data)).toEqual({ message: 'Usuário criado', data });
  });

  it('deve listar usuários', () => {
    expect(controller.findAll()).toEqual({ message: 'Listar usuários' });
  });

  it('deve buscar um usuário pelo id', () => {
    expect(controller.findOne('123')).toEqual({ message: 'Buscar usuário 123' });
  });

  it('deve atualizar um usuário', () => {
    const data = { nome: 'Maria' };
    expect(controller.update('456', data)).toEqual({ message: 'Atualizar usuário 456', data });
  });

  it('deve remover um usuário', () => {
    expect(controller.remove('789')).toEqual({ message: 'Remover usuário 789' });
  });
});
