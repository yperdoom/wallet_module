import { nanoid } from 'nanoid';
import { User } from '../entities/user.entity';
import { UserRepositoryPort } from '../ports/user.repository.port';

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) { }

  async execute(
    name: string,
    email: string,
    phone: string,
    fixed_salary: number,
    total_balance: number,
    salary_payment_date: Date
  ): Promise<User> {
    const user = new User(
      1,
      name,
      email,
      phone,
      fixed_salary,
      total_balance,
      salary_payment_date
    );

    return this.userRepository.create(user);
  }
}
