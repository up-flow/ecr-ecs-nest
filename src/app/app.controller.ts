import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryDto } from './dto/query.dto';
import { JsonLogger } from './logger/json.logger';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: JsonLogger,
  ) {
    this.logger.setContext(AppController.name);
  }

  @Get('/world')
  getHello(): string {
    this.logger.log('Handling /world request');
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(@Query() query: QueryDto): string {
    this.logger.log('Handling /hello request');
    return query ? `Hello, ${query.name}!` : 'Hello!';
  }

  @Get('/health')
  health(): string {
    this.logger.log('Handling /health request');
    return 'OK';
  }
}
