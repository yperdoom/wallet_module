import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('accounts')
export class AccountController {
  @Post()
  create(@Body() data: any) {
    return { message: 'Conta criada', data };
  }

  @Get()
  findAll() {
    return { message: 'Listar contas' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { message: `Buscar conta ${id}` };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return { message: `Atualizar conta ${id}`, data };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `Remover conta ${id}` };
  }
}
