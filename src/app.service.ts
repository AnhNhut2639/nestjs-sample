/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { CallData } from './events/call-data.event';

@Injectable()
export class AppService {
  constructor(private readonly eventMitter: EventEmitter2) {}
  getHello(): string {
    this.eventMitter.emit('call_data', new CallData('this will call event'));
    return 'Hello World!';
  }

  @OnEvent('call_data')
  ObserverEvent(payload: CallData) {
    console.log(payload.message);
  }
}

// http get --> controller --> app services
