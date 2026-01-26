import { User } from '../../entities/user.entity';
import { UserRepositoryPort } from '../../ports/user.repository.port';

export class FindAllUsersUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
