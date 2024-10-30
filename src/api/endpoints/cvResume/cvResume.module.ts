import { Module } from '@nestjs/common';
import { CVResumeController } from './cvResume.controller';
import { CVResumeService } from './cvResume.service';
import { MulterModule } from '@nestjs/platform-express';
import { IntegrationsModule } from 'src/integrations/integrations.module';

@Module({
  imports: [IntegrationsModule, MulterModule.register({ dest: './uploads' })],
  controllers: [CVResumeController],
  providers: [CVResumeService],
})
export class CVResumeModule {}
