import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeormModule } from '../typeorm/typeorm.module';
import { AppController } from './app.controller';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeormModule,
    CategoryModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
