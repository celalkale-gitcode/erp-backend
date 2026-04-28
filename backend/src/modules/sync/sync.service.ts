import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class SyncService {
  constructor(private prisma: PrismaService) {}

  async bulkCount(data: any[]) {
    const results = [];

    for (const item of data) {
      const res = await this.prisma.stokHareketleri.create({
        data: {
          urun_id: Number(item.urun_id),
          tip: 'COUNT',
          miktar: item.miktar || 1,
          latitude: item.latitude,
          longitude: item.longitude,
          tarih: new Date(),
        },
      });

      results.push(res);
    }

    return results;
  }
}
