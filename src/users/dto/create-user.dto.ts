import { IsIn, Matches, MinLength } from 'class-validator';

export type RoleType = 0 | 1;

//0: admin , 1 user
export class CreateUserDto {
  @MinLength(6, { message: 'user must be longer than 6 ' })
  @Matches(/(?=.*?[0-9])/g, {
    message: 'user must contain at least one number',
  })
  username: string;
  @Matches(/^(?=.*?[a-zA-Z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!~@#$%^&*]).{6,}$/g, {
    message:
      'A password must contains at least six characters, including at least one number and includes both lower and uppercase letters and special characters',
  })
  password: string;
  @IsIn([0, 1], { message: 'role must be 0(admin) or 1(user)' })
  role: RoleType;
}
