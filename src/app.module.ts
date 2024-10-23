import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeminiModule } from './integrations/gemini/gemini.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [GeminiModule, MulterModule.register({ dest: './uploads' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
