// ormconfig.ts
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost', // or your DB host
  port: 5432, // default PostgreSQL port
  username: 'postgres',
  password: 'postgres',
  database: 'Tree',
  synchronize: true, // Be careful with this in production
  logging: true,
  entities: [/* Your entities go here */],
  migrations: [],
  subscribers: [],
});
