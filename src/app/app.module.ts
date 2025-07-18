import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JsonLogger } from './logger/json.logger';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, JsonLogger],
})
export class AppModule {}
