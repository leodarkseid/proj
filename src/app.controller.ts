import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/contract-address")
  getContractAddress(): string {
    return this.appService.getContractAddress();
  }
}
