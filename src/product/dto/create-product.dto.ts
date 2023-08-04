import { MinLength, IsEnum } from 'class-validator';
export class CreateProductDto {
  id: number;
  @MinLength(3)
  name: string;

  // @IsEnum(['VN', 'GER'], { message: 'use correct From' })
  from: string;
}
