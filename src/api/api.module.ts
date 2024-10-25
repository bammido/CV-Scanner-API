import { Module } from '@nestjs/common';
import { EndpointsModule, routesEndpoints } from './endpoints/endpoints.module';
import { RouterModule, Routes } from '@nestjs/core';

const routes: Routes = [
  {
    path: '/api',
    module: EndpointsModule,
    children: routesEndpoints,
  },
];

@Module({
  imports: [RouterModule.register(routes), EndpointsModule],
})
export class ApiModule {}
