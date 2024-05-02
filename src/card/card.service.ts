import {
    ForbiddenException,
    Injectable,
    OnApplicationBootstrap,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';
import { TransactionPostDto } from './dto/post-transaction.dto';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { Account } from 'src/account/entities/account.entity';

@Injectable()
export class CardService {
    constructor(
        @InjectRepository(Card) private cardRepository: Repository<Card>,
        @InjectRepository(Transaction) private transactionRepository: Repository<Transaction>,
        @InjectRepository(Account) private accountRepository: Repository<Account>,
    ) { }

    async postWithdraw(cardId: string, withdraw: TransactionPostDto) {

        const card = await this.cardRepository.findOne({
            where: {
                id: cardId
            },
            relations: {
                ownerAccount: true
            }
        });
        let transaction;
        if (card.type === 'debit') {
            if (!card.active && card.withdrawalLimit < withdraw.quantity && card.ownerAccount.balance < withdraw.quantity) {
                throw new ForbiddenException;
            }
            card.ownerAccount.balance = card.ownerAccount.balance - withdraw.quantity;
            await this.accountRepository.save(card.ownerAccount);
            transaction = new Transaction({
                type: 'withdraw',
                origin: card.ownerAccount,
                quantity: withdraw.quantity,
            });

        } else {
            if (card.ownerAccount.availableCredit < withdraw.quantity) {
                throw new ForbiddenException;
            }
            card.ownerAccount.availableCredit = card.ownerAccount.availableCredit - withdraw.quantity;
            await this.accountRepository.save(card.ownerAccount);
            transaction = new Transaction({
                type: 'credit withdraw',
                origin: card.ownerAccount,
                quantity: withdraw.quantity,
            });

        }
        return transaction;
    }
}