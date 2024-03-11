import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  index() {
    return {
      app_name: 'Sample Nestjs with TypeORM App',
    };
  }
}
