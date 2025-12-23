import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('cards')
export class CardController {
  @Post()
  create(@Body() data: any) {
    return { message: 'Cartão criado', data };
  }

  @Get()
  findAll() {
    return { message: 'Listar cartões' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { message: `Buscar cartão ${id}` };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return { message: `Atualizar cartão ${id}`, data };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `Remover cartão ${id}` };
  }
}
