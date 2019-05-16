import { Component, OnDestroy, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nest-sokect-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private subs: Subscription;

  constructor(private socket: Socket, private http: HttpClient) {
    this.http.get('http://localhost:3000/test').subscribe(value => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    console.log(this.socket);
    this.socket.on('connection', (socket) => {
      console.log('connect', socket)
      this.socket.emit('event', { test: 'test' });
    });
    this.socket.emit('event', 'test', (val) => {
      console.log('return', val);
    });
    this.subs = this.socket.fromEvent('event').subscribe(value => {
      console.log(value);
    });
    console.log(this.socket);

  }
}
