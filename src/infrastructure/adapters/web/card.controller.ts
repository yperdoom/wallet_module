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
  GetCardDto,
  CreateCardDto,
  UpdateCardDto,
  DeleteCardDto,
} from './dto/card.dto';

@Controller('cards')
export class CardController {
  @Get()
  findAll() {
    return { message: 'Listar cartões' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { message: `Buscar cartão ${id}`, GetCardDto };
  }

  @Post()
  create(@Body() data: CreateCardDto) {
    return { message: 'Cartão criado', data };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateCardDto) {
    return { message: `Atualizar cartão ${id}`, data };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `Remover cartão ${id}`, DeleteCardDto };
  }
}
