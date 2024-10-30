import { Module } from '@nestjs/common';
import { FirebaseModule } from './firebase/firebase.module';
import { GeminiModule } from './gemini/gemini.module';

@Module({
  imports: [GeminiModule, FirebaseModule],
  exports: [GeminiModule, FirebaseModule],
})
export class IntegrationsModule {}
