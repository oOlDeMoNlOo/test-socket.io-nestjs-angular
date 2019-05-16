import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {transports: ['websocket']} };

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot([
    { path: '', component: TestComponent }
  ]),
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
