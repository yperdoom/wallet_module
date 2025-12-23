import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  create(@Body() data: any) {
    return { message: 'Usuário criado', data };
  }

  @Get()
  findAll() {
    return { message: 'Listar usuários' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { message: `Buscar usuário ${id}` };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return { message: `Atualizar usuário ${id}`, data };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `Remover usuário ${id}` };
  }
}
