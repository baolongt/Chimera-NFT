import { Module } from '@nestjs/common';
import { AppController } from './controllers';
import { AppService, GenerateImageService } from './services';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GenerateImageService],
})
export class AppModule {}
