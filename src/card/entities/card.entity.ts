import { Account } from 'src/account/entities/account.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
  } from 'typeorm';
  
  @Entity()
  export class Card {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
  
    @CreateDateColumn()
    created?: Date;
  
    @UpdateDateColumn()
    updated?: Date;
  
    @Column()
    type!: string;

    @Column()
    pin!: string;

    @Column({default: false})
    active!: boolean;
  
    @Column('numeric', { precision: 8, scale: 2 })
    withdrawalLimit!: number;

    @ManyToOne(()=> Account, (ownerAccount)=> ownerAccount.cards)
    ownerAccount!: Account;
  }