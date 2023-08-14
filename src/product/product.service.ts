import { Injectable, Inject, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
// import { IStore } from './store/store.config';
import { StoreService } from './store/store.service';
import { RequestService } from 'src/request.service';
import { AuthencationMiddleware } from 'src/middlewares/authencation.middleware';

@Injectable()
export class ProductService {
  // dung voi useValue,Usefactory o controller
  // constructor(
  //   @Inject('STORE_CONFIG') storeConfig: IStore,
  //   @Inject('STORE_SERVICE') private storeService: StoreService,
  // ) {
  //   console.log(storeConfig);
  // }

  private readonly logger = new Logger(AuthencationMiddleware.name);

  // dung voi import module
  constructor(
    private storeService: StoreService,
    // middlewares
    private readonly requestService: RequestService,
  ) {}
  // middlewares

  private products = [
    { id: 0, name: 'TV', from: 'VN' },
    { id: 1, name: 'iron', from: 'GER' },
  ];
  getProducts() {
    // luu data
    this.storeService.save({
      message: 'this is useFactory',
    });
    // middlewares
    // const userId = this.requestService.getUserId();
    // this.logger.log('middleware UserId:', userId);
    return this.products;
  }
  getProduct(id: number) {
    const product = this.products.filter((item) => item.id === id);
    if (product.length <= 0) {
      throw new Error('product not found');
    }
    return product;
  }
  createProduct(createProductDto: CreateProductDto) {
    const newProduct = {
      ...createProductDto,
      id: Date.now(),
    };
    this.products.push(newProduct);
    return newProduct;
  }
  updateProduct(id: number, UpdateProductDto: UpdateProductDto) {
    this.products = this.products.map((product) => {
      if (product.id === id) {
        return { ...product, ...UpdateProductDto };
      }
      return product;
    });
    return this.getProduct(id);
  }
  removeProduct(id: number) {
    const tobeRemoved = this.getProduct(id);
    this.products = this.products.filter((product) => product.id !== id);
    return tobeRemoved;
  }
}
