import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { AppGateway } from './app.gateway';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private gateWay: AppGateway) {}

  @Get('test')
  getData() {
    return this.appService.getData();
  }
}
