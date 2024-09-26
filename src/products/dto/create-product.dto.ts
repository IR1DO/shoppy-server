import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;
}
