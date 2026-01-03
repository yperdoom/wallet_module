import { IsString, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class CreateAccountDto {
  @IsNumber()
  user_id?: number;

  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  balance?: number;
}

export class UpdateAccountDto {
  @IsOptional()
  @IsNumber()
  user_id?: number;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  balance?: number;
}

export class GetAccountDto {
  @IsNumber()
  id?: number;
}

export class DeleteAccountDto {
  @IsNumber()
  id?: number;
}
