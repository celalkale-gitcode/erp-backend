import { Controller, Post, Body } from '@nestjs/common';
import { ReturnsService } from './returns.service';

@Controller('returns')
export class ReturnsController {
  constructor(private readonly service: ReturnsService) {}

  @Post()
  create(@Body() body: any) {
    return this.service.addReturn(body.urun_id, body.adet);
  }
}
