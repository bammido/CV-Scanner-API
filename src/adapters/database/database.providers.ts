import { isProd } from 'src/constants/isProdEnvironment';
import { DataSource } from 'typeorm';

console.log(isProd)

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5428,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || '12345',
  database: process.env.DB_NAME || 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [
    `./${isProd ? 'dist' : 'src'}/adapters/database/migrations/*.${isProd ? 'js' : '*'}`,
    // './dist/adapters/database/migrations/*.js'
  ],
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
    autoLoadEntities: true,
    // synchronize: true,
  },
];

export default dataSource;
