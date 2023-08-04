/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
@Injectable()
export class StoreService {
  save(data: any): void {
    console.log(data);
  }
}
