import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Delete,
  Controller
} from '@nestjs/common';
import {
  GetTransactionDto,
  CreateTransactionDto,
  UpdateTransactionDto,
  DeleteTransactionDto
} from './dto/transaction.dto';

@Controller('transactions')
export class TransactionController {
  @Get()
  findAll() {
    return { message: 'Listar lançamentos' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { message: `Buscar lançamento ${id}`, GetTransactionDto };
  }

  @Post()
  create(@Body() data: CreateTransactionDto) {
    return { message: 'Lançamento criado', data };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateTransactionDto) {
    return { message: `Atualizar lançamento ${id}`, data };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `Remover lançamento ${id}`, DeleteTransactionDto };
  }
}
