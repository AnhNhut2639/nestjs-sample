/* eslint-disable prettier/prettier */
import { BasePostDto } from './base-post.dto';

export class CreatePostDto extends BasePostDto {
  id: string;
  title: string;
  description?: string;
}
