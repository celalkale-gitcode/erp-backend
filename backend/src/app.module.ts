import { Module } from '@nestjs/common';
import { PrismaModule } from './common/prisma.module';

import { InventoryModule } from './modules/inventory/inventory.module';
import { ReturnsModule } from './modules/returns/returns.module';
import { ProductModule } from './modules/product/product.module';
import { LocationModule } from './modules/location/location.module';
import { MapModule } from './modules/map/map.module';
import { SyncModule } from './modules/sync/sync.module';
import { HealthModule } from './modules/health/health.module'; // ✅ EKLE

@Module({
  imports: [
    PrismaModule,
    HealthModule, // 🔥 BUNU EKLE
    InventoryModule,
    ReturnsModule,
    ProductModule,
    LocationModule,
    MapModule,
    SyncModule
  ]
})
export class AppModule {}
