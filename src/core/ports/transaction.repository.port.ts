import { Transaction } from '../entities/transaction.entity';

export interface TransactionRepositoryPort {
  create(transaction: Transaction): Promise<Transaction>;
  findAll(): Promise<Transaction[]>;
  findById(id: number): Promise<Transaction | null>;
}
