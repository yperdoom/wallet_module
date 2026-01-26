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

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findById(id: number): Promise<User | null> {
    return this.users.find(u => u.id === id) || null;
  }

  async update(id: number, user: Partial<User>): Promise<User | null> {
    return this.update(id, user);
  }

  async delete(id: number): Promise<void> {
    this.users = this.users.filter(u => u.id !== id)
  }
}
