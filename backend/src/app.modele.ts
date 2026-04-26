import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { BarcodeModule } from './modules/barcode/barcode.module';
import { LocationModule } from './modules/location/location.module';
import { ReturnsModule } from './modules/returns/returns.module';
import { MapModule } from './modules/map/map.module';
import { SyncModule } from './modules/sync/sync.module';

@Module({
  imports: [
    ProductModule,
    InventoryModule,
    BarcodeModule,
    LocationModule,
    ReturnsModule,
    MapModule,
    SyncModule
  ]
})
export class AppModule {}
