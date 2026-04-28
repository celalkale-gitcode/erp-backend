import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async count(urun_id: number, latitude?: number, longitude?: number) {
    return this.prisma.stokHareketleri.create({
      data: {
        urun_id,
        tip: 'COUNT',
        miktar: 1,
        latitude,
        longitude,
        tarih: new Date()
      }
    });
  }
}
