import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { JsonLogger } from './app/logger/json.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new JsonLogger(),
  });
  await app.listen(80);
}
bootstrap();
