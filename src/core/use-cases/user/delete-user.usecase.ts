import { UserRepositoryPort } from '../../ports/user.repository.port';

export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}
