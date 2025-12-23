import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/adapters/web/user.controller';
import { AccountController } from './infrastructure/adapters/web/account.controller';
import { CardController } from './infrastructure/adapters/web/card.controller';
import { TransactionController } from './infrastructure/adapters/web/transaction.controller';

@Module({
  imports: [],
  controllers: [UserController, AccountController, CardController, TransactionController],
  providers: [],
})
export class AppModule {}
