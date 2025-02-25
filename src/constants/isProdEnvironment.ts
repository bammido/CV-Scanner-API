import * as dotenv from 'dotenv';

dotenv.config();

export const isProd = process.env.ENVIRONMENT === 'prod';
