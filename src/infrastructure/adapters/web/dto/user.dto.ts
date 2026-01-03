import { IsString, IsEmail, IsOptional, IsNumber, IsDateString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsEmail()
  @MaxLength(100)
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'fixed_salary deve ser um número decimal com até 2 casas.' })
  fixed_salary?: number;

  @IsOptional()
  @IsDateString()
  salary_payment_date?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'total_balance deve ser um número decimal com até 2 casas.' })
  total_balance?: number;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(100)
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  fixed_salary?: number;

  @IsOptional()
  @IsDateString()
  salary_payment_date?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  total_balance?: number;
}

export class GetUserDto {
  @IsNumber()
  id?: number;
}

export class DeleteUserDto {
  @IsNumber()
  id?: number;
}
