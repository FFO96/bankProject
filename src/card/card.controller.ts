import { Body, Controller, Param, Post, UnauthorizedException } from '@nestjs/common';
import { CardService } from './card.service';
import { TransactionPostDto } from './dto/post-transaction.dto';
import { TransactionType } from 'src/common/validations';

@Controller('cards')
export class CardController {
  constructor(private accountService: CardService) { }
  @Post(':cardId')
  postWithdraw(@Param('cardId') cardId: string, @Body() withdraw: TransactionPostDto) {

    if (withdraw.type !== TransactionType.WITHDRAW){
        throw new UnauthorizedException;
    }

    return this.accountService.postWithdraw(cardId, withdraw);
  }
}