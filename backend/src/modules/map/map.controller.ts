import { Controller, Get } from '@nestjs/common';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
  constructor(private readonly service: MapService) {}

  @Get()
  getAll() {
    return this.service.getAllPoints();
  }
}
