import {
    Injectable,
    OnApplicationBootstrap,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { Account } from './entities/account.entity';
  
  @Injectable()
  export class AccountService {
    constructor(
      @InjectRepository(Account) private accountRepository: Repository<Account>,
    ) { }
  
    async getAccountByIban(iban: string) {
      return await this.accountRepository.findOne({
        where: {iban},
        relations: {
            outgoingTransactions: true,
            incomingTransactions: true,
        }
      });
    }
  }
  