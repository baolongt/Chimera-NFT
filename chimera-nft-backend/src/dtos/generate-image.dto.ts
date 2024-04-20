import { ApiProperty } from '@nestjs/swagger';

export class GenerateImageDTO {
  @ApiProperty()
  prompt: string;
}
