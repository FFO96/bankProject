import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configLoader } from './utils/config-loader';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresAsyncConfig } from './config/typeorm-config';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    load: [configLoader]
  }),
  TypeOrmModule.forRootAsync(postgresAsyncConfig),
  AccountModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
