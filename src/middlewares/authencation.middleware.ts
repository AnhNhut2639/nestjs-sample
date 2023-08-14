/* eslint-disable prettier/prettier */
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { RequestService } from 'src/request.service';

@Injectable()
export class AuthencationMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AuthencationMiddleware.name);
  constructor(private readonly requestService: RequestService) {}
  use(req: Request, res: Response, next: NextFunction) {
    //Authencation the request
    // this.logger.log(AuthencationMiddleware.name);
    const userId = '123';
    this.requestService.setUserId(userId);
    // return res.status(403).json({ message: 'Forbiddend' });
    next();
  }
}
