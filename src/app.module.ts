import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configLoader } from './utils/config-loader';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    load: [configLoader]
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
