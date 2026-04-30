import { Controller, Get, HttpCode, Head } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Head() // Hem GET hem HEAD isteklerine cevap ver
  @HttpCode(200)
  getHello() {
    return { status: 'ok', message: 'ERP Backend is running' };
  }
}


