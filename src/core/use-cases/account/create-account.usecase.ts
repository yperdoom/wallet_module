import { Account } from '../../entities/account.entity';
import { AccountRepositoryPort } from '../../ports/account.repository.port';

export class CreateAccountUseCase {
  constructor(private readonly accountRepository: AccountRepositoryPort) {}

  async execute(
    user_id: number,
    name: string,
    balance: number,
  ): Promise<Account> {
    const account = new Account(
      0,
      user_id,
      name,
      balance,
    );

    return this.accountRepository.create(account);
  }
}
