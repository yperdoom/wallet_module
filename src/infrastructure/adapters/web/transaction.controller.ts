import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('transactions')
export class TransactionController {
  @Post()
  create(@Body() data: any) {
    return { message: 'Lançamento criado', data };
  }

  @Get()
  findAll() {
    return { message: 'Listar lançamentos' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { message: `Buscar lançamento ${id}` };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return { message: `Atualizar lançamento ${id}`, data };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `Remover lançamento ${id}` };
  }
}
