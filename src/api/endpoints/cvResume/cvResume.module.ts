import { Module } from '@nestjs/common';
import { GeminiModule } from 'src/integrations/gemini/gemini.module';
import { CVResumeController } from './cvResume.controller';
import { CVResumeService } from './cvResume.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [GeminiModule, MulterModule.register({ dest: './uploads' })],
  controllers: [CVResumeController],
  providers: [CVResumeService],
})
export class CVResumeModule {}
