import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getContractAddress(): string {
    return "my address";
  }
  getHello(): string {
    return 'Hello Suckers!' + (Math.random()*1000).toFixed(0);
  }
}
