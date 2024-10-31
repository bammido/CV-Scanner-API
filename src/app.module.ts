import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { AdapterModule } from './adapters/adapter.module';

@Module({
  imports: [ApiModule, AdapterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
