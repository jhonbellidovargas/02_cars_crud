import { IsNumber, IsOptional, IsString, IsUUID, IsUrl } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;

  @IsNumber()
  @IsOptional()
  readonly year?: number;

  @IsNumber()
  @IsOptional()
  readonly price?: number;

  @IsString()
  @IsOptional()
  @IsUrl()
  readonly img?: string;
}
