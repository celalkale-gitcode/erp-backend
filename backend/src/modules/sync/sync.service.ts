import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class SyncService {
  constructor(private prisma: PrismaService) {}

  async bulkCount(data: any[]) {
    return this.prisma.$transaction(
      data.map((item) =>
        this.prisma.stokHareketleri.create({
          data: {
            urun_id: item.urun_id,
            tip: 'COUNT',
            miktar: item.miktar || 1,
            latitude: item.latitude,
            longitude: item.longitude,
            tarih: new Date()
          },
        })
      )
    );
  }
}
