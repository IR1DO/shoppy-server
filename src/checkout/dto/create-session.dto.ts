import { IsNumber } from 'class-validator';

export class CreateSessionDto {
  @IsNumber()
  productId: number;
}
