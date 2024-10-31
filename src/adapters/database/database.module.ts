import { Global, Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { loginTypeProviders } from './providers/loginType.providers';
import { userProviders } from './providers/user.provider';
import { fileProviders } from './providers/file.providers';
import { cvResumeProviders } from './providers/cvResume.providers';

@Global()
@Module({
  imports: [],
  providers: [
    ...databaseProviders,
    ...loginTypeProviders,
    ...userProviders,
    ...fileProviders,
    ...cvResumeProviders,
  ],
  exports: [
    ...loginTypeProviders,
    ...userProviders,
    ...fileProviders,
    ...cvResumeProviders,
  ],
})
export class DatabaseModule {}
