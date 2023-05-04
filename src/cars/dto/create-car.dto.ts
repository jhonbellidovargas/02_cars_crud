import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;

  @IsNumber()
  readonly year: number;

  @IsNumber()
  readonly price: number;

  @IsString()
  @IsUrl()
  readonly img: string;
}
