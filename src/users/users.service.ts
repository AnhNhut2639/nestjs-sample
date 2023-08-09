import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { BaseUserDto } from './dto/base-user.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await new this.model({
      ...createUserDto,
      createdAt: new Date(),
    }).save();
  }

  async findAll(): Promise<User[]> {
    return await this.model.find().exec();
  }

  async authencation(body: BaseUserDto) {
    const { username, password } = body;
    const users = this.findAll();
    const result = users.then((data) => {
      const user = data.find(
        (item: BaseUserDto) =>
          item.username === username &&
          bcrypt.compareSync(password, item.password),
      );
      if (!user) {
        throw new UnauthorizedException();
      }
      return user;
    });
    const payload = {
      username: (await result).username,
      role: (await result).role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}

// nest g resource user
