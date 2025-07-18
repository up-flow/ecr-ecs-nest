import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class JsonLogger extends ConsoleLogger {
  log(message: string, context?: string) {
    console.log(JSON.stringify({ level: 'log', message, context }));
  }

  error(message: string, stack?: string, context?: string) {
    console.error(JSON.stringify({ level: 'error', message, stack, context }));
  }

  warn(message: string, context?: string) {
    console.warn(JSON.stringify({ level: 'warn', message, context }));
  }

  debug(message: string, context?: string) {
    console.debug(JSON.stringify({ level: 'debug', message, context }));
  }

  verbose(message: string, context?: string) {
    console.log(JSON.stringify({ level: 'verbose', message, context }));
  }
}
