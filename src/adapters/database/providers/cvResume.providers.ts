import { DataSource } from 'typeorm';
import { CVResume } from '../entities/cvResume.entity';

export const cvResumeProviders = [
  {
    provide: 'CVRESUME_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CVResume),
    inject: ['DATA_SOURCE'],
  },
];
