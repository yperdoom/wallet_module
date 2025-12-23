import { User } from '../../../core/entities/user.entity';
import { UserRepositoryPort } from '../../../core/ports/user.repository.port';

export class UserRepository implements UserRepositoryPort {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(u => u.email === email) || null;
  }
}
