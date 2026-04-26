import { Controller, Post, Body } from '@nestjs/common';
import { ReturnsService } from './returns.service';

@Controller('returns')
export class ReturnsController {
  constructor(private readonly service: ReturnsService) {}

  @Post()
  async create(@Body() body: any) {
    const { urun_id, adet } = body;

    return this.service.addReturn(urun_id, adet);
  }
}
