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
  GetAccountDto,
  CreateAccountDto,
  UpdateAccountDto,
  DeleteAccountDto
} from './dto/account.dto';

@Controller('accounts')
export class AccountController {
  @Get()
  findAll() {
    return { message: 'Listar contas' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { message: `Buscar conta ${id}`, GetAccountDto };
  }

  @Post()
  create(@Body() data: CreateAccountDto) {
    return { message: 'Conta criada', data };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateAccountDto) {
    return { message: `Atualizar conta ${id}`, data };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `Remover conta ${id}`, DeleteAccountDto };
  }
}
