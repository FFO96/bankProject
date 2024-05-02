import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('accounts')
export class AccountController {
  constructor(private accountService: AccountService) { }
  @Get(':accountIban')
  getAccountByIban(@Param('accountIban') accountIban: string) {
    return this.accountService.getAccountByIban(accountIban);
  }

  /*
  @Post()
  async postCoffee(@Body() coffeePostDto: CoffeePostDto): Promise<Coffee> {
    return this.coffeeService.create(coffeePostDto);
  }*/
}