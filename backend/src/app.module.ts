import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; // 👈 1. Bunu ekle
import { PrismaModule } from './common/prisma.module';

import { InventoryModule } from './modules/inventory/inventory.module';
import { ReturnsModule } from './modules/returns/returns.module';
import { ProductModule } from './modules/product/product.module';
import { LocationModule } from './modules/location/location.module';
import { MapModule } from './modules/map/map.module';
import { SyncModule } from './modules/sync/sync.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    PrismaModule,
    HealthModule,
    InventoryModule,
    ReturnsModule,
    ProductModule,
    LocationModule,
    MapModule,
    SyncModule
  ],
  controllers: [AppController], // 👈 2. Buraya mutlaka ekle!
})
export class AppModule {}

