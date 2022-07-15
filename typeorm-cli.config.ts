import { DataSource } from 'typeorm';
import { CoffeeRefactor1657868761930 } from './src/migrations/1657868761930-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { SchemaSync1657870172888 } from './src/migrations/1657870172888-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1657868761930, SchemaSync1657870172888],
});
