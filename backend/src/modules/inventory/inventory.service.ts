import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class InventoryService {
  async count(urun_id: number, latitude?: number, longitude?: number) {
    return prisma.stok_hareketleri.create({
      data: {
        urun_id,
        tip: 'COUNT',
        miktar: 1,
        latitude,
        longitude
      }
    });
  }
}
