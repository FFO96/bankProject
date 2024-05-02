import {
    Injectable,
    OnApplicationBootstrap,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { Account } from './entities/account.entity';
  
  @Injectable()
  export class AccountService implements OnApplicationBootstrap {
    constructor(
      @InjectRepository(Account) private accountRepository: Repository<Account>,
    ) { }
  
    async getAccountByIban(iban: string) {
      return this.accountRepository.find({
        where: {iban},
        relations: {
            outgoingTransactions: true,
            incomingTransactions: true,
        }
      });
    }
  /*
    async create(coffeePostDto: CoffeePostDto) {
      const newCoffee = this.coffeeRepository.create(coffeePostDto);
      return this.coffeeRepository.save(newCoffee);
    }*/
  
    // DB population
  
    async onApplicationBootstrap() {
      //await this.seedDatabase();
    }
  /*
    private async seedDatabase() {
      await this.coffeeRepository.clear();
      return this.coffeeRepository.save(coffeeSamples);
    }*/
  }
  