/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { CallData } from './events/call-data.event';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class AppService {
  constructor(
    private readonly eventMitter: EventEmitter2,
    private sheduleRegistry: SchedulerRegistry,
  ) {}

  private establishWsConnection(message: string) {
    console.log('custom schedule', message);
  }
  getHello(): string {
    this.eventMitter.emit('call_data', new CallData('this will call event'));

    const establishWsTimeout = setTimeout(
      () => this.establishWsConnection('delete something'),
      5000,
    );

    this.sheduleRegistry.addTimeout(`run this before`, establishWsTimeout);

    return 'Hello World!';
  }

  @OnEvent('call_data')
  ObserverEvent(payload: CallData) {
    console.log(payload.message);
  }

  // @Cron(CronExpression.EVERY_5_SECONDS, { name: 'five-seconds' })
  // runTask() {
  //   console.log('run this every 5 seconds');
  // }
}

// http get --> controller --> app services
