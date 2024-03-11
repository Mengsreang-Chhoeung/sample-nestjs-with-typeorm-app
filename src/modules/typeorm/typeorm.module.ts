import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule as TypeORMModule } from '@nestjs/typeorm';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from 'src/constants/app.constant';

@Module({
  imports: [
    TypeORMModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        host: config.get(DB_HOST),
        port: parseInt(config.get(DB_PORT)),
        database: config.get(DB_NAME),
        username: config.get(DB_USERNAME),
        password: config.get(DB_PASSWORD),
        autoLoadEntities: true,
        synchronize: true,
        type: 'postgres',
      }),
      inject: [ConfigService],
    }),
  ],
})
export class TypeormModule {}
