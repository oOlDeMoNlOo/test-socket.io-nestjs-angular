import { ArgumentsHost, Catch, ExceptionFilter, HttpException, NotFoundException } from '@nestjs/common';
import * as path from 'path';
import { join } from 'path';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const url = host.getArgs()[0].url;
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (url.startsWith('/socket.io')) {
      response.json(exception)
    } else if (url.startsWith('/api')) {
      response.json(exception)
    } else {
      response.sendFile(join(__dirname, '..', 'frontend', 'index.html'));
    }
  }
}
