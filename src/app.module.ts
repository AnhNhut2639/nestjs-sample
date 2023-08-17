/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
// connect mongoDB
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './posts/posts.module';
// config dotenv
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductModule,
    UsersModule,
    PostModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_ACCOUNT}:${process.env.MONGO_PASSWORD}@cluster0.dduiw26.mongodb.net/nextprisma`,
    ),
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
