import { Injectable } from '@nestjs/common';
import { prisma } from '../../common/prisma.service';

@Injectable()
export class SyncService {
  async bulkCount(data: any[]) {
    const results = [];

    for (const item of data) {
      const res = await prisma.stok_hareketleri.create({
        data: {
          urun_id: item.urun_id,
          tip: 'COUNT',
          miktar: item.miktar || 1,
          latitude: item.latitude,
          longitude: item.longitude
        }
      });

      results.push(res);
    }

    return results;
  }
}
