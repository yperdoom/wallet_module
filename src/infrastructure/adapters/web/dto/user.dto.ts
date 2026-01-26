import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsNumber, IsDateString, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @ApiProperty({ example: 'John Doe' })
  name: string = '';

  @IsEmail()
  @MaxLength(100)
  @IsNotEmpty({ message: 'Email cannot be empty' })
  @ApiProperty({ example: 'john.doe@example.com' })
  email: string = '';

  @IsString()
  @MaxLength(20)
  @IsNotEmpty({ message: 'Phone cannot be empty' })
  @ApiProperty({ example: '11999123000' })
  phone: string = '';

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'fixed_salary deve ser um número decimal com até 2 casas.' })
  @ApiProperty({ example: 5000.00 })
  fixed_salary?: number;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ example: '2024-07-15' })
  salary_payment_date?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'total_balance deve ser um número decimal com até 2 casas.' })
  @ApiProperty({ example: 10000.00 })
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
