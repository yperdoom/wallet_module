import { Account } from '../entities/account.entity';

export interface AccountRepositoryPort {
  create(account: Account): Promise<Account>;
  findAll(): Promise<Account[]>;
  findById(id: number): Promise<Account | null>;
  update(id: number, account: Partial<Account>): Promise<Account | null>;
  delete(id: number): Promise<void>;
}
