import { User } from '../../entities/user.entity';
import { UserRepositoryPort } from '../../ports/user.repository.port';

export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(id: number, data: Partial<User>): Promise<User | null> {
    return this.userRepository.update(id, data);
  }
}
