import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  returnHello(): string {
    return '이거 배포 잘되나요?!';
  }


}
