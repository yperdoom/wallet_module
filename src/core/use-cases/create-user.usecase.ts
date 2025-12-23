import { User } from '../entities/user.entity';
import { UserRepositoryPort } from '../ports/user.repository.port';

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(name: string, email: string): Promise<User> {
    const user = new User(Date.now(), name, email);
    return this.userRepository.create(user);
  }
}
