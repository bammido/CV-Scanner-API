import { Module } from '@nestjs/common';
// import { FirebaseModule } from './firebase/firebase.module';
import { GeminiModule } from './gemini/gemini.module';

@Module({
  imports: [GeminiModule],
  exports: [GeminiModule],
})
export class IntegrationsModule {}
