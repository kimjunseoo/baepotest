import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  returnHello(): string {
    return 'Hello World!';
  }


}
