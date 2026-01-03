import { IsString, IsNumber, IsDateString, IsOptional, MaxLength } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @MaxLength(255)
  description?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsDateString()
  date?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  value?: number;

  @IsOptional()
  @IsNumber()
  installments?: number;

  @IsOptional()
  @IsNumber()
  final_installments?: number;
}

export class UpdateTransactionDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  value?: number;

  @IsOptional()
  @IsNumber()
  installments?: number;

  @IsOptional()
  @IsNumber()
  final_installments?: number;
}

export class GetTransactionDto {
  @IsNumber()
  id?: number;
}

export class DeleteTransactionDto {
  @IsNumber()
  id?: number;
}
