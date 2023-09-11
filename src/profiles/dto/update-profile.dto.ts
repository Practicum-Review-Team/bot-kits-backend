import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class UpdateProfileDto {
  @ApiProperty({ example: 'Ivan Ivanov' })
  @IsString()
  @Length(2, 30)
  @IsOptional()
  username?: string;

  @ApiProperty({ example: '+79501364578' })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: 'https://i.pravatar.cc/300' })
  @IsUrl()
  @IsOptional()
  avatar?: string;

  @ApiProperty({ example: 1400 })
  @IsNumber()
  @IsOptional()
  balance?: number;
}
