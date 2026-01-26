import { User } from '../../entities/user.entity';
import { UserRepositoryPort } from '../../ports/user.repository.port';

export class GetUserUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }
}
