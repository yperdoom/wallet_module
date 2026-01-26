import { User } from '../entities/user.entity';

export interface UserRepositoryPort {
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  update(id: number, user: Partial<User>): Promise<User | null>;
  delete(id: number): Promise<void>;
}
