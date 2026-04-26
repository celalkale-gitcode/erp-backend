import { Controller, Post, Body } from '@nestjs/common';
import { SyncService } from './sync.service';

@Controller('sync')
export class SyncController {
  constructor(private readonly service: SyncService) {}

  @Post('bulk-count')
  bulk(@Body() body: any[]) {
    return this.service.bulkCount(body);
  }
}
