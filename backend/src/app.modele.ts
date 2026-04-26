import { Module } from '@nestjs/common';
import { InventoryModule } from './modules/inventory/inventory.module';
import { ReturnsModule } from './modules/returns/returns.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    InventoryModule,
    ReturnsModule,
    ProductModule
  ]
})
export class AppModule {}
