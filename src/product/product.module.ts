import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
// import { IStore } from './store/store.config';
// import { StoreService } from './store/store.service';
import { StoreModule } from './store/store.module';
import { AuthencationMiddleware } from 'src/middlewares/authencation.middleware';
import { RequestService } from 'src/request.service';
// import { ProductMockService } from './product-mock.service';
// function createStore(config: IStore): StoreService {
//   console.log('useFactory Params', config);
//   return new StoreService();
// }

@Module({
  imports: [StoreModule],
  controllers: [ProductController],
  providers: [ProductService, RequestService],
  // providers: [
  //   ProductService,
  //   RequestService,
  //   {
  //     provide: APP_GUARD,
  //     useClass: AuthGuard,
  //   },
  // ],
  // Mock data su dung khi test hoac dynamic class (Development or Production)
  // providers: [
  //   {
  //     provide: ProductService,
  //     useClass: ProductMockService,
  //   },
  // ],

  // providers: [
  //   ProductService,
  //   {
  //     provide: 'STORE_CONFIG',
  //     useValue: {
  //       dir: 'c',
  //       path: '/abc',
  //     } as IStore,
  //   },
  //   {
  //     provide: 'STORE_SERVICE',
  //     useFactory: createStore,
  //     // truyen param vao function createStore
  //     inject: [
  //       {
  //         token: 'STORE_CONFIG', //truyen params la value cua useValue
  //         optional: true,
  //       },
  //     ],
  //   },
  // ],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthencationMiddleware).forRoutes('*');
  }
}

// .forRoutes({ path: '/path', method: RequestMethod.GET });
