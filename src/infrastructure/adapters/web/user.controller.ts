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
  GetUserDto,
  CreateUserDto,
  UpdateUserDto,
  DeleteUserDto
} from './dto/user.dto';

@Controller('users')
export class UserController {
  @Get()
  findAll() {
    return { message: 'Listar usuários' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { message: `Buscar usuário ${id}`, GetUserDto };
  }

  @Post()
  create(@Body() data: CreateUserDto) {
    return { message: 'Usuário criado', data };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return { message: `Atualizar usuário ${id}`, data };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `Remover usuário ${id}`, DeleteUserDto };
  }
}
