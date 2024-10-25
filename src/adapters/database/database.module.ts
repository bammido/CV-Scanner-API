import { Global, Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Global()
@Module({
  imports: [],
  providers: [...databaseProviders],
})
export class DatabaseModule {}
