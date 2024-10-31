import { DataSource } from 'typeorm';
import { LoginType } from '../entities/loginType.entity';

export const loginTypeProviders = [
  {
    provide: 'LOGINTYPE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(LoginType),
    inject: ['DATA_SOURCE'],
  },
];
