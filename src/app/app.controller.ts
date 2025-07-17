import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryDto } from './dto/query.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/world')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(@Query() query: QueryDto): string {
    return query ? `Hello, ${query.name}!` : 'Hello!';
  }
}
