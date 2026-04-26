import { Controller, Post, Body } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly service: InventoryService) {}

  @Post('count')
  count(@Body() body: any) {
    return this.service.count(
      body.urun_id,
      body.latitude,
      body.longitude
    );
  }
}
