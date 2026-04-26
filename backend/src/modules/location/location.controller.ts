import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly service: LocationService) {}

  @Post()
  create(@Body() body: any) {
    return this.service.createLocation(body.raf_kodu);
  }

  @Post('assign')
  assign(@Body() body: any) {
    return this.service.assignProduct(
      body.lokasyon_id,
      body.urun_id,
      body.beden
    );
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.service.getLocationProducts(Number(id));
  }
}
