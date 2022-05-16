import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class FindTagDto {
    @ApiProperty()
    @IsOptional()
    name?: string;
}
