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
  export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
  
    @CreateDateColumn()
    created?: Date;
  
    @UpdateDateColumn()
    updated?: Date;
  
    @Column()
    type!: string;
  
    @Column('numeric', { precision: 8, scale: 2 })
    quantity!: number;

    @ManyToOne(()=> Account, (origin)=> origin.outgoingTransactions)
    origin!: Account;

    @ManyToOne(()=> Account, (destination)=> destination.incomingTransactions)
    destination?: Account;
  }