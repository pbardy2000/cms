import { Release } from '@cms/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const release: Release = {
      id: 1,
    };

    return 'Hello World!';
  }
}
