export class CreateUserDto {
  username: string;
  password: string;
  role: number; //0: admin , 1 user
}
