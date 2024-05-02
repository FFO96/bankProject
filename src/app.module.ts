import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configLoader } from './utils/config-loader';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresAsyncConfig } from './config/typeorm-config';
import { AccountModule } from './account/account.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    load: [configLoader]
  }),
  TypeOrmModule.forRootAsync(postgresAsyncConfig),
  AccountModule,
  CardModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
