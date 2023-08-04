/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly PostsService: PostsService) {}

  @Get()
  async getPosts() {
    return await this.PostsService.findAll();
  }

  // @Get(':id')
  // async find(@Param('id') id: string) {
  //   return await this.service.findOne(id);
  // }

  // @Post()
  // async create(@Body() createTodoDto: CreateTodoDto) {
  //   return await this.service.create(createTodoDto);
  // }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
  //   return await this.service.update(id, updateTodoDto);
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: string) {
  //   return await this.service.delete(id);
  // }
}
