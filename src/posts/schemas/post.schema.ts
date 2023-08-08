/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  id: number;
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;
}
export const PostSchema = SchemaFactory.createForClass(Post);
