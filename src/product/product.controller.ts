/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('product')
// @UseGuards(BeltGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  // @UseGuards(BeltGuard)
  getProducts() {
    return this.productService.getProducts();
  }
  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.productService.getProduct(id);
    } catch (error) {
      // khong bat loi o day thi loi se la 500
      throw new NotFoundException();
    }
  }
  // @Get(':id')
  // getOneProduct(@Query('type') type: string) {
  //   return [{ type }];
  // }
  @Post()
  createProduct(
    @Body(new ValidationPipe()) CreateProductDto: CreateProductDto,
  ) {
    return this.productService.createProduct(CreateProductDto);
  }
  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() UpdateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(+id, UpdateProductDto);
  }
  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return this.productService.removeProduct(+id);
  }
}
