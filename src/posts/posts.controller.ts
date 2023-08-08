/* eslint-disable prettier/prettier */
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

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.PostsService.findOne(id);
  }

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return await this.PostsService.create(createPostDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return await this.PostsService.update(id, updatePostDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.PostsService.delete(id);
  }
}
