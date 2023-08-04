/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly model: Model<PostDocument>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.model.find().exec();
  }

  //   async findOne(id: string): Promise<Todo> {
  //     return await this.model.findById(id).exec();
  //   }

  //   async create(createTodoDto: CreateTodoDto): Promise<Todo> {
  //     return await new this.model({
  //       ...createTodoDto,
  //       createdAt: new Date(),
  //     }).save();
  //   }

  //   async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
  //     return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  //   }

  //   async delete(id: string): Promise<Todo> {
  //     return await this.model.findByIdAndDelete(id).exec();
  //   }
}
