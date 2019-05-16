/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';

import { AppModule } from './app/app.module';
import { join } from 'path';
import { NotFoundExceptionFilter } from './app/not-found-exception-filter';
import { WsAdapter } from '@nestjs/platform-ws';
import { INestApplication, INestExpressApplication, WebSocketAdapter } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  //app.useWebSocketAdapter(new WsAdapter(app));
  //app.use(compression());
  //app.useStaticAssets(join(__dirname, '..', 'frontend'));
  //app.useGlobalFilters(new NotFoundExceptionFilter());
  // app.setGlobalPrefix(`api`);
  const port = process.env.port || 3000;
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}

bootstrap();
