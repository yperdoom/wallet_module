import { IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateCardDto {
  @IsNumber()
  account_id?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  cost?: number;

  @IsOptional()
  @IsDateString()
  due_date?: string;

  @IsOptional()
  @IsDateString()
  closing_date?: string;
}

export class UpdateCardDto {
  @IsOptional()
  @IsNumber()
  account_id?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  cost?: number;

  @IsOptional()
  @IsDateString()
  due_date?: string;

  @IsOptional()
  @IsDateString()
  closing_date?: string;
}

export class GetCardDto {
  @IsNumber()
  id?: number;
}

export class DeleteCardDto {
  @IsNumber()
  id?: number;
}
