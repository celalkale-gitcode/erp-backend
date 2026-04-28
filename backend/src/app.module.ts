import { Module } from '@nestjs/common';
import { PrismaModule } from './common/prisma.module'; // ✅ EKLE

import { InventoryModule } from './modules/inventory/inventory.module';
import { ReturnsModule } from './modules/returns/returns.module';
import { ProductModule } from './modules/product/product.module';
import { LocationModule } from './modules/location/location.module';
import { MapModule } from './modules/map/map.module';
import { SyncModule } from './modules/sync/sync.module';

@Module({
  imports: [
    PrismaModule, // 🔥 EN ÖNEMLİ SATIR
    InventoryModule,
    ReturnsModule,
    ProductModule,
    LocationModule,
    MapModule,
    SyncModule
  ]
})
export class AppModule {}
