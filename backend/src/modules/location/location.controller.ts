import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Post()
  create(@Body() body: { lokasyon_kodu: string }) {
    return this.locationService.createLocation(body.lokasyon_kodu);
  }

  @Post('assign')
  assign(
    @Body()
    body: {
      lokasyon_id: number;
      urun_id: number;
      beden: string;
    },
  ) {
    return this.locationService.assignProduct(
      body.lokasyon_id,
      body.urun_id,
      body.beden,
    );
  }

  @Get(':id')
  getProducts(@Param('id') id: string) {
    return this.locationService.getLocationProducts(Number(id));
  }
}
