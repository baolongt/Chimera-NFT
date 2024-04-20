import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { GenerateImageService } from 'src/services';
import { ApiBody, ApiProperty } from '@nestjs/swagger';
import { GenerateImageDTO } from 'src/dtos';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly generateImageService: GenerateImageService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('generate-image')
  @ApiBody({ type: GenerateImageDTO })
  async generateImage(@Body() dto: GenerateImageDTO): Promise<void> {
    return await this.generateImageService.generate(dto.prompt);
  }
}
