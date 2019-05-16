import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Client, Server } from 'socket.io';

@WebSocketGateway(3001, { transports: ['websocket'] })
export class AppGateway {

  constructor() {
  }

  @SubscribeMessage('event')
  handleEvent(client: Client, data: string): string {
    console.log(client, data);
    return data;
  }
}
