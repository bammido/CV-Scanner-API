import { Module } from '@nestjs/common';
import { Routes } from '@nestjs/core';
import { CVResumeModule } from './cvResume/cvResume.module';

export const routesEndpoints: Routes = [
  {
    path: '/cvResume',
    module: CVResumeModule,
  },
];

@Module({
  imports: [CVResumeModule],
})
export class EndpointsModule {}
