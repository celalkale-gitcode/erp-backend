
import { Controller, Post, Body } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly service: InventoryService) {}

  @Post('count')
  async count(@Body() body: any) {
    const { urun_id, latitude, longitude } = body;

    return this.service.count(urun_id, latitude, longitude);
  }
}
