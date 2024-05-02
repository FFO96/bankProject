import { Transaction } from 'src/transaction/entities/transaction.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany
  } from 'typeorm';
  
  @Entity()
  export class Account {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
  
    @CreateDateColumn()
    created?: Date;
  
    @UpdateDateColumn()
    updated?: Date;
  
    @Column({ unique: true })
    iban!: string;
  
    @Column()
    bank!: string;
  
    @Column('numeric', { precision: 8, scale: 2 })
    balance!: number;
    
    @Column('numeric', { precision: 8, scale: 2 })
    availableCredit!: number;

    @OneToMany(
        ()=> Transaction,
        (outgoingTransaction: Transaction) => outgoingTransaction.origin,
    )
    outgoingTransactions?: Transaction[];

    @OneToMany(
        ()=> Transaction,
        (incomingTransaction: Transaction) => incomingTransaction.destination,
    )
    incomingTransactions?: Transaction[];
  }
  