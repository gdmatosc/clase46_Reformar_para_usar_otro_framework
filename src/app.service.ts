import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Desafío 46: Reformar para usar otro framework-NestJS';
  }
}
